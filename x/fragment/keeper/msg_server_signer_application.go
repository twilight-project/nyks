package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/fragment/types"
)

func (k msgServer) SignerApplication(goCtx context.Context, msg *types.MsgSignerApplication) (*types.MsgSignerApplicationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgSignerApplicationResponse{}, nil
}
