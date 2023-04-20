package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) BroadcastTxSweep(goCtx context.Context, msg *types.MsgBroadcastTxSweep) (*types.MsgBroadcastTxSweepResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	judgeAddress := sdk.AccAddress(msg.JudgeAddress)

	// check if this broadcast refund message is already registered
	_, found := k.GetBtcBroadcastTxSweepMsg(ctx, judgeAddress, msg.SignedRefundTx)
	if found {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "Duplicate broadcast refund request")
	}

	// set broadcast refund message
	err := k.SetBtcBroadcastTxSweepMsg(ctx, judgeAddress, msg.SignedRefundTx)
	if err != nil {
		return nil, err
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventBroadcastTxSweep{
			Message:        msg.Type(),
			SignedRefundTx: msg.SignedRefundTx,
			JudgeAddress:   msg.JudgeAddress,
		},
	)

	return &types.MsgBroadcastTxSweepResponse{}, nil
}
