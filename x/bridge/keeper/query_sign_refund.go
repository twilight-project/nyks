package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) SignRefund(goCtx context.Context, req *types.QuerySignRefundRequest) (*types.QuerySignRefundResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	signRefundMsg, found := k.GetBtcSignRefundMsg(ctx, req.ReserveId, req.RoundId)
	if found != true {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "A BtcSignRefundMsg doesn't exist with the given reserveId or roundId")
	}

	return &types.QuerySignRefundResponse{SignRefundMsg: *signRefundMsg}, nil
}
