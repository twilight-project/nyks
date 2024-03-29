package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
	volttypes "github.com/twilight-project/nyks/x/volt/types"
)

func (k msgServer) UnsignedTxSweep(goCtx context.Context, msg *types.MsgUnsignedTxSweep) (*types.MsgUnsignedTxSweepResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	judgeAddress, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not parse judge address")
	}

	_, foundDuplicate := k.GetUnsignedTxSweepMsg(ctx, msg.ReserveId, msg.RoundId)
	if foundDuplicate != false {
		return nil, sdkerrors.Wrap(types.ErrDuplicate, "A similar unsignedTxSweep already exists!")
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

	// Compare the sweep tx outputs with the reserve withdraw snapshot
	check, err := k.VoltKeeper.CheckReserveWithdrawSnapshot(ctx, msg.BtcUnsignedSweepTx, msg.ReserveId, msg.RoundId)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not check reserve withdraw snapshot")
	}

	if check == false {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "The unsigned sweep transaction is not valid")
	}

	// set unsigned tx sweep
	errSet := k.SetUnsignedTxSweepMsg(ctx, msg.TxId, msg.BtcUnsignedSweepTx, msg.ReserveId, msg.RoundId, judgeAddress)
	if errSet != nil {
		return nil, sdkerrors.Wrap(errSet, "Could not set the transaction sweep")
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventUnsignedTxSweep{
			Message:         msg.Type(),
			TxId:            msg.TxId,
			ReserveId:       msg.ReserveId,
			RoundId:         msg.RoundId,
			UnsignedSweepTx: msg.BtcUnsignedSweepTx,
			JudgeAddress:    msg.JudgeAddress,
		},
	)
	return &types.MsgUnsignedTxSweepResponse{}, nil
}
