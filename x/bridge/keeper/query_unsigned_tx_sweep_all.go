package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

const QUERY_SWEEPALL_LIMIT uint64 = 1000

func (k Keeper) UnsignedTxSweepAll(goCtx context.Context, req *types.QueryUnsignedTxSweepAllRequest) (*types.QueryUnsignedTxSweepAllResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	limit := req.Limit
	if limit == 0 || limit > QUERY_SWEEPALL_LIMIT {
		limit = QUERY_SWEEPALL_LIMIT
	}

	unsignedSweepMsgs, err := k.GetAllUnsignedTxSweepMsgs(ctx, limit)
	if err != nil {
		return nil, err
	}

	return &types.QueryUnsignedTxSweepAllResponse{UnsignedTxSweepMsgs: unsignedSweepMsgs}, nil
}
