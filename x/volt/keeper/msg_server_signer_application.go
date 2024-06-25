package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/volt/types"
)

func (k msgServer) SignerApplication(goCtx context.Context, msg *types.MsgSignerApplication) (*types.MsgSignerApplicationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	signerAddress, err := sdk.AccAddressFromBech32(msg.SignerAddress)
	if err != nil {
		return nil, err
	}

	feeAmount := sdk.NewCoin("nyks", sdk.NewIntFromUint64(msg.ApplicationFee))

	// Get fragment with the id
	_, found := k.GetFragment(ctx, msg.FragmentId)
	if !found {
		return nil, types.ErrFragmentNotFound
	}

	// check if similar signer application already exists
	_, found = k.GetSignerApplicationBySignerAndFragmentId(ctx, msg.FragmentId, msg.SignerAddress, msg.BtcPubKey)
	if found {
		return nil, types.ErrSignerApplicationExists
	}

	// Check if signer has enough balance to pay the application fee
	balance := k.BankKeeper.GetBalance(ctx, signerAddress, "nyks")
	if balance.Amount.LT(sdk.NewIntFromUint64(msg.ApplicationFee)) {
		return nil, types.ErrInsufficientFunds
	}

	voltModuleAcc := k.accountKeeper.GetModuleAccount(ctx, types.ModuleName)
	if voltModuleAcc == nil {
		return nil, types.ErrVoltModuleAccountNotFound
	}

	// Deduct the application fee from the signer's account
	err = k.BankKeeper.SendCoinsFromAccountToModule(ctx, signerAddress, types.ModuleName, sdk.NewCoins(feeAmount))
	if err != nil {
		return nil, err
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
