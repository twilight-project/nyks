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

func CmdProposeSweepAddress() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "propose-sweep-address [btc-address] [btc-script] [reserve-id] [round-id]",
		Short: "Broadcast message ProposeSweepAddress",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argBtcAddress := args[0]
			argBtcScript := args[1]
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

			msg := types.NewMsgProposeSweepAddress(
				argBtcAddress,
				argBtcScript,
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
