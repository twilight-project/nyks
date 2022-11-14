package keeper

import (
	"context"

	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/forks/types"
)

// checkOrchestratorValidatorInSet checks that the orchestrator refers to a validator that is
// currently in the set
func (k msgServer) checkOrchestratorValidatorInSet(ctx sdk.Context, orchestrator string) error {
	orchaddr, err := sdk.AccAddressFromBech32(orchestrator)
	if err != nil {
		return sdkerrors.Wrap(types.ErrInvalid, "acc address invalid")
	}
	validator, found := k.GetOrchestratorValidator(ctx, orchaddr)
	if !found {
		return sdkerrors.Wrap(types.ErrInvalid, "validator invalid")
	}

	// return an error if the validator isn't in the active set
	val := k.StakingKeeper.Validator(ctx, validator.GetOperator())
	if val == nil || !val.IsBonded() {
		return sdkerrors.Wrap(sdkerrors.ErrorInvalidSigner, "validator not in active set")
	}

	return nil
}

// claimHandlerCommon is an internal function that provides common code for processing claims once they are
// translated from the message to the Ethereum claim interface
func (k msgServer) claimHandlerCommon(ctx sdk.Context, msgAny *codectypes.Any, msg types.BtcProposal) error {
	// Add the claim to the store
	_, err := k.Attest(ctx, msg, msgAny)
	if err != nil {
		return sdkerrors.Wrap(err, "create attestation")
	}
	hash, err := msg.ProposalHash()
	if err != nil {
		return sdkerrors.Wrap(err, "unable to compute proposal hash")
	}

	// Emit the handle message event
	ctx.EventManager().EmitTypedEvent(
		&types.EventProposal{
			Message:       string(msg.GetType()),
			ProposalHash:  string(hash),
			AttestationId: string(types.GetAttestationKey(msg.GetHeight(), hash)),
		},
	)

	return nil
}

// SeenBtcChainTip is the main function that handles an incoming btc chain tip from a forkoracle.
func (k msgServer) SeenBtcChainTip(goCtx context.Context, msg *types.MsgSeenBtcChainTip) (*types.MsgSeenBtcChainTipResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	err := k.checkOrchestratorValidatorInSet(ctx, msg.BtcOracleAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not check orchstrator validator inset")
	}

	any, err := codectypes.NewAnyWithValue(msg)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not check Any value")
	}

	err = k.claimHandlerCommon(ctx, any, msg)
	if err != nil {
		return nil, err
	}

	return &types.MsgSeenBtcChainTipResponse{}, nil
}
