package keeper

import (
	"context"

	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) ConfirmBtcDeposit(goCtx context.Context, msg *types.MsgConfirmBtcDeposit) (*types.MsgConfirmBtcDepositResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	// err := k.NyksKeeper.CheckOrchestratorValidatorInSet(ctx, msg.OracleAddress)
	// if err != nil {
	// 	return nil, sdkerrors.Wrap(err, "Could not check orchstrator validator inset")
	// }

	any, err := codectypes.NewAnyWithValue(msg)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not check Any value")
	}

	val, found := k.NyksKeeper.GetOrchestratorValidator(ctx, msg.GetProposarOrchestrator())
	if !found {
		panic("Could not find ValAddr for delegate key")
	}
	valAddr := val.GetOperator()

	if err := sdk.VerifyAddressFormat(valAddr); err != nil {
		return nil, sdkerrors.Wrap(err, "invalid orchestrator validator address")
	}

	err = k.NyksKeeper.ClaimHandlerCommon(ctx, any, valAddr, msg)
	if err != nil {
		return nil, err
	}

	return &types.MsgConfirmBtcDepositResponse{}, nil
}
