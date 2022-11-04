package keeper

import (
	"errors"
	"sort"

	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/twilight-project/nyks/x/nyks/types"
)

// TODO-JT: carefully look at atomicity of this function
func (k Keeper) Attest(
	ctx sdk.Context,
	proposal types.BtcProposal,
	anyProposal *codectypes.Any,
) (*types.Attestation, error) {
	val, found := k.GetOrchestratorValidator(ctx, proposal.GetProposarOrchestrator())
	if !found {
		panic("Could not find ValAddr for delegate key, should be checked by now")
	}
	valAddr := val.GetOperator()
	if err := sdk.VerifyAddressFormat(valAddr); err != nil {
		return nil, sdkerrors.Wrap(err, "invalid orchestrator validator address")
	}

	// Tries to get an attestation with the same btc block height and the proposal.
	hash, err := proposal.ProposalHash()
	if err != nil {
		return nil, sdkerrors.Wrap(err, "unable to compute claim hash")
	}
	att := k.GetAttestation(ctx, proposal.GetHeight(), hash)

	// If it does not exist, create a new one.
	if att == nil {
		att = &types.Attestation{
			Observed: false,
			Votes:    []string{},
			Height:   uint64(ctx.BlockHeight()),
			Proposal: anyProposal,
		}
	} else {
		for _, s := range att.Votes {
			if valAddr.String() == s {
				return nil, errors.New("Duplicate vote")
			}
		}
	}

	// Add the validator's vote to this attestation
	att.Votes = append(att.Votes, valAddr.String())

	k.SetAttestation(ctx, proposal.GetHeight(), hash, att)
	k.SetLastBlockHeightByValidator(ctx, valAddr, proposal.GetHeight())

	return att, nil
}

// TryAttestation checks if an attestation has enough votes to be applied to the consensus state
// and has not already been marked Observed, then calls processAttestation to actually apply it to the state,
// and then marks it Observed and emits an event.
func (k Keeper) TryAttestation(ctx sdk.Context, att *types.Attestation) {
	proposal, err := k.UnpackAttestationProposal(att)
	if err != nil {
		panic("could not cast to proposal")
	}
	hash, err := proposal.ProposalHash()
	if err != nil {
		panic("unable to compute proposal hash")
	}
	// If the attestation has not yet been Observed, sum up the votes and see if it is ready to apply to the state.
	// This conditional stops the attestation from accidentally being applied twice.
	if !att.Observed {
		// Sum the current powers of all validators who have voted and see if it passes the current threshold
		// TODO: The different integer types and math here needs a careful review
		totalPower := k.StakingKeeper.GetLastTotalPower(ctx)
		requiredPower := types.AttestationVotesPowerThreshold.Mul(totalPower).Quo(sdk.NewInt(100))
		attestationPower := sdk.NewInt(0)
		for _, validator := range att.Votes {
			val, err := sdk.ValAddressFromBech32(validator)
			if err != nil {
				panic(err)
			}
			validatorPower := k.StakingKeeper.GetLastValidatorPower(ctx, val)
			// Add it to the attestation power's sum
			attestationPower = attestationPower.Add(sdk.NewInt(validatorPower))
			// If the power of all the validators that have voted on the attestation is higher or equal to the threshold,
			// process the attestation, set Observed to true, and break
			if attestationPower.GTE(requiredPower) {
				// lastBlockHeight := k.GetLastObservedBlockHeight(ctx)
				// // this check is performed at the next level up so this should never panic
				// // outside of programmer error.
				// if proposal.GetBlockHeight() > lastBlockHeight {
				// 	panic("attempting to apply events to state out of order")
				// }
				// k.setLastObservedEventNonce(ctx, claim.GetEventNonce())
				// k.SetLastObservedEthereumBlockHeight(ctx, claim.GetBlockHeight())

				att.Observed = true
				k.SetAttestation(ctx, proposal.GetHeight(), hash, att)

				//k.processAttestation(ctx, att, proposal)

				k.emitObservedEvent(ctx, att, proposal)

				break
			}
		}
	}
	//else {
	// 	// We panic here because this should never happen
	// 	panic("attempting to process observed attestation")
	// }
}

// emitObservedEvent emits an event with information about an attestation that has been applied to
// consensus state.
func (k Keeper) emitObservedEvent(ctx sdk.Context, att *types.Attestation, proposal types.BtcProposal) {
	hash, err := proposal.ProposalHash()
	if err != nil {
		panic(sdkerrors.Wrap(err, "unable to compute proposal hash"))
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventObservation{
			AttestationType: string(proposal.GetType()),
			AttestationId:   string(types.GetAttestationKey(proposal.GetHeight(), hash)),
		},
	)
}

