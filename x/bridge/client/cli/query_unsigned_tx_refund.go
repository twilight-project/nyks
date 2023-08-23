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
		Use:   "unsigned-tx-refund [reserve-id] [judge-address] [btc-tx-prefix]",
		Short: "Query UnsignedTxRefund",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqReserveId, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}
			reqJudgeAddress := args[1]

			reqBtcPrefix := args[2]

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryUnsignedTxRefundRequest{

				ReserveId:    reqReserveId,
				JudgeAddress: reqJudgeAddress,
				BtcTxPrefix:  reqBtcPrefix,
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
