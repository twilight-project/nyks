package cli

import (
	"fmt"
	"strconv"
	"strings"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/bridge/types"
	volttypes "github.com/twilight-project/nyks/x/volt/types"
)

var _ = strconv.Itoa(0)

type TwilightAddressWithValue struct {
	Address string
	Value   uint64
}

type TwilightAddressesArray []TwilightAddressWithValue

func (ta *TwilightAddressesArray) Set(value string) error {
	parts := strings.Split(value, ":")
	if len(parts) != 2 {
		return fmt.Errorf("Invalid format for twilight address and value. Expected format: address:value")
	}

	address := parts[0]
	btcValue, err := strconv.ParseUint(parts[1], 10, 64)
	if err != nil {
		return fmt.Errorf("Invalid BTC value for twilight address: %s", err)
	}

	*ta = append(*ta, TwilightAddressWithValue{Address: address, Value: btcValue})
	return nil
}

func (ta *TwilightAddressesArray) Type() string {
	return "twilightAddressesArray"
}

func (ta *TwilightAddressesArray) String() string {
	var result []string
	for _, item := range *ta {
		result = append(result, fmt.Sprintf("%s:%d", item.Address, item.Value))
	}
	return strings.Join(result, ", ")
}

func CmdSweepProposal() *cobra.Command {
	var twilightAddresses TwilightAddressesArray

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

			var individualTwilightReserveAccounts []*volttypes.IndividualTwilightReserveAccount
			for _, ta := range twilightAddresses {
				individualTwilightReserveAccounts = append(individualTwilightReserveAccounts, &volttypes.IndividualTwilightReserveAccount{
					TwilightAddress: ta.Address,
					BtcValue:        ta.Value,
				})
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
				individualTwilightReserveAccounts,
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
