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

	reqTwilightDepositAddress, err := sdk.AccAddressFromBech32(req.TwilightDepositAddress)
	if err != nil {
		return nil, err
	}

	acc, found := k.VoltKeeper.GetClearingAccount(ctx, sdk.AccAddress(reqTwilightDepositAddress))
	if !found {
		return nil, sdkerrors.Wrap(types.ErrInvalidTwilightAddress, "Given twilight address doesn't exist")
	}

	return &types.QueryRegisteredBtcDepositAddressByTwilightAddressResponse{DepositAddress: acc.BtcDepositAddress, TwilightDepositAddress: acc.TwilightAddress}, nil
}
