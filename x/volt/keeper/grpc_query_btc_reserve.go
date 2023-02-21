package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/volt/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BtcReserve(goCtx context.Context, req *types.QueryBtcReserveRequest) (*types.QueryBtcReserveResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var (
		btcReserve []types.BtcReserve
	)
	ctx.Logger().Error("IterateBtcReserves1", "res", btcReserve)
	k.IterateBtcReserves(ctx, func(_ []byte, res types.BtcReserve) (abort bool) {
		btcReserve = append(btcReserve, res)
		return false
	})

	return &types.QueryBtcReserveResponse{BtcReserves: btcReserve}, nil
}
