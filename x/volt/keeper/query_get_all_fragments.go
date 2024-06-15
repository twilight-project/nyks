package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/volt/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetAllFragments(goCtx context.Context, req *types.QueryGetAllFragmentsRequest) (*types.QueryGetAllFragmentsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var (
		fragment []types.Fragment
	)

	k.IterateFragments(ctx, func(_ []byte, res types.Fragment) (abort bool) {
		fragment = append(fragment, res)
		return false
	})

	return &types.QueryGetAllFragmentsResponse{
		Fragments: fragment,
	}, nil
}
