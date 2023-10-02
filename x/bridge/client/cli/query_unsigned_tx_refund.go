package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/bridge/types"
)

var _ = strconv.Itoa(0)

func CmdQueryUnsignedTxRefund() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "unsigned-tx-refund [reserve-id] [round-id]",
		Short: "Query UnsignedTxRefund",
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

			params := &types.QueryUnsignedTxRefundRequest{
				ReserveId: reqReserveId,
				RoundId:   reqRoundId,
			}

			res, err := queryClient.UnsignedTxRefund(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
