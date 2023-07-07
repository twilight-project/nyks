package keeper

import (
	"fmt"

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

// GetClearingAccount returns the clearing account for a given twilight address
func (k Keeper) GetClearingAccount(ctx sdk.Context, twilightAddress sdk.AccAddress) (*types.ClearingAccount, bool) {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetClearingAccountKey(twilightAddress)
	if !store.Has(aKey) {
		return nil, false
	}

	bz := store.Get(aKey)
	var ClearingAccount types.ClearingAccount
	k.cdc.MustUnmarshal(bz, &ClearingAccount)

	return &ClearingAccount, true
}

// GetAllClearingAccounts returns the all clearing accounts
func (k Keeper) GetAllClearingAccounts(ctx sdk.Context) ([]types.ClearingAccount, error) {
	store := ctx.KVStore(k.storeKey)
	iterator := sdk.KVStorePrefixIterator(store, types.TwilightClearingAccountKey)

	defer iterator.Close()
	var clearingAccounts []types.ClearingAccount
	for ; iterator.Valid(); iterator.Next() {
		var clearingAccount types.ClearingAccount
		k.cdc.MustUnmarshal(iterator.Value(), &clearingAccount)

		clearingAccounts = append(clearingAccounts, clearingAccount)
	}

	return clearingAccounts, nil
}

// UpdateTransfersInClearing updates the ClearingAccounts of the sender and receiver
func (k Keeper) UpdateTransfersInClearing(ctx sdk.Context, sender sdk.AccAddress, receiver sdk.AccAddress, amount uint64) error {
	// Get the sender's ClearingAccount
	senderAccount, found := k.GetClearingAccount(ctx, sender)
	if !found {
		return sdkerrors.Wrapf(types.ErrClearingAccountNotFound, fmt.Sprint(sender))
	}

	// Get the receiver's ClearingAccount
	receiverAccount, found := k.GetClearingAccount(ctx, receiver)
	if !found {
		return sdkerrors.Wrapf(types.ErrClearingAccountNotFound, fmt.Sprint(receiver))
	}

	// Iterate over the sender's ReserveAccountBalances
	for _, balance := range senderAccount.ReserveAccountBalances {
		// Deduct the transferred amount from the balance
		if balance.Amount >= amount {
			balance.Amount -= amount

			// Add the transferred amount to the receiver's ReserveAccountBalances
			for _, receiverBalance := range receiverAccount.ReserveAccountBalances {
				if receiverBalance.ReserveId == balance.ReserveId {
					receiverBalance.Amount += amount
					break
				}
			}

			// Break after deducting the amount
			break
		}
	}

	return nil
}
