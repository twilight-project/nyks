package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) RegisterJudge(goCtx context.Context, msg *types.MsgRegisterJudge) (*types.MsgRegisterJudgeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// check the following, all should be validated in validate basic
	creatorAddr, e1 := sdk.AccAddressFromBech32(msg.Creator)
	judgeAddr, e2 := sdk.AccAddressFromBech32(msg.JudgeAddress)
	valAddr, e3 := sdk.ValAddressFromBech32(msg.ValidatorAddress)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	} else if e2 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e2.Error())
	} else if e3 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e3.Error())
	}

	// return an error if the validator isn't in the active set
	validator, found := k.StakingKeeper.GetValidator(ctx, valAddr)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrorInvalidSigner, "validator not found")
	}
	val := k.StakingKeeper.Validator(ctx, validator.GetOperator())
	if val == nil || !val.IsBonded() {
		return nil, sdkerrors.Wrap(sdkerrors.ErrorInvalidSigner, "validator not in active set")
	}

	address, err := k.GetJudgeAddressForValidatorAddress(ctx, valAddr)
	if address != nil {
		return nil, sdkerrors.Wrapf(types.ErrInvalid, "validator already has judge address %s or there is an error %s", address.String(), err.Error())
	}

	errSetting := k.SetJudgeAddressForValidatorAddress(ctx, creatorAddr, valAddr, judgeAddr)
	if errSetting != nil {
		return nil, errSetting
	}
	ctx.EventManager().EmitTypedEvent(
		&types.EventRegisterJudgeAddress{
			Message:          msg.Type(),
			JudgeAddress:     judgeAddr.String(),
			ValidatorAddress: valAddr.String(),
		},
	)

	return &types.MsgRegisterJudgeResponse{}, nil
}
