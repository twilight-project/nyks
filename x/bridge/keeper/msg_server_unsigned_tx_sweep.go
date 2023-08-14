package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) UnsignedTxSweep(goCtx context.Context, msg *types.MsgUnsignedTxSweep) (*types.MsgUnsignedTxSweepResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgUnsignedTxSweepResponse{}, nil
}
