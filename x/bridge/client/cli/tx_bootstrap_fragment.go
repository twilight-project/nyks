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

func CmdBootstrapFragment() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "bootstrap-fragment [judge-address] [num-of-signers] [threshold] [signer-application-fee] [reserve-address] [reserve-script] [fragment-fee-bips] [arbitrary-data]",
		Short: "Broadcast message BootstrapFragment",
		Args:  cobra.ExactArgs(8),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argJudgeAddress := args[0]
			argNumOfSigners, err := strconv.ParseUint(args[1], 10, 64)
			if err != nil {
				return err
			}
			argThreshold, err := strconv.ParseUint(args[2], 10, 64)
			if err != nil {
				return err
			}
			argSignerApplicationFee, err := strconv.ParseUint(args[3], 10, 64)
			if err != nil {
				return err
			}
			argReserveAddress := args[4]
			argReserveScript := args[5]
			argFragmentFeeBips, err := strconv.ParseUint(args[6], 10, 64)
			if err != nil {
				return err
			}
			argArbitraryData := args[7]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgBootstrapFragment(
				argJudgeAddress,
				argNumOfSigners,
				argThreshold,
				argSignerApplicationFee,
				argReserveAddress,
				argReserveScript,
				argFragmentFeeBips,
				argArbitraryData,
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
