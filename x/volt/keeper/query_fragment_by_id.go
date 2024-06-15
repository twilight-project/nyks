package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/volt/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) FragmentById(goCtx context.Context, req *types.QueryFragmentByIdRequest) (*types.QueryFragmentByIdResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	fragment, found := k.GetFragmentById(ctx, req.FragmentId)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrFragmentNotFound, "No fragment found with the given ID")
	}

	return &types.QueryFragmentByIdResponse{Fragment: *fragment}, nil
}
