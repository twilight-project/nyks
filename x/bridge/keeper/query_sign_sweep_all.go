package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) SignSweepAll(goCtx context.Context, req *types.QuerySignSweepAllRequest) (*types.QuerySignSweepAllResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var (
		signSweeps []types.MsgSignSweep
	)

	k.IterateRegisteredSignSweepMsgs(ctx, func(_ []byte, res types.MsgSignSweep) (abort bool) {
		signSweeps = append(signSweeps, res)
		return false
	})

	return &types.QuerySignSweepAllResponse{SignSweepMsg: signSweeps}, nil
}
