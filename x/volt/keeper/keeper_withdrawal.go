package keeper

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	forkstypes "github.com/twilight-project/nyks/x/forks/types"
	"github.com/twilight-project/nyks/x/volt/types"
)

// SetWithdrawPool sets a withdrawal pool for a specific reserve in the store
func (k Keeper) SetWithdrawPool(ctx sdk.Context, withdrawPool *types.ReserveWithdrawPool) error {
	store := ctx.KVStore(k.storeKey)

	// Generate a key for the withdrawal pool based on ReserveID and RoundID
	poolKey := types.GetWithdrawPoolKey(withdrawPool.ReserveID)

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
func (k Keeper) SetBtcWithdrawRequest(ctx sdk.Context, twilightAddress sdk.AccAddress, reserveId uint64, withdrawAddress string, withdrawAmount uint64) error {
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
		return err
	}

	// Now we will take the balance from the user's account as well and will burn it
	// Deduct the withdrawal amount from the user's bank balance
	userAddr, err := sdk.AccAddressFromBech32(twilightAddress.String())
	if err != nil {
		return sdkerrors.Wrapf(err, "invalid user address %s", twilightAddress.String())
	}

	withdrawCoin := sdk.NewCoin("sats", sdk.NewIntFromUint64(withdrawAmount))
	if err := k.BankKeeper.SendCoinsFromAccountToModule(ctx, userAddr, forkstypes.ModuleName, sdk.NewCoins(withdrawCoin)); err != nil {
		return sdkerrors.Wrapf(err, "failed to deduct coins from user account %s", userAddr.String())
	}

	// Get pre-burn balance
	preBurnBalance := k.BankKeeper.GetBalance(ctx, k.accountKeeper.GetModuleAddress(forkstypes.ModuleName), withdrawCoin.Denom)

	// Reduce the supply of sats
	if err := k.BankKeeper.BurnCoins(ctx, forkstypes.ModuleName, sdk.NewCoins(withdrawCoin)); err != nil {
		return sdkerrors.Wrapf(err, "failed to burn coins %v", withdrawCoin)
	}

	// Get post-burn balance
	postBurnBalance := k.BankKeeper.GetBalance(ctx, k.accountKeeper.GetModuleAddress(forkstypes.ModuleName), withdrawCoin.Denom)

	// Check if the burn operation was successful
	expectedPostBurnAmount := preBurnBalance.Amount.Sub(withdrawCoin.Amount)
	if !postBurnBalance.Amount.Equal(expectedPostBurnAmount) {
		panic(fmt.Sprintf(
			"Burn operation failed! Pre-burn balance %v, Post-burn balance %v, Expected post-burn balance %v",
			preBurnBalance.String(), postBurnBalance.String(), expectedPostBurnAmount.String()),
		)
	}
	// Deduct the withdrawal amount from the user's clearing account
	err = k.DeductFromClearingAccount(ctx, twilightAddress, reserveId, withdrawAmount)
	if err != nil {
		return sdkerrors.Wrapf(err, "failed to deduct from ClearingAccount")
	}

	return nil
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

// SetNewSweepProposalReceived indicates a new sweep proposal has been received for a specific reserve and round
// We store the block height to indicate when the proposal was made
func (k Keeper) SetNewSweepProposalReceived(ctx sdk.Context, reserveId uint64, roundId uint64) {
	store := ctx.KVStore(k.storeKey)
	key := types.GetNewSweepProposalReceivedKey(reserveId, roundId)

	// Convert the block height to uint64 before encoding
	blockHeight := uint64(ctx.BlockHeight())
	store.Set(key, sdk.Uint64ToBigEndian(blockHeight))
}

// CheckForNewSweepProposal checks if there is a new sweep proposal for a specific reserve and round
func (k Keeper) CheckForNewSweepProposal(ctx sdk.Context) (bool, uint64, uint64) {
	store := ctx.KVStore(k.storeKey)
	iterator := sdk.KVStorePrefixIterator(store, types.NewSweepProposalReceivedKey)
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var reserveId, roundId uint64

		blockHeight := sdk.BigEndianToUint64(iterator.Value())
		currentHeight := uint64(ctx.BlockHeight())
		if blockHeight == currentHeight-1 {
			// Found a new proposal made in the last block
			return true, reserveId, roundId
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
