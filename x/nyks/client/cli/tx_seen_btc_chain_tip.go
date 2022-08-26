package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/nyks/types"
)

var _ = strconv.Itoa(0)

func CmdSeenBtcChainTip() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "seen-btc-chain-tip [height] [hash] [orchestrator-address]",
		Short: "Broadcast message seenBtcChainTip",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argHeight, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}
			argHash := args[1]
			argOrchestratorAddress := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSeenBtcChainTip(
				clientCtx.GetFromAddress().String(),
				argHeight,
				argHash,
				argOrchestratorAddress,
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
