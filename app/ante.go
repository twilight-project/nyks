package app

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// CustomFeeCheckHandler checks that the transaction fee is in 'sats' and then calls the next ante handler
func CustomFeeCheckHandler(next sdk.AnteHandler) sdk.AnteHandler {
	return func(ctx sdk.Context, tx sdk.Tx, simulate bool) (newCtx sdk.Context, err error) {
		feeTx, ok := tx.(sdk.FeeTx)
		if !ok {
			return ctx, sdkerrors.Wrap(sdkerrors.ErrTxDecode, "Tx must be a FeeTx")
		}

		fee := feeTx.GetFee()
		feeInSats := false
		for _, coin := range fee {
			if coin.Denom == "sats" && coin.Amount.IsPositive() {
				feeInSats = true
				break
			}
		}

		if !feeInSats {
			return ctx, sdkerrors.Wrap(sdkerrors.ErrInvalidCoins, "Fee must be positive and in sats")
		}

		// Call the next ante handler
		return next(ctx, tx, simulate)
	}
}
