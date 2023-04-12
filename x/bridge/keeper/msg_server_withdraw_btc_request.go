package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) WithdrawBtcRequest(goCtx context.Context, msg *types.MsgWithdrawBtcRequest) (*types.MsgWithdrawBtcRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	twilightAddress := sdk.AccAddress(msg.TwilightAddress)
	withdrawAmount := sdk.NewIntFromUint64(msg.WithdrawAmount)

	// check if btc address is valid
	withdrawAddress, e1 := types.NewBtcAddress(msg.WithdrawAddress)
	reserveAddress, e2 := types.NewBtcAddress(msg.ReserveAddress)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	} else if e2 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e2.Error())
	}

	// check if withdraw request is also already registered
	_, found := k.GetBtcWithdrawRequest(ctx, twilightAddress, *reserveAddress, *withdrawAddress, withdrawAmount)
	if found {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "Duplicate Withdraw Request")
	}

	// set withdraw request
	err := k.SetBtcWithdrawRequest(ctx, twilightAddress, *reserveAddress, *withdrawAddress, withdrawAmount)
	if err != nil {
		return nil, err
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventWithdrawBtcRequest{
			Message:         msg.Type(),
			TwilightAddress: msg.TwilightAddress,
			ReserveAddress:  msg.ReserveAddress,
			WithdrawAddress: msg.WithdrawAddress,
			WithdrawAmount:  msg.WithdrawAmount,
		},
	)

	return &types.MsgWithdrawBtcRequestResponse{}, nil
}
