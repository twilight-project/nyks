package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
	volttypes "github.com/twilight-project/nyks/x/volt/types"
)

func (k msgServer) SignRefund(goCtx context.Context, msg *types.MsgSignRefund) (*types.MsgSignRefundResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	btcOracleAddress, e1 := sdk.AccAddressFromBech32(msg.BtcOracleAddress)
	reserveAddress, e2 := types.NewBtcAddress(msg.ReserveAddress)

	// Check if oracle is registered and active
	errOracle := k.NyksKeeper.CheckOrchestratorValidatorInSet(ctx, msg.BtcOracleAddress)
	if errOracle != nil {
		return nil, sdkerrors.Wrap(errOracle, "Could not check orchstrator validator inset")
	}

	// Check registered reserve address
	_, errReserve := k.VoltKeeper.GetBtcReserveIdByAddress(ctx, msg.ReserveAddress)
	if errReserve != nil {
		return nil, sdkerrors.Wrapf(volttypes.ErrBtcReserveNotFound, fmt.Sprint(msg.ReserveAddress))
	}

	refundSigValid := types.IsValidSignature(msg.RefundSignature)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	} else if e2 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e2.Error())
	} else if refundSigValid == false {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "invalid refund signature")
	}

	// check if this signed btc refund msg is already registered
	_, found := k.GetBtcSignRefundMsg(ctx, btcOracleAddress, *reserveAddress, msg.SignerPublicKey, msg.RefundSignature)
	if found {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "Duplicate Refund Request")
	}

	// set signed btc refund msg
	err := k.SetBtcSignRefundMsg(ctx, btcOracleAddress, *reserveAddress, msg.SignerPublicKey, msg.RefundSignature)
	if err != nil {
		return nil, err
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventSignRefund{
			Message:          msg.Type(),
			ReserveAddress:   msg.ReserveAddress,
			SignerPublicKey:  msg.SignerPublicKey,
			RefundSignature:  msg.RefundSignature,
			BtcOracleAddress: msg.BtcOracleAddress,
		},
	)

	return &types.MsgSignRefundResponse{}, nil
}
