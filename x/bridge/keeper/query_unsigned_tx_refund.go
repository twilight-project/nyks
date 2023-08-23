package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) UnsignedTxRefund(goCtx context.Context, req *types.QueryUnsignedTxRefundRequest) (*types.QueryUnsignedTxRefundResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	judgeAddress, err := sdk.AccAddressFromBech32(req.JudgeAddress)
	if err != nil {
		return nil, err
	}

	unsignedTxRefund, found := k.GetUnsignedTxRefundMsg(ctx, req.ReserveId, judgeAddress, req.BtcTxPrefix)
	if found != true {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "An unsignedTxRefund doesn't exist with the given reserveId or judgeAddress")
	}

	return &types.QueryUnsignedTxRefundResponse{UnsignedTxRefundMsg: *unsignedTxRefund}, nil
}
