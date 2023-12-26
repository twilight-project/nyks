package keeper

import (
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	forkstypes "github.com/twilight-project/nyks/x/forks/types"
	volttypes "github.com/twilight-project/nyks/x/volt/types"
	"github.com/twilight-project/nyks/x/zkos/types"
)

// SetTransferTx sets the transfer tx
func (k Keeper) SetTransferTx(ctx sdk.Context, txId string, txByteCode string, txFee uint64, zkOracleAddress string) {

	// ADD VALIDATION HERE

	// Create a new MsgTransferTx message
	ttx := &types.MsgTransferTx{
		TxId:            txId,
		TxByteCode:      txByteCode,
		TxFee:           txFee,
		ZkOracleAddress: zkOracleAddress,
	}

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetTransferTxKey(txId)
	store.Set(aKey, k.cdc.MustMarshal(ttx))
}

// GetTransferTx returns the stored transfer tx using given txId
func (k Keeper) GetTransferTx(ctx sdk.Context, txId string) (types.MsgTransferTx, bool) {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetTransferTxKey(txId)
	if !store.Has(aKey) {
		return types.MsgTransferTx{}, false
	}

	bz := store.Get(aKey)
	var MsgTransferTx types.MsgTransferTx
	k.cdc.MustUnmarshal(bz, &MsgTransferTx)

	return MsgTransferTx, true
}

