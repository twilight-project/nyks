package keeper

import (
	"encoding/hex"
	"sort"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/twilight-project/nyks/x/forks/types"
)

/////////////////////////////
//    ADDRESS DELEGATION   //
/////////////////////////////

// SetDelegateAddresses sets the delegate addresses for a given validator
func (k Keeper) SetDelegateAddresses(ctx sdk.Context, msg *types.MsgSetDelegateAddresses) error {
	val, err := sdk.ValAddressFromBech32(msg.ValidatorAddress)
	if err != nil {
		sdkerrors.Wrap(err, "invalid validator address")
	}

	store := ctx.KVStore(k.storeKey)
	key := types.GetValidatorKey(val)

	bz := store.Get(key)
	if bz == nil {
		// If no existing message, set the new message
		bz := k.cdc.MustMarshal(msg)
		store.Set(key, bz)
	} else {
		// If existing message, unmarshal it and update the fields
		var existingMsg types.MsgSetDelegateAddresses
		k.cdc.MustUnmarshal(bz, &existingMsg)

		existingMsg.BtcOracleAddress = msg.BtcOracleAddress

		if msg.BtcPublicKey != "" {
			existingMsg.BtcPublicKey = msg.BtcPublicKey
		}
		if msg.ZkOracleAddress != "" {
			existingMsg.ZkOracleAddress = msg.ZkOracleAddress
		}

		bz := k.cdc.MustMarshal(&existingMsg)
		store.Set(key, bz)
	}

	return nil
}

// GetDelegateAddresses returns the delegate addresses for a given validator
func (k Keeper) GetDelegateAddresses(ctx sdk.Context, orchestratorAddress sdk.AccAddress) (*types.MsgSetDelegateAddresses, bool) {
	store := ctx.KVStore(k.storeKey)

	// Create an iterator over the range of keys in the store
	iterator := sdk.KVStorePrefixIterator(store, types.KeyValidator)

	// Iterate over the keys
	for ; iterator.Valid(); iterator.Next() {
		// Get the value from the store
		bz := iterator.Value()

		// Unmarshal the value into a MsgSetDelegateAddresses object
		var msg types.MsgSetDelegateAddresses
		k.cdc.MustUnmarshal(bz, &msg)

		// If the orchestratorAddress matches the one in the MsgSetDelegateAddresses object, return the object and true
		if msg.BtcOracleAddress == orchestratorAddress.String() {
			ctx.Logger().Error(msg.String())
			return &msg, true
		}
	}

	// If no match is found after iterating over all keys, return nil and false
	return nil, false
}

// GetAllDelegateAddresses returns all delegate addresses
func (k Keeper) GetAllDelegateAddresses(ctx sdk.Context) ([]types.MsgSetDelegateAddresses, error) {
	store := ctx.KVStore(k.storeKey)
	iterator := sdk.KVStorePrefixIterator(store, types.KeyValidator)
	defer iterator.Close()

	var msgs []types.MsgSetDelegateAddresses
	for ; iterator.Valid(); iterator.Next() {
		var msg types.MsgSetDelegateAddresses
		k.cdc.MustUnmarshal(iterator.Value(), &msg)
		msgs = append(msgs, msg)
	}

	return msgs, nil
}

// checkOrchestratorValidatorInSet checks that the orchestrator refers to a validator that is
// currently in the set
func (k Keeper) CheckOrchestratorValidatorInSet(ctx sdk.Context, orchestrator string) (sdk.ValAddress, error) {
	accAddr, err := sdk.AccAddressFromBech32(orchestrator)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "invalid orchestrator address")
	}

	delegate_addresses, found := k.GetDelegateAddresses(ctx, accAddr)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "invalid btc oracle account address")
	}

	valAddress, err := sdk.ValAddressFromBech32(delegate_addresses.ValidatorAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "validator stored address is invalid bech32")
	}
	valOperator, found := k.StakingKeeper.GetValidator(ctx, valAddress)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "validator not found")
	}
	// return an error if the validator isn't in the active set
	val := k.StakingKeeper.Validator(ctx, valOperator.GetOperator())
	if val == nil || !val.IsBonded() {
		return nil, sdkerrors.Wrap(sdkerrors.ErrorInvalidSigner, "validator not in active set")
	}

	return val.GetOperator(), nil
}

