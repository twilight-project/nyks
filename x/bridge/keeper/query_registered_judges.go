package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) RegisteredJudges(goCtx context.Context, req *types.QueryRegisteredJudgesRequest) (*types.QueryRegisteredJudgesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var (
		registeredJudges []types.MsgRegisterJudge
	)

	k.IterateRegisteredJudges(ctx, func(_ []byte, res types.MsgRegisterJudge) (abort bool) {
		registeredJudges = append(registeredJudges, res)
		return false
	})

	return &types.QueryRegisteredJudgesResponse{Judges: registeredJudges}, nil
}
