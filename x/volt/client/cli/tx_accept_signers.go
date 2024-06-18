package cli

import (
	"fmt"
	"strconv"
	"strings"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/volt/types"
)

var _ = strconv.Itoa(0)

func CmdAcceptSigners() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "accept-signers [fragment-id] [signer-application-ids]",
		Short: "Broadcast message acceptSigners",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFragmentId, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}
			applicationIdsStr := args[1]
			applicationIds := []uint64{}

			// Parse the comma-separated string into a slice of uint64
			for _, idStr := range strings.Split(applicationIdsStr, ",") {
				id, err := strconv.ParseUint(idStr, 10, 64)
				if err != nil {
					return fmt.Errorf("invalid application ID: %s", idStr)
				}
				applicationIds = append(applicationIds, id)
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgAcceptSigners(
				argFragmentId,
				applicationIds,
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
