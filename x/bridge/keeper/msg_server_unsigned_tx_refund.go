package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) UnsignedTxRefund(goCtx context.Context, msg *types.MsgUnsignedTxRefund) (*types.MsgUnsignedTxRefundResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgUnsignedTxRefundResponse{}, nil
}
