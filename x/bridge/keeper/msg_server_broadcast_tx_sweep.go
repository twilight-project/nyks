package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) BroadcastTxSweep(goCtx context.Context, msg *types.MsgBroadcastTxSweep) (*types.MsgBroadcastTxSweepResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	judgeAddress, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not parse judge address")
	}

	// check if this broadcast sweep message is already registered
	_, foundDuplicate := k.GetBtcBroadcastTxSweepMsg(ctx, judgeAddress, msg.SignedSweepTx)
	if foundDuplicate {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "Duplicate broadcast sweep request")
	}

	found := k.CheckJudgeValidatorInSet(ctx, judgeAddress)
	if found == false {
		return nil, sdkerrors.Wrap(types.ErrJudgeValidatorNotFound, "Could not check judge validator inset")
	}

	// set broadcast refund message
	errSet := k.SetBtcBroadcastTxSweepMsg(ctx, msg.ReserveId, msg.RoundId, judgeAddress, msg.SignedSweepTx)
	if errSet != nil {
		return nil, errSet
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventBroadcastTxSweep{
			Message:       msg.Type(),
			ReserveId:     msg.ReserveId,
			RoundId:       msg.RoundId,
			SignedSweepTx: msg.SignedSweepTx,
			JudgeAddress:  msg.JudgeAddress,
		},
	)

	return &types.MsgBroadcastTxSweepResponse{}, nil
}
