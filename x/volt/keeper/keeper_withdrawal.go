package keeper

import (
	"fmt"

	"github.com/btcsuite/btcd/chaincfg"
	"github.com/btcsuite/btcd/txscript"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	forkstypes "github.com/twilight-project/nyks/x/forks/types"
	"github.com/twilight-project/nyks/x/volt/types"
)

// SetReserveWithdrawPool sets a withdrawal pool for a specific reserve in the store
func (k Keeper) SetReserveWithdrawPool(ctx sdk.Context, withdrawPool *types.ReserveWithdrawPool) error {
	store := ctx.KVStore(k.storeKey)

	// Generate a key for the withdrawal pool based on ReserveID and RoundID
	poolKey := types.GetReserveWithdrawPoolKey(withdrawPool.ReserveID)

	// Marshal the ReserveWithdrawPool object into bytes
	bz, err := k.cdc.Marshal(withdrawPool)
	if err != nil {
		return sdkerrors.Wrap(types.ErrCouldNotMarshalWithdrawPool, err.Error())
	}

	// Set the withdrawal pool in the store
	store.Set(poolKey, bz)

	return nil
}

// GetWithdrawPool returns the withdrawal pool for a specific reserve from the store
func (k Keeper) GetReserveWithdrawPool(ctx sdk.Context, reserveId uint64) (*types.ReserveWithdrawPool, bool) {
	store := ctx.KVStore(k.storeKey)
	poolKey := types.GetReserveWithdrawPoolKey(reserveId)

	if !store.Has(poolKey) {
		return nil, false // Pool not found
	}

	bz := store.Get(poolKey)
	var pool types.ReserveWithdrawPool
	k.cdc.MustUnmarshal(bz, &pool)

	return &pool, true
}

// SetBtcWithdrawRequest sets the btc withdraw request for a given twilight address, reserve address, withdraw address, and withdraw amount
// This is to track the btc requests, once user sends a request, we add additional parameters in it such as withdrawIdentifier
// that is essentially a counter and a isConfirmed boolean along with the creation block height
func (k Keeper) SetBtcWithdrawRequest(ctx sdk.Context, twilightAddress sdk.AccAddress, reserveId uint64, withdrawAddress string, withdrawAmount uint64) (*uint32, error) {
	store := ctx.KVStore(k.storeKey)

	// Generate a new withdrawIdentifier
	withdrawIdentifier := k.IncrementCounter(ctx, WithdrawalCounterKey)

	// Set up the key for storing the withdraw request
	aKey := types.GetBtcWithdrawRequestKeyInternal(twilightAddress, reserveId, withdrawAddress, withdrawAmount)

	// Set up the withdraw request
	withdrawRequest := &types.BtcWithdrawRequestInternal{
		WithdrawIdentifier:          withdrawIdentifier,
		WithdrawAddress:             withdrawAddress,
		WithdrawReserveId:           reserveId,
		WithdrawAmount:              withdrawAmount,
		TwilightAddress:             twilightAddress.String(),
		IsConfirmed:                 false,             // Set to false for new requests
		CreationTwilightBlockHeight: ctx.BlockHeight(), // Set to the current block height
	}

	// Marshal and store the withdraw request
	store.Set(aKey, k.cdc.MustMarshal(withdrawRequest))

	// Add to the ReserveWithdrawPool
	err := k.AddToReserveWithdrawPool(ctx, reserveId, withdrawIdentifier)
	if err != nil {
		return nil, err
	}

	// Now we will take the balance from the user's account as well and will burn it
	// Deduct the withdrawal amount from the user's bank balance
	userAddr, err := sdk.AccAddressFromBech32(twilightAddress.String())
	if err != nil {
		return nil, sdkerrors.Wrapf(err, "invalid user address %s", twilightAddress.String())
	}

	withdrawCoin := sdk.NewCoin("sats", sdk.NewIntFromUint64(withdrawAmount))
	if err := k.BankKeeper.SendCoinsFromAccountToModule(ctx, userAddr, forkstypes.ModuleName, sdk.NewCoins(withdrawCoin)); err != nil {
		return nil, sdkerrors.Wrapf(err, "failed to deduct coins from user account %s", userAddr.String())
	}

	// Get pre-burn balance
	preBurnBalance := k.BankKeeper.GetBalance(ctx, k.accountKeeper.GetModuleAddress(forkstypes.ModuleName), withdrawCoin.Denom)

	// Reduce the supply of sats
	if err := k.BankKeeper.BurnCoins(ctx, forkstypes.ModuleName, sdk.NewCoins(withdrawCoin)); err != nil {
		return nil, sdkerrors.Wrapf(err, "failed to burn coins %v", withdrawCoin)
	}

	// Get post-burn balance
	postBurnBalance := k.BankKeeper.GetBalance(ctx, k.accountKeeper.GetModuleAddress(forkstypes.ModuleName), withdrawCoin.Denom)

	// Check if the burn operation was successful
	expectedPostBurnAmount := preBurnBalance.Amount.Sub(withdrawCoin.Amount)
	if !postBurnBalance.Amount.Equal(expectedPostBurnAmount) {
		return nil, sdkerrors.Wrapf(err, "failed to burn coins %v", withdrawCoin)
	}
	// Deduct the withdrawal amount from the user's clearing account
	err = k.DeductFromClearingAccount(ctx, twilightAddress, reserveId, withdrawAmount)
	if err != nil {
		return nil, sdkerrors.Wrapf(err, "failed to deduct from ClearingAccount")
	}

	return &withdrawIdentifier, nil
}

