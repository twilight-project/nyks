package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	//"github.com/twilight-project/nyks/x/forks/types"
	"github.com/twilight-project/nyks/x/zkos/types"
)

// SetTransferTx sets the transfer tx
func (k Keeper) SetTransferTx(ctx sdk.Context, txId string, txByteCode string) {

	// ADD VALIDATION HERE

	store := ctx.KVStore(k.storeKey)
	store.Set([]byte(types.GetTransferTxKey(txId)), []byte(txByteCode))
}
