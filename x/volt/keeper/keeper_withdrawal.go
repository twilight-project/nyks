package keeper

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/volt/types"
)

// RegisterNewBtcReserveWithdrawalPool sets a withdrawal pool for a specific reserve in the store
func (k Keeper) RegisterNewBtcReserveWithdrawalPool(ctx sdk.Context, reserveId uint64) error {

	// Check if the reserve exists
	_, err := k.GetBtcReserve(ctx, reserveId)
	if err != nil {
		return sdkerrors.Wrapf(types.ErrBtcReserveNotFound, fmt.Sprint(reserveId))
	}

	// Initialize an empty WithdrawPool
	withdrawPool := &types.ReserveWithdrawPool{
		ReserveID:   reserveId,
		Identifiers: make([][]byte, 0), // Initialize as an empty slice of byte slices
		RoundID:     0,                 // Initialize with 0
	}

	// Set the WithdrawPool
	err = k.SetWithdrawPool(ctx, withdrawPool)
	if err != nil {
		return sdkerrors.Wrapf(types.ErrCouldNotSetWithdrawPool, fmt.Sprint(reserveId))
	}

	return nil
}

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
