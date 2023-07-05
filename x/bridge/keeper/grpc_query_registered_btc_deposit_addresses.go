package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) RegisteredBtcDepositAddresses(goCtx context.Context, req *types.QueryRegisteredBtcDepositAddressesRequest) (*types.QueryRegisteredBtcDepositAddressesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	accts, err := k.VoltKeeper.GetAllClearingAccounts(ctx)
	if err != nil {
		return nil, err
	}

	return &types.QueryRegisteredBtcDepositAddressesResponse{Accounts: accts}, nil
}
