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

func CmdSignRefund() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "sign-refund [reserve-id] [round-id] [signer-public-key] [refund-signature]",
		Short: "Broadcast message SignRefund",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argReserveId, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}
			argRoundId, err := strconv.ParseUint(args[1], 10, 64)
			if err != nil {
				return err
			}

			argSignerPublicKey := args[2]
			argRefundSignature := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSignRefund(
				argReserveId,
				argRoundId,
				argSignerPublicKey,
				argRefundSignature,
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
