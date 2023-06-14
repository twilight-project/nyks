package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) SignRefundAll(goCtx context.Context, req *types.QuerySignRefundAllRequest) (*types.QuerySignRefundAllResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var (
		signRefunds []types.MsgSignRefund
	)

	k.IterateRegisteredSignRefundMsgs(ctx, func(_ []byte, res types.MsgSignRefund) (abort bool) {
		signRefunds = append(signRefunds, res)
		return false
	})

	return &types.QuerySignRefundAllResponse{SignRefundMsg: signRefunds}, nil
}
