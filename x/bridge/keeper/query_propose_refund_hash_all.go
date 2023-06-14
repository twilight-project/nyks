package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ProposeRefundHashAll(goCtx context.Context, req *types.QueryProposeRefundHashAllRequest) (*types.QueryProposeRefundHashAllResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var (
		proposeRefundHashes []types.MsgProposeRefundHash
	)

	k.IterateRegisteredProposeRefundHashMsgs(ctx, func(_ []byte, res types.MsgProposeRefundHash) (abort bool) {
		proposeRefundHashes = append(proposeRefundHashes, res)
		return false
	})

	return &types.QueryProposeRefundHashAllResponse{ProposeRefundHashMsg: proposeRefundHashes}, nil
}