// SetAttestation sets the attestation in the store
func (k Keeper) SetAttestation(ctx sdk.Context, height uint64, proposalHash []byte, att *types.Attestation) {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetAttestationKey(height, proposalHash)
	store.Set(aKey, k.cdc.MustMarshal(att))
}

// GetAttestation return an attestation given a btc block height
func (k Keeper) GetAttestation(ctx sdk.Context, height uint64, proposalHash []byte) *types.Attestation {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetAttestationKey(height, proposalHash)
	bz := store.Get(aKey)
	if len(bz) == 0 {
		return nil
	}
	var att types.Attestation
	k.cdc.MustUnmarshal(bz, &att)
	return &att
}

// // DeleteAttestation deletes the given attestation
// func (k Keeper) DeleteAttestation(ctx sdk.Context, att types.Attestation) {
// 	claim, err := k.UnpackAttestationClaim(&att)
// 	if err != nil {
// 		panic("Bad Attestation in DeleteAttestation")
// 	}
// 	hash, err := claim.ClaimHash()
// 	if err != nil {
// 		panic(sdkerrors.Wrap(err, "unable to compute claim hash"))
// 	}
// 	store := ctx.KVStore(k.storeKey)

// 	store.Delete(types.GetAttestationKey(claim.GetEventNonce(), hash))
// }

// GetAttestationMapping returns a mapping of eventnonce -> attestations at that nonce
// it also returns a pre-sorted array of the keys, this assists callers of this function
// by providing a deterministic iteration order. You should always iterate over ordered keys
// if you are iterating this map at all.
func (k Keeper) GetAttestationMapping(ctx sdk.Context) (attestationMapping map[uint64][]types.Attestation, orderedKeys []uint64) {
	attestationMapping = make(map[uint64][]types.Attestation)
	k.IterateAttestations(ctx, false, func(_ []byte, att types.Attestation) bool {
		proposal, err := k.UnpackAttestationProposal(&att)
		if err != nil {
			panic("couldn't cast to proposal")
		}

		if val, ok := attestationMapping[proposal.GetHeight()]; !ok {
			attestationMapping[proposal.GetHeight()] = []types.Attestation{att}
		} else {
			attestationMapping[proposal.GetHeight()] = append(val, att)
		}
		return false
	})
	orderedKeys = make([]uint64, 0, len(attestationMapping))
	for k := range attestationMapping {
		orderedKeys = append(orderedKeys, k)
	}
	sort.Slice(orderedKeys, func(i, j int) bool { return orderedKeys[i] < orderedKeys[j] })

	return
}

func (k Keeper) UnpackAttestationProposal(att *types.Attestation) (types.BtcProposal, error) {
	var msg types.BtcProposal
	err := k.cdc.UnpackAny(att.Proposal, &msg)
	if err != nil {
		return nil, err
	} else {
		return msg, nil
	}
}

// IterateAttestations iterates through all attestations
func (k Keeper) IterateAttestations(ctx sdk.Context, reverse bool, cb func([]byte, types.Attestation) bool) {
	store := ctx.KVStore(k.storeKey)
	prefix := types.OracleAttestationKey

	var iter storetypes.Iterator
	if reverse {
		iter = store.ReverseIterator(prefixRange(prefix))
	} else {
		iter = store.Iterator(prefixRange(prefix))
	}
	defer iter.Close()

	for ; iter.Valid(); iter.Next() {
		att := types.Attestation{
			Observed: false,
			Votes:    []string{},
			Height:   0,
			Proposal: &codectypes.Any{
				TypeUrl:              "",
				Value:                []byte{},
				XXX_NoUnkeyedLiteral: struct{}{},
				XXX_unrecognized:     []byte{},
				XXX_sizecache:        0,
			},
		}
		k.cdc.MustUnmarshal(iter.Value(), &att)
		// cb returns true to stop early
		if cb(iter.Key(), att) {
			return
		}
	}
}

// // GetMostRecentAttestations returns sorted (by nonce) attestations up to a provided limit number of attestations
// // Note: calls GetAttestationMapping in the hopes that there are potentially many attestations
// // which are distributed between few nonces to minimize sorting time
// func (k Keeper) GetMostRecentAttestations(ctx sdk.Context, limit uint64) []types.Attestation {
// 	attestationMapping, keys := k.GetAttestationMapping(ctx)
// 	attestations := make([]types.Attestation, 0, limit)

// 	// Iterate the nonces and collect the attestations
// 	count := 0
// 	for _, nonce := range keys {
// 		if count >= int(limit) {
// 			break
// 		}
// 		for _, att := range attestationMapping[nonce] {
// 			if count >= int(limit) {
// 				break
// 			}
// 			attestations = append(attestations, att)
// 			count++
// 		}
// 	}

// 	return attestations
// }

