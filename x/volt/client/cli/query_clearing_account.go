package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/volt/types"
)

var _ = strconv.Itoa(0)

func CmdClearingAccount() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "clearing-account [twilight-address]",
		Short: "Query ClearingAccount",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqTwilightAddress := args[0]

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryClearingAccountRequest{

				TwilightAddress: reqTwilightAddress,
			}

			res, err := queryClient.ClearingAccount(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
