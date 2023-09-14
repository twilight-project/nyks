package cli

import (
	"encoding/hex"
	"fmt"
	"strconv"
	"strings"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/bridge/types"
)

var _ = strconv.Itoa(0)

func CmdSweepProposal() *cobra.Command {
	var withdrawIdentifiersStr string

	cmd := &cobra.Command{
		Use:   "sweep-proposal [reserve-id] [new-reserve-address] [btc-block-number] [btc-relay-capacity-value] [btc-tx-hash] [unlock-height] [round-id]",
		Short: "Broadcast message SweepProposal",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argReserveId, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}
			argNewReserveAddress := args[1]
			argBtcBlockNumber, err := strconv.ParseUint(args[2], 10, 64)
			if err != nil {
				return err
			}
			argBtcRelayCapacityValue, err := strconv.ParseUint(args[3], 10, 64)
			if err != nil {
				return err
			}
			argBtcTxHash := args[4]
			argUnlockHeight, err := strconv.ParseUint(args[5], 10, 64)
			if err != nil {
				return err
			}
			argRoundId, err := strconv.ParseUint(args[6], 10, 64)
			if err != nil {
				return err
			}

			// Parse withdrawIdentifiers
			// Parse withdrawIdentifiers
			withdrawIdentifiersStrs := strings.Split(withdrawIdentifiersStr, ",")
			var withdrawIdentifiers [][]byte
			for _, idStr := range withdrawIdentifiersStrs {
				idBytes, err := hex.DecodeString(idStr)
				if err != nil {
					return fmt.Errorf("Invalid hex string for identifier: %s", err)
				}
				withdrawIdentifiers = append(withdrawIdentifiers, idBytes)
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSweepProposal(
				argReserveId,
				argNewReserveAddress,
				clientCtx.GetFromAddress().String(),
				argBtcBlockNumber,
				argBtcRelayCapacityValue,
				argBtcTxHash,
				argUnlockHeight,
				argRoundId,
				withdrawIdentifiers, // Add this to your NewMsgSweepProposal function
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)
	cmd.Flags().StringVarP(&withdrawIdentifiersStr, "withdraw-identifiers", "w", "", "Comma-separated list of withdraw identifiers")

	return cmd
}
