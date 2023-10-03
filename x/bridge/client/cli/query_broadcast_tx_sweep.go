package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/bridge/types"
)

var _ = strconv.Itoa(0)

func CmdBroadcastTxSweepQuery() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "broadcast-tx-sweep [reserve-id] [round-id]",
		Short: "Query BroadcastTxSweep",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqReserveId, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}
			reqRoundId, err := strconv.ParseUint(args[1], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryBroadcastTxSweepRequest{
				ReserveId: reqReserveId,
				RoundId:   reqRoundId,
			}

			res, err := queryClient.BroadcastTxSweep(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
