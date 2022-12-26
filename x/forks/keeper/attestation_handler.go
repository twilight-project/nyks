package keeper

import (
	"fmt"
	"math/big"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	bridgetypes "github.com/twilight-project/nyks/x/bridge/types"
	"github.com/twilight-project/nyks/x/forks/types"
)

// AttestationHandler processes `observed` Attestations
type AttestationHandler struct {
	// NOTE: If you add anything to this struct, add a nil check to ValidateMembers below!
	keeper *Keeper
}

// Check for nil members
func (a AttestationHandler) ValidateMembers() {
	if a.keeper == nil {
		panic("Nil keeper!")
	}
}

// Handle is the entry point for Attestation processing, only attestations with sufficient validator submissions
// should be processed through this function, solidifying their effect in chain state
func (a AttestationHandler) Handle(ctx sdk.Context, att types.Attestation, proposal types.BtcProposal) error {
	switch proposal := proposal.(type) {

	case *bridgetypes.MsgConfirmBtcDeposit:
		return a.handleConfirmBtcDeposit(ctx, *proposal)
	case *types.MsgSeenBtcChainTip:
		return a.handleSeenBtcChainTip(ctx, *proposal)

	default:
		panic(fmt.Sprintf("Invalid event type for attestations %s", proposal.GetType()))
	}
}

// handleSeenBtcChainTip handles the processing of a MsgSeenBtcChainTip
// Currently, we do not have post-processing to the function is empty
func (a AttestationHandler) handleSeenBtcChainTip(ctx sdk.Context, proposal types.MsgSeenBtcChainTip) error {
	return nil
}

// handleConfirmBtcDeposit handles the processing of a MsgConfirmBtcDeposit
func (a AttestationHandler) handleConfirmBtcDeposit(ctx sdk.Context, proposal bridgetypes.MsgConfirmBtcDeposit) error {

	mintAmount := sdk.NewIntFromUint64(proposal.DepositAmount)
	denom := "btc"

	coin := sdk.NewCoin(denom, mintAmount)

	moduleAddr := a.keeper.accountKeeper.GetModuleAddress(types.ModuleName)
	ctx.Logger().Error("ModuleAddr", "moduleAddr", moduleAddr)
	preMintBalance := a.keeper.bankKeeper.GetBalance(ctx, moduleAddr, coin.Denom)

	// Ensure that users are not bridging an impossible amount, only 2^256 - 1 (verify the logic if this check is necessary here)
	prevSupply := a.keeper.bankKeeper.GetSupply(ctx, coin.Denom)

	newSupply := new(big.Int).Add(prevSupply.Amount.BigInt(), sdk.NewIntFromUint64(proposal.DepositAmount).BigInt())
	if newSupply.BitLen() > 256 { // new supply overflows uint256
		a.keeper.logger(ctx).Error("Deposit Overflow",
			"proposal type", proposal.GetType(),
		)
		return sdkerrors.Wrap(types.ErrIntOverflowAttestation, "invalid supply after SendToCosmos attestation")
	}

	coins := sdk.Coins{coin}

	if err := a.keeper.bankKeeper.MintCoins(ctx, types.ModuleName, coins); err != nil {
		return sdkerrors.Wrapf(err, "unable to mint cosmos originated coins %v", coins)
	}

	postMintBalance := a.keeper.bankKeeper.GetBalance(ctx, moduleAddr, coin.Denom)
	if !postMintBalance.Sub(preMintBalance).Amount.Equal(sdk.NewIntFromUint64(proposal.DepositAmount)) {
		panic(fmt.Sprintf(
			"Somehow minted incorrect amount! Previous balance %v Post-mint balance %v proposal amount %v",
			preMintBalance.String(), postMintBalance.String(), proposal.DepositAmount),
		)
	}

	receiver, err := sdk.AccAddressFromBech32(proposal.TwilightDepositAddress)
	if err != nil {
		return sdkerrors.Wrapf(err, "invalid twilight deposit address %s", proposal.TwilightDepositAddress)
	}

	err = a.keeper.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, receiver, coins)
	if err != nil {
		// someone attempted to send tokens to a blacklisted user from Ethereum, log and send to Community pool
		hash, _ := proposal.ProposalHash()
		a.keeper.logger(ctx).Error("Could not send coins to the account",
			"cause", err.Error(),
			"proposal type", proposal.GetType(),
			"id", types.GetAttestationKey(proposal.GetHeight(), hash),
		)
	}

	return err // returns nil if no error occurred`
}
