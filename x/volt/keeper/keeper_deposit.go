package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	bridgetypes "github.com/twilight-project/nyks/x/bridge/types"
	"github.com/twilight-project/nyks/x/volt/types"
)

// SetBtcDeposit sets a btc deposit address given the BtcDepositAddress type
func (k Keeper) SetBtcDeposit(ctx sdk.Context, btcDepositAddress bridgetypes.BtcAddress, twilightAddress sdk.AccAddress, twilightStakingAmount uint64, btcSatoshiTestAmount uint64) error {
	if err := sdk.VerifyAddressFormat(twilightAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}

	btcDepositAddr := &types.BtcDepositAddress{
		BtcDepositAddress:           btcDepositAddress.BtcAddress,
		BtcSatoshiTestAmount:        btcSatoshiTestAmount,
		TwilightStakingAmount:       twilightStakingAmount,
		TwilightAddress:             twilightAddress.String(),
		IsConfirmed:                 false,
		CreationTwilightBlockHeight: ctx.BlockHeight(),
	}

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetBtcDepositKey(twilightAddress)
	store.Set(aKey, k.cdc.MustMarshal(btcDepositAddr))

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

// Check a btcAddress against all registered btcAddresses
func (k Keeper) CheckBtcAddress(ctx sdk.Context, twilightAddress sdk.Address, btcAddress bridgetypes.BtcAddress, newSatoshiTestAmount uint64) bool {
	store := ctx.KVStore(k.storeKey)
	iterator := sdk.KVStorePrefixIterator(store, types.BtcDepositKey)

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var btcDepositAddress types.BtcDepositAddress
		k.cdc.MustUnmarshal(iterator.Value(), &btcDepositAddress)
		// Skip if the twilight address of the stored record is the same as the caller's
		if btcDepositAddress.TwilightAddress == twilightAddress.String() {
			continue
		}

		// Check if the BTC address is the same and is confirmed
		isSameAddressAndConfirmed := btcDepositAddress.BtcDepositAddress == btcAddress.BtcAddress && btcDepositAddress.IsConfirmed

		// Check if the BTC address is the same and the satoshi test amount matches
		isSameAddressAndMatchingSatoshiAmount := btcDepositAddress.BtcDepositAddress == btcAddress.BtcAddress && btcDepositAddress.BtcSatoshiTestAmount == newSatoshiTestAmount

		// If either of the conditions is true, return true
		if isSameAddressAndConfirmed || isSameAddressAndMatchingSatoshiAmount {
			return true
		}
	}

	return false
}

// GetAllBtcRegisteredDepositAddresses returns all the btc deposit addresses
func (k Keeper) GetAllBtcRegisteredDepositAddresses(ctx sdk.Context) (btcDepositAddresses []types.BtcDepositAddress) {
	store := ctx.KVStore(k.storeKey)
	iterator := sdk.KVStorePrefixIterator(store, types.BtcDepositKey)

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var btcDepositAddress types.BtcDepositAddress
		k.cdc.MustUnmarshal(iterator.Value(), &btcDepositAddress)

		//if btcDepositAddress.IsConfirmed {
		btcDepositAddresses = append(btcDepositAddresses, btcDepositAddress)
		//}
	}

	return btcDepositAddresses
}
