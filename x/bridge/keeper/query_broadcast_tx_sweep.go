package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BroadcastTxSweep(goCtx context.Context, req *types.QueryBroadcastTxSweepRequest) (*types.QueryBroadcastTxSweepResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	broadcastSweep, found := k.GetBtcBroadcastTxSweepMsg(ctx, req.ReserveId, req.RoundId)
	if found != true {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "A BtcBroadcastTxSweepMsg doesn't exist with the given reserveId or roundId")
	}

	return &types.QueryBroadcastTxSweepResponse{BroadcastSweepMsg: *broadcastSweep}, nil
}
