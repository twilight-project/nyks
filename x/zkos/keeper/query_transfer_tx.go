package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/zkos/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) TransferTx(goCtx context.Context, req *types.QueryTransferTxRequest) (*types.QueryTransferTxResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	ctx.Logger().Error("TransferTx called")

	ttx, found := k.GetTransferTx(ctx, req.TxId)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrTransferTxNotFound, "couldn't find tx")
	}

	return &types.QueryTransferTxResponse{TransferTx: ttx}, nil
}
