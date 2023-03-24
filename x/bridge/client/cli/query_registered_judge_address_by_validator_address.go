package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/bridge/types"
)

var _ = strconv.Itoa(0)

func CmdRegisteredJudgeAddressByValidatorAddress() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "registered-judge-address-by-validator-address [validator-address]",
		Short: "Query RegisteredJudgeAddressByValidatorAddress",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqValidatorAddress := args[0]

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryRegisteredJudgeAddressByValidatorAddressRequest{

				ValidatorAddress: reqValidatorAddress,
			}

			res, err := queryClient.RegisteredJudgeAddressByValidatorAddress(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
