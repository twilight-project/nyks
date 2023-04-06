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

func CmdBroadcastRefund() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "broadcast-refund [judge-address] [signed-refund-tx] [signed-sweep-tx]",
		Short: "Broadcast message BroadcastRefund",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argJudgeAddress := args[0]
			argSignedRefundTx := args[1]
			argSignedSweepTx := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgBroadcastRefund(
				clientCtx.GetFromAddress().String(),
				argJudgeAddress,
				argSignedRefundTx,
				argSignedSweepTx,
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
