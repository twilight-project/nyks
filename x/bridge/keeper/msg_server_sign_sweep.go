package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) SignSweep(goCtx context.Context, msg *types.MsgSignSweep) (*types.MsgSignSweepResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	btcOracleAddress, e1 := sdk.AccAddressFromBech32(msg.BtcOracleAddress)

	// Check if oracle is registered and active
	errOracle := k.NyksKeeper.CheckOrchestratorValidatorInSet(ctx, msg.BtcOracleAddress)
	if errOracle != nil {
		return nil, sdkerrors.Wrap(errOracle, "Could not check orchstrator validator inset")
	}

	// Check registered reserve address
	// _, errReserve := k.VoltKeeper.GetBtcReserveIdByAddress(ctx, msg.ReserveAddress)
	// if errReserve != nil {
	// 	return nil, sdkerrors.Wrapf(volttypes.ErrBtcReserveNotFound, fmt.Sprint(msg.ReserveAddress))
	// }

	sweepSigValue := types.ValidateSignatures(msg.SweepSignature)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	} else if sweepSigValue == false {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "invalid sweep signature")
	}

	// check if this signed btc sweep msg is already registered
	_, found := k.GetBtcSignSweepMsg(ctx, msg.ReserveId, msg.RoundId)
	if found {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "Duplicate sweep Request")
	}

	// set signed btc sweep msg
	err := k.SetBtcSignSweepMsg(ctx, btcOracleAddress, msg.ReserveId, msg.RoundId, msg.SignerPublicKey, msg.SweepSignature)
	if err != nil {
		return nil, err
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventSignSweep{
			Message:          msg.Type(),
			ReserveId:        msg.ReserveId,
			RoundId:          msg.RoundId,
			SignerPublicKey:  msg.SignerPublicKey,
			SweepSignature:   msg.SweepSignature,
			BtcOracleAddress: msg.BtcOracleAddress,
		},
	)

	return &types.MsgSignSweepResponse{}, nil
}
