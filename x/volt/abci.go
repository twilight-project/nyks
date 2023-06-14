package volt

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/volt/keeper"
)

// EndBlocker checks for Send and Multisend transactions in the block
func EndBlocker(ctx sdk.Context, k keeper.Keeper) {
	// // Get all transactions in the block
	// txs := ctx.Block().Txs

	// // Iterate over the transactions
	// for _, tx := range txs {
	// 	// Check if the transaction is of type Send or Multisend
	// 	if sendTx, ok := tx.(banktypes.MsgSend); ok {
	// 		// Call UpdateTransfersInClearing for Send transactions
	// 		err := k.UpdateTransfersInClearing(ctx, sendTx.FromAddress, sendTx.ToAddress, sendTx.Amount)
	// 		if err != nil {
	// 			panic(err)
	// 		}
	// 	} else if multiSendTx, ok := tx.(banktypes.MsgMultiSend); ok {
	// 		// Call UpdateTransfersInClearing for each input-output pair in Multisend transactions
	// 		for _, input := range multiSendTx.Inputs {
	// 			for _, output := range multiSendTx.Outputs {
	// 				err := k.UpdateTransfersInClearing(ctx, input.Address, output.Address, output.Coins)
	// 				if err != nil {
	// 					panic(err)
	// 				}
	// 			}
	// 		}
	// 	}
	// }
}
