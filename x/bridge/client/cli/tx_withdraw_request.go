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
		Use:   "withdraw-btc-request [withdraw-address] [reserve-address] [withdraw-amount]",
		Short: "Broadcast message WithdrawRequest",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argWithdrawAddress := args[0]
			argReserveId, err := strconv.ParseUint(args[1], 10, 64)
			if err != nil {
				return err
			}

			argWithdrawAmount, err := strconv.ParseUint(args[2], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgWithdrawBtcRequest(
				argWithdrawAddress,
				argReserveId,
				argWithdrawAmount,
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
