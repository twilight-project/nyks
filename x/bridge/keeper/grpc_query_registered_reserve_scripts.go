package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) RegisteredReserveScripts(goCtx context.Context, req *types.QueryRegisteredReserveScriptsRequest) (*types.QueryRegisteredReserveScriptsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	scripts, err := k.GetBtcReserveKeys(ctx)
	if err != nil {
		return nil, err
	}

	return &types.QueryRegisteredReserveScriptsResponse{Scripts: scripts}, nil
}
