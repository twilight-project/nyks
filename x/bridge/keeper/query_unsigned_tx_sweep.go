package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) UnsignedTxSweep(goCtx context.Context, req *types.QueryUnsignedTxSweepRequest) (*types.QueryUnsignedTxSweepResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	unsignedTxSweep, found := k.GetUnsignedTxSweepMsg(ctx, req.ReserveId, req.RoundId)
	if found != true {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "An unsignedTxSweep doesn't exist with the given reserve id and round id")
	}

	return &types.QueryUnsignedTxSweepResponse{UnsignedTxSweepMsg: *unsignedTxSweep}, nil
}