// GetLastObservedBlockHeight returns the latest observed event nonce
func (k Keeper) GetLastObservedBlockHeight(ctx sdk.Context) uint64 {
	store := ctx.KVStore(k.storeKey)
	bytes := store.Get(types.LastObservedBlockHeightKey)

	if len(bytes) == 0 {
		return 0
	}
	return types.UInt64FromBytes(bytes)
}

// // GetLastObservedEthereumBlockHeight height gets the block height to of the last observed attestation from
// // the store
// func (k Keeper) GetLastObservedEthereumBlockHeight(ctx sdk.Context) types.LastObservedEthereumBlockHeight {
// 	store := ctx.KVStore(k.storeKey)
// 	bytes := store.Get([]byte(types.LastObservedEthereumBlockHeightKey))

// 	if len(bytes) == 0 {
// 		return types.LastObservedEthereumBlockHeight{
// 			CosmosBlockHeight:   0,
// 			EthereumBlockHeight: 0,
// 		}
// 	}
// 	height := types.LastObservedEthereumBlockHeight{
// 		CosmosBlockHeight:   0,
// 		EthereumBlockHeight: 0,
// 	}
// 	k.cdc.MustUnmarshal(bytes, &height)
// 	return height
// }

// // SetLastObservedEthereumBlockHeight sets the block height in the store.
// func (k Keeper) SetLastObservedEthereumBlockHeight(ctx sdk.Context, ethereumHeight uint64) {
// 	store := ctx.KVStore(k.storeKey)
// 	height := types.LastObservedEthereumBlockHeight{
// 		EthereumBlockHeight: ethereumHeight,
// 		CosmosBlockHeight:   uint64(ctx.BlockHeight()),
// 	}
// 	store.Set(types.LastObservedEthereumBlockHeightKey, k.cdc.MustMarshal(&height))
// }

// // GetLastObservedValset retrieves the last observed validator set from the store
// // WARNING: This value is not an up to date validator set on Ethereum, it is a validator set
// // that AT ONE POINT was the one in the Gravity bridge on Ethereum. If you assume that it's up
// // to date you may break the bridge
// func (k Keeper) GetLastObservedValset(ctx sdk.Context) *types.Valset {
// 	store := ctx.KVStore(k.storeKey)
// 	bytes := store.Get(types.LastObservedValsetKey)

// 	if len(bytes) == 0 {
// 		return nil
// 	}
// 	valset := types.Valset{
// 		Nonce:        0,
// 		Members:      []types.BridgeValidator{},
// 		Height:       0,
// 		RewardAmount: sdk.Int{},
// 		RewardToken:  "",
// 	}
// 	k.cdc.MustUnmarshal(bytes, &valset)
// 	return &valset
// }

// // SetLastObservedValset updates the last observed validator set in the store
// func (k Keeper) SetLastObservedValset(ctx sdk.Context, valset types.Valset) {
// 	store := ctx.KVStore(k.storeKey)
// 	store.Set(types.LastObservedValsetKey, k.cdc.MustMarshal(&valset))
// }

// // setLastObservedEventNonce sets the latest observed event nonce
// func (k Keeper) setLastObservedEventNonce(ctx sdk.Context, nonce uint64) {
// 	store := ctx.KVStore(k.storeKey)
// 	store.Set(types.LastObservedEventNonceKey, types.UInt64Bytes(nonce))
// }

// // GetLastEventNonceByValidator returns the latest event nonce for a given validator
// func (k Keeper) GetLastEventNonceByValidator(ctx sdk.Context, validator sdk.ValAddress) uint64 {
// 	if err := sdk.VerifyAddressFormat(validator); err != nil {
// 		panic(sdkerrors.Wrap(err, "invalid validator address"))
// 	}
// 	store := ctx.KVStore(k.storeKey)
// 	bytes := store.Get(types.GetLastEventNonceByValidatorKey(validator))

// 	if len(bytes) == 0 {
// 		// in the case that we have no existing value this is the first
// 		// time a validator is submitting a claim. Since we don't want to force
// 		// them to replay the entire history of all events ever we can't start
// 		// at zero
// 		lastEventNonce := k.GetLastObservedEventNonce(ctx)
// 		if lastEventNonce >= 1 {
// 			return lastEventNonce - 1
// 		} else {
// 			return 0
// 		}
// 	}
// 	return types.UInt64FromBytes(bytes)
// }

// setLastEventNonceByValidator sets the latest event nonce for a give validator
func (k Keeper) SetLastBlockHeightByValidator(ctx sdk.Context, validator sdk.ValAddress, nonce uint64) {
	if err := sdk.VerifyAddressFormat(validator); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}
	store := ctx.KVStore(k.storeKey)
	store.Set(types.GetLastBlockHeightByValidatorKey(validator), types.UInt64Bytes(nonce))
}
