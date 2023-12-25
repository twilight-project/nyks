package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/volt/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ReserveWithdrawPool(goCtx context.Context, req *types.QueryReserveWithdrawPoolRequest) (*types.QueryReserveWithdrawPoolResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	withdrawPool, found := k.GetReserveWithdrawPool(ctx, req.ReserveId)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrSnapshotNotFound, "reserve withdraw snapshot doesn't exist")
	}

	return &types.QueryReserveWithdrawPoolResponse{ReserveWithdrawPool: *withdrawPool}, nil
}
