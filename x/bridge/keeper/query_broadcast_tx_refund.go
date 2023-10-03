package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BroadcastTxRefund(goCtx context.Context, req *types.QueryBroadcastTxRefundRequest) (*types.QueryBroadcastTxRefundResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	broadcastRefund, found := k.GetBtcBroadcastTxRefundMsg(ctx, req.ReserveId, req.RoundId)
	if found != true {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "A BtcBroadcastTxRefundMsg doesn't exist with the given reserveId or roundId")
	}

	return &types.QueryBroadcastTxRefundResponse{BroadcastRefundMsg: *broadcastRefund}, nil
}
