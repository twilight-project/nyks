package keeper

import (
	"context"
	"fmt"

	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
	volttypes "github.com/twilight-project/nyks/x/volt/types"
)

func (k msgServer) SweepProposal(goCtx context.Context, msg *types.MsgSweepProposal) (*types.MsgSweepProposalResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	judgeAddress, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not parse judge address")
	}

	found := k.CheckJudgeValidatorInSet(ctx, judgeAddress)
	if found == false {
		return nil, sdkerrors.Wrap(types.ErrJudgeValidatorNotFound, "Could not check judge validator inset")
	}

	any, err := codectypes.NewAnyWithValue(msg)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not check Any value")
	}

	valAddr, err := k.GetValidatorAddressForJudgeAddress(ctx, judgeAddress)
	if err != nil {
		panic("Could not find ValAddr for delegate key")
	}

	if err := sdk.VerifyAddressFormat(valAddr); err != nil {
		return nil, sdkerrors.Wrap(err, "invalid orchestrator validator address")
	}

	// Check if reserve exists before accepting the sweep proposal
	_, resErr := k.VoltKeeper.GetBtcReserve(ctx, msg.ReserveId)
	if resErr != nil {
		return nil, sdkerrors.Wrapf(volttypes.ErrBtcReserveNotFound, fmt.Sprint(msg.ReserveId))
	}

	err = k.NyksKeeper.ClaimHandlerCommon(ctx, any, valAddr, msg)
	if err != nil {
		return nil, err
	}

	return &types.MsgSweepProposalResponse{}, nil
}
