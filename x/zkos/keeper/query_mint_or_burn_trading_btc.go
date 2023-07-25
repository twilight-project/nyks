package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/zkos/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) MintOrBurnTradingBtc(goCtx context.Context, req *types.QueryMintOrBurnTradingBtcRequest) (*types.QueryMintOrBurnTradingBtcResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	mintOrBurnReqs, found := k.GetMintOrBurnTradingBtc(ctx, req.TwilightAddress)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrMintOrBurnNotFound, "couldn't find mint or burn trading btc")
	}

	return &types.QueryMintOrBurnTradingBtcResponse{MintOrBurnTradingBtc: mintOrBurnReqs}, nil
}
