package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BroadcastTxSweepAll(goCtx context.Context, req *types.QueryBroadcastTxSweepAllRequest) (*types.QueryBroadcastTxSweepAllResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var (
		BroadcastTxSweeps []types.MsgBroadcastTxSweep
	)

	k.IterateRegisteredBroadcastTxSweepMsgs(ctx, func(_ []byte, res types.MsgBroadcastTxSweep) (abort bool) {
		BroadcastTxSweeps = append(BroadcastTxSweeps, res)
		return false
	})

	return &types.QueryBroadcastTxSweepAllResponse{BroadcastTxSweepMsg: BroadcastTxSweeps}, nil
}
