package keeper

import (
	"context"

	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/forks/types"
)

// claimHandlerCommon is an internal function that provides common code for processing claims once they are
// translated from the message to the Ethereum claim interface
func (k Keeper) ClaimHandlerCommon(ctx sdk.Context, msgAny *codectypes.Any, valAddr sdk.ValAddress, msg types.BtcProposal) error {

	// Add the claim to the store
	_, err := k.Attest(ctx, msg, valAddr, msgAny)
	if err != nil {
		return sdkerrors.Wrap(err, "err while creating an attestation")
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

	valAddr, err := k.CheckOrchestratorValidatorInSet(ctx, msg.BtcOracleAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not check orchstrator validator inset")
	}

	any, err := codectypes.NewAnyWithValue(msg)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not check Any value")
	}

	if err := sdk.VerifyAddressFormat(valAddr); err != nil {
		return nil, sdkerrors.Wrap(err, "invalid orchestrator validator address")
	}

	// Set the telemetry gauge for this oracle to the block number
	types.OracleBlockGauge.WithLabelValues(msg.BtcOracleAddress).Set(float64(msg.Height))

	err = k.ClaimHandlerCommon(ctx, any, valAddr, msg)
	if err != nil {
		return nil, err
	}

	return &types.MsgSeenBtcChainTipResponse{}, nil
}
