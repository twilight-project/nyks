package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) ProposeRefundHash(goCtx context.Context, msg *types.MsgProposeRefundHash) (*types.MsgProposeRefundHashResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	judgeAddress := sdk.AccAddress(msg.JudgeAddress)

	// check if this propose refund hash message is already registered
	_, found := k.GetBtcProposeRefundHashMsg(ctx, judgeAddress, msg.RefundHash)
	if found {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "Duplicate propose refund hash request")
	}

	// set propose refund hash message
	err := k.SetBtcProposeRefundHashMsg(ctx, judgeAddress, msg.RefundHash)
	if err != nil {
		return nil, err
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventProposeRefundHash{
			Message:      msg.Type(),
			RefundHash:   msg.RefundHash,
			JudgeAddress: msg.JudgeAddress,
		},
	)

	return &types.MsgProposeRefundHashResponse{}, nil
}
