package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/volt/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ReserveWithdrawSnapshot(goCtx context.Context, req *types.QueryReserveWithdrawSnapshotRequest) (*types.QueryReserveWithdrawSnapshotResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	snapshot, found := k.GetReserveWithdrawSnapshot(ctx, uint64(req.ReserveId), uint64(req.RoundId))
	if !found {
		return nil, sdkerrors.Wrap(types.ErrSnapshotNotFound, "reserve withdraw snapshot doesn't exist")
	}

	return &types.QueryReserveWithdrawSnapshotResponse{ReserveWithdrawSnapshot: *snapshot}, nil
}