// AddToReserveWithdrawPool adds a new withdrawIdentifier to the queue of a specific reserve in the store
func (k Keeper) AddToReserveWithdrawPool(ctx sdk.Context, reserveId uint64, withdrawIdentifier uint32) error {
	store := ctx.KVStore(k.storeKey)
	poolKey := types.GetReserveWithdrawPoolKey(reserveId)

	var pool types.ReserveWithdrawPool
	if store.Has(poolKey) {
		// Retrieve the existing pool
		b := store.Get(poolKey)
		k.cdc.MustUnmarshal(b, &pool)
	} else {
		// Or initialize a new pool if it doesn't exist
		pool = types.ReserveWithdrawPool{
			ReserveID:                     reserveId,
			RoundID:                       0,          // Round 0 doesn't exist so safe to set it for a new pool
			ProcessingWithdrawIdentifiers: []uint32{}, // Empty slice as no withdrawals are being processed yet
			QueuedWithdrawIdentifiers:     []uint32{}, // Empty slice as no withdrawals are queued yet
			CurrentProcessingIndex:        0,          // Start with index 0
		}
	}

	// Add the new withdrawIdentifier to the queue
	pool.QueuedWithdrawIdentifiers = append(pool.QueuedWithdrawIdentifiers, withdrawIdentifier)

	// Marshal and store the updated pool
	store.Set(poolKey, k.cdc.MustMarshal(&pool))
	return nil
}

// GetBtcWithdrawRequest returns the btc withdraw request for a given twilight address, reserve address, withdraw address, and withdraw amount
func (k Keeper) GetBtcWithdrawRequest(ctx sdk.Context, twilightAddress sdk.AccAddress, reserveId uint64, withdrawAddress string, withdrawAmount uint64) (*types.BtcWithdrawRequestInternal, bool) {
	store := ctx.KVStore(k.storeKey)

	// Set up the key for storing the withdraw request
	aKey := types.GetBtcWithdrawRequestKeyInternal(twilightAddress, reserveId, withdrawAddress, withdrawAmount)

	// Get the withdraw request
	bz := store.Get(aKey)
	if bz == nil {
		return nil, false
	}

	// Unmarshal the withdraw request
	var withdrawRequest types.BtcWithdrawRequestInternal
	k.cdc.MustUnmarshal(bz, &withdrawRequest)

	return &withdrawRequest, true
}

