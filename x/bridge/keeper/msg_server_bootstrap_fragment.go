package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) BootstrapFragment(goCtx context.Context, msg *types.MsgBootstrapFragment) (*types.MsgBootstrapFragmentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	accAddr, err := sdk.AccAddressFromBech32(msg.ValidatorAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "invalid validator address")
	}

	valAddr := sdk.ValAddress(accAddr)
	ctx.Logger().Error(accAddr.String())

	ctx.Logger().Error(valAddr.String())

	// check the following, all should be validated in validate basic
	judgeAddr, e1 := sdk.AccAddressFromBech32(msg.JudgeAddress)
	//valAddr, e2 := sdk.ValAddressFromBech32(msg.ValidatorAddress)
	reserveAddr, e3 := types.NewBtcAddress(msg.ReserveAddress)
	reserveScript, e4 := types.NewBtcScript(msg.ReserveScript)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
		// } else if e2 != nil {
		// 	return nil, sdkerrors.Wrap(types.ErrInvalid, e2.Error())
		// }
	} else if e3 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e3.Error())
	} else if e4 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e4.Error())
	}
	ctx.Logger().Error("reached so far 0")

	// return an error if the validator isn't in the active set
	validator, found := k.StakingKeeper.GetValidator(ctx, valAddr)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrorInvalidSigner, "validator not found")
	}
	val := k.StakingKeeper.Validator(ctx, validator.GetOperator())
	if val == nil || !val.IsBonded() {
		return nil, sdkerrors.Wrap(sdkerrors.ErrorInvalidSigner, "validator not in active set")
	}

	ctx.Logger().Error(validator.GetOperator().String())

	address, err := k.GetJudgeAddressForValidatorAddress(ctx, valAddr)
	if address != nil {
		return nil, sdkerrors.Wrapf(types.ErrInvalid, "validator already has judge address %s or there is an error %s", address.String(), err.Error())
	}

	errSetting := k.SetJudgeAddressForValidatorAddress(ctx, judgeAddr, msg.NumOfSigners, msg.Threshold, msg.SignerApplicationFee, msg.ReserveAddress, msg.ReserveScript, msg.ArbitraryData, valAddr)
	if errSetting != nil {
		return nil, errSetting
	}
	ctx.Logger().Error("reached so far 1")

	// set an new frament mapping for the judge address
	fragmentId, reserveId, errSettingRes := k.VoltKeeper.RegisterNewFragment(ctx, judgeAddr, reserveAddr.BtcAddress, msg.Threshold, msg.SignerApplicationFee, msg.NumOfSigners, msg.FragmentFeeBips, msg.ArbitraryData)
	if errSettingRes != nil {
		return nil, errSettingRes
	}

	ctx.Logger().Error("reached so far 2")
	k.SetReserveAddressForJudge(ctx, judgeAddr, *reserveScript, *reserveAddr)

	ctx.Logger().Error("reached so far 3")

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

// GetValidatorByAccountAddress finds the validator address from an account address
func (k Keeper) GetValidatorByAccountAddress(ctx sdk.Context, accountAddress sdk.AccAddress) (stakingtypes.Validator, error) {
	validators := k.StakingKeeper.GetAllValidators(ctx)
	for _, validator := range validators {
		if validator.GetOperator().String() == accountAddress.String() {
			return validator, nil
		}
	}
	return stakingtypes.Validator{}, sdkerrors.Wrap(sdkerrors.ErrUnknownAddress, "validator not found")
}
