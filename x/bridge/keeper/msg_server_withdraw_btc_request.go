package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) WithdrawBtcRequest(goCtx context.Context, msg *types.MsgWithdrawBtcRequest) (*types.MsgWithdrawBtcRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	twilightAddress, e1 := sdk.AccAddressFromBech32(msg.TwilightAddress)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	}

	// check if btc address is valid
	withdrawAddress, e2 := types.NewBtcAddress(msg.WithdrawAddress)
	reserveAddress, e3 := types.NewBtcAddress(msg.ReserveAddress)
	if e2 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e2.Error())
	} else if e3 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e3.Error())
	}

	// check if withdraw request is also already registered
	_, found := k.GetBtcWithdrawRequest(ctx, twilightAddress, *reserveAddress, *withdrawAddress, msg.WithdrawAmount)
	if found {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "Duplicate Withdraw Request")
	}

	// check if withdraw address has enough balance in the reserve
	// err := k.VoltKeeper.CheckIndividualTwilightReserveAccountBalance(ctx, twilightAddress, *&reserveAddress.BtcAddress, msg.WithdrawAmount)
	// if err != nil {
	// 	return nil, sdkerrors.Wrap(types.ErrInsufficientBalance, "Insufficient Balance")
	// }

	// set withdraw request
	err := k.SetBtcWithdrawRequest(ctx, twilightAddress, *reserveAddress, *withdrawAddress, msg.WithdrawAmount)
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
