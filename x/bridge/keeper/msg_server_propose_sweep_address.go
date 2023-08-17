package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) ProposeSweepAddress(goCtx context.Context, msg *types.MsgProposeSweepAddress) (*types.MsgProposeSweepAddressResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgProposeSweepAddressResponse{}, nil
}
