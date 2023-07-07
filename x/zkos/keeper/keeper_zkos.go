package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	//"github.com/twilight-project/nyks/x/forks/types"
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
	ctx.Logger().Error("MsgTransferTx: " + MsgTransferTx.TxId + " " + MsgTransferTx.TxByteCode)

	return MsgTransferTx, true
}
