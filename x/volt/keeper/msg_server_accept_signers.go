package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/volt/types"
)

func (k msgServer) AcceptSigners(goCtx context.Context, msg *types.MsgAcceptSigners) (*types.MsgAcceptSignersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Retrieve the fragment from the store
	fragment, found := k.Keeper.GetFragment(ctx, msg.FragmentId)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrFragmentNotFound, "fragment %d not found", msg.FragmentId)
	}

	// Check if signer of the message is the judge of the fragment
	if fragment.JudgeAddress != msg.JudgeAddress {
		return nil, sdkerrors.Wrapf(types.ErrJudgeMismatch, "signer %s is not the judge of fragment %d", msg.JudgeAddress, msg.FragmentId)
	}

	// Check if the fragment already has the maximum number of signers
	if len(fragment.Signers) >= int(types.MaxSignersPerFragment) {
		return nil, sdkerrors.Wrapf(types.ErrMaxSignersReached, "fragment %d already has the maximum number of signers", msg.FragmentId)
	}

	// Add each signer application to the fragment
	for _, applicationId := range msg.SignerApplicationIds {
		application, found := k.Keeper.GetSignerApplication(ctx, msg.FragmentId, applicationId)
		if !found {
			return nil, sdkerrors.Wrapf(types.ErrApplicationNotFound, "signer application %d not found", applicationId)
		}

		// check this signer already exists in any of the fragments
		bool := k.GetExistingSignerInFragments(ctx, application.SignerAddress)

		if bool == true {
			return nil, sdkerrors.Wrapf(types.ErrSignerAlreadyExists, "signer %s already exists one of the fragments", application.SignerAddress)
		}

		newSigner := &types.FragmentSigners{
			FragmentID:           msg.FragmentId,
			SignerAddress:        application.SignerAddress,
			SignerStatus:         true,
			SignerBtcPublicKey:   application.BtcPubKey,
			SignerApplicationFee: application.ApplicationFee,
			SignerFeeBips:        application.FeeBips,
		}

		fragment.Signers = append(fragment.Signers, newSigner)
	}

	// Check if the fragment now has the maximum number of signers and update the status
	if len(fragment.Signers) >= int(types.MaxSignersPerFragment) {
		fragment.FragmentStatus = true
	}

	// Save the updated fragment back to the store
	err := k.Keeper.SetFragment(ctx, fragment)
	if err != nil {
		return nil, sdkerrors.Wrapf(types.ErrCouldNotSetFragment, fmt.Sprint(msg.FragmentId))
	}

	// Emit event and return response
	ctx.EventManager().EmitTypedEvent(
		&types.EventAcceptSigners{
			Message:      msg.Type(),
			FragmentId:   msg.FragmentId,
			JudgeAddress: msg.JudgeAddress,
		},
	)
	return &types.MsgAcceptSignersResponse{}, nil
}
