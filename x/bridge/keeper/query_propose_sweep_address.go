package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ProposeSweepAddress(goCtx context.Context, req *types.QueryProposeSweepAddressRequest) (*types.QueryProposeSweepAddressResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	judgeAddress, err := sdk.AccAddressFromBech32(req.JudgeAddress)
	if err != nil {
		return nil, err
	}

	btcAddr, e1 := types.NewBtcAddress(req.BtcAddress)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	}

	proposedSweepAddress, found := k.GetProposeSweepAddress(ctx, req.ReserveId, judgeAddress, *btcAddr)
	if found != true {
		return nil, sdkerrors.Wrap(types.ErrInvalid, "An ProposeSweepAddress msg doesn't exist with the given reserve id, btc address and judge address combination")
	}

	return &types.QueryProposeSweepAddressResponse{ProposeSweepAddressMsg: *proposedSweepAddress}, nil
}
