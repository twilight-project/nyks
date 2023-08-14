package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/bridge/types"
)

var _ = strconv.Itoa(0)

func CmdQueryUnsignedTxSweep() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "unsigned-tx-sweep [tx-id] [judge-address]",
		Short: "Query UnsignedTxSweep",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqTxId := args[0]
			reqJudgeAddress := args[1]

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryUnsignedTxSweepRequest{

				TxId:         reqTxId,
				JudgeAddress: reqJudgeAddress,
			}

			res, err := queryClient.UnsignedTxSweep(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
