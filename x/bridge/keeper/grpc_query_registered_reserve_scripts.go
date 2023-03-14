package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) RegisteredReserveAddresses(goCtx context.Context, req *types.QueryRegisteredReserveAddressesRequest) (*types.QueryRegisteredReserveAddressesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// addresses, err := k.GetBtcReserveAddressKeys(ctx)
	// if err != nil {
	// 	return nil, err
	// }

	var (
		btcReserveAddresses []types.MsgRegisterReserveAddress
	)
	ctx.Logger().Error("IterateBtcReserveAddresses", "res", btcReserveAddresses)
	k.IterateBtcReserveAddresses(ctx, func(_ []byte, res types.MsgRegisterReserveAddress) (abort bool) {
		btcReserveAddresses = append(btcReserveAddresses, res)
		return false
	})

	return &types.QueryRegisteredReserveAddressesResponse{Addresses: btcReserveAddresses}, nil
}
