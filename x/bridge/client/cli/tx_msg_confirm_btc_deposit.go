package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/bridge/types"
)

var _ = strconv.Itoa(0)

func CmdMsgConfirmBtcDeposit() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "msg-confirm-btc-deposit [deposit-address] [deposit-amount] [input-address] [block-height] [block-hash] [cosmos-deposit-address] [btc-oracle-address]",
		Short: "Broadcast message MsgConfirmBtcDeposit",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDepositAddress := args[0]
			argDepositAmount, err := strconv.ParseUint(args[1], 10, 64)
			if err != nil {
				return err
			}
			argInputAddress := args[2]
			argBlockHeight, err := strconv.ParseUint(args[3], 10, 64)
			if err != nil {
				return err
			}
			argBlockHash := args[4]
			argTwilightDepositAddress := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgConfirmBtcDeposit(
				argDepositAddress,
				argDepositAmount,
				argInputAddress,
				argBlockHeight,
				argBlockHash,
				argTwilightDepositAddress,
				clientCtx.GetFromAddress().String(),
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
