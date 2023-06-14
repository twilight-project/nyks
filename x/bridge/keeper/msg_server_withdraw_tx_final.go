package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) WithdrawTxFinal(goCtx context.Context, msg *types.MsgWithdrawTxFinal) (*types.MsgWithdrawTxFinalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgWithdrawTxFinalResponse{}, nil
}
