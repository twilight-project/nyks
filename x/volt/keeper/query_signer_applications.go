package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/volt/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) SignerApplications(goCtx context.Context, req *types.QuerySignerApplicationsRequest) (*types.QuerySignerApplicationsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	signerApplication, found := k.GetSignerApplications(ctx, req.FragmentId)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrFragmentNotFound, "No fragment found with the given ID")
	}

	return &types.QuerySignerApplicationsResponse{
		SignerApplications: signerApplication,
	}, nil
}
