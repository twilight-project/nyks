package keeper

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	bridgetypes "github.com/twilight-project/nyks/x/bridge/types"
	forkstypes "github.com/twilight-project/nyks/x/forks/types"
	"github.com/twilight-project/nyks/x/volt/types"
)

// RegisterNewBtcReserve sets a reserve in the store
func (k Keeper) RegisterNewBtcReserve(ctx sdk.Context, judgeAddress sdk.AccAddress, reserveAddress string) (uint64, error) {

	// Get the latest reserve id
	// We keep reserve ids in a separate store and keep track of it as a counter
	LastRegisteredReserve := k.GetLastRegisteredBtcReserve(ctx)
	reserveId := LastRegisteredReserve + 1

	// Check if the reserve limit has been reached
	if (reserveId) > types.BtcReserveMaxLimit {
		return 0, sdkerrors.Wrapf(types.ErrBtcReserveMaxLimitReached, fmt.Sprint(types.BtcReserveMaxLimit))
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
		UnlockHeight:          0,
		RoundId:               0,
	}

	// Set the reserve
	err := k.SetBtcReserve(ctx, res)
	if err != nil {
		return 0, sdkerrors.Wrapf(types.ErrCouldNotSetReserve, fmt.Sprint(reserveAddress))
	} else {
		k.setLastRegisteredBtcReserve(ctx, reserveId)
	}

	// After setting the BTC Reserve, set its corresponding withdraw pool
	withdrawPool := &types.ReserveWithdrawPool{
		ReserveID:                     reserveId,
		RoundID:                       0, // Initialize with default values
		ProcessingWithdrawIdentifiers: []uint32{},
		QueuedWithdrawIdentifiers:     []uint32{},
		CurrentProcessingIndex:        0,
	}

	// Set the withdraw pool using the SetWithdrawPool function
	err = k.SetReserveWithdrawPool(ctx, withdrawPool)
	if err != nil {
		return 0, sdkerrors.Wrap(types.ErrCouldNotSetReserveWithdrawPool, err.Error())
	}

	return reserveId, nil
}

// SetBtcReserve sets a reserve in the store
func (k Keeper) SetBtcReserve(ctx sdk.Context, reserve *types.BtcReserve) error {

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetReserveKey(reserve.ReserveId)
	store.Set(aKey, k.cdc.MustMarshal(reserve))

	return nil
}

// UpdateBtcReserve updates a reserve in the store
func (k Keeper) UpdateBtcReserveAfterMint(ctx sdk.Context, mintedValue uint64, twilightAddress sdk.AccAddress, reserveAddress string) error {

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
	clearingAccount, foundClearing := k.GetClearingAccount(ctx, twilightAddress)
	if !foundClearing || clearingAccount.BtcDepositAddress == "" {
		// The case where user is depositing for the first time, we need to confirm the satoshi test
		// Fetch user's btc deposit address from GetBtcDepositAddressByTwilightAddress
		btcDeposit, found := k.GetBtcDepositAddressByTwilightAddress(ctx, twilightAddress)
		if !found {
			return sdkerrors.Wrapf(types.ErrBtcDepositAddressNotFound, fmt.Sprint(twilightAddress))
		}

		// check if this particular btc address has already passed the satoshi test in another account
		btcAddr, err := bridgetypes.NewBtcAddress(btcDeposit.BtcDepositAddress)
		if err != nil {
			return sdkerrors.Wrapf(bridgetypes.ErrInvalid, fmt.Sprint(twilightAddress))
		}
		// at the time of confirmation its possible others have registered the same address as well
		checkBtcAddress := k.CheckBtcAddress(ctx, twilightAddress, *btcAddr, btcDeposit.BtcSatoshiTestAmount)
		if checkBtcAddress {
			return sdkerrors.Wrap(bridgetypes.ErrBtcAddressAlreadyExists, btcAddr.GetBtcAddress())
		}

		// check btc satoshi test amount for the first deposit is equal to what user has sent
		if btcDeposit.BtcSatoshiTestAmount != mintedValue {
			return sdkerrors.Wrapf(types.ErrBtcSatoshiTestAmountNotEqual, fmt.Sprint(twilightAddress))
		}

		err = k.BankKeeper.SendCoinsFromModuleToAccount(ctx, bridgetypes.ModuleName, twilightAddress, sdk.NewCoins(sdk.NewCoin("nyks", sdk.NewIntFromUint64(btcDeposit.TwilightStakingAmount))))
		if err != nil {
			return err
		}

		// SetBtcDepositConfirmed sets the deposit as confirmed
		err = k.SetBtcDepositConfirmed(ctx, twilightAddress)
		if err != nil {
			return sdkerrors.Wrapf(types.ErrClearingAccountNotFound, fmt.Sprint(twilightAddress))
		}

		// Fetch next unique deposit identifier from IncrementCounter
		depositIdentifier := k.IncrementCounter(ctx, DepositCounterKey)

		// There are two use-cases here, clearing accounts are set by zkOS mint and by a user transferring to another as well
		// However, in those two ways, you will have a clearing account but you will not have btc address in that clearing account
		// As part of the satoshi test we are only concerned with checking and setting the btc address associated with a clearing account
		// So below, we check if the clearing was not found at all, we create a new clearing account and set the btc address
		if !foundClearing {
			// Set the clearing account
			clearingAccount, err = k.SetBtcAddressForClearingAccount(ctx, twilightAddress, btcDeposit.BtcDepositAddress, depositIdentifier)
			if err != nil {
				return sdkerrors.Wrapf(types.ErrClearingAccountNotFound, fmt.Sprint(twilightAddress))
			}
		} else if clearingAccount.BtcDepositAddress == "" {
			// In the other case, where you already had the clearing account but there was no btc address on it
			// We update the btc address on the clearing account

			// Set the clearing account
			clearingAccount, err = k.SetBtcAddressForExistingClearingAccount(ctx, twilightAddress, btcDeposit.BtcDepositAddress, depositIdentifier)
			if err != nil {
				return sdkerrors.Wrapf(types.ErrClearingAccountNotFound, fmt.Sprint(twilightAddress))
			}
		}

	}

	// Update the clearing account
	// Check if the reserve id already exists in the ReserveAccountBalances slice
	foundBalance := false
	for _, balance := range clearingAccount.ReserveAccountBalances {
		if balance.ReserveId == reserveId {
			// If it does, add the minted value to the existing balance
			balance.Amount += mintedValue
			foundBalance = true
			break
		}
	}

	if !foundBalance {
		// If it doesn't, append a new IndividualTwilightReserveAccountBalance to the slice
		clearingAccount.ReserveAccountBalances = append(clearingAccount.ReserveAccountBalances, &types.IndividualTwilightReserveAccountBalance{
			ReserveId: reserveId,
			Amount:    mintedValue,
		})
	}

	// Save the updated clearing account
	k.SetClearingAccount(ctx, twilightAddress, clearingAccount)
	// Save the reserve
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetReserveKey(reserveId)
	store.Set(aKey, k.cdc.MustMarshal(reserve))

	return nil
}

