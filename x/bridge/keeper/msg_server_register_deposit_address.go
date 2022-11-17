package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) RegisterDepositAddress(goCtx context.Context, msg *types.MsgRegisterDepositAddress) (*types.MsgRegisterDepositAddressResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgRegisterDepositAddressResponse{}, nil
}