//** REMOVE LATER AS REPLACEMENT FUNCTIONS ARE ADDED ABOVE **//
// // SetOrchestratorValidator sets the Orchestrator key for a given validator
// func (k Keeper) SetOrchestratorValidator(ctx sdk.Context, val sdk.ValAddress, orch sdk.AccAddress) {
// 	if err := sdk.VerifyAddressFormat(val); err != nil {
// 		panic(sdkerrors.Wrap(err, "invalid val address"))
// 	}
// 	if err := sdk.VerifyAddressFormat(orch); err != nil {
// 		panic(sdkerrors.Wrap(err, "invalid orch address"))
// 	}
// 	store := ctx.KVStore(k.storeKey)
// 	store.Set([]byte(types.GetOrchestratorAddressKey(orch)), val.Bytes())
// }

// // GetOrchestratorValidator returns the validator key associated with an orchestrator key
// func (k Keeper) GetOrchestratorValidator(ctx sdk.Context, orch sdk.AccAddress) (validator stakingtypes.Validator, found bool) {
// 	if err := sdk.VerifyAddressFormat(orch); err != nil {
// 		ctx.Logger().Error("invalid orch address")
// 		return validator, false
// 	}

// 	store := ctx.KVStore(k.storeKey)
// 	valAddr := store.Get([]byte(types.GetOrchestratorAddressKey(orch)))
// 	if valAddr == nil {
// 		return stakingtypes.Validator{
// 			OperatorAddress: "",
// 			ConsensusPubkey: &codectypes.Any{
// 				TypeUrl:              "",
// 				Value:                []byte{},
// 				XXX_NoUnkeyedLiteral: struct{}{},
// 				XXX_unrecognized:     []byte{},
// 				XXX_sizecache:        0,
// 			},
// 			Jailed:          false,
// 			Status:          0,
// 			Tokens:          sdk.Int{},
// 			DelegatorShares: sdk.Dec{},
// 			Description: stakingtypes.Description{
// 				Moniker:         "",
// 				Identity:        "",
// 				Website:         "",
// 				SecurityContact: "",
// 				Details:         "",
// 			},
// 			UnbondingHeight: 0,
// 			UnbondingTime:   time.Time{},
// 			Commission: stakingtypes.Commission{
// 				CommissionRates: stakingtypes.CommissionRates{
// 					Rate:          sdk.Dec{},
// 					MaxRate:       sdk.Dec{},
// 					MaxChangeRate: sdk.Dec{},
// 				},
// 				UpdateTime: time.Time{},
// 			},
// 			MinSelfDelegation: sdk.Int{},
// 		}, false
// 	}
// 	validator, found = k.StakingKeeper.GetValidator(ctx, valAddr)
// 	if !found {
// 		return stakingtypes.Validator{
// 			OperatorAddress: "",
// 			ConsensusPubkey: &codectypes.Any{
// 				TypeUrl:              "",
// 				Value:                []byte{},
// 				XXX_NoUnkeyedLiteral: struct{}{},
// 				XXX_unrecognized:     []byte{},
// 				XXX_sizecache:        0,
// 			},
// 			Jailed:          false,
// 			Status:          0,
// 			Tokens:          sdk.Int{},
// 			DelegatorShares: sdk.Dec{},
// 			Description: stakingtypes.Description{
// 				Moniker:         "",
// 				Identity:        "",
// 				Website:         "",
// 				SecurityContact: "",
// 				Details:         "",
// 			},
// 			UnbondingHeight: 0,
// 			UnbondingTime:   time.Time{},
// 			Commission: stakingtypes.Commission{
// 				CommissionRates: stakingtypes.CommissionRates{
// 					Rate:          sdk.Dec{},
// 					MaxRate:       sdk.Dec{},
// 					MaxChangeRate: sdk.Dec{},
// 				},
// 				UpdateTime: time.Time{},
// 			},
// 			MinSelfDelegation: sdk.Int{},
// 		}, false
// 	}

