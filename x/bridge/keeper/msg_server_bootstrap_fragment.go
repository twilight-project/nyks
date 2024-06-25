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
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid validator address")
	}

	valAddr := sdk.ValAddress(accAddr)

	// check the following, all should be validated in validate basic
	judgeAddr, e := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if e != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e.Error())
	}

	// return an error if the validator isn't in the active set
	validator, found := k.StakingKeeper.GetValidator(ctx, valAddr)
	if !found {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrorInvalidSigner, "validator not found")
	}
	val := k.StakingKeeper.Validator(ctx, validator.GetOperator())
	if val == nil || !val.IsBonded() {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrorInvalidSigner, "validator not in active set")
	}

	address, err := k.GetJudgeAddressForValidatorAddress(ctx, valAddr)
	if address != nil {
		return nil, sdkerrors.Wrapf(types.ErrInvalid, "validator already has judge address %s or there is an error %s", address.String(), err.Error())
	}

	errSetting := k.SetJudgeAddressForValidatorAddress(ctx, judgeAddr, msg.NumOfSigners, msg.Threshold, msg.SignerApplicationFee, msg.ArbitraryData, valAddr)
	if errSetting != nil {
		return nil, errSetting
	}

	// set an new frament mapping for the judge address
	fragmentId, errSettingRes := k.VoltKeeper.RegisterNewFragment(ctx, judgeAddr, msg.Threshold, msg.SignerApplicationFee, msg.NumOfSigners, msg.FragmentFeeBips, msg.ArbitraryData)
	if errSettingRes != nil {
		return nil, errSettingRes
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventBootstrapFragmentAddress{
			Message:          msg.Type(),
			JudgeAddress:     judgeAddr.String(),
			FragmentId:       fragmentId,
			ValidatorAddress: valAddr.String(),
		},
	)

	return &types.MsgBootstrapFragmentResponse{FragmentId: strconv.FormatUint(fragmentId, 10), JudgeAddress: msg.JudgeAddress}, nil
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
