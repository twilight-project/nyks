package keeper

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	bridgetypes "github.com/twilight-project/nyks/x/bridge/types"
	nykstypes "github.com/twilight-project/nyks/x/forks/types"
	"github.com/twilight-project/nyks/x/volt/types"
)

// SetClearingAccount sets a clearing account given the ClearingAccount type
func (k Keeper) SetClearingAccount(ctx sdk.Context, twilightAddress sdk.AccAddress, account *types.ClearingAccount) error {
	if err := sdk.VerifyAddressFormat(twilightAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetClearingAccountKey(twilightAddress)
	store.Set(aKey, k.cdc.MustMarshal(account))

	return nil
}

// SetBtcAddressForClearingAccount sets the btc address for a given twilight address
func (k Keeper) SetBtcAddressForClearingAccount(ctx sdk.Context, twilightAddress sdk.AccAddress, btcAddr string, depositIdentifer uint32) (*types.ClearingAccount, error) {
	if err := sdk.VerifyAddressFormat(twilightAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}

	// Create a new ClearingAccount message
	account := &types.ClearingAccount{
		TwilightAddress:             twilightAddress.String(),
		BtcDepositAddress:           btcAddr,
		BtcDepositAddressIdentifier: depositIdentifer,
		// Other fields will be empty
	}

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetClearingAccountKey(twilightAddress)
	store.Set(aKey, k.cdc.MustMarshal(account))

	return account, nil
}

// SetBtcAddressForExistingClearingAccount sets the btc address for a given twilight address
func (k Keeper) SetBtcAddressForExistingClearingAccount(ctx sdk.Context, twilightAddress sdk.AccAddress, btcAddr string, depositIdentifer uint32) (*types.ClearingAccount, error) {
	if err := sdk.VerifyAddressFormat(twilightAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}

	// Get the clearing account for the twilight address
	account, found := k.GetClearingAccount(ctx, twilightAddress)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrClearingAccountNotFound, fmt.Sprint(twilightAddress))
	}

	// Update the btc address
	account.BtcDepositAddress = btcAddr
	account.BtcDepositAddressIdentifier = depositIdentifer

	// Update the clearing account in the store
	k.SetClearingAccount(ctx, twilightAddress, account)

	return account, nil
}