// 	return validator, true
// }

// func (k Keeper) SetOrchestratorValidator(ctx sdk.Context, val sdk.ValAddress, orch sdk.AccAddress) {
// 	if err := sdk.VerifyAddressFormat(val); err != nil {
// 		panic(sdkerrors.Wrap(err, "invalid val address"))
// 	}
// 	if err := sdk.VerifyAddressFormat(orch); err != nil {
// 		panic(sdkerrors.Wrap(err, "invalid orch address"))
// 	}
// 	store := ctx.KVStore(k.storeKey)
// 	store.Set([]byte(types.GetOrchestratorAddressKey(orch)), val.Bytes())
// }

// GetOrchestratorValidator returns the validator key associated with an orchestrator key
// func (k Keeper) GetOrchestratorValidator(ctx sdk.Context, orch sdk.AccAddress) (validator stakingtypes.Validator, found bool) {
// 	if err := sdk.VerifyAddressFormat(orch); err != nil {
// 		ctx.Logger().Error("invalid orch address")
// 		return validator, false
// 	}

// 	store := ctx.KVStore(k.storeKey)
// 	valAddr := store.Get([]byte(types.GetOrchestratorAddressKey(orch)))
// 	if valAddr == nil {
// 		return stakingtypes.Validator{
// 			OperatorAddress: "",
// 			ConsensusPubkey: &codectypes.Any{
// 				TypeUrl:              "",
// 				Value:                []byte{},
// 				XXX_NoUnkeyedLiteral: struct{}{},
// 				XXX_unrecognized:     []byte{},
// 				XXX_sizecache:        0,
// 			},
// 			Jailed:          false,
// 			Status:          0,
// 			Tokens:          sdk.Int{},
// 			DelegatorShares: sdk.Dec{},
// 			Description: stakingtypes.Description{
// 				Moniker:         "",
// 				Identity:        "",
// 				Website:         "",
// 				SecurityContact: "",
// 				Details:         "",
// 			},
// 			UnbondingHeight: 0,
// 			UnbondingTime:   time.Time{},
// 			Commission: stakingtypes.Commission{
// 				CommissionRates: stakingtypes.CommissionRates{
// 					Rate:          sdk.Dec{},
// 					MaxRate:       sdk.Dec{},
// 					MaxChangeRate: sdk.Dec{},
// 				},
// 				UpdateTime: time.Time{},
// 			},
// 			MinSelfDelegation: sdk.Int{},
// 		}, false
// 	}
// 	validator, found = k.StakingKeeper.GetValidator(ctx, valAddr)
// 	if !found {
// 		return stakingtypes.Validator{
// 			OperatorAddress: "",
// 			ConsensusPubkey: &codectypes.Any{
// 				TypeUrl:              "",
// 				Value:                []byte{},
// 				XXX_NoUnkeyedLiteral: struct{}{},
// 				XXX_unrecognized:     []byte{},
// 				XXX_sizecache:        0,
// 			},
// 			Jailed:          false,
// 			Status:          0,
// 			Tokens:          sdk.Int{},
// 			DelegatorShares: sdk.Dec{},
// 			Description: stakingtypes.Description{
// 				Moniker:         "",
// 				Identity:        "",
// 				Website:         "",
// 				SecurityContact: "",
// 				Details:         "",
// 			},
// 			UnbondingHeight: 0,
// 			UnbondingTime:   time.Time{},
// 			Commission: stakingtypes.Commission{
// 				CommissionRates: stakingtypes.CommissionRates{
// 					Rate:          sdk.Dec{},
// 					MaxRate:       sdk.Dec{},
// 					MaxChangeRate: sdk.Dec{},
// 				},
// 				UpdateTime: time.Time{},
// 			},
// 			MinSelfDelegation: sdk.Int{},
// 		}, false
// 	}

