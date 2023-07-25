package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/volt/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ClearingAccount(goCtx context.Context, req *types.QueryClearingAccountRequest) (*types.QueryClearingAccountResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	twilightAddress, err := sdk.AccAddressFromBech32(req.TwilightAddress)
	if err != nil {
		return nil, err
	}

	acc, found := k.GetClearingAccount(ctx, twilightAddress)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrClearingAccountNotFound, "clearing account not found")
	}

	return &types.QueryClearingAccountResponse{ClearingAccount: *acc}, nil
}
