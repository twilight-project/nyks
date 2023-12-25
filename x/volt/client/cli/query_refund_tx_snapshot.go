package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/volt/types"
)

var _ = strconv.Itoa(0)

func CmdRefundTxSnapshot() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "refund-tx-snapshot [reserve-id] [round-id]",
		Short: "Query RefundTxSnapshot",
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

			params := &types.QueryRefundTxSnapshotRequest{

				ReserveId: reqReserveId,
				RoundId:   reqRoundId,
			}

			res, err := queryClient.RefundTxSnapshot(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
