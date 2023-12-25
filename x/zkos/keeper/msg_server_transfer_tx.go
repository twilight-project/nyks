package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/zkos/types"
)

func (k msgServer) TransferTx(goCtx context.Context, msg *types.MsgTransferTx) (*types.MsgTransferTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// set the set transfer tx
	k.SetTransferTx(ctx, msg.TxId, msg.TxByteCode, msg.TxFee, msg.ZkOracleAddress)

	// deduct fee from the private pool in the reserve and add it to the fee pool
	k.DeductFeeFromPrivatePool(ctx, msg.TxFee)

	ctx.EventManager().EmitTypedEvent(
		&types.EventTransferTx{
			Message:         msg.Type(),
			TxId:            msg.TxId,
			ZkOracleAddress: msg.ZkOracleAddress,
		},
	)

	return &types.MsgTransferTxResponse{}, nil
}
