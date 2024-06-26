package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) SignSweep(goCtx context.Context, msg *types.MsgSignSweep) (*types.MsgSignSweepResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	signerAddress, e1 := sdk.AccAddressFromBech32(msg.SignerAddress)

	// Check if signerAddress is part of the fragment that reserveId belongs to
	found := k.VoltKeeper.CheckSignerInFragment(ctx, msg.ReserveId, signerAddress)
	if found == false {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "Signer address not part of fragment")
	}

	sweepSigValue := types.ValidateSignatures(msg.SweepSignature)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	} else if sweepSigValue == false {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "invalid sweep signature")
	}

	// check if this signed btc sweep msg is already registered
	_, found = k.GetBtcSignSweepMsgWithOracleAddress(ctx, msg.ReserveId, msg.RoundId, signerAddress)
	if found {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "Duplicate sweep Request")
	}

	// set signed btc sweep msg
	err := k.SetBtcSignSweepMsg(ctx, signerAddress, msg.ReserveId, msg.RoundId, msg.SignerPublicKey, msg.SweepSignature)
	if err != nil {
		return nil, err
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventSignSweep{
			Message:         msg.Type(),
			ReserveId:       msg.ReserveId,
			RoundId:         msg.RoundId,
			SignerPublicKey: msg.SignerPublicKey,
			SweepSignature:  msg.SweepSignature,
			SignerAddress:   msg.SignerAddress,
		},
	)

	return &types.MsgSignSweepResponse{}, nil
}