// IterateBtcWithdrawRequests iterates through all the registered withdraw requests
func (k Keeper) IterateBtcWithdrawRequests(ctx sdk.Context, cb func([]byte, *types.BtcWithdrawRequestInternal) bool) {
	store := ctx.KVStore(k.storeKey)

	// Iterate through all the registered withdraw requests
	iterator := sdk.KVStorePrefixIterator(store, types.BtcWithdrawRequestKey)
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		// Unmarshal the withdraw request
		var withdrawRequest types.BtcWithdrawRequestInternal
		k.cdc.MustUnmarshal(iterator.Value(), &withdrawRequest)

		// Invoke callback
		if cb(iterator.Key(), &withdrawRequest) {
			break
		}
	}
}

// GetBtcWithdrawRequestByIdentifier returns the btc withdraw request for a given withdraw identifier
func (k Keeper) GetBtcWithdrawRequestByIdentifier(ctx sdk.Context, withdrawIdentifier uint32) (*types.BtcWithdrawRequestInternal, bool) {
	store := ctx.KVStore(k.storeKey)
	iterator := sdk.KVStorePrefixIterator(store, types.BtcWithdrawRequestKey)
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var withdrawRequest types.BtcWithdrawRequestInternal
		k.cdc.MustUnmarshal(iterator.Value(), &withdrawRequest)

		if withdrawRequest.WithdrawIdentifier == withdrawIdentifier {
			return &withdrawRequest, true // Found the request
		}
	}

	return nil, false // Request not found
}

// ConfirmWithdrawRequestsAfterSweepConfirmation confirms the withdraw requests after sweep confirmation
func (k Keeper) ConfirmWithdrawRequestsAfterSweepConfirmation(ctx sdk.Context, reserveId uint64, roundId uint64) error {
	// Retrieve the ReserveWithdrawSnapshot
	snapshot, found := k.GetReserveWithdrawSnapshot(ctx, reserveId, roundId)
	if !found {
		return fmt.Errorf("reserve withdraw snapshot not found for reserveId %d, roundId %d", reserveId, roundId)
	}

	// Fetch the ReserveWithdrawPool for the specified reserveId
	pool, found := k.GetReserveWithdrawPool(ctx, reserveId)
	if !found {
		ctx.Logger().Error("ReserveWithdrawPool not found", "reserveId", reserveId)
		return fmt.Errorf("ReserveWithdrawPool not found for reserveId %d", reserveId)
	}

	// Create a map for efficient lookup of processing identifiers
	processingMap := make(map[uint32]struct{})
	for _, id := range pool.ProcessingWithdrawIdentifiers {
		processingMap[id] = struct{}{}
	}

	// Iterate through withdrawRequests in the snapshot
	for _, withdrawSnap := range snapshot.WithdrawRequests {
		withdrawRequest, found := k.GetBtcWithdrawRequestByIdentifier(ctx, withdrawSnap.WithdrawIdentifier)
		if !found {
			ctx.Logger().Error("btc withdraw request not found for identifier", "identifier", withdrawSnap.WithdrawIdentifier)
			return fmt.Errorf("btc withdraw request not found for identifier %d", withdrawSnap.WithdrawIdentifier)
		}

		// Update isConfirmed to true
		withdrawRequest.IsConfirmed = true

		// Update the withdraw request in the store
		err := k.SetBtcWithdrawRequestAfterSweepConfirmation(ctx, withdrawRequest)
		if err != nil {
			ctx.Logger().Error("failed to update btc withdraw request", "error", err)
			return fmt.Errorf("failed to update btc withdraw request: %w", err)
		}

		// Remove the identifier from processing map
		delete(processingMap, withdrawSnap.WithdrawIdentifier)
	}

	// Update the processing identifiers list in the pool
	newProcessingIdentifiers := make([]uint32, 0, len(processingMap))
	for id := range processingMap {
		newProcessingIdentifiers = append(newProcessingIdentifiers, id)
	}
	pool.ProcessingWithdrawIdentifiers = newProcessingIdentifiers

	// Save the updated pool back to the store using existing SetWithdrawPool function
	err := k.SetReserveWithdrawPool(ctx, pool)
	if err != nil {
		ctx.Logger().Error("failed to update reserve withdraw pool", "error", err)
		return fmt.Errorf("failed to update reserve withdraw pool: %w", err)
	}

	return nil
}

