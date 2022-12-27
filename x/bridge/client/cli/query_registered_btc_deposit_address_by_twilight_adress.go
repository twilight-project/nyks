package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/bridge/types"
)

var _ = strconv.Itoa(0)

func CmdRegisteredBtcDepositAddressByTwilightAddress() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "registered-btc-deposit-address-by-twilight-address [twilight-deposit-address]",
		Short: "Query RegisteredBtcDepositAddressByTwilightAddress",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqTwilightDepositAddress := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryRegisteredBtcDepositAddressByTwilightAddressRequest{

				TwilightDepositAddress: reqTwilightDepositAddress,
			}

			res, err := queryClient.RegisteredBtcDepositAddressByTwilightAddress(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
