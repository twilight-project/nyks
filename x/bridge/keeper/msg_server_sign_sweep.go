package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) SignSweep(goCtx context.Context, msg *types.MsgSignSweep) (*types.MsgSignSweepResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	btcOracleAddress := sdk.AccAddress(msg.BtcOracleAddress)

	// check if btc address is valid
	signerAddress, e1 := types.NewBtcAddress(msg.SignerAddress)
	reserveAddress, e2 := types.NewBtcAddress(msg.ReserveAddress)
	sweepSigValie := types.IsValidSignature(msg.SweepSignature)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	} else if e2 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e2.Error())
	} else if sweepSigValie == false {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "invalid sweep signature")
	}

	// check if this signed btc sweep msg is already registered
	_, found := k.GetBtcSignSweepMsg(ctx, btcOracleAddress, *reserveAddress, *signerAddress, msg.SweepSignature)
	if found {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "Duplicate sweep Request")
	}

	// set signed btc sweep msg
	err := k.SetBtcSignSweepMsg(ctx, btcOracleAddress, *reserveAddress, *signerAddress, msg.SweepSignature)
	if err != nil {
		return nil, err
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventSignSweep{
			Message:          msg.Type(),
			ReserveAddress:   msg.ReserveAddress,
			SignerAddress:    msg.SignerAddress,
			SweepSignature:   msg.SweepSignature,
			BtcOracleAddress: msg.BtcOracleAddress,
		},
	)

	return &types.MsgSignSweepResponse{}, nil
}
