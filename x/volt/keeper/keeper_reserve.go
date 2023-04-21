package keeper

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	forkstypes "github.com/twilight-project/nyks/x/forks/types"
	sharedtypes "github.com/twilight-project/nyks/x/shared/types"
	"github.com/twilight-project/nyks/x/volt/types"
)

// SetBtcReserve sets a reserve in the store
func (k Keeper) SetBtcReserve(ctx sdk.Context, judgeAddress sdk.AccAddress, reserveAddress string) error {

	// Get the latest reserve id
	// We keep reserve ids in a separate store and keep track of it as a counter
	LastRegisteredReserve := k.GetLastRegisteredBtcReserve(ctx)
	reserveId := LastRegisteredReserve + 1

	// Check if the reserve limit has been reached
	if (reserveId) > types.BtcReserveMaxLimit {
		return sdkerrors.Wrapf(types.ErrBtcReserveMaxLimitReached, fmt.Sprint(types.BtcReserveMaxLimit))
	}

	// Create a new reserve
	res := &types.BtcReserve{
		ReserveId:                        reserveId,
		ReserveAddress:                   reserveAddress,
		JudgeAddress:                     judgeAddress.String(),
		BtcRelayCapacityValue:            0,
		TotalValue:                       0,
		PrivatePoolValue:                 0,
		PublicValue:                      0,
		FeePool:                          0,
		IndividualTwilightReserveAccount: []*types.IndividualTwilightReserveAccount{},
	}

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetReserveKey(reserveId)
	store.Set(aKey, k.cdc.MustMarshal(res))
	k.setLastRegisteredBtcReserve(ctx, reserveId)

	return nil
}

// UpdateBtcReserve updates a reserve in the store
func (k Keeper) UpdateBtcReserve(ctx sdk.Context, mintedValue uint64, twilightAddress sdk.AccAddress, reserveAddress string) error {

	// Get the reserve id
	reserveId, err := k.GetBtcReserveIdByAddress(ctx, reserveAddress)
	if err != nil {
		return sdkerrors.Wrapf(types.ErrBtcReserveNotFound, fmt.Sprint(reserveAddress))
	}

	// Get the reserve
	reserve, err := k.GetBtcReserve(ctx, reserveId)
	if err != nil {
		return sdkerrors.Wrapf(types.ErrBtcReserveNotFound, fmt.Sprint(reserveAddress))
	}

	// Update the reserve
	reserve.TotalValue = reserve.TotalValue + mintedValue
	reserve.PublicValue = reserve.PublicValue + mintedValue

	// Add twilightAddress to reserve.IndividualTwilightReserveAccount
	reserve.IndividualTwilightReserveAccount = append(reserve.IndividualTwilightReserveAccount, &types.IndividualTwilightReserveAccount{
		TwilightAddress: twilightAddress.String(),
		BtcValue:        mintedValue,
	})

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetReserveKey(reserveId)
	store.Set(aKey, k.cdc.MustMarshal(reserve))

	return nil
}

// UpdateBtcReserveAfterSweepProposal based on the passed reserveId, the operation happens after a successful attestation of MsgSweepProposal
func (k Keeper) UpdateBtcReserveAfterSweepProposal(ctx sdk.Context, reserveId uint64, reserveAddress string, judgeAddress string, btcRelayCapacityValue uint64, totalValue uint64, privatePoolValue uint64, publicValue uint64, feePool uint64, individualTwilightAccounter []*forkstypes.IndividualTwilightReserveAccounter) error {

	// Get the reserve
	reserve, err := k.GetBtcReserve(ctx, reserveId)
	if err != nil {
		return sdkerrors.Wrapf(types.ErrBtcReserveNotFound, fmt.Sprint(reserveAddress))
	}

	// Due to the cyclic import issue, we have to use shared types to convert individualTwilightAccounter to individualTwilightReserveAccount
	individualTwilightReserveAccount := sharedtypes.ConvertIndividualTwilightAccounts(individualTwilightAccounter)

	// Update all values of the reserve based on reserveId

	reserve.ReserveAddress = reserveAddress
	reserve.JudgeAddress = judgeAddress
	reserve.BtcRelayCapacityValue = btcRelayCapacityValue
	reserve.TotalValue = totalValue
	reserve.PrivatePoolValue = privatePoolValue
	reserve.PublicValue = publicValue
	reserve.FeePool = feePool
	reserve.IndividualTwilightReserveAccount = individualTwilightReserveAccount

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetReserveKey(reserveId)
	store.Set(aKey, k.cdc.MustMarshal(reserve))

	return nil
}

