package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

const QUERY_REFUNDALL_LIMIT uint64 = 1000

func (k Keeper) UnsignedTxRefundAll(goCtx context.Context, req *types.QueryUnsignedTxRefundAllRequest) (*types.QueryUnsignedTxRefundAllResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	limit := req.Limit
	if limit == 0 || limit > QUERY_REFUNDALL_LIMIT {
		limit = QUERY_REFUNDALL_LIMIT
	}

	unsignedRefundMsgs, err := k.GetAllUnsignedTxRefundMsgs(ctx, limit)
	if err != nil {
		return nil, err
	}

	return &types.QueryUnsignedTxRefundAllResponse{UnsignedTxRefundMsgs: unsignedRefundMsgs}, nil
}
