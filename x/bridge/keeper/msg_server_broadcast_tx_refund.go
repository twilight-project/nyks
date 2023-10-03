package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) BroadcastTxRefund(goCtx context.Context, msg *types.MsgBroadcastTxRefund) (*types.MsgBroadcastTxRefundResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	judgeAddress, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not parse judge address")
	}

	// check if this broadcast refund message is already registered
	_, foundDuplicate := k.GetBtcBroadcastTxRefundMsg(ctx, msg.ReserveId, msg.RoundId)
	if foundDuplicate {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "Duplicate broadcast refund request")
	}

	found := k.CheckJudgeValidatorInSet(ctx, judgeAddress)
	if found == false {
		return nil, sdkerrors.Wrap(types.ErrJudgeValidatorNotFound, "Could not check judge validator inset")
	}

	// set broadcast refund message
	errSet := k.SetBtcBroadcastTxRefundMsg(ctx, msg.ReserveId, msg.RoundId, judgeAddress, msg.SignedRefundTx)
	if errSet != nil {
		return nil, errSet
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventBroadcastTxRefund{
			Message:        msg.Type(),
			ReserveId:      msg.ReserveId,
			RoundId:        msg.RoundId,
			SignedRefundTx: msg.SignedRefundTx,
			JudgeAddress:   msg.JudgeAddress,
		},
	)

	return &types.MsgBroadcastTxRefundResponse{}, nil
}
