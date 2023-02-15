package keeper

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	forkstypes "github.com/twilight-project/nyks/x/forks/types"
	"github.com/twilight-project/nyks/x/volt/types"
)

// SetReserve sets a reserve in the store
func (k Keeper) SetReserve(ctx sdk.Context, judgeAddress sdk.AccAddress) error {

	// Get the latest reserve id
	// We keep reserve ids in a separate store and keep track of it as a counter
	LastRegisteredReserve := k.GetLastRegisteredReserve(ctx)
	reserveId := LastRegisteredReserve + 1

	// Check if the reserve limit has been reached
	if (reserveId) > types.BtcReserveMaxLimit {
		return sdkerrors.Wrapf(types.ErrBtcReserveMaxLimitReached, fmt.Sprint(types.BtcReserveMaxLimit))
	}

	// Create a new reserve
	res := &types.Reserve{
		ReserveId:             reserveId,
		ValidatorAddress:      judgeAddress.String(),
		BtcRelayCapacityValue: 0,
		TotalValue:            0,
		PrivatePoolValue:      0,
		PublicValue:           0,
		FeePool:               0,
		TwilightAddresses:     []string{},
	}

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetReserveKey(judgeAddress, reserveId)
	store.Set(aKey, k.cdc.MustMarshal(res))
	k.setLastRegisteredReserve(ctx, reserveId)

	return nil
}

// setLastRegisteredReserve sets the latest reserve id
func (k Keeper) setLastRegisteredReserve(ctx sdk.Context, reserveId uint64) {
	store := ctx.KVStore(k.storeKey)

	store.Set(types.LastRegisteredReserveKey, forkstypes.UInt64Bytes(reserveId))
}

// GetLastRegisteredReserve returns the latest reserve id
func (k Keeper) GetLastRegisteredReserve(ctx sdk.Context) uint64 {
	store := ctx.KVStore(k.storeKey)
	bytes := store.Get(types.LastRegisteredReserveKey)

	if len(bytes) == 0 {
		return 0
	}
	return forkstypes.UInt64FromBytes(bytes)
}
