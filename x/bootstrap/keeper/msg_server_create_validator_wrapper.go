package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bootstrap/types"
)

func (k msgServer) CreateValidatorWrapper(goCtx context.Context, msg *types.MsgCreateValidatorWrapper) (*types.MsgCreateValidatorWrapperResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateValidatorWrapperResponse{}, nil
}