// 	return validator, true
// }

// /////////////////////////////
// //    BTC PUBLIC KEY    // //
// /////////////////////////////

// SetBtcPublicKeyForValidator sets the btc public key for a given validator
func (k Keeper) SetBtcPublicKeyForValidator(ctx sdk.Context, validator sdk.ValAddress, btcPk types.BtcPublicKey) ([]byte, error) {
	if err := sdk.VerifyAddressFormat(validator); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}

	btcPkBytes, err := hex.DecodeString(btcPk.GetBtcPublicKey())
	if err != nil {
		return nil, sdkerrors.Wrapf(types.ErrInvalidBtcPublicKey, "invalid btc public key hex encoding (%s)", btcPk.GetBtcPublicKey())
	}
	store := ctx.KVStore(k.storeKey)
	store.Set([]byte(types.GetBtcPublicKeyByValidatorKey(validator)), btcPkBytes)
	store.Set([]byte(types.GetValidatorByBtcPublicKeyKey(btcPk)), []byte(validator))

	return btcPkBytes, nil
}

// GetBtcAddressByValidator returns the btc public key for a given validator
func (k Keeper) GetBtcPublicKeyByValidator(ctx sdk.Context, validator sdk.ValAddress) (btcPublicKey *types.BtcPublicKey, found bool) {
	if err := sdk.VerifyAddressFormat(validator); err != nil {
		ctx.Logger().Error("invalid validator address")
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}
	store := ctx.KVStore(k.storeKey)
	btcPk := store.Get([]byte(types.GetBtcPublicKeyByValidatorKey(validator)))
	if btcPk == nil {
		ctx.Logger().Error("btcpk bytes were not found")
		return nil, false
	}

	pk, err := types.NewBtcPublicKey(hex.EncodeToString(btcPk))
	if err != nil {
		ctx.Logger().Error("btcpk could not be converted")
		return nil, false
	}
	return pk, true
}

// // SetZkOracleForValidator sets the zk oracle address for a given validator
// func (k Keeper) SetZkOracleForValidator(ctx sdk.Context, validator sdk.ValAddress, zkOracle sdk.AccAddress) {
// 	if err := sdk.VerifyAddressFormat(validator); err != nil {
// 		panic(sdkerrors.Wrap(err, "invalid validator address"))
// 	}
// 	if err := sdk.VerifyAddressFormat(zkOracle); err != nil {
// 		panic(sdkerrors.Wrap(err, "invalid zk oracle address"))
// 	}
// 	store := ctx.KVStore(k.storeKey)
// 	store.Set([]byte(types.GetZkOracleByValidatorKey(validator)), zkOracle.Bytes())
// }

// // GetZkOracleByValidator returns the zk oracle address for a given validator
// func (k Keeper) GetZkOracleByValidator(ctx sdk.Context, validator sdk.ValAddress) (zkOracle sdk.AccAddress, found bool) {
// 	if err := sdk.VerifyAddressFormat(validator); err != nil {
// 		ctx.Logger().Error("invalid validator address")
// 		return zkOracle, false
// 	}
// 	store := ctx.KVStore(k.storeKey)
// 	zkOracleAddr := store.Get([]byte(types.GetZkOracleByValidatorKey(validator)))
// 	if zkOracleAddr == nil {
// 		return zkOracle, false
// 	}
// 	return sdk.AccAddress(zkOracleAddr), true
// }

