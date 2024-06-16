package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/volt/types"
)

func (k msgServer) SignerApplication(goCtx context.Context, msg *types.MsgSignerApplication) (*types.MsgSignerApplicationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Get fragment with the id
	_, found := k.GetFragment(ctx, msg.FragmentId)
	if !found {
		return nil, types.ErrFragmentNotFound
	}

	k.SetSignerApplication(ctx, msg)

	return &types.MsgSignerApplicationResponse{}, nil
}
