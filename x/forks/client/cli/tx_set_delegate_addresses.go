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
		Use:   "set-delegate-addresses [validator-address] [btc-oracle-address] [btc-public-key] [zk-oracle-address]",
		Short: "Broadcast message setDelegateAddresses",
		Args:  cobra.MinimumNArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argValidatorAddress := args[0]

			argBtcOracleAddress := args[1]

			// If btc-public-key is not provided, use an empty string
			argBtcPublicKey := ""
			if len(args) > 2 {
				argBtcPublicKey = args[2]
			}

			// If zk-oracle-address is not provided, use an empty string
			argZkOracleAddress := ""
			if len(args) > 3 {
				argZkOracleAddress = args[3]
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSetDelegateAddresses(
				argValidatorAddress,
				argBtcOracleAddress,
				argBtcPublicKey,
				argZkOracleAddress,
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
