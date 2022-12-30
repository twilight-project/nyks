package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) RegisteredBtcDepositAddress(goCtx context.Context, req *types.QueryRegisteredBtcDepositAddressRequest) (*types.QueryRegisteredBtcDepositAddressResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	keys, err := k.GetBtcDepositKeys(ctx)
	if err != nil {
		return nil, err
	}
	reqDepositAddress, err := types.NewBtcAddress(req.DepositAddress)
	if err != nil {
		return nil, err
	}
	for _, key := range keys {
		keyDepositAddress, err := types.NewBtcAddress(key.DepositAddress)
		// this should be impossible due to the validate basic on the set deposit address message
		if err != nil {
			panic("Invalid btc deposit addr in store!")
		}
		if reqDepositAddress.BtcAddress == keyDepositAddress.BtcAddress {
			return &types.QueryRegisteredBtcDepositAddressResponse{DepositAddress: key.DepositAddress, TwilightDepositAddress: key.TwilightDepositAddress}, nil
		}

	}

	return nil, sdkerrors.Wrap(types.ErrInvalid, "Given btc depositAddress doesn't exist")
}
