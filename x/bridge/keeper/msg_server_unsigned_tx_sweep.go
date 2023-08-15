package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) UnsignedTxSweep(goCtx context.Context, msg *types.MsgUnsignedTxSweep) (*types.MsgUnsignedTxSweepResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	judgeAddress, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not parse judge address")
	}

	found := k.CheckJudgeValidatorInSet(ctx, judgeAddress)
	if found == false {
		return nil, sdkerrors.Wrap(types.ErrJudgeValidatorNotFound, "Could not check judge validator inset")
	}

	// set unsigned tx sweep
	errSet := k.SetUnsignedTxSweepMsg(ctx, msg.TxId, msg.BtcUnsignedSweepTx, judgeAddress)
	if errSet != nil {
		return nil, sdkerrors.Wrap(errSet, "Could not set the transaction sweep")
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventUnsignedTxSweep{
			Message:         msg.Type(),
			TxId:            msg.TxId,
			UnsignedSweepTx: msg.BtcUnsignedSweepTx,
			JudgeAddress:    msg.JudgeAddress,
		},
	)
	return &types.MsgUnsignedTxSweepResponse{}, nil
}
