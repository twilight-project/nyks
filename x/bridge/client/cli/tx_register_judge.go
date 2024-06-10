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

func CmdRegisterJudge() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "register-judge [judge-address] [num-of-signers] [threshold] [signer-application-fee] [arbitrary-data]",
		Short: "Broadcast message RegisterJudge",
		Args:  cobra.ExactArgs(5),
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
			argArbitraryData := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRegisterJudge(
				argJudgeAddress,
				numOfSigners,
				threshold,
				argSignerApplicationFee,
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
