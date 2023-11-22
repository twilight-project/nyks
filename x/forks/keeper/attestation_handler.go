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
	case *bridgetypes.MsgSweepProposal:
		return a.handleSweepProposal(ctx, *proposal)
	case *bridgetypes.MsgConfirmBtcWithdraw:
		return a.handleConfirmBtcWithdraw(ctx, *proposal)

	default:
		panic(fmt.Sprintf("Invalid event type for attestations %s", proposal.GetType()))
	}
}

// handleConfirmBtcDeposit handles the processing of a MsgConfirmBtcDeposit
func (a AttestationHandler) handleConfirmBtcDeposit(ctx sdk.Context, proposal bridgetypes.MsgConfirmBtcDeposit) error {

	mintAmount := sdk.NewIntFromUint64(proposal.DepositAmount)
	denom := "sats"

	coin := sdk.NewCoin(denom, mintAmount)

	moduleAddr := a.keeper.accountKeeper.GetModuleAddress(types.ModuleName)
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

	// Mint the coins
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

	// Update the twilight address with the new amount of coins
	receiver, err := sdk.AccAddressFromBech32(proposal.TwilightDepositAddress)
	if err != nil {
		return sdkerrors.Wrapf(err, "invalid twilight deposit address %s", proposal.TwilightDepositAddress)
	}

	err = a.keeper.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, receiver, coins)
	if err != nil {
		hash, _ := proposal.ProposalHash()
		a.keeper.logger(ctx).Error("Could not send coins to the account",
			"cause", err.Error(),
			"proposal type", proposal.GetType(),
			"id", types.GetAttestationKey(proposal.GetHeight(), hash),
		)
	}

	// Update the reserve mapping with the new amount of coins
	err = a.keeper.VoltKeeper.UpdateBtcReserveAfterMint(ctx, proposal.DepositAmount, receiver, proposal.ReserveAddress)
	if err != nil {
		hash, _ := proposal.ProposalHash()
		a.keeper.logger(ctx).Error("Could not update the reserve",
			"cause", err.Error(),
			"proposal type", proposal.GetType(),
			"id", types.GetAttestationKey(proposal.GetHeight(), hash),
		)
		return sdkerrors.Wrapf(err, "could not update the reserve %s", proposal.ReserveAddress)
	}

	return err // returns nil if no error occurred`
}

// handleSweepProposal handles the processing of a MsgSweepProposal
func (a AttestationHandler) handleSweepProposal(ctx sdk.Context, proposal bridgetypes.MsgSweepProposal) error {

	// Update the reserve mapping with the values of the proposal
	err := a.keeper.VoltKeeper.UpdateBtcReserveAfterSweepProposal(ctx, proposal.ReserveId, proposal.NewReserveAddress, proposal.JudgeAddress, proposal.BtcBlockNumber, proposal.BtcRelayCapacityValue, proposal.BtcTxHash, proposal.UnlockHeight, proposal.RoundId, proposal.WithdrawIdentifiers)
	if err != nil {
		hash, _ := proposal.ProposalHash()
		a.keeper.logger(ctx).Error("Could not update the reserve after sweep attestation",
			"cause", err.Error(),
			"proposal type", proposal.GetType(),
			"id", types.GetAttestationKey(proposal.GetHeight(), hash),
		)
		return sdkerrors.Wrapf(err, "could not update the reserve after sweep attestation %s", proposal.NewReserveAddress)
	}

	// Sweep was successful, now we need to mark processed withdraw requests as successful
	err = a.keeper.VoltKeeper.ConfirmWithdrawRequestsAfterSweepConfirmation(ctx, proposal.ReserveId, proposal.RoundId)
	if err != nil {
		hash, _ := proposal.ProposalHash()
		a.keeper.logger(ctx).Error("Could not confirm withdraw requests after sweep attestation",
			"cause", err.Error(),
			"proposal type", proposal.GetType(),
			"id", types.GetAttestationKey(proposal.GetHeight(), hash),
		)
		return sdkerrors.Wrapf(err, "could not confirm withdraw requests after sweep attestation %s", proposal.NewReserveAddress)
	}

	// now will prune the snapshots for the reserve to save storage space
	// Prune the Reserve Withdraw Snapshot
	a.keeper.VoltKeeper.PruneReserveWithdrawSnapshot(ctx, proposal.ReserveId, proposal.RoundId)

	// Prune the Refund Tx Snapshot
	a.keeper.VoltKeeper.PruneRefundTxSnapshot(ctx, proposal.ReserveId, proposal.RoundId)

	return nil
}

// handleConfirmBtcWithdraw handles the processing of a MsgConfirmBtcWithdraw
func (a AttestationHandler) handleConfirmBtcWithdraw(ctx sdk.Context, proposal bridgetypes.MsgConfirmBtcWithdraw) error {

	// sweepProposal, err := a.keeper.GetSweepProposalAttestationsForBtcSweepTx(ctx, proposal.TxHash)
	// if err != nil {
	// 	hash, _ := proposal.ProposalHash()
	// 	a.keeper.logger(ctx).Error("Could not find the sweep proposal for the btc withdraw attestation",
	// 		"cause", err.Error(),
	// 		"proposal type", proposal.GetType(),
	// 		"id", types.GetAttestationKey(proposal.GetHeight(), hash),
	// 	)
	// 	return sdkerrors.Wrapf(err, "could not find the sweep proposal for the btc withdraw attestation %s", proposal.ProposalHash)
	// } else {
	// 	// Handle the case when an attestation is found

	// 	// Update the reserve mapping with the values of the proposal

	// }
	return nil
}
