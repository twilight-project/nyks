package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	bridgetypes "github.com/twilight-project/nyks/x/bridge/types"
	"github.com/twilight-project/nyks/x/volt/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BtcWithdrawRequest(goCtx context.Context, req *types.QueryBtcWithdrawRequestRequest) (*types.QueryBtcWithdrawRequestResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	twilightAddress, err := sdk.AccAddressFromBech32(req.TwilightAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, err.Error())
	}

	e1 := bridgetypes.ValidateBtcAddress(req.BtcAddress)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	}

	withdrawRequest, found := k.GetBtcWithdrawRequest(ctx, twilightAddress, req.ReserveId, req.BtcAddress, req.WithdrawAmount)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrSnapshotNotFound, "btc withdraw doesn't exist")
	}

	return &types.QueryBtcWithdrawRequestResponse{BtcWithdrawRequest: *withdrawRequest}, nil
}
