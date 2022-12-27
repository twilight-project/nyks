package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) RegisteredBtcDepositAddressByTwilightAddress(goCtx context.Context, req *types.QueryRegisteredBtcDepositAddressByTwilightAddressRequest) (*types.QueryRegisteredBtcDepositAddressByTwilightAddressResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	keys, err := k.GetBtcDepositKeys(ctx)
	if err != nil {
		return nil, err
	}
	reqTwilightDepositAddress, err := sdk.AccAddressFromBech32(req.TwilightDepositAddress)
	if err != nil {
		return nil, err
	}
	for _, key := range keys {
		keyTwilightDepositAddress, err := sdk.AccAddressFromBech32(key.TwilightDepositAddress)
		// this should be impossible due to the validate basic on the set deposit address message
		if err != nil {
			panic("Invalid twilight deposit addr in store!")
		}
		if reqTwilightDepositAddress.Equals(keyTwilightDepositAddress) {
			return &types.QueryRegisteredBtcDepositAddressByTwilightAddressResponse{DepositAddress: key.DepositAddress, TwilightDepositAddress: key.TwilightDepositAddress}, nil
		}

	}

	return nil, sdkerrors.Wrap(types.ErrInvalid, "Given twilightDepositAddress doesn't exist")
}