// SetMintOrBurnTradingBtc mints or burns quisquis btc
func (k Keeper) SetMintOrBurnTradingBtc(ctx sdk.Context, msg *types.MsgMintBurnTradingBtc) error {

	// Check if this QqAccount has already been used
	if k.HasUsedQqAccount(ctx, msg.QqAccount) {
		return sdkerrors.Wrap(types.ErrInvalidInput, "this QuisQuis account has already been used")
	}

	twilightAddress, err := sdk.AccAddressFromBech32(msg.TwilightAddress)
	if err != nil {
		return sdkerrors.Wrap(types.ErrInvalidTwilightAddress, msg.TwilightAddress)
	}

	// Fetch the ClearingAccount for the twilight address
	account, found := k.VoltKeeper.GetClearingAccount(ctx, twilightAddress)
	if !found {
		return sdkerrors.Wrap(types.ErrClearingAccountNotFound, "clearing account not found")
	}

	// Fetch the Bank Balance for the twilight address
	bankBalanceCoin := k.BankKeeper.GetBalance(ctx, twilightAddress, "sats")
	if !found {
		return sdkerrors.Wrap(types.ErrNotEnoughUserBalanceInBank, "bank balance not found")
	}

	bankBalance := bankBalanceCoin.Amount.Uint64()

	// Calculate the total balance across all reserves
	totalBalance := uint64(0)
	for _, balance := range account.ReserveAccountBalances {
		totalBalance += balance.Amount
	}

	// Check if bankBalance is equal to totalBalance - additional check for sanity
	if bankBalance != totalBalance {
		return sdkerrors.Wrap(types.ErrBankBalanceNotEqualReserveBalance, "bank balance not equal to reserve balance")
	}

	// Check if there is enough balance in the reserves
	// We don't keep track of private values in the clearing account, so we just check if a user has enough balance in the case of mint
	// Burn case is handled by the ZkOS
	if msg.MintOrBurn { // Mint
		if msg.BtcValue > totalBalance {
			return sdkerrors.Wrap(types.ErrNotEnoughUserBalanceInReserves, msg.TwilightAddress)
		}

		// Find the btc value across the reserves
		remaining := msg.BtcValue
		for i, reserveBalance := range account.ReserveAccountBalances {
			if remaining == 0 {
				break
			}

			// Fetch the reserve
			reserve, err := k.VoltKeeper.GetBtcReserve(ctx, reserveBalance.ReserveId)
			if err != nil {
				return sdkerrors.Wrap(types.ErrReserveNotFound, "cannot find reserve while minting quisquis btc")
			}

			// Calculate the amount to deduct from this reserve
			deduct := min(remaining, reserveBalance.Amount)

			// Update the reserve and clearing account balance
			// if msg.MintOrBurn {
			// Mint: Deduct from public and add to private
			if reserve.PublicValue < deduct {
				return sdkerrors.Wrap(types.ErrNotEnoughBalanceInPublic, strconv.FormatUint(reserveBalance.ReserveId, 10))
			}
			reserve.PublicValue -= deduct
			reserve.PrivatePoolValue += deduct

			// Decrease the user's individual reserve balance
			reserveBalance.Amount -= deduct
			bankBalance -= deduct

			// Send coins to the module account before burning
			errBank := k.BankKeeper.SendCoinsFromAccountToModule(ctx, twilightAddress, types.ModuleName, sdk.NewCoins(sdk.NewCoin("sats", sdk.NewIntFromUint64(deduct))))
			if errBank != nil {
				return sdkerrors.Wrap(err, "failed to send coins to module account")
			}

			// Update the bank balance
			errBurn := k.BankKeeper.BurnCoins(ctx, types.ModuleName, sdk.NewCoins(sdk.NewCoin("sats", sdk.NewIntFromUint64(deduct))))
			if errBurn != nil {
				return sdkerrors.Wrap(err, "failed to burn coins")
			}

			account.ReserveAccountBalances[i] = reserveBalance

			remaining -= deduct

			// Save the updated reserve
			k.VoltKeeper.SetBtcReserve(ctx, reserve)
		}
	} else { // Burn

		// Get the next unlocking reserve
		nextReserveUnlockingId, reserve, err := k.VoltKeeper.GetNextUnlockingReserve(ctx)
		if err != nil {
			return sdkerrors.Wrapf(types.ErrReserveNotFound, "next unlocking reserve not found")
		}

		addBack := msg.BtcValue
		// Burn: Deduct from private and add to public
		// If do not have enough balance in the last unlocked reserve, iterate over all reserves and find PrivatePoolValues to add back
		// PrivatePoolValue is treated as global across all reserves as there is no tracking of individual private (dark) accounts
		if reserve.PrivatePoolValue < addBack {
			// If not enough balance in the last unlocked reserve, iterate over all reserves
			totalAggregated := uint64(0)
			k.VoltKeeper.IterateBtcReserves(ctx, func(_ []byte, res volttypes.BtcReserve) bool {
				if totalAggregated >= addBack {
					return true // Stop iterating if we have aggregated enough
				}

				if res.PrivatePoolValue > 0 {
					deduct := min(res.PrivatePoolValue, addBack-totalAggregated)

					res.PrivatePoolValue -= deduct
					res.PublicValue += deduct

					k.VoltKeeper.SetBtcReserve(ctx, &res)

					totalAggregated += deduct
				}
				return false
			})

			// If we can't find any PrivatePoolValue, we return error (this should never happen as the PrivatePoolValue will always be available as far as Private accounts exist)
			if totalAggregated < addBack {
				return sdkerrors.Wrap(types.ErrNotEnoughBalanceInPrivate, "could not find enough value in private pool")
			}
		} else {
			reserve.PrivatePoolValue -= addBack
			reserve.PublicValue += addBack
		}

		// Update the clearing account
		// Check if the reserve id already exists in the ReserveAccountBalances slice
		found = false
		for _, balance := range account.ReserveAccountBalances {
			if balance.ReserveId == *nextReserveUnlockingId {
				// If it does, add the minted value to the existing balance
				balance.Amount += addBack
				found = true
				break
			}
		}

		if !found {
			// If it doesn't, append a new IndividualTwilightReserveAccountBalance to the slice
			account.ReserveAccountBalances = append(account.ReserveAccountBalances, &volttypes.IndividualTwilightReserveAccountBalance{
				ReserveId: *nextReserveUnlockingId,
				Amount:    addBack,
			})
		}

		// Update the bank balance
		errBank := k.BankKeeper.MintCoins(ctx, types.ModuleName, sdk.NewCoins(sdk.NewCoin("sats", sdk.NewIntFromUint64(addBack))))
		if errBank != nil {
			return sdkerrors.Wrap(err, "failed to mint new coins")
		}

		// Send coins from the module account to the user's account
		err = k.BankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, twilightAddress, sdk.NewCoins(sdk.NewCoin("sats", sdk.NewIntFromUint64(addBack))))
		if err != nil {
			return sdkerrors.Wrap(err, "failed to send coins to user account")
		}

		// Save the updated reserve
		k.VoltKeeper.SetBtcReserve(ctx, reserve)
	}

	// Save the updated clearing account
	k.VoltKeeper.SetClearingAccount(ctx, twilightAddress, account)

	store := ctx.KVStore(k.storeKey)

	aKey := types.GetMintOrBurnTradingBtcKey(msg.TwilightAddress, msg.QqAccount)
	store.Set(aKey, k.cdc.MustMarshal(msg))

	// Mark this QqAccount as used
	k.MarkQqAccountAsUsed(ctx, msg.QqAccount)

	return nil
}

