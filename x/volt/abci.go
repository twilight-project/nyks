package volt

//"github.com/twilight-project/nyks/x/volt/keeper"

// // EndBlocker is called at the end of every block
// // We need to update balance of an IndividualTwilightReserveAccount based on the Send and Multisend transactions in the block
// // That is to keep the balances in sync between x/bank and x/volt
// func EndBlocker(ctx sdk.Context, k Keeper) {
// 	block := ctx.Block()

// 	for _, tx := range block.Txs {
// 		var txObj sdk.Tx
// 		err := k.cdc.UnmarshalBinaryBare(tx, &txObj)
// 		if err != nil {
// 			panic(err)
// 		}

// 		for _, msg := range txObj.GetMsgs() {
// 			switch msg := msg.(type) {
// 			case *types.MsgSend:
// 				err = k.UpdateReserve(ctx, msg.FromAddress, msg.ToAddress, msg.Amount)
// 				if err != nil {
// 					panic(err)
// 				}

// 			case *types.MsgMultiSend:
// 				for _, input := range msg.Inputs {
// 					for _, output := range msg.Outputs {
// 						if input.Address.Equals(output.Address) {
// 							err = k.UpdateReserve(ctx, input.Address, output.Address, output.Coins)
// 							if err != nil {
// 								panic(err)
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// }
