package cli

import (
	"strconv"
	"strings"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/bridge/types"
)

var _ = strconv.Itoa(0)

type StringArray []string

func (sa *StringArray) Set(value string) error {
	*sa = append(*sa, value)
	return nil
}

func (sa *StringArray) Type() string {
	return "stringArray"
}

func (sa *StringArray) String() string {
	return strings.Join(*sa, ", ")
}
func CmdSweepProposal() *cobra.Command {
	var twilightAddresses StringArray

	cmd := &cobra.Command{
		Use:   "sweep-proposal [reserve-id] [reserve-address] [btc-relay-capacity-value] [total-value] [private-pool-value] [public-value] [fee-pool] [btc-refund-tx] [btc-sweep-tx] [--twilight-address value]...",
		Short: "Broadcast message SweepProposal",
		Args:  cobra.ExactArgs(9),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argReserveId, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}
			argReserveAddress := args[1]
			argBtcRelayCapacityValue, err := strconv.ParseUint(args[2], 10, 64)
			if err != nil {
				return err
			}
			argTotalValue, err := strconv.ParseUint(args[3], 10, 64)
			if err != nil {
				return err
			}
			argPrivatePoolValue, err := strconv.ParseUint(args[4], 10, 64)
			if err != nil {
				return err
			}
			argPublicValue, err := strconv.ParseUint(args[5], 10, 64)
			if err != nil {
				return err
			}
			argFeePool, err := strconv.ParseUint(args[6], 10, 64)
			if err != nil {
				return err
			}

			argBtcRefundTx := args[7]
			argBtcSweepTx := args[8]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSweepProposal(
				argReserveId,
				argReserveAddress,
				clientCtx.GetFromAddress().String(),
				argBtcRelayCapacityValue,
				argTotalValue,
				argPrivatePoolValue,
				argPublicValue,
				argFeePool,
				twilightAddresses,
				argBtcRefundTx,
				argBtcSweepTx,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)
	cmd.Flags().VarP(&twilightAddresses, "twilight-address", "t", "Twilight Addresses")

	return cmd
}
