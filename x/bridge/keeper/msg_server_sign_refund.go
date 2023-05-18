package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) SignRefund(goCtx context.Context, msg *types.MsgSignRefund) (*types.MsgSignRefundResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	btcOracleAddress, e1 := sdk.AccAddressFromBech32(msg.BtcOracleAddress)

	// check if btc address is valid
	signerAddress, e2 := types.NewBtcAddress(msg.SignerAddress)
	reserveAddress, e3 := types.NewBtcAddress(msg.ReserveAddress)
	refundSigValid := types.IsValidSignature(msg.RefundSignature)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	} else if e2 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e2.Error())
	} else if e3 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e3.Error())
	} else if refundSigValid == false {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "invalid refund signature")
	}

	// check if this signed btc refund msg is already registered
	_, found := k.GetBtcSignRefundMsg(ctx, btcOracleAddress, *reserveAddress, *signerAddress, msg.RefundSignature)
	if found {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "Duplicate Refund Request")
	}

	// set signed btc refund msg
	err := k.SetBtcSignRefundMsg(ctx, btcOracleAddress, *reserveAddress, *signerAddress, msg.RefundSignature)
	if err != nil {
		return nil, err
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventSignRefund{
			Message:          msg.Type(),
			ReserveAddress:   msg.ReserveAddress,
			SignerAddress:    msg.SignerAddress,
			RefundSignature:  msg.RefundSignature,
			BtcOracleAddress: msg.BtcOracleAddress,
		},
	)

	return &types.MsgSignRefundResponse{}, nil
}
