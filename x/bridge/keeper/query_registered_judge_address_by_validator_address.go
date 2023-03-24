package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) RegisteredJudgeAddressByValidatorAddress(goCtx context.Context, req *types.QueryRegisteredJudgeAddressByValidatorAddressRequest) (*types.QueryRegisteredJudgeAddressByValidatorAddressResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var (
		registeredJudges []types.MsgRegisterJudge
	)

	k.IterateRegisteredJudges(ctx, func(_ []byte, res types.MsgRegisterJudge) (abort bool) {
		registeredJudges = append(registeredJudges, res)
		return false
	})
	reqValAddress, err := sdk.ValAddressFromBech32(req.ValidatorAddress)
	if err != nil {
		return nil, err
	}
	for _, key := range registeredJudges {
		keyValidatorAddress, err := sdk.ValAddressFromBech32(key.ValidatorAddress)
		// this should be impossible due to the validate basic on the set deposit address message
		if err != nil {
			panic("Invalid validator addr in store!")
		}
		if reqValAddress.String() == keyValidatorAddress.String() {
			return &types.QueryRegisteredJudgeAddressByValidatorAddressResponse{Creator: key.Creator, JudgeAddress: key.JudgeAddress, ValidatorAddress: key.ValidatorAddress}, nil
		}

	}

	return nil, sdkerrors.Wrap(types.ErrInvalid, "Given validator address doesn't have a mapping with a judge address.")

	//return &types.QueryRegisteredJudgeAddressByValidatorAddressResponse{}, nil
}
