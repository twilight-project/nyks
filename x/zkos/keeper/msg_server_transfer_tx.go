package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/zkos/types"
)

func (k msgServer) TransferTx(goCtx context.Context, msg *types.MsgTransferTx) (*types.MsgTransferTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// set the set transfer tx
	k.SetTransferTx(ctx, msg.TxId, msg.TxByteCode)

	return &types.MsgTransferTxResponse{}, nil
}
