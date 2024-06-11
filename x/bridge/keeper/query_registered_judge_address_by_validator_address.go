package keeper

import (
	"context"
	"fmt"

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
		registeredJudges []types.MsgBootstrapFragment
	)

	k.IterateRegisteredJudges(ctx, func(_ []byte, res types.MsgBootstrapFragment) (abort bool) {
		registeredJudges = append(registeredJudges, res)
		return false
	})
	reqValAddress, err := sdk.ValAddressFromBech32(req.ValidatorAddress)
	if err != nil {
		return nil, err
	}
	for _, key := range registeredJudges {
		// This should be impossible due to the validate basic on the set deposit address message
		keyValidatorAddress, err := sdk.ValAddressFromBech32(key.ValidatorAddress)
		if err != nil {
			panic(fmt.Sprintf("Invalid validator address in store: %s", err))
		}

		if reqValAddress.String() == keyValidatorAddress.String() {
			response := &types.QueryRegisteredJudgeAddressByValidatorAddressResponse{
				JudgeAddress:         key.JudgeAddress,
				NumOfSigners:         key.NumOfSigners,
				Threshold:            key.Threshold,
				SignerApplicationFee: key.SignerApplicationFee,
				ArbitraryData:        key.ArbitraryData,
				ValidatorAddress:     key.ValidatorAddress,
			}
			return response, nil
		}
	}

	return nil, sdkerrors.Wrap(types.ErrInvalid, "Given validator address doesn't have a mapping with a judge address.")

	//return &types.QueryRegisteredJudgeAddressByValidatorAddressResponse{}, nil
}
