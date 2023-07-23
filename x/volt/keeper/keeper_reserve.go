package keeper

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	forkstypes "github.com/twilight-project/nyks/x/forks/types"
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
		ReserveId:             reserveId,
		ReserveAddress:        reserveAddress,
		JudgeAddress:          judgeAddress.String(),
		BtcRelayCapacityValue: 0,
		TotalValue:            0,
		PrivatePoolValue:      0,
		PublicValue:           0,
		FeePool:               0,
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

	// Get the clearing account
	clearingAccount, found := k.GetClearingAccount(ctx, twilightAddress)
	if !found {
		return sdkerrors.Wrapf(types.ErrClearingAccountNotFound, fmt.Sprint(twilightAddress))
	}

	// Update the clearing account
	// Check if the reserve id already exists in the ReserveAccountBalances slice
	found = false
	for _, balance := range clearingAccount.ReserveAccountBalances {
		if balance.ReserveId == reserveId {
			// If it does, add the minted value to the existing balance
			balance.Amount += mintedValue
			found = true
			break
		}
	}

	if !found {
		// If it doesn't, append a new IndividualTwilightReserveAccountBalance to the slice
		clearingAccount.ReserveAccountBalances = append(clearingAccount.ReserveAccountBalances, &types.IndividualTwilightReserveAccountBalance{
			ReserveId: reserveId,
			Amount:    mintedValue,
		})
	}

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetReserveKey(reserveId)
	store.Set(aKey, k.cdc.MustMarshal(reserve))

	return nil
}

// UpdateBtcReserveAfterSweepProposal based on the passed reserveId, the operation happens after a successful attestation of MsgSweepProposal
func (k Keeper) UpdateBtcReserveAfterSweepProposal(ctx sdk.Context, reserveId uint64, reserveAddress string, judgeAddress string, btcRelayCapacityValue uint64, totalValue uint64, privatePoolValue uint64, publicValue uint64, feePool uint64) error {

	// Get the reserve
	reserve, err := k.GetBtcReserve(ctx, reserveId)
	if err != nil {
		return sdkerrors.Wrapf(types.ErrBtcReserveNotFound, fmt.Sprint(reserveAddress))
	}

	// Update all other values of the reserve based on reserveId
	reserve.ReserveAddress = reserveAddress
	reserve.JudgeAddress = judgeAddress
	reserve.BtcRelayCapacityValue = btcRelayCapacityValue
	reserve.TotalValue = totalValue
	reserve.PrivatePoolValue = privatePoolValue
	reserve.PublicValue = publicValue
	reserve.FeePool = feePool

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetReserveKey(reserveId)
	store.Set(aKey, k.cdc.MustMarshal(reserve))

	return nil

}

// UpdateBtcReserveAfterTransfer updates a reserve after a successful transfer of tokens from Send and Multisend in the bank module
// This function is called from the bank module through hooks.go
func (k Keeper) UpdateBtcReserveAfterTransfer(ctx sdk.Context, from, to sdk.AccAddress, amount sdk.Coins) error {
	// Get the clearing accounts for the sender and recipient
	fromAccount, fromExists := k.GetClearingAccount(ctx, from)
	toAccount, toExists := k.GetClearingAccount(ctx, to)

	// If the sender's clearing account doesn't exist, return an error
	if !fromExists {
		return fmt.Errorf("clearing account for sender does not exist")
	}

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

	// Iterate over the sender's reserve account balances
	for i, balance := range fromAccount.ReserveAccountBalances {
		// If the balance is zero, skip this reserve account
		if balance.Amount == 0 {
			continue
		}

		// Calculate the transfer amount for this reserve account
		transferAmount := balance.Amount
		if transferAmount > totalAmount {
			transferAmount = totalAmount
		}

		// Deduct the transfer amount from the sender's balance
		balance.Amount -= transferAmount
		fromAccount.ReserveAccountBalances[i] = balance

		// Add the transfer amount to the recipient's balance
		// If the recipient already has a balance for this reserve ID, update it
		// Otherwise, append a new balance
		found := false
		for j, toBalance := range toAccount.ReserveAccountBalances {
			if toBalance.ReserveId == balance.ReserveId {
				toBalance.Amount += transferAmount
				toAccount.ReserveAccountBalances[j] = toBalance
				found = true
				break
			}
		}
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

	// If the total transfer amount is not zero, return an error
	if totalAmount != 0 {
		return fmt.Errorf("insufficient balance in any reserve account")
	}

	// Update the clearing accounts in the store
	k.SetClearingAccount(ctx, from, fromAccount)
	k.SetClearingAccount(ctx, to, toAccount)

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
			ReserveId:             0,
			ReserveAddress:        "",
			JudgeAddress:          "",
			BtcRelayCapacityValue: 0,
			TotalValue:            0,
			PrivatePoolValue:      0,
			PublicValue:           0,
			FeePool:               0,
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
			ReserveId:             0,
			ReserveAddress:        "",
			JudgeAddress:          "",
			BtcRelayCapacityValue: 0,
			TotalValue:            0,
			PrivatePoolValue:      0,
			PublicValue:           0,
			FeePool:               0,
		}

		k.cdc.MustUnmarshal(iter.Value(), &res)

		// cb returns true to stop early
		if cb(iter.Key(), res) {
			return
		}
	}
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
