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
		Use:   "bootstrap-fragment [judge-address] [num-of-signers] [threshold] [signer-application-fee] [reserve-address] [reserve-script] [arbitrary-data]",
		Short: "Broadcast message BootstrapFragment",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argJudgeAddress := args[0]
			argNumOfSigners, err := strconv.ParseUint(args[1], 10, 32)
			if err != nil {
				return err
			}
			numOfSigners := uint32(argNumOfSigners)
			argThreshold, err := strconv.ParseUint(args[2], 10, 32)
			if err != nil {
				return err
			}
			threshold := uint32(argThreshold)
			argSignerApplicationFee, err := strconv.ParseUint(args[3], 10, 64)
			if err != nil {
				return err
			}
			argReserveAddress := args[4]
			argReserveScript := args[5]
			argArbitraryData := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgBootstrapFragment(
				argJudgeAddress,
				numOfSigners,
				threshold,
				argSignerApplicationFee,
				argReserveAddress,
				argReserveScript,
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
