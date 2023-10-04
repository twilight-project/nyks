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

func CmdRegisterDepositAddress() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "register-deposit-address [btc-deposit-address] [btc-satoshi-test-amount] [twilight-staking-amont]",
		Short: "Broadcast message registerDepositAddress",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argBtcDepositAddress := args[0]
			argBtcSatoshiTestAmout, err := strconv.ParseUint(args[1], 10, 64)
			if err != nil {
				return err
			}
			argTwilightStakingAmout, err := strconv.ParseUint(args[2], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRegisterBtcDepositAddress(
				argBtcDepositAddress,
				argBtcSatoshiTestAmout,
				argTwilightStakingAmout,
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
