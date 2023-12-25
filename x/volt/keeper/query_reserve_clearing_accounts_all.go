package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/volt/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ReserveClearingAccountsAll(goCtx context.Context, req *types.QueryReserveClearingAccountsAllRequest) (*types.QueryReserveClearingAccountsAllResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// Return all clearing accounts for a given reserve
	accts, found := k.GetAllClearingAccountsInaReserve(ctx, req.ReserveId)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrClearingAccountNotFound, "clearing account not found")
	}

	return &types.QueryReserveClearingAccountsAllResponse{ReserveClearingAccountsAll: accts}, nil
}
