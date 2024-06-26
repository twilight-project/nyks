package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) SignRefund(goCtx context.Context, msg *types.MsgSignRefund) (*types.MsgSignRefundResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	signerAddress, e1 := sdk.AccAddressFromBech32(msg.SignerAddress)

	// Check if signerAddress is part of the fragment that reserveId belongs to
	found := k.VoltKeeper.CheckSignerInFragment(ctx, msg.ReserveId, signerAddress)
	if found == false {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "Signer address not part of fragment")
	}

	refundSigValid := types.ValidateSignatures(msg.RefundSignature)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	} else if refundSigValid == false {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "invalid refund signature")
	}

	// check if this signed btc refund msg is already registered
	_, found = k.GetBtcSignRefundMsgWithOracleAddress(ctx, msg.ReserveId, msg.RoundId, signerAddress)
	if found {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "Duplicate Refund Request")
	}

	// set signed btc refund msg
	err := k.SetBtcSignRefundMsg(ctx, signerAddress, msg.ReserveId, msg.RoundId, msg.SignerPublicKey, msg.RefundSignature)
	if err != nil {
		return nil, err
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventSignRefund{
			Message:         msg.Type(),
			ReserveId:       msg.ReserveId,
			RoundId:         msg.RoundId,
			SignerPublicKey: msg.SignerPublicKey,
			RefundSignature: msg.RefundSignature,
			SignerAddress:   msg.SignerAddress,
		},
	)

	return &types.MsgSignRefundResponse{}, nil
}
