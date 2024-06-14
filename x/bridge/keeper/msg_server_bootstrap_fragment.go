package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) BootstrapFragment(goCtx context.Context, msg *types.MsgBootstrapFragment) (*types.MsgBootstrapFragmentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// check the following, all should be validated in validate basic
	judgeAddr, e1 := sdk.AccAddressFromBech32(msg.JudgeAddress)
	valAddr, e2 := sdk.ValAddressFromBech32(msg.ValidatorAddress)
	reserveAddr, e3 := types.NewBtcAddress(msg.ReserveAddress)
	reserveScript, e4 := types.NewBtcScript(msg.ReserveScript)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	} else if e2 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e2.Error())
	} else if e3 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e3.Error())
	} else if e4 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e4.Error())
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

	errSetting := k.SetJudgeAddressForValidatorAddress(ctx, judgeAddr, msg.NumOfSigners, msg.Threshold, msg.SignerApplicationFee, msg.ReserveAddress, msg.ReserveScript, msg.ArbitraryData, valAddr)
	if errSetting != nil {
		return nil, errSetting
	}

	// set an new frament mapping for the judge address
	fragmentId, reserveId, errSettingRes := k.VoltKeeper.RegisterNewFragment(ctx, judgeAddr, reserveAddr.BtcAddress, msg.Threshold, msg.SignerApplicationFee, msg.NumOfSigners, msg.FragmentFeeBips, msg.ArbitraryData)
	if errSettingRes != nil {
		return nil, errSettingRes
	}

	k.SetReserveAddressForJudge(ctx, judgeAddr, *reserveScript, *reserveAddr)

	// set an empty reserve mapping for the judge address
	// reserveId, errSettingRes := k.VoltKeeper.RegisterNewBtcReserve(ctx, judgeAddr, reserveAddr.BtcAddress)
	// if errSettingRes != nil {
	// 	return nil, errSettingRes
	// }

	ctx.EventManager().EmitTypedEvent(
		&types.EventBootstrapFragmentAddress{
			Message:          msg.Type(),
			JudgeAddress:     judgeAddr.String(),
			FragmentId:       fragmentId,
			ReserveId:        reserveId,
			ValidatorAddress: valAddr.String(),
		},
	)

	return &types.MsgBootstrapFragmentResponse{FragmentId: strconv.FormatUint(fragmentId, 10), ReserveId: strconv.FormatUint(reserveId, 10), JudgeAddress: msg.JudgeAddress}, nil
}
