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
		Use:   "register-deposit-address [deposit-address] [deposit-amount] [address-script] [twilight-deposit-address]",
		Short: "Broadcast message registerDepositAddress",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDepositAddress := args[0]
			argDepositAmount, err := strconv.ParseUint(args[1], 10, 64)
			if err != nil {
				return err
			}
			argAddressScript := args[2]
			//argTwilightDepositAddress := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRegisterDepositAddress(
				argDepositAddress,
				argDepositAmount,
				argAddressScript,
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
