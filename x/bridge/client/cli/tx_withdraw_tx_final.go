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

func CmdWithdrawTxFinal() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "withdraw-tx-final [judge-address] [btc-tx]",
		Short: "Broadcast message WithdrawTxFinal",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argJudgeAddress := args[0]
			argBtcTx := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgWithdrawTxFinal(
				clientCtx.GetFromAddress().String(),
				argJudgeAddress,
				argBtcTx,
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
