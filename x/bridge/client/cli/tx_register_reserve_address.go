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

func CmdRegisterReserveAddress() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "register-reserve-address [fragment-id] [reserve-script] [reserve-address] [judge-address]",
		Short: "Broadcast message RegisterReserveAddress",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFragmentId, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}
			argReserveScript := args[0]
			argReserveAddress := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRegisterReserveAddress(
				argFragmentId,
				argReserveScript,
				argReserveAddress,
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
