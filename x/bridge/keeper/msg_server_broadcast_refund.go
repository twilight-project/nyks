package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) BroadcastRefund(goCtx context.Context, msg *types.MsgBroadcastRefund) (*types.MsgBroadcastRefundResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgBroadcastRefundResponse{}, nil
}
