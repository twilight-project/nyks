package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
	volttypes "github.com/twilight-project/nyks/x/volt/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) WithdrawBtcRequestAll(goCtx context.Context, req *types.QueryWithdrawBtcRequestAllRequest) (*types.QueryWithdrawBtcRequestAllResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var (
		withdrawRequests []volttypes.BtcWithdrawRequestInternal
	)

	k.VoltKeeper.IterateBtcWithdrawRequests(ctx, func(_ []byte, res *volttypes.BtcWithdrawRequestInternal) (abort bool) {
		withdrawRequests = append(withdrawRequests, *res)
		return false
	})

	return &types.QueryWithdrawBtcRequestAllResponse{WithdrawRequest: withdrawRequests}, nil
}
