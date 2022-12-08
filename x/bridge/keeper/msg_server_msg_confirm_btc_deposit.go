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

	err := k.NyksKeeper.CheckOrchestratorValidatorInSet(ctx, msg.BtcOracleAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not check orchstrator validator inset")
	}

	any, err := codectypes.NewAnyWithValue(msg)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not check Any value")
	}

	err = k.NyksKeeper.ClaimHandlerCommon(ctx, any, msg)
	if err != nil {
		return nil, err
	}

	return &types.MsgConfirmBtcDepositResponse{}, nil
}
