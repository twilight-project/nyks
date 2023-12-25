package app

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	zkos "github.com/twilight-project/nyks/x/zkos/types"
)

func CustomAnteHandler(anteHandler sdk.AnteHandler) sdk.AnteHandler {
	return func(ctx sdk.Context, tx sdk.Tx, simulate bool) (newCtx sdk.Context, err error) {
		// Extract messages from the transaction
		for _, msg := range tx.GetMsgs() {
			switch msg.(type) {
			case *zkos.MsgTransferTx, *zkos.MsgMintBurnTradingBtc:
				// Bypass fee processing for these messages
				return ctx, nil
			}
		}

		// For other message types, use the default ante handler
		return anteHandler(ctx, tx, simulate)
	}
}
