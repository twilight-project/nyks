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

func CmdUpdateBtcDepositAddress() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-btc-deposit-address [btc-deposit-address] [btc-satoshi-test-amount] [twilight-staking-amount] [twilight-address]",
		Short: "Broadcast message UpdateBtcDepositAddress (validator only)",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argBtcDepositAddress := args[0]
			argBtcSatoshiTestAmount, err := strconv.ParseUint(args[1], 10, 64)
			if err != nil {
				return err
			}
			argTwilightStakingAmount, err := strconv.ParseUint(args[2], 10, 64)
			if err != nil {
				return err
			}
			argTwilightAddress := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateBtcDepositAddress(
				argBtcDepositAddress,
				argBtcSatoshiTestAmount,
				argTwilightStakingAmount,
				argTwilightAddress,
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
