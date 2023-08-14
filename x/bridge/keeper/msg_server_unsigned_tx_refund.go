package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) UnsignedTxRefund(goCtx context.Context, msg *types.MsgUnsignedTxRefund) (*types.MsgUnsignedTxRefundResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	judgeAddress, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not parse judge address")
	}

	// set unsigned tx sweep
	errSet := k.SetUnsignedTxRefundMsg(ctx, msg.ReserveId, msg.BtcUnsignedRefundTx, judgeAddress)
	if errSet != nil {
		return nil, sdkerrors.Wrap(errSet, "Could not set the transaction refund")
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventUnsignedTxRefund{
			Message:          msg.Type(),
			ReserveId:        msg.ReserveId,
			UnsignedRefundTx: msg.BtcUnsignedRefundTx,
			JudgeAddress:     msg.JudgeAddress,
		},
	)

	return &types.MsgUnsignedTxRefundResponse{}, nil
}