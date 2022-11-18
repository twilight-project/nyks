package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) ConfirmBtcDeposit(goCtx context.Context, msg *types.MsgConfirmBtcDeposit) (*types.MsgConfirmBtcDepositResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	_ = ctx

	return &types.MsgConfirmBtcDepositResponse{}, nil
}
