package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/fragment/types"
)

var _ = strconv.Itoa(0)

func CmdAcceptSigners() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "accept-signers [fragment-id] [signer-addresses]",
		Short: "Broadcast message acceptSigners",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFragmentId, err := cast.ToInt32E(args[0])
			if err != nil {
				return err
			}

			argSignerAddresses := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgAcceptSigners(
				argFragmentId,
				argSignerAddresses,
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
