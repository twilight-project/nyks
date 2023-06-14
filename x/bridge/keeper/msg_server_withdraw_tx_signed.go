package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) WithdrawTxSigned(goCtx context.Context, msg *types.MsgWithdrawTxSigned) (*types.MsgWithdrawTxSignedResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgWithdrawTxSignedResponse{}, nil
}