// GetBtcReserve function that returns a reserve if passed an oracle address and reserve address
func (k Keeper) GetBtcReserve(ctx sdk.Context, reserveId uint64) (*types.BtcReserve, error) {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetReserveKey(reserveId)
	bz := store.Get(aKey)
	if len(bz) == 0 {
		return nil, sdkerrors.Wrapf(types.ErrBtcReserveNotFound, fmt.Sprint(reserveId))
	}
	reserve := &types.BtcReserve{}
	err := k.cdc.Unmarshal(store.Get(aKey), reserve)
	if err != nil {
		return nil, sdkerrors.Wrapf(types.ErrBtcReserveNotFound, fmt.Sprint(reserveId))
	}
	return reserve, nil
}

// GetBtcReserveIdByAddress returns a reserve id if passed an reserve address
func (k Keeper) GetBtcReserveIdByAddress(ctx sdk.Context, reserveAddress string) (uint64, error) {
	store := ctx.KVStore(k.storeKey)
	prefix := types.BtcReserveKey
	iter := store.Iterator(prefixRange(prefix))
	defer iter.Close()

	for ; iter.Valid(); iter.Next() {
		res := types.BtcReserve{
			ReserveId:                        0,
			JudgeAddress:                     "",
			BtcRelayCapacityValue:            0,
			TotalValue:                       0,
			PrivatePoolValue:                 0,
			PublicValue:                      0,
			FeePool:                          0,
			IndividualTwilightReserveAccount: []*types.IndividualTwilightReserveAccount{},
		}

		k.cdc.MustUnmarshal(iter.Value(), &res)

		if res.ReserveAddress == reserveAddress {
			return res.ReserveId, nil
		}
	}

	return 0, sdkerrors.Wrapf(types.ErrBtcReserveNotFound, fmt.Sprint(reserveAddress))
}

// setLastRegisteredBtcReserve sets the latest reserve id
func (k Keeper) setLastRegisteredBtcReserve(ctx sdk.Context, reserveId uint64) {
	store := ctx.KVStore(k.storeKey)

	store.Set(types.LastRegisteredReserveKey, forkstypes.UInt64Bytes(reserveId))
}

// GetLastRegisteredBtcReserve returns the latest reserve id
func (k Keeper) GetLastRegisteredBtcReserve(ctx sdk.Context) uint64 {
	store := ctx.KVStore(k.storeKey)
	bytes := store.Get(types.LastRegisteredReserveKey)

	if len(bytes) == 0 {
		return 0
	}
	return forkstypes.UInt64FromBytes(bytes)
}

// IterateBtcReserves iterates through all of the reserves
func (k Keeper) IterateBtcReserves(ctx sdk.Context, cb func([]byte, types.BtcReserve) bool) {
	store := ctx.KVStore(k.storeKey)
	prefix := types.BtcReserveKey
	iter := store.Iterator(prefixRange(prefix))
	defer iter.Close()

	for ; iter.Valid(); iter.Next() {
		res := types.BtcReserve{
			ReserveId:                        0,
			JudgeAddress:                     "",
			BtcRelayCapacityValue:            0,
			TotalValue:                       0,
			PrivatePoolValue:                 0,
			PublicValue:                      0,
			FeePool:                          0,
			IndividualTwilightReserveAccount: []*types.IndividualTwilightReserveAccount{},
		}

		k.cdc.MustUnmarshal(iter.Value(), &res)

		// cb returns true to stop early
		if cb(iter.Key(), res) {
			return
		}
	}
}

// CheckIndividualTwilightReserveAccountBalance checks if the twilight address is in the reserve.IndividualTwilightReserveAccount
// and if the user has enough btc value to withdraw
func (k Keeper) CheckIndividualTwilightReserveAccountBalance(ctx sdk.Context, twilightAddress sdk.AccAddress, reserveAddress string, btcValue uint64) error {

	// Get the reserve id
	reserveId, err := k.GetBtcReserveIdByAddress(ctx, reserveAddress)
	if err != nil {
		return sdkerrors.Wrapf(types.ErrBtcReserveNotFound, fmt.Sprint(reserveAddress))
	}

	// Get the reserve
	reserve, err := k.GetBtcReserve(ctx, reserveId)
	if err != nil {
		return sdkerrors.Wrapf(types.ErrBtcReserveNotFound, fmt.Sprint(reserveId))
	}

	// Check if the twilight address is in the reserve.IndividualTwilightReserveAccount
	// and if the user has enough btc value to withdraw
	for _, individualAccount := range reserve.IndividualTwilightReserveAccount {
		if individualAccount.TwilightAddress == twilightAddress.String() {
			if individualAccount.BtcValue < btcValue {
				return sdkerrors.Wrapf(types.ErrInsufficientBtcValue, fmt.Sprint(twilightAddress))
			}
			return nil
		}
	}

	return sdkerrors.Wrapf(types.ErrBtcReserveNotFound, fmt.Sprint(twilightAddress))
}

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
