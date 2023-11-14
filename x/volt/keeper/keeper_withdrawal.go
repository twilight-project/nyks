package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
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
