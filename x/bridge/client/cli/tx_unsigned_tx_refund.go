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

func CmdUnsignedTxRefund() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "unsigned-tx-refund [reserve-id] [round-id] [btc-unsigned-refund-tx]",
		Short: "Broadcast message UnsignedTxRefund",
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
			argBtcUnsignedRefundTx := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUnsignedTxRefund(
				argReserveId,
				argRoundId,
				argBtcUnsignedRefundTx,
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
