package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/forks/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) DelegateKeysAll(goCtx context.Context, req *types.QueryDelegateKeysAllRequest) (*types.QueryDelegateKeysAllResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	keys, err := k.GetDelegateKeys(ctx)
	if err != nil {
		return nil, err
	}

	return &types.QueryDelegateKeysAllResponse{Addresses: keys}, nil
}
