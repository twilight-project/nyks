package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
	volttypes "github.com/twilight-project/nyks/x/volt/types"
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

	// Get the reserve id
	reserveId, err := k.VoltKeeper.GetBtcReserveIdByAddress(ctx, reserveAddress.BtcAddress)
	if err != nil {
		return nil, sdkerrors.Wrapf(volttypes.ErrBtcReserveNotFound, fmt.Sprint(reserveAddress))
	}

	// check if withdraw request is also already registered
	_, found := k.VoltKeeper.GetBtcWithdrawRequest(ctx, twilightAddress, reserveId, withdrawAddress.BtcAddress, msg.WithdrawAmount)
	if found {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "Duplicate Withdraw Request")
	}

	// check if withdraw address has enough balance in the reserve
	err = k.VoltKeeper.CheckClearingAccountBalance(ctx, twilightAddress, reserveId, msg.WithdrawAmount)
	if err != nil {
		return nil, sdkerrors.Wrap(types.ErrInsufficientBalance, "Insufficient balance in clearing account")
	}

	// check user's bank balance
	// a balance mismatch between clearingAccount and bank is not possible, this check is just to be sure
	userBalance := k.BankKeeper.GetBalance(ctx, twilightAddress, "sats")
	if userBalance.Amount.LT(sdk.NewIntFromUint64(msg.WithdrawAmount)) {
		return nil, sdkerrors.Wrap(types.ErrInsufficientBalance, "Insufficient balance in bank")
	}

	// set withdraw request
	err = k.VoltKeeper.SetBtcWithdrawRequest(ctx, twilightAddress, reserveId, withdrawAddress.BtcAddress, msg.WithdrawAmount)
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
