package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
	volttypes "github.com/twilight-project/nyks/x/volt/types"
)

func (k msgServer) UnsignedTxRefund(goCtx context.Context, msg *types.MsgUnsignedTxRefund) (*types.MsgUnsignedTxRefundResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	judgeAddress, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not parse judge address")
	}

	_, foundDuplicate := k.GetUnsignedTxRefundMsg(ctx, msg.ReserveId, msg.RoundId)
	if foundDuplicate != false {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "A similar unsignedTxRefund already exists!")
	}

	found := k.CheckJudgeValidatorInSet(ctx, judgeAddress)
	if found == false {
		return nil, sdkerrors.Wrap(types.ErrJudgeValidatorNotFound, "Could not check judge validator inset")
	}

	// Check that reserve exists
	_, errRes := k.VoltKeeper.GetBtcReserve(ctx, msg.ReserveId)
	if errRes != nil {
		return nil, sdkerrors.Wrapf(volttypes.ErrBtcReserveNotFound, fmt.Sprint(msg.ReserveId))
	}

	// set unsigned tx sweep
	errSet := k.SetUnsignedTxRefundMsg(ctx, msg.ReserveId, msg.RoundId, msg.BtcUnsignedRefundTx, judgeAddress)
	if errSet != nil {
		return nil, sdkerrors.Wrap(errSet, "Could not set the transaction refund")
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventUnsignedTxRefund{
			Message:          msg.Type(),
			ReserveId:        msg.ReserveId,
			RoundId:          msg.RoundId,
			UnsignedRefundTx: msg.BtcUnsignedRefundTx,
			JudgeAddress:     msg.JudgeAddress,
		},
	)

	return &types.MsgUnsignedTxRefundResponse{}, nil
}