// SetBtcWithdrawRequestAfterSweepConfirmation sets the btc withdraw request after sweep confirmation
func (k Keeper) SetBtcWithdrawRequestAfterSweepConfirmation(ctx sdk.Context, withdrawRequest *types.BtcWithdrawRequestInternal) error {
	store := ctx.KVStore(k.storeKey)

	twilightAddr, err := sdk.AccAddressFromBech32(withdrawRequest.TwilightAddress)
	if err != nil {
		return sdkerrors.Wrapf(err, "invalid twilight address: %s", withdrawRequest.TwilightAddress)
	}
	// Set up the key for storing the withdraw request
	aKey := types.GetBtcWithdrawRequestKeyInternal(
		twilightAddr,
		withdrawRequest.WithdrawReserveId,
		withdrawRequest.WithdrawAddress,
		withdrawRequest.WithdrawAmount,
	)

	// Marshal and store the withdraw request
	store.Set(aKey, k.cdc.MustMarshal(withdrawRequest))

	return nil
}

// SetNewSweepProposalReceived indicates a new sweep proposal has been received for a specific reserve and round
// We store the block height to indicate when the proposal was made
func (k Keeper) SetNewSweepProposalReceived(ctx sdk.Context, reserveId uint64, roundId uint64) {
	store := ctx.KVStore(k.storeKey)
	key := types.GetNewSweepProposalReceivedKey()

	proposalReceived := types.NewSweepProposalReceivedInternal{
		ReserveId:                   reserveId,
		RoundId:                     roundId,
		CreationTwilightBlockHeight: ctx.BlockHeight(),
	}

	value := k.cdc.MustMarshal(&proposalReceived)
	store.Set(key, value)
}

// CheckForNewSweepProposal checks if there is a new sweep proposal for a specific reserve and round
func (k Keeper) CheckForNewSweepProposal(ctx sdk.Context) (bool, uint64, uint64) {
	store := ctx.KVStore(k.storeKey)
	iterator := sdk.KVStorePrefixIterator(store, types.GetNewSweepProposalReceivedKey())
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var proposalReceived types.NewSweepProposalReceivedInternal
		k.cdc.MustUnmarshal(iterator.Value(), &proposalReceived)

		if proposalReceived.CreationTwilightBlockHeight == ctx.BlockHeight()-1 {
			// Found a new proposal made in the last block
			return true, proposalReceived.ReserveId, proposalReceived.RoundId
		}
	}
	return false, 0, 0
}

// GetReserveWithdrawSnapshot returns the last withdraw snapshot for a specific reserve
func (k Keeper) GetReserveWithdrawSnapshot(ctx sdk.Context, reserveId uint64, roundId uint64) (*types.ReserveWithdrawSnapshot, bool) {
	store := ctx.KVStore(k.storeKey)
	key := types.GetReserveWithdrawSnapshotKey(reserveId, roundId)

	if !store.Has(key) {
		return nil, false // Snapshot not found
	}

	bz := store.Get(key)
	var snapshot types.ReserveWithdrawSnapshot
	k.cdc.MustUnmarshal(bz, &snapshot)

	return &snapshot, true
}

