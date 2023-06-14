package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) WithdrawBtcRequestAll(goCtx context.Context, req *types.QueryWithdrawBtcRequestAllRequest) (*types.QueryWithdrawBtcRequestAllResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var (
		withdrawRequests []types.MsgWithdrawBtcRequest
	)

	k.IterateRegisteredWithdrawBtcRequests(ctx, func(_ []byte, res types.MsgWithdrawBtcRequest) (abort bool) {
		withdrawRequests = append(withdrawRequests, res)
		return false
	})

	return &types.QueryWithdrawBtcRequestAllResponse{WithdrawRequest: withdrawRequests}, nil
}
