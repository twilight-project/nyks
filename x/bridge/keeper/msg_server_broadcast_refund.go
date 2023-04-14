package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) BroadcastRefund(goCtx context.Context, msg *types.MsgBroadcastRefund) (*types.MsgBroadcastRefundResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	judgeAddress := sdk.AccAddress(msg.JudgeAddress)

	// check if this broadcast refund message is already registered
	_, found := k.GetBtcBroadcastRefundMsg(ctx, judgeAddress, msg.SignedRefundTx)
	if found {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "Duplicate broadcast refund request")
	}

	// set broadcast refund message
	err := k.SetBtcBroadcastRefundMsg(ctx, judgeAddress, msg.SignedRefundTx)
	if err != nil {
		return nil, err
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventBroadcastRefund{
			Message:        msg.Type(),
			SignedRefundTx: msg.SignedRefundTx,
			JudgeAddress:   msg.JudgeAddress,
		},
	)

	return &types.MsgBroadcastRefundResponse{}, nil
}
