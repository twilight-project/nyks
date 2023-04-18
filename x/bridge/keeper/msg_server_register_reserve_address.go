package keeper

import (
	"context"

	//voltkeeper "github.com/cosmos/cosmos-sdk/nyks/x/volt/keeper"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) RegisterReserveAddress(goCtx context.Context, msg *types.MsgRegisterReserveAddress) (*types.MsgRegisterReserveAddressResponse, error) {
	// ensure that this passes validation, checks the key validity
	err := msg.ValidateBasic()
	if err != nil {
		return nil, err
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// check the following, all should be validated in validate basic
	judgeAddress, e1 := sdk.AccAddressFromBech32(msg.JudgeAddress)

	// FOLLOWING DOES NOT CONTAIN ANY VALIDATION CHECK FOR THE SCRIPT - ITS KIND OF A PLACEHOLDER
	reserveScript, e2 := types.NewBtcScript(msg.ReserveScript)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	} else if e2 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e2.Error())
	}

	reserveAddress, e3 := types.NewBtcAddress(msg.ReserveAddress)
	if e3 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e3.Error())
	}

	k.SetReserveAddressForJudge(ctx, judgeAddress, *reserveScript, *reserveAddress)

	// Write a function to get validator address from a judge address
	//validatorAddress := k.VoltKeeper.GetValidatorAddressFromJudgeAddress(ctx, judgeAddress)

	// set an empty reserve mapping for the judge address
	errSettingRes := k.VoltKeeper.SetBtcReserve(ctx, judgeAddress, reserveAddress.BtcAddress)
	if errSettingRes != nil {
		return nil, errSettingRes
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventRegisterReserveAddress{
			Message:       msg.Type(),
			ReserveScript: msg.ReserveScript,
		},
	)

	return &types.MsgRegisterReserveAddressResponse{ReserveAddress: msg.ReserveAddress}, nil
}
