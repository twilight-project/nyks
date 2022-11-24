package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/forks/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) DelegateKeysByBtcOracleAddress(goCtx context.Context, req *types.QueryDelegateKeysByBtcOracleAddressRequest) (*types.QueryDelegateKeysByBtcOracleAddressResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	keys, err := k.GetDelegateKeys(ctx)
	if err != nil {
		return nil, err
	}
	reqOrchestrator, err := sdk.AccAddressFromBech32(req.BtcOracleAddress)
	if err != nil {
		return nil, err
	}
	for _, key := range keys {
		keyOrchestrator, err := sdk.AccAddressFromBech32(key.BtcOracleAddress)
		// this should be impossible due to the validate basic on the set orchestrator message
		if err != nil {
			panic("Invalid orchestrator addr in store!")
		}
		if reqOrchestrator.Equals(keyOrchestrator) {
			return &types.QueryDelegateKeysByBtcOracleAddressResponse{ValidatorAddress: key.ValidatorAddress, BtcPublicKey: key.BtcPublicKey}, nil
		}

	}

	return nil, sdkerrors.Wrap(types.ErrInvalid, "Given btcOracleAddress doesn't exist")
}
