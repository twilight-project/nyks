package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/volt/types"
)

var _ = strconv.Itoa(0)

func CmdBtcWithdrawRequest() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "btc-withdraw-request [twilight-address]",
		Short: "Query BtcWithdrawRequest",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqTwilightAddress := args[0]

			reqReserveId, err := strconv.ParseUint(args[1], 10, 64)
			if err != nil {
				return err
			}

			reqBtcAddress := args[2]

			reqWithdrawAmount, err := strconv.ParseUint(args[3], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryBtcWithdrawRequestRequest{

				TwilightAddress: reqTwilightAddress,
				ReserveId:       reqReserveId,
				BtcAddress:      reqBtcAddress,
				WithdrawAmount:  reqWithdrawAmount,
			}

			res, err := queryClient.BtcWithdrawRequest(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