// // GetValidatorByEthAddress returns the validator for a given eth address
// func (k Keeper) GetValidatorByEthAddress(ctx sdk.Context, ethAddr types.EthAddress) (validator stakingtypes.Validator, found bool) {
// 	store := ctx.KVStore(k.storeKey)
// 	valAddr := store.Get([]byte(types.GetValidatorByEthAddressKey(ethAddr)))
// 	if valAddr == nil {
// 		return stakingtypes.Validator{
// 			OperatorAddress: "",
// 			ConsensusPubkey: &codectypes.Any{
// 				TypeUrl:              "",
// 				Value:                []byte{},
// 				XXX_NoUnkeyedLiteral: struct{}{},
// 				XXX_unrecognized:     []byte{},
// 				XXX_sizecache:        0,
// 			},
// 			Jailed:          false,
// 			Status:          0,
// 			Tokens:          sdk.Int{},
// 			DelegatorShares: sdk.Dec{},
// 			Description: stakingtypes.Description{
// 				Moniker:         "",
// 				Identity:        "",
// 				Website:         "",
// 				SecurityContact: "",
// 				Details:         "",
// 			},
// 			UnbondingHeight: 0,
// 			UnbondingTime:   time.Time{},
// 			Commission: stakingtypes.Commission{
// 				CommissionRates: stakingtypes.CommissionRates{
// 					Rate:          sdk.Dec{},
// 					MaxRate:       sdk.Dec{},
// 					MaxChangeRate: sdk.Dec{},
// 				},
// 				UpdateTime: time.Time{},
// 			},
// 			MinSelfDelegation: sdk.Int{},
// 		}, false
// 	}
// 	validator, found = k.StakingKeeper.GetValidator(ctx, valAddr)
// 	if !found {
// 		return stakingtypes.Validator{
// 			OperatorAddress: "",
// 			ConsensusPubkey: &codectypes.Any{
// 				TypeUrl:              "",
// 				Value:                []byte{},
// 				XXX_NoUnkeyedLiteral: struct{}{},
// 				XXX_unrecognized:     []byte{},
// 				XXX_sizecache:        0,
// 			},
// 			Jailed:          false,
// 			Status:          0,
// 			Tokens:          sdk.Int{},
// 			DelegatorShares: sdk.Dec{},
// 			Description: stakingtypes.Description{
// 				Moniker:         "",
// 				Identity:        "",
// 				Website:         "",
// 				SecurityContact: "",
// 				Details:         "",
// 			},
// 			UnbondingHeight: 0,
// 			UnbondingTime:   time.Time{},
// 			Commission: stakingtypes.Commission{
// 				CommissionRates: stakingtypes.CommissionRates{
// 					Rate:          sdk.Dec{},
// 					MaxRate:       sdk.Dec{},
// 					MaxChangeRate: sdk.Dec{},
// 				},
// 				UpdateTime: time.Time{},
// 			},
// 			MinSelfDelegation: sdk.Int{},
// 		}, false
// 	}

// 	return validator, true
// }