// GetBtcClearingAddressByTwilightAddress returns the btc address for a given twilight address
func (k Keeper) GetBtcClearingAddressByTwilightAddress(ctx sdk.Context, twilightAddress sdk.AccAddress) (btcAddress *bridgetypes.BtcAddress, found bool) {
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

// CheckClearingAccountBalance checks if the clearing account has enough balance in the reserve
func (k Keeper) CheckClearingAccountBalance(ctx sdk.Context, twilightAddress sdk.AccAddress, reserveId uint64, amount uint64) error {
	// Get the clearing account for the twilight address
	account, found := k.GetClearingAccount(ctx, twilightAddress)
	if !found {
		return sdkerrors.Wrapf(types.ErrClearingAccountNotFound, fmt.Sprint(twilightAddress))
	}

	// Check if the clearing account has enough balance in the reserve
	for _, balance := range account.ReserveAccountBalances {
		if balance.ReserveId == reserveId {
			if balance.Amount < amount {
				return sdkerrors.Wrapf(types.ErrInsufficientBalanceInReserve, fmt.Sprintf("Insufficient Balance: %d", balance.Amount))
			}
		}
	}

	return nil
}

// UpdateTransfersInClearing updates a clearing after a successful transfer of tokens from Send and Multisend in the bank module
// This function is called from the bank module through hooks.go
// This function blocks the transfers that are happening with mint as  we are directly handling mint in UpdateBtcReserveAfterMint
func (k Keeper) UpdateTransfersInClearing(ctx sdk.Context, from, to sdk.AccAddress, amount sdk.Coins) error {
	// Get the clearing accounts for the sender and recipient
	fromAccount, fromExists := k.GetClearingAccount(ctx, from)
	// Check if the transfer is from the bank module account
	moduleAddr := k.accountKeeper.GetModuleAddress(nykstypes.ModuleName)
	isFromNyksModule := from.Equals(moduleAddr)

	// if the transfer is coming from nyks/fork module, its part of the mint, we do not need to execute rest of the code
	if isFromNyksModule {
		return nil
	}

	// If the sender's clearing account doesn't exist
	if !fromExists {
		return sdkerrors.Wrapf(types.ErrClearingAccountNotFound, fmt.Sprint(from))
	}
	toAccount, toExists := k.GetClearingAccount(ctx, to)
	// If the recipient's clearing account doesn't exist, create a new one
	if !toExists {
		toAccount = &types.ClearingAccount{
			TwilightAddress: to.String(),
			// Initialize other fields as necessary
		}
		k.SetClearingAccount(ctx, to, toAccount)
	}

	// Calculate the total transfer amount
	totalAmount := uint64(amount.AmountOf("sats").Int64())

	if fromExists {
		for _, balance := range fromAccount.ReserveAccountBalances {
			if balance.Amount == 0 {
				continue
			}

			transferAmount := balance.Amount
			if transferAmount > totalAmount {
				transferAmount = totalAmount
			}

			// Deduct the transfer amount from the sender's balance
			balance.Amount -= transferAmount

			// Add the transfer amount to the recipient's balance
			found := false
			for j, toBalance := range toAccount.ReserveAccountBalances {
				if toBalance.ReserveId == balance.ReserveId {
					toBalance.Amount += transferAmount
					toAccount.ReserveAccountBalances[j] = toBalance
					found = true
					break
				}
			}

			// If the recipient doesn't have a balance for this reserve ID, create one
			if !found {
				toAccount.ReserveAccountBalances = append(toAccount.ReserveAccountBalances, &types.IndividualTwilightReserveAccountBalance{
					ReserveId: balance.ReserveId,
					Amount:    transferAmount,
				})
			}

			// Update the total transfer amount
			totalAmount -= transferAmount

			// If the total transfer amount is zero, break the loop
			if totalAmount == 0 {
				break
			}
		}
	}

	// If the total transfer amount is not zero, return an error
	if totalAmount != 0 {
		return sdkerrors.Wrapf(types.ErrInsufficientBtcValue, "sender does not have enough funds in clearing")
	}

	// Update the clearing accounts in the store
	k.SetClearingAccount(ctx, from, fromAccount)
	k.SetClearingAccount(ctx, to, toAccount)

	return nil
}

// GetAllClearingAccountsInaReserve returns all clearing accounts for a given reserve
func (k Keeper) GetAllClearingAccountsInaReserve(ctx sdk.Context, reserveId uint64) ([]types.ClearingAccount, bool) {
	store := ctx.KVStore(k.storeKey)
	iterator := sdk.KVStorePrefixIterator(store, types.TwilightClearingAccountKey)

	defer iterator.Close()
	var clearingAccounts []types.ClearingAccount
	for ; iterator.Valid(); iterator.Next() {
		var clearingAccount types.ClearingAccount
		k.cdc.MustUnmarshal(iterator.Value(), &clearingAccount)

		for _, balance := range clearingAccount.ReserveAccountBalances {
			if balance.ReserveId == reserveId {
				clearingAccounts = append(clearingAccounts, clearingAccount)
				break
			}
		}
	}

	return clearingAccounts, true
}

// DeductFromClearingAccount deducts the amount from the clearing account during processing of a withdrawal request
func (k Keeper) DeductFromClearingAccount(ctx sdk.Context, twilightAddress sdk.AccAddress, reserveId uint64, amount uint64) error {
	// Get the clearing account for the twilight address
	account, found := k.GetClearingAccount(ctx, twilightAddress)
	if !found {
		return sdkerrors.Wrapf(types.ErrClearingAccountNotFound, fmt.Sprint(twilightAddress))
	}

	// Deduct the amount from the clearing account
	for _, balance := range account.ReserveAccountBalances {
		if balance.ReserveId == reserveId {
			if balance.Amount < amount {
				return sdkerrors.Wrapf(types.ErrInsufficientBalanceInReserve, fmt.Sprintf("Insufficient Balance: %d", balance.Amount))
			}
			balance.Amount -= amount
		}
	}

	// Update the clearing account in the store
	k.SetClearingAccount(ctx, twilightAddress, account)

	return nil
}

// GetRefundTxSnapshot returns the refund tx snapshot for a given reserveId and roundId
func (k Keeper) GetRefundTxSnapshot(ctx sdk.Context, reserveId uint64, roundId uint64) (*types.RefundTxSnapshot, bool) {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetRefundTxSnapshotKey(reserveId, roundId)
	if !store.Has(aKey) {
		return nil, false
	}

	bz := store.Get(aKey)
	var refundTxSnapshot types.RefundTxSnapshot
	k.cdc.MustUnmarshal(bz, &refundTxSnapshot)

	return &refundTxSnapshot, true
}

// UpdateMintInClearing updates the ClearingAccounts of the receiver
// func (k Keeper) UpdateMintInClearing(ctx sdk.Context, receiver sdk.AccAddress, amount uint64, reserveAddress string) error {
// 	// Get the receiver's ClearingAccount
// 	receiverAccount, found := k.GetClearingAccount(ctx, receiver)
// 	if !found {
// 		return sdkerrors.Wrapf(types.ErrClearingAccountNotFound, fmt.Sprint(receiver))
// 	}

// 	// Get the reserve id
// 	reserveId, err := k.GetBtcReserveIdByAddress(ctx, reserveAddress)
// 	if err != nil {
// 		return sdkerrors.Wrapf(types.ErrBtcReserveNotFound, fmt.Sprint(reserveAddress))
// 	}

// 	// Add the transferred amount to the receiver's ReserveAccountBalances
// 	found = false
// 	for j, receiverBalance := range receiverAccount.ReserveAccountBalances {
// 		if receiverBalance.ReserveId == reserveId {
// 			receiverBalance.Amount += amount
// 			receiverAccount.ReserveAccountBalances[j] = receiverBalance
// 			found = true
// 			break
// 		}
// 	}

// 	// If the receiver doesn't have a balance for this reserve ID, create one
// 	if !found {
// 		receiverAccount.ReserveAccountBalances = append(receiverAccount.ReserveAccountBalances, &types.IndividualTwilightReserveAccountBalance{
// 			ReserveId: reserveId,
// 			Amount:    amount,
// 		})
// 	}

// 	// Update the ClearingAccounts in the store
// 	k.SetClearingAccount(ctx, receiver, receiverAccount)

// 	return nil
// }
