package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BroadcastRefundAll(goCtx context.Context, req *types.QueryBroadcastRefundAllRequest) (*types.QueryBroadcastRefundAllResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var (
		broadcastRefunds []types.MsgBroadcastRefund
	)

	k.IterateRegisteredBroadcastRefundMsgs(ctx, func(_ []byte, res types.MsgBroadcastRefund) (abort bool) {
		broadcastRefunds = append(broadcastRefunds, res)
		return false
	})

	return &types.QueryBroadcastRefundAllResponse{BroadcastRefundMsg: broadcastRefunds}, nil
}
