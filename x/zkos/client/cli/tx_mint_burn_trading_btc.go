package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/zkos/types"
)

var _ = strconv.Itoa(0)

func CmdMintBurnTradingBtc() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "mint-burn-trading-btc [mint-or-burn] [btc-value] [qq-account] [encrypt-scalar]",
		Short: "Broadcast message MintBurnTradingBtc",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argMintOrBurn, err := cast.ToBoolE(args[0])
			if err != nil {
				return err
			}
			argBtcValue, err := strconv.ParseUint(args[1], 10, 64)
			if err != nil {
				return err
			}
			argQqAccount := args[2]
			argEncryptScalar := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgMintBurnTradingBtc(
				argMintOrBurn,
				argBtcValue,
				argQqAccount,
				argEncryptScalar,
				clientCtx.GetFromAddress().String(),
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
