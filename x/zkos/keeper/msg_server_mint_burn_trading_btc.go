package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/zkos/types"
)

func (k msgServer) MintBurnTradingBtc(goCtx context.Context, msg *types.MsgMintBurnTradingBtc) (*types.MsgMintBurnTradingBtcResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// set the mint or burn trading btc
	k.SetMintOrBurnTradingBtc(ctx, msg)

	return &types.MsgMintBurnTradingBtcResponse{}, nil
}
