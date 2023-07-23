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
	ctx.Logger().Error("bz: " + string(bz))
	var MsgTransferTx types.MsgTransferTx
	k.cdc.MustUnmarshal(bz, &MsgTransferTx)

	return MsgTransferTx, true
}

// SetMintOrBurnTradingBtc mints or burns quisquis btc
func (k Keeper) SetMintOrBurnTradingBtc(ctx sdk.Context, msg *types.MsgMintBurnTradingBtc) {

	// ADD VALIDATION HERE

	// Create a new MsgTransferTx message
	// ttx := &types.MsgTransferTx{
	// 	TxId:            txId,
	// 	TxByteCode:      txByteCode,
	// 	ZkOracleAddress: zkOracleAddress,
	// }

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetMintOrBurnTradingBtcKey(msg.EncryptScalar, msg.TwilightAddress)
	store.Set(aKey, k.cdc.MustMarshal(msg))
}

// // GetMintOrBurnTradingBtc returns the stored mint or burn quisquis btc using given twilight address
// func (k Keeper) GetMintOrBurnTradingBtc(ctx sdk.Context, twilightAddress string) (types.MsgMintBurnTradingBtc, bool) {
// 	store := ctx.KVStore(k.storeKey)
// 	aKey := types.GetMintOrBurnTradingBtcKey(encryptScalar, twilightAddress)
// 	if !store.Has(aKey) {
// 		return types.MsgMintBurnTradingBtc{}, false
// 	}

// 	bz := store.Get(aKey)
// 	ctx.Logger().Error("bz: " + string(bz))
// 	var MsgMintBurnTradingBtc types.MsgMintBurnTradingBtc
// 	k.cdc.MustUnmarshal(bz, &MsgMintBurnTradingBtc)

// 	return MsgMintBurnTradingBtc, true
// }

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
