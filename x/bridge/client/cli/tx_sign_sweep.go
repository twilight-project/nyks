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

func CmdSignSweep() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "sign-sweep [reserve-address] [signer-address] [sweep-signature] [btc-oracle-address]",
		Short: "Broadcast message SignSweep",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argReserveAddress := args[0]
			argSignerAddress := args[1]
			argSweepSignature := args[2]
			argBtcOracleAddress := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSignSweep(
				clientCtx.GetFromAddress().String(),
				argReserveAddress,
				argSignerAddress,
				argSweepSignature,
				argBtcOracleAddress,
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
