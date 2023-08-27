package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) ProposeSweepAddress(goCtx context.Context, msg *types.MsgProposeSweepAddress) (*types.MsgProposeSweepAddressResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	judgeAddress, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not parse judge address")
	}

	btcScriptPrefix := msg.BtcScript[:10]

	_, foundDuplicate := k.GetProposeSweepAddress(ctx, msg.ReserveId, judgeAddress, btcScriptPrefix)
	if foundDuplicate != false {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "A similar unsignedTxSweep already exists!")
	}

	found := k.CheckJudgeValidatorInSet(ctx, judgeAddress)
	if found == false {
		return nil, sdkerrors.Wrap(types.ErrJudgeValidatorNotFound, "Could not check judge validator inset")
	}

	btcAddr, e1 := types.NewBtcAddress(msg.BtcAddress)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	}
	// set propose sweep address
	errSet := k.SetProposeSweepAddress(ctx, *btcAddr, msg.BtcScript, msg.ReserveId, judgeAddress)
	if errSet != nil {
		return nil, sdkerrors.Wrap(errSet, "Could not set the propose sweep address")
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventProposeSweepAddress{
			Message:      msg.Type(),
			BtcAddress:   msg.BtcAddress,
			BtcScript:    msg.BtcScript,
			ReserveId:    msg.ReserveId,
			JudgeAddress: msg.JudgeAddress,
		},
	)

	return &types.MsgProposeSweepAddressResponse{}, nil
}
