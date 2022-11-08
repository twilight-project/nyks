package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/forks/types"
)

var _ = strconv.Itoa(0)

func CmdSetDelegateAddresses() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "set-delegate-addresses [validator-address] [orchestrator-address] [btc-public-key]",
		Short: "Broadcast message setDelegateAddresses",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argValidatorAddress := args[0]
			argOrchestratorAddress := args[1]
			argBtcPublicKey := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSetDelegateAddresses(
				clientCtx.GetFromAddress().String(),
				argValidatorAddress,
				argOrchestratorAddress,
				argBtcPublicKey,
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
