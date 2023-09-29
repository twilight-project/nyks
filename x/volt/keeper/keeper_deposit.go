package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	bridgetypes "github.com/twilight-project/nyks/x/bridge/types"
	"github.com/twilight-project/nyks/x/volt/types"
)

// SetBtcDeposit sets a btc deposit address given the BtcDepositAddress type
func (k Keeper) SetBtcDeposit(ctx sdk.Context, depositAddress bridgetypes.BtcAddress, twilightDepositAddress sdk.AccAddress, satoshiTestAmount uint64) error {
	if err := sdk.VerifyAddressFormat(twilightDepositAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}

	btcDepositAddress := &types.BtcDepositAddress{
		DepositAddress:         depositAddress.BtcAddress,
		TwilightDepositAddress: twilightDepositAddress.String(),
		SatoshiTestAmount:      satoshiTestAmount,
		IsConfirmed:            false,
	}

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetBtcDepositKey(twilightDepositAddress)
	store.Set(aKey, k.cdc.MustMarshal(btcDepositAddress))

	return nil
}

// SetBtcDepositConfirmed sets a btc deposit address as confirmed
func (k Keeper) SetBtcDepositConfirmed(ctx sdk.Context, twilightDepositAddress sdk.AccAddress) error {
	if err := sdk.VerifyAddressFormat(twilightDepositAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}

	btcDepositAddress, found := k.GetBtcDepositAddressByTwilightAddress(ctx, twilightDepositAddress)
	if found != true {
		return sdkerrors.Wrap(types.ErrBtcDepositAddressNotFound, "A BtcDepositAddress msg doesn't exist with the given twilight address")
	}

	btcDepositAddress.IsConfirmed = true

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetBtcDepositKey(twilightDepositAddress)
	store.Set(aKey, k.cdc.MustMarshal(btcDepositAddress))

	return nil
}

// GetBtcDepositAddressByTwilightAddress returns the btc address for a given twilight address
func (k Keeper) GetBtcDepositAddressByTwilightAddress(ctx sdk.Context, twilightDepositAddress sdk.AccAddress) (btcDepositAddress *types.BtcDepositAddress, found bool) {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetBtcDepositKey(twilightDepositAddress)
	if !store.Has(aKey) {
		return nil, false
	}

	bz := store.Get(aKey)
	var BtcDepositAddress types.BtcDepositAddress
	k.cdc.MustUnmarshal(bz, &BtcDepositAddress)

	return &BtcDepositAddress, true
}
