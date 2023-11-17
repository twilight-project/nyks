package volt

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/volt/keeper"
	"github.com/twilight-project/nyks/x/volt/types"
)

// EndBlocker checks for Send and Multisend transactions in the block
func EndBlocker(ctx sdk.Context, k keeper.Keeper) {
	// Check if there is a new MsgProposeSweepAddress
	newSweepDetected, reserveId, roundId := k.CheckForNewSweepProposal(ctx)
	if !newSweepDetected {
		return // No new sweep proposal, so nothing to do
	}

	// Generate Withdrawal Snapshot
	generateWithdrawSnapshot(ctx, k, reserveId, roundId)

	// Generate Refund Transaction Snapshot
	generateRefundTxSnapshot(ctx, k, reserveId, roundId)
}

// generateWithdrawSnapshot generates a snapshot of the withdrawal pool for the current round
func generateWithdrawSnapshot(ctx sdk.Context, k keeper.Keeper, reserveId uint64, roundId uint64) {
	logger := k.Logger(ctx)

	// Check if there is a new MsgProposeSweepAddress
	newSweepDetected, reserveId, roundId := k.CheckForNewSweepProposal(ctx)
	if !newSweepDetected {
		return // No new sweep proposal, so nothing to do
	}

	// Fetch the ReserveWithdrawPool for the specified reserveId
	pool, found := k.GetReserveWithdrawPool(ctx, reserveId)
	if !found {
		logger.Error("ReserveWithdrawPool not found", "reserveId", reserveId)
		return
	}

	// Prepare to collect withdrawal requests
	var withdrawRequestSnaps []*types.WithdrawRequestSnap
	count := 0

	// Iterate through queued withdraw identifiers, up to maxOutgoingBtcOutputs
	for _, identifier := range pool.QueuedWithdrawIdentifiers {
		if count >= types.MaxOutgoingBtcOutputs {
			break
		}
		withdrawRequest, found := k.GetBtcWithdrawRequestByIdentifier(ctx, identifier)
		if !found {
			logger.Error("WithdrawRequest not found", "identifier", identifier)
			continue
		}
		snap := &types.WithdrawRequestSnap{
			WithdrawIdentifier: withdrawRequest.WithdrawIdentifier,
			WithdrawAddress:    withdrawRequest.WithdrawAddress,
			WithdrawAmount:     withdrawRequest.WithdrawAmount,
		}
		withdrawRequestSnaps = append(withdrawRequestSnaps, snap)
		count++
	}

	// Create the LastReserveWithdrawSnapshot
	snapshot := types.LastReserveWithdrawSnapshot{
		ReserveId:                reserveId,
		RoundId:                  roundId,
		WithdrawRequests:         withdrawRequestSnaps,
		EndBlockerHeightTwilight: ctx.BlockHeight(),
	}

	// Store the snapshot in the KVStore
	snapshotKey := types.GetLastWithdrawSnapshotKey(reserveId, roundId, ctx.BlockHeight())
	store := k.Store(ctx)
	store.Set(snapshotKey, k.Codec().MustMarshal(&snapshot))
}

// generateRefundTxSnapshot generates a snapshot of refund transactions for the current round
func generateRefundTxSnapshot(ctx sdk.Context, k keeper.Keeper, reserveId uint64, roundId uint64) {
	logger := k.Logger(ctx)

	// Fetch all clearing accounts for the given reserve
	clearingAccounts, found := k.GetAllClearingAccountsInaReserve(ctx, reserveId)
	if !found {
		logger.Error("No clearing accounts found for reserve", "reserveId", reserveId)
		return
	}

	// Prepare to collect refund transaction snapshots
	var refundTxSnaps []*types.RefundTxAccountSnap

	// Iterate through all clearing accounts and create refund transaction snapshots
	for _, account := range clearingAccounts {
		for _, balance := range account.ReserveAccountBalances {
			if balance.ReserveId != reserveId {
				continue // Only process balances for the specified reserveId
			}
			snap := &types.RefundTxAccountSnap{
				Amount:                      balance.Amount,
				BtcDepositAddress:           account.BtcDepositAddress,
				BtcDepositAddressIdentifier: account.BtcDepositAddressIdentifier,
			}
			refundTxSnaps = append(refundTxSnaps, snap)
		}
	}

	// Create the LastRefundTxSnapshot
	snapshot := types.LastRefundTxSnapshot{
		ReserveId:                reserveId,
		RoundId:                  roundId,
		RefundAccounts:           refundTxSnaps,
		EndBlockerHeightTwilight: ctx.BlockHeight(),
	}

	// Store the snapshot in the KVStore
	snapshotKey := types.GetLastRefundTxSnapshotKey(reserveId, roundId, ctx.BlockHeight())
	store := k.Store(ctx)
	store.Set(snapshotKey, k.Codec().MustMarshal(&snapshot))
}
