package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/volt/types"
)

func (k msgServer) AcceptSigners(goCtx context.Context, msg *types.MsgAcceptSigners) (*types.MsgAcceptSignersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgAcceptSignersResponse{}, nil
}
