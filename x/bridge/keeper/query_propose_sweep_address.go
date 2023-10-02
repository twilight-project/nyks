package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ProposeSweepAddress(goCtx context.Context, req *types.QueryProposeSweepAddressRequest) (*types.QueryProposeSweepAddressResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	proposedSweepAddress, found := k.GetProposeSweepAddress(ctx, req.ReserveId, req.RoundId)
	if found != true {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "A ProposeSweepAddress msg doesn't exist with the given reserve id and round id")
	}

	return &types.QueryProposeSweepAddressResponse{ProposeSweepAddressMsg: *proposedSweepAddress}, nil
}
