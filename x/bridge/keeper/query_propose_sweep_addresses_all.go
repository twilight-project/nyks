package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

const QUERY_PROPOSEDSWEEPADDRESSALL_LIMIT uint64 = 1000

func (k Keeper) ProposeSweepAddressesAll(goCtx context.Context, req *types.QueryProposeSweepAddressesAllRequest) (*types.QueryProposeSweepAddressesAllResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	limit := req.Limit
	if limit == 0 || limit > QUERY_PROPOSEDSWEEPADDRESSALL_LIMIT {
		limit = QUERY_PROPOSEDSWEEPADDRESSALL_LIMIT
	}

	proposedSweepAddresses, err := k.GetAllProposedSweepAddresses(ctx, limit)
	if err != nil {
		return nil, err
	}

	return &types.QueryProposeSweepAddressesAllResponse{ProposeSweepAddressMsgs: proposedSweepAddresses}, nil
}
