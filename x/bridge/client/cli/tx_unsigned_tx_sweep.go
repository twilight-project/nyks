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

func CmdUnsignedTxSweep() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "unsigned-tx-sweep [tx-id] [btc-unsigned-sweep-tx] [reserve-id] [round-id]",
		Short: "Broadcast message UnsignedTxSweep",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTxId := args[0]
			argBtcUnsignedSweepTx := args[1]
			argReserveId, err := strconv.ParseUint(args[2], 10, 64)
			if err != nil {
				return err
			}
			argRoundId, err := strconv.ParseUint(args[3], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUnsignedTxSweep(
				argTxId,
				argBtcUnsignedSweepTx,
				argReserveId,
				argRoundId,
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
