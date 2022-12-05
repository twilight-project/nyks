package keeper

import (
	"context"

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

	_, errSetting := k.SetReserveAddressForJudge(ctx, judgeAddress, *reserveScript)
	if errSetting != nil {
		return nil, errSetting
	}
	ctx.EventManager().EmitTypedEvent(
		&types.EventRegisterReserveScript{
			Message:       msg.Type(),
			ReserveScript: msg.ReserveScript,
		},
	)

	return &types.MsgRegisterReserveAddressResponse{}, nil
}