// GetMintOrBurnTradingBtc returns the stored mint or burn quisquis btc using given twilight address
func (k Keeper) GetMintOrBurnTradingBtc(ctx sdk.Context, twilightAddress string) ([]types.MsgMintBurnTradingBtc, bool) {
	store := ctx.KVStore(k.storeKey)

	// Create a prefix for the given twilightAddress
	prefix := forkstypes.AppendBytes(types.KeyMintOrBurnTradingBtc, []byte(twilightAddress))

	// Create an iterator over the keys in the store
	iterator := sdk.KVStorePrefixIterator(store, prefix)

	// Create a slice to hold the results
	var results []types.MsgMintBurnTradingBtc

	// Iterate over the keys
	for ; iterator.Valid(); iterator.Next() {
		var msg types.MsgMintBurnTradingBtc
		k.cdc.MustUnmarshal(iterator.Value(), &msg)
		results = append(results, msg)
	}

	// If no results were found, return false
	if len(results) == 0 {
		return nil, false
	}

	return results, true
}

// DeductFeeFromPrivatePool deducts the fee from the private pool in the reserve and adds it to the fee pool
func (k Keeper) DeductFeeFromPrivatePool(ctx sdk.Context, fee uint64) error {

	// Get the next unlocking reserve
	_, reserve, err := k.VoltKeeper.GetNextUnlockingReserve(ctx)
	if err != nil {
		return sdkerrors.Wrapf(types.ErrReserveNotFound, "next unlocking reserve not found")
	}

	if reserve.PrivatePoolValue < fee {
		// If not enough balance in the last unlocked reserve, iterate over all reserves
		totalAggregated := uint64(0)
		k.VoltKeeper.IterateBtcReserves(ctx, func(_ []byte, res volttypes.BtcReserve) bool {
			if totalAggregated >= fee {
				return true // Stop iterating if we have aggregated enough
			}

			if res.PrivatePoolValue > 0 {
				deduct := min(res.PrivatePoolValue, fee-totalAggregated)

				res.PrivatePoolValue -= deduct
				res.FeePool += deduct

				k.VoltKeeper.SetBtcReserve(ctx, &res)

				totalAggregated += deduct
			}
			return false
		})

		// If we can't find any PrivatePoolValue, we return error (this should never happen as the PrivatePoolValue will always be available as far as Private accounts exist)
		if totalAggregated < fee {
			return sdkerrors.Wrap(types.ErrNotEnoughBalanceInPrivate, "could not find enough value in private pool")
		}
	} else {
		reserve.PrivatePoolValue -= fee
		reserve.FeePool += fee
	}

	// Save the updated reserve
	k.VoltKeeper.SetBtcReserve(ctx, reserve)

	return nil
}

// MarkQqAccountAsUsed saves the used Qqaccount in a new KV store to avoid being reused
func (k Keeper) MarkQqAccountAsUsed(ctx sdk.Context, QqAccount string) {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetUsedQqAccountKey(QqAccount)
	store.Set(aKey, []byte{1}) // 1 indicates that this QqAccount has been used
}

// HasUsedQqAccount checks if a QqAccount was used before
func (k Keeper) HasUsedQqAccount(ctx sdk.Context, QqAccount string) bool {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetUsedQqAccountKey(QqAccount) // Create this function to generate a key for used QqAccounts
	return store.Has(aKey)
}

func min(a, b uint64) uint64 {
	if a < b {
		return a
	}
	return b
}
