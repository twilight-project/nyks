package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BroadcastTxRefundAll(goCtx context.Context, req *types.QueryBroadcastTxRefundAllRequest) (*types.QueryBroadcastTxRefundAllResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var (
		BroadcastTxRefund []types.MsgBroadcastTxRefund
	)

	k.IterateRegisteredBroadcastTxRefundMsgs(ctx, func(_ []byte, res types.MsgBroadcastTxRefund) (abort bool) {
		BroadcastTxRefund = append(BroadcastTxRefund, res)
		return false
	})

	return &types.QueryBroadcastTxRefundAllResponse{BroadcastTxRefundMsg: BroadcastTxRefund}, nil
}
