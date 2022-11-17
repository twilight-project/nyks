package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) MsgConfirmBtcDeposit(goCtx context.Context, msg *types.MsgMsgConfirmBtcDeposit) (*types.MsgMsgConfirmBtcDepositResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	_ = ctx

	return &types.MsgMsgConfirmBtcDepositResponse{}, nil
}
