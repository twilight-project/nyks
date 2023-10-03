package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/zkos/types"
)

var _ = strconv.Itoa(0)

func CmdMintOrBurnTradingBtc() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "mint-or-burn-trading-btc [twilight-address]",
		Short: "Query MintOrBurnTradingBtc",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqTwilightAddress := args[0]

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryMintOrBurnTradingBtcRequest{

				TwilightAddress: reqTwilightAddress,
			}

			res, err := queryClient.MintOrBurnTradingBtc(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
