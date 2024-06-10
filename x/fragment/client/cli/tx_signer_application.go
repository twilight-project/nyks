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

func CmdSignerApplication() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "signer-application [fragment-id] [application-fee] [btc-pub-key]",
		Short: "Broadcast message signerApplication",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFragmentId, err := cast.ToInt32E(args[0])
			if err != nil {
				return err
			}
			argApplicationFee, err := cast.ToInt32E(args[1])
			if err != nil {
				return err
			}
			argBtcPubKey := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSignerApplication(
				argFragmentId,
				argApplicationFee,
				argBtcPubKey,
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