func CheckBtcTxAgainstSnapshot(BtcTxHex string, snapshot map[string]int64) (bool, error) {
	// Decode the Bitcoin transaction
	btcTx, err := forkstypes.CreateTxFromHex(BtcTxHex)
	if err != nil {
		return false, fmt.Errorf("error decoding btc transaction: %w", err)
	}

	// Verify the transaction outputs against the snapshot
	for _, output := range btcTx.TxOut {
		_, addresses, _, err := txscript.ExtractPkScriptAddrs(output.PkScript, &chaincfg.MainNetParams)
		if err != nil {
			return false, fmt.Errorf("error extracting addresses from pkScript: %w", err)
		}

		if len(addresses) != 1 {
			return false, fmt.Errorf("output does not contain exactly one address")
		}

		addrStr := addresses[0].String()
		expectedAmount, exists := snapshot[addrStr]
		if !exists {
			return false, fmt.Errorf("unexpected address in outputs: %s", addrStr)
		}

		if output.Value != expectedAmount {
			return false, fmt.Errorf("unexpected amount for address: %s, expected: %d, got: %d", addrStr, expectedAmount, output.Value)
		}

		// Remove the address from the snapshot to track that it's found
		delete(snapshot, addrStr)
	}

	// Check if all expected addresses were found
	if len(snapshot) != 0 {
		return false, fmt.Errorf("not all expected outputs were found in the transaction")
	}

	return true, nil
}

func (k Keeper) CheckReserveWithdrawSnapshot(ctx sdk.Context, btcTxHex string, reserveId uint64, roundId uint64) (bool, error) {
	// Decode the Bitcoin transaction
	btcTx, err := forkstypes.CreateTxFromHex(btcTxHex)
	if err != nil {
		return false, sdkerrors.Wrapf(types.ErrInvalid, "error decoding btc transaction")
	}

	// Retrieve the ReserveWithdrawSnapshot
	snapshot, found := k.GetReserveWithdrawSnapshot(ctx, reserveId, roundId)
	if !found && len(btcTx.TxOut) != 1 {
		return false, sdkerrors.Wrapf(types.ErrInvalid, "reserve withdraw snapshot not found for reserveId %d, roundId %d and btxTx has more than one output", reserveId, roundId)
	} else {
		// Create a map of expected addresses and amounts
		expectedOutputs := make(map[string]int64)

		for _, withdrawRequest := range snapshot.WithdrawRequests {
			expectedOutputs[withdrawRequest.WithdrawAddress] = int64(withdrawRequest.WithdrawAmount)
		}

		// Check if the number of outputs (excluding the reserved sweep output) matches the snapshot
		if len(btcTx.TxOut)-1 != len(expectedOutputs) {
			return false, sdkerrors.Wrapf(types.ErrInvalid, "number of outputs in btc transaction does not match the snapshot")
		}

		// Iterate through all the outputs of the Bitcoin transaction
		for i, output := range btcTx.TxOut {
			if i == 0 { // Skip the output reserved for the sweep
				continue
			}

			_, addresses, _, err := txscript.ExtractPkScriptAddrs(output.PkScript, &chaincfg.MainNetParams)
			if err != nil {
				return false, sdkerrors.Wrapf(types.ErrInvalid, "btcUnsignedSweepTx is invalid")
			}
			for _, addr := range addresses {
				addrStr := addr.String()
				expectedAmount, exists := expectedOutputs[addrStr]
				if !exists || output.Value != expectedAmount {
					return false, sdkerrors.Wrapf(types.ErrInvalid, "btc tx outputs did not match with the snapshot")
				}
				delete(expectedOutputs, addrStr)
			}
		}
	}

	return true, nil
}

// PruneReserveWithdrawSnapshot deletes the ReserveWithdrawSnapshot for a given reserveId and roundId
func (k Keeper) PruneReserveWithdrawSnapshot(ctx sdk.Context, reserveId uint64, roundId uint64) {
	store := ctx.KVStore(k.storeKey)
	key := types.GetReserveWithdrawSnapshotKey(reserveId, roundId)
	store.Delete(key)
}