// GetDelegateKeys iterates both the BtcPublicKey and Orchestrator address indexes to produce
// a vector of MsgSetOrchestratorAddress entires containing all the delgate keys for state
// export / import. This may seem at first glance to be excessively complicated, why not combine
// the BtcPublicKey and Orchestrator address indexes and simply iterate one thing? The answer is that
// even though we set the BTC Public Key and Orchestrator address in the same place we use them differently we
// always go from Orchestrator address to Validator address and from validator address to BTC Public Key
// we want to keep looking up the validator address for various reasons, so a direct Orchestrator to BTC Public Key
// mapping will mean having to keep two of the same data around just to provide lookups.
//
// For the time being this will serve
func (k Keeper) GetDelegateKeys(ctx sdk.Context) ([]types.MsgSetDelegateAddresses, error) {
	store := ctx.KVStore(k.storeKey)
	prefix := types.BtcPublicKeyByValidatorKey
	iter := store.Iterator(prefixRange(prefix))
	defer iter.Close()

	btcPublicKeys := make(map[string]string)

	for ; iter.Valid(); iter.Next() {
		// the 'key' contains both the prefix and the value, so we need
		// to cut off the starting bytes, if you don't do this a valid
		// cosmos key will be made out of BtcPublicKeyByValidatorKey + the startin bytes
		// of the actual key
		key := iter.Key()[len(types.BtcPublicKeyByValidatorKey):]
		value := iter.Value()
		btcPk, err := types.NewBtcPublicKey(hex.EncodeToString(value))
		if err != nil {
			return nil, sdkerrors.Wrapf(err, "found invalid btcPk %v under key %v", string(value), key)
		}
		valAddress := sdk.ValAddress(key)
		if err := sdk.VerifyAddressFormat(valAddress); err != nil {
			return nil, sdkerrors.Wrapf(err, "invalid valAddress in key %v", valAddress)
		}
		btcPublicKeys[valAddress.String()] = btcPk.GetBtcPublicKey()
	}

	store = ctx.KVStore(k.storeKey)
	prefix = types.KeyOrchestratorAddress
	iter = store.Iterator(prefixRange(prefix))
	defer iter.Close()

	btcOracleAddresses := make(map[string]string)

	for ; iter.Valid(); iter.Next() {
		key := iter.Key()[len(types.KeyOrchestratorAddress):]
		value := iter.Value()
		orchAddress := sdk.AccAddress(key)
		if err := sdk.VerifyAddressFormat(orchAddress); err != nil {
			return nil, sdkerrors.Wrapf(err, "invalid btcOracleAddress in key %v", btcOracleAddresses)
		}
		valAddress := sdk.ValAddress(value)
		if err := sdk.VerifyAddressFormat(valAddress); err != nil {
			return nil, sdkerrors.Wrapf(err, "invalid val address stored for btcOracle %s", valAddress.String())
		}

		btcOracleAddresses[valAddress.String()] = orchAddress.String()
	}

	var result []types.MsgSetDelegateAddresses

	for valAddr, btcPk := range btcPublicKeys {
		oracle, ok := btcOracleAddresses[valAddr]
		if !ok {
			// this should never happen unless the store
			// is somehow inconsistent
			ctx.Logger().Error("Inconsistent database, can't find btcOracle address")
			panic("Can't find address")
		}
		result = append(result, types.MsgSetDelegateAddresses{
			ValidatorAddress: valAddr,
			BtcOracleAddress: oracle,
			BtcPublicKey:     btcPk,
		})

	}

	// we iterated over a map, so now we have to sort to ensure the
	// output here is deterministic, btc public key chosen for no particular
	// reason
	sort.Slice(result, func(i, j int) bool {
		return result[i].BtcPublicKey < result[j].BtcPublicKey
	})

	return result, nil
}

/////////////////////////////
//       Parameters        //
/////////////////////////////

// prefixRange turns a prefix into a (start, end) range. The start is the given prefix value and
// the end is calculated by adding 1 bit to the start value. Nil is not allowed as prefix.
//
//	Example: []byte{1, 3, 4} becomes []byte{1, 3, 5}
//			 []byte{15, 42, 255, 255} becomes []byte{15, 43, 0, 0}
//
// In case of an overflow the end is set to nil.
//
//	Example: []byte{255, 255, 255, 255} becomes nil
//
// MARK finish-batches: this is where some crazy shit happens
func prefixRange(prefix []byte) ([]byte, []byte) {
	if prefix == nil {
		panic("nil key not allowed")
	}
	// special case: no prefix is whole range
	if len(prefix) == 0 {
		return nil, nil
	}

	// copy the prefix and update last byte
	end := make([]byte, len(prefix))
	copy(end, prefix)
	l := len(end) - 1
	end[l]++

	// wait, what if that overflowed?....
	for end[l] == 0 && l > 0 {
		l--
		end[l]++
	}

	// okay, funny guy, you gave us FFF, no end to this range...
	if l == 0 && end[0] == 0 {
		end = nil
	}
	return prefix, end
}
