package keeper

import (
	"context"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/forks/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

const QUERY_ATTESTATIONS_LIMIT uint64 = 1000

func (k Keeper) GetAttestations(goCtx context.Context, req *types.QueryAttestationsRequest) (*types.QueryAttestationsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	limit := req.Limit
	if limit == 0 || limit > QUERY_ATTESTATIONS_LIMIT {
		limit = QUERY_ATTESTATIONS_LIMIT
	}

	var (
		attestations []types.Attestation
		count        uint64
		iterErr      error
	)

	reverse := strings.EqualFold(req.OrderBy, "desc")
	filter := req.Height > 0 || req.ProposalType != ""

	k.IterateAttestations(ctx, reverse, func(_ []byte, att types.Attestation) (abort bool) {
		proposal, err := k.UnpackAttestationProposal(&att)
		if err != nil {
			iterErr = sdkerrors.Wrap(sdkerrors.ErrUnpackAny, err.Error())
			return true
		}

		var match bool
		switch {
		case filter && proposal.GetHeight() == req.Height:
			attestations = append(attestations, att)
			match = true

		case filter && proposal.GetType().String() == req.ProposalType:
			attestations = append(attestations, att)
			match = true

		case !filter:
			// No filter provided, so we include the attestation. This is equivalent
			// to providing no query params or just limit and/or order_by.
			attestations = append(attestations, att)
			match = true
		}

		if match {
			count++
			if count >= limit {
				return true
			}
		}

		return false
	})
	if iterErr != nil {
		return nil, iterErr
	}

	return &types.QueryAttestationsResponse{Attestations: attestations}, nil
}
