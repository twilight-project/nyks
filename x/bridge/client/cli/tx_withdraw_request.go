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

func CmdWithdrawRequest() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "withdraw-request [twilight-address] [withdraw-address] [reserve-id] [withdraw-amount]",
		Short: "Broadcast message WithdrawRequest",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTwilightAddress := args[0]
			argWithdrawAddress := args[1]
			argReserveId, err := strconv.ParseUint(args[2], 10, 64)
			if err != nil {
				return err
			}
			argWithdrawAmount, err := strconv.ParseUint(args[3], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgWithdrawRequest(
				clientCtx.GetFromAddress().String(),
				argTwilightAddress,
				argWithdrawAddress,
				argReserveId,
				argWithdrawAmount,
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
