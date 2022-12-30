package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/forks/types"
)

var _ = strconv.Itoa(0)

func CmdDelegateKeysByBtcOracleAddress() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delegate-keys-by-btc-oracle-address [btc-oracle-address]",
		Short: "Query DelegateKeysByBtcOracleAddress",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqBtcOracleAddress := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryDelegateKeysByBtcOracleAddressRequest{

				BtcOracleAddress: reqBtcOracleAddress,
			}

			res, err := queryClient.DelegateKeysByBtcOracleAddress(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
