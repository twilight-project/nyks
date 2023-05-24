package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	bridgetypes "github.com/twilight-project/nyks/x/bridge/types"
	"github.com/twilight-project/nyks/x/volt/types"
)

// SetBtcAddressForClearingAccount sets the btc address for a given twilight address
func (k Keeper) SetBtcAddressForClearingAccount(ctx sdk.Context, twilightAddress sdk.AccAddress, btcAddr bridgetypes.BtcAddress) error {
	if err := sdk.VerifyAddressFormat(twilightAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}

	// Create a new ClearingAccount message
	account := &types.ClearingAccount{
		TwilightAddress:   twilightAddress.String(),
		BtcDepositAddress: btcAddr.GetBtcAddress(),
		// Other fields will be empty
	}

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetClearingAccountKey(twilightAddress)
	store.Set(aKey, k.cdc.MustMarshal(account))

	return nil
}

// GetBtcAddressByTwilightAddress returns the btc address for a given twilight address
func (k Keeper) GetBtcAddressByTwilightAddress(ctx sdk.Context, twilightAddress sdk.AccAddress) (btcAddress *bridgetypes.BtcAddress, found bool) {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetClearingAccountKey(twilightAddress)
	if !store.Has(aKey) {
		return nil, false
	}

	bz := store.Get(aKey)
	var ClearingAccount types.ClearingAccount
	k.cdc.MustUnmarshal(bz, &ClearingAccount)

	btcAddr := ClearingAccount.BtcDepositAddress

	retBtcAddr := &bridgetypes.BtcAddress{BtcAddress: btcAddr}

	return retBtcAddr, true
}
