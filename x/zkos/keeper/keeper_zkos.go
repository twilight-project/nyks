package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
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
	// ADD VALIDATION HERE

	// Fetch the ClearingAccount for the twilight address
	account := k.GetClearingAccount(ctx, msg.TwilightAddress)
	if account == nil {
		return fmt.Errorf("no clearing account found for address %s", msg.TwilightAddress)
	}

	// Calculate the total balance across all reserves
	totalBalance := uint64(0)
	for _, balance := range account.ReserveAccountBalances {
		totalBalance += balance.Amount
	}

	// Check if there is enough balance in the reserves
	if msg.BtcValue > totalBalance {
		return fmt.Errorf("not enough balance in the reserves")
	}

	// Distribute the btc value across the reserves
	remaining := msg.BtcValue
	for _, balance := range account.ReserveAccountBalances {
		if remaining == 0 {
			break
		}

		// Fetch the reserve
		reserve := k.GetBtcReserve(ctx, balance.ReserveId)
		if reserve == nil {
			return fmt.Errorf("reserve %d not found", balance.ReserveId)
		}

		// Calculate the amount to deduct from this reserve
		deduct := min(remaining, balance.Amount)

		// Update the reserve and clearing account balance
		if msg.MintOrBurn {
			// Mint: Deduct from public and add to private
			if reserve.PublicValue < deduct {
				return fmt.Errorf("not enough public value in reserve %d", balance.ReserveId)
			}
			reserve.PublicValue -= deduct
			reserve.PrivatePoolValue += deduct
		} else {
			// Burn: Deduct from private and add to public
			if reserve.PrivatePoolValue < deduct {
				return fmt.Errorf("not enough private value in reserve %d", balance.ReserveId)
			}
			reserve.PrivatePoolValue -= deduct
			reserve.PublicValue += deduct
		}
		balance.Amount -= deduct
		remaining -= deduct

		// Save the updated reserve and clearing account balance
		k.SetBtcReserve(ctx, reserve)
		k.SetIndividualTwilightReserveAccountBalance(ctx, account, balance)
	}

	// Save the updated clearing account
	k.SetClearingAccount(ctx, account)

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