// UpdateBtcReserveAfterSweepProposal based on the passed reserveId, the operation happens after a successful attestation of MsgSweepProposal
func (k Keeper) UpdateBtcReserveAfterSweepProposal(ctx sdk.Context, reserveId uint64, reserveAddress string, judgeAddress string, btcBlockNumber uint64, btcRelayCapacityValue uint64, btcTxHash string, unlockHeight uint64, roundId uint64) error {

	// Get the reserve
	reserve, err := k.GetBtcReserve(ctx, reserveId)
	if err != nil {
		return sdkerrors.Wrapf(types.ErrBtcReserveNotFound, fmt.Sprint(reserveAddress))
	}

	// Update all other values of the reserve based on reserveId
	reserve.ReserveAddress = reserveAddress
	reserve.JudgeAddress = judgeAddress
	reserve.BtcRelayCapacityValue = btcRelayCapacityValue
	reserve.UnlockHeight = unlockHeight
	reserve.RoundId = roundId

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetReserveKey(reserveId)
	store.Set(aKey, k.cdc.MustMarshal(reserve))

	// Set the last unlocked reserve id, it is used in burning of tokens during MintOrBurnTradingBtc logic
	k.setLastUnlockedReserve(ctx, reserveId)

	return nil

}

// GetBtcReserve function that returns a reserve if passed a reserveId
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

// CheckBtcReserveExists checks if a Btc reserve exists for the given reserveId
func (k Keeper) CheckBtcReserveExists(ctx sdk.Context, reserveId uint64) bool {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetReserveKey(reserveId)
	return store.Has(aKey)
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
			UnlockHeight:          0,
			RoundId:               0,
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
			UnlockHeight:          0,
			RoundId:               0,
		}

		k.cdc.MustUnmarshal(iter.Value(), &res)

		// cb returns true to stop early
		if cb(iter.Key(), res) {
			return
		}
	}
}

// setLastUnlockedReserve sets the latest unlocked reserve id after the attestation of MsgSweepProposal
func (k Keeper) setLastUnlockedReserve(ctx sdk.Context, reserveId uint64) {
	store := ctx.KVStore(k.storeKey)

	store.Set(types.LastUnlockedReserveKey, forkstypes.UInt64Bytes(reserveId))
}

// GetLastUnlockedReserve returns the latest unlocked reserve id
func (k Keeper) GetLastUnlockedReserve(ctx sdk.Context) uint64 {
	store := ctx.KVStore(k.storeKey)
	bytes := store.Get(types.LastUnlockedReserveKey)

	if len(bytes) == 0 {
		return 0
	}
	return forkstypes.UInt64FromBytes(bytes)
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
