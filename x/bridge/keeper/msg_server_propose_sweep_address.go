package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
	volttypes "github.com/twilight-project/nyks/x/volt/types"
)

func (k msgServer) ProposeSweepAddress(goCtx context.Context, msg *types.MsgProposeSweepAddress) (*types.MsgProposeSweepAddressResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	judgeAddress, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not parse judge address")
	}

	btcAddr, e1 := types.NewBtcAddress(msg.BtcAddress)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	}

	_, foundDuplicate := k.GetProposeSweepAddress(ctx, msg.ReserveId, judgeAddress, *btcAddr)
	if foundDuplicate != false {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "A similar unsignedTxSweep already exists!")
	}

	found := k.CheckJudgeValidatorInSet(ctx, judgeAddress)
	if found == false {
		return nil, sdkerrors.Wrap(types.ErrJudgeValidatorNotFound, "Could not check judge validator inset")
	}

	// Check that reserve exists
	_, errRes := k.VoltKeeper.GetBtcReserve(ctx, msg.ReserveId)
	if errRes != nil {
		return nil, sdkerrors.Wrapf(volttypes.ErrBtcReserveNotFound, fmt.Sprint(msg.ReserveId))
	}

	// set propose sweep address
	errSet := k.SetProposeSweepAddress(ctx, *btcAddr, msg.BtcScript, msg.ReserveId, msg.RoundId, judgeAddress)
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
