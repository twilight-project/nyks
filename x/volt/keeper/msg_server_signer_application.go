package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/volt/types"
)

func (k msgServer) SignerApplication(goCtx context.Context, msg *types.MsgSignerApplication) (*types.MsgSignerApplicationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Get fragment with the id
	_, found := k.GetFragment(ctx, msg.FragmentId)
	if !found {
		return nil, types.ErrFragmentNotFound
	}

	// Generate a new application ID
	lastApplicationID := k.Keeper.GetLastRegisteredApplicationId(ctx)
	newApplicationID := lastApplicationID + 1

	// Save the application data in the store
	signerApplication := types.SignerApplication{
		ApplicationId:  newApplicationID,
		FragmentId:     msg.FragmentId,
		ApplicationFee: msg.ApplicationFee,
		FeeBips:        msg.FeeBips,
		BtcPubKey:      msg.BtcPubKey,
		SignerAddress:  msg.SignerAddress,
	}

	k.SetSignerApplication(ctx, &signerApplication)
	k.Keeper.setLastRegisteredApplicationId(ctx, newApplicationID)

	// Emit event with the new application ID
	ctx.EventManager().EmitTypedEvent(
		&types.EventSignerApplication{
			Message:       msg.Type(),
			ApplicationId: newApplicationID,
		},
	)
	return &types.MsgSignerApplicationResponse{ApplicationId: newApplicationID}, nil
}
