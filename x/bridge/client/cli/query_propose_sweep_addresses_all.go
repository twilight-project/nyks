package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/bridge/types"
)

var _ = strconv.Itoa(0)

func CmdProposeSweepAddressesAll() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "propose-sweep-addresses-all [limit]",
		Short: "Query ProposeSweepAddressesAll",
		Args:  cobra.MaximumNArgs(1), // Allow up to 1 argument
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			var reqLimit uint64 = 0

			// Check if limit argument is provided
			if len(args) > 0 {
				reqLimit, err = strconv.ParseUint(args[0], 10, 64)
				if err != nil {
					return err
				}
			}

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryProposeSweepAddressesAllRequest{
				Limit: reqLimit,
			}

			res, err := queryClient.ProposeSweepAddressesAll(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
