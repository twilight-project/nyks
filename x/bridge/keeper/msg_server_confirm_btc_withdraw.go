package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) ConfirmBtcWithdraw(goCtx context.Context, msg *types.MsgConfirmBtcWithdraw) (*types.MsgConfirmBtcWithdrawResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgConfirmBtcWithdrawResponse{}, nil
}
