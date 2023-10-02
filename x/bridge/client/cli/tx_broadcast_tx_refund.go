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

func CmdBroadcastTxRefund() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "broadcast-tx-refund [reserve-id] [round-id] [signed-refund-tx]",
		Short: "Broadcast message BroadcastTxRefund",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argReserveId, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}
			argRoundId, err := strconv.ParseUint(args[1], 10, 64)
			if err != nil {
				return err
			}
			argSignedRefundTx := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgBroadcastTxRefund(
				argReserveId,
				argRoundId,
				argSignedRefundTx,
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
