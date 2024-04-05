package keeper

import (
	"context"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	"github.com/twilight-project/nyks/x/forks/types"
)

func (k msgServer) SetDelegateAddresses(goCtx context.Context, msg *types.MsgSetDelegateAddresses) (*types.MsgSetDelegateAddressesResponse, error) {
	// ensure that this passes validation, checks the key validity
	err := msg.ValidateBasic()
	if err != nil {
		return nil, err
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	btcOracleAdd, err := sdk.AccAddressFromBech32(msg.BtcOracleAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "btc oracle address is not in valid format")
	}
	// check if this btc oracle address is already registered
	_, found := k.GetDelegateAddresses(ctx, btcOracleAdd)
	if found {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "btc oracle address is already registered")
	}
	// check the following, all should be validated in validate basic
	val, e1 := sdk.ValAddressFromBech32(msg.ValidatorAddress)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	}

	valOperator, found := k.StakingKeeper.GetValidator(ctx, val)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "validator not found")
	}

	// ensure that the validator exists
	if k.Keeper.StakingKeeper.Validator(ctx, valOperator.GetOperator()) == nil {
		return nil, sdkerrors.Wrap(stakingtypes.ErrNoValidatorFound, val.String())
	}

	// set delegate addresses
	err = k.Keeper.SetDelegateAddresses(ctx, msg)
	if err != nil {
		return nil, err
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventSetDelegateAddresses{
			Message: msg.Type(),
			Address: msg.ValidatorAddress,
		},
	)

	return &types.MsgSetDelegateAddressesResponse{}, nil
}
