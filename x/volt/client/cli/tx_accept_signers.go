package cli

import (
	"encoding/json"
	"fmt"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/volt/types"
)

var _ = strconv.Itoa(0)

func CmdAcceptSigners() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "accept-signers [fragment-id] [signer-infos]",
		Short: "Broadcast message acceptSigners",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFragmentId, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argSignerInfos := args[1]
			signerInfos := []*types.SignerInfo{}
			if err := json.Unmarshal([]byte(argSignerInfos), &signerInfos); err != nil {
				return fmt.Errorf("failed to parse signer infos: %w", err)
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgAcceptSigners(
				argFragmentId,
				signerInfos,
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
