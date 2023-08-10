package keeper

import (
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	forkstypes "github.com/twilight-project/nyks/x/forks/types"
	"github.com/twilight-project/nyks/x/zkos/types"
)

// SetTransferTx sets the transfer tx
func (k Keeper) SetTransferTx(ctx sdk.Context, txId string, txByteCode string, zkOracleAddress string) {

	// ADD VALIDATION HERE

	// Create a new MsgTransferTx message
	ttx := &types.MsgTransferTx{
		TxId:            txId,
		TxByteCode:      txByteCode,
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
	twilightAddress, err := sdk.AccAddressFromBech32(msg.TwilightAddress)
	if err != nil {
		return sdkerrors.Wrap(types.ErrInvalidTwilightAddress, msg.TwilightAddress)
	}

	// Fetch the ClearingAccount for the twilight address
	account, found := k.VoltKeeper.GetClearingAccount(ctx, twilightAddress)
	if !found {
		return sdkerrors.Wrap(types.ErrClearingAccountNotFound, "clearing account not found")
	}

	// Calculate the total balance across all reserves
	totalBalance := uint64(0)
	for _, balance := range account.ReserveAccountBalances {
		totalBalance += balance.Amount
	}

	// Check if there is enough balance in the reserves
	if msg.BtcValue > totalBalance {
		return sdkerrors.Wrap(types.ErrNotEnoughUserBalanceInReserves, msg.TwilightAddress)
	}

	// Distribute the btc value across the reserves
	remaining := msg.BtcValue
	for i, balance := range account.ReserveAccountBalances {
		if remaining == 0 {
			break
		}

		// Fetch the reserve
		reserve, err := k.VoltKeeper.GetBtcReserve(ctx, balance.ReserveId)
		if err != nil {
			return sdkerrors.Wrap(types.ErrReserveNotFound, "cannot find reserve while minting or burning quisquis btc")
		}

		// Calculate the amount to deduct from this reserve
		deduct := min(remaining, balance.Amount)

		// Update the reserve and clearing account balance
		if msg.MintOrBurn {
			// Mint: Deduct from public and add to private
			if reserve.PublicValue < deduct {
				return sdkerrors.Wrap(types.ErrNotEnoughBalanceInPublic, strconv.FormatUint(balance.ReserveId, 10))
			}
			reserve.PublicValue -= deduct
			reserve.PrivatePoolValue += deduct

			// Increase the user's individual reserve balance
			balance.Amount -= deduct
		} else {
			// Burn: Deduct from private and add to public
			if reserve.PrivatePoolValue < deduct {
				return sdkerrors.Wrap(types.ErrNotEnoughBalanceInPrivate, strconv.FormatUint(balance.ReserveId, 10))
			}
			reserve.PrivatePoolValue -= deduct
			reserve.PublicValue += deduct

			// Decrease the user's individual reserve balance
			balance.Amount += deduct
		}

		account.ReserveAccountBalances[i] = balance

		remaining -= deduct

		// Save the updated reserve
		k.VoltKeeper.SetBtcReserve(ctx, reserve)
	}

	// Save the updated clearing account
	k.VoltKeeper.SetClearingAccount(ctx, twilightAddress, account)

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetMintOrBurnTradingBtcKey(msg.TwilightAddress, msg.EncryptScalar)
	store.Set(aKey, k.cdc.MustMarshal(msg))

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

func min(a, b uint64) uint64 {
	if a < b {
		return a
	}
	return b
}
