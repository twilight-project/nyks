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

	accounts, err := k.VoltKeeper.GetAllClearingAccounts(ctx)
	if err != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalidBtcAddress, "Given btc depositAddress doesn't exist")
	}
	reqDepositAddress, err := types.NewBtcAddress(req.DepositAddress)
	if err != nil {
		return nil, err
	}
	for _, acc := range accounts {
		keyDepositAddress, err := types.NewBtcAddress(acc.BtcDepositAddress)
		// this should be impossible due to the validate basic on the set deposit address message
		if err != nil {
			panic("Invalid btc deposit addr in store!")
		}
		if reqDepositAddress.BtcAddress == keyDepositAddress.BtcAddress {
			return &types.QueryRegisteredBtcDepositAddressResponse{DepositAddress: acc.BtcDepositAddress, TwilightDepositAddress: acc.TwilightAddress}, nil
		}

	}

	return nil, sdkerrors.Wrap(types.ErrInvalid, "Given btc depositAddress doesn't exist")
}
