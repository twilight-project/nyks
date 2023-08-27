package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/twilight-project/nyks/x/bridge/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group bridge queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdRegisteredBtcDepositAddresses())

	cmd.AddCommand(CmdRegisteredReserveAddresses())

	cmd.AddCommand(CmdRegisteredBtcDepositAddress())

	cmd.AddCommand(CmdRegisteredBtcDepositAddressByTwilightAddress())

	cmd.AddCommand(CmdRegisteredJudgeAddressByValidatorAddress())

	cmd.AddCommand(CmdRegisteredJudges())

	cmd.AddCommand(CmdWithdrawBtcRequestAll())

	cmd.AddCommand(CmdSignRefundAll())

	cmd.AddCommand(CmdSignSweepAll())

	cmd.AddCommand(CmdBroadcastTxSweepAll())

	cmd.AddCommand(CmdProposeRefundHashAll())

	cmd.AddCommand(CmdQueryUnsignedTxSweep())

	cmd.AddCommand(CmdQueryUnsignedTxRefund())

	cmd.AddCommand(CmdUnsignedTxSweepAll())

	cmd.AddCommand(CmdUnsignedTxRefundAll())

	cmd.AddCommand(CmdBroadcastTxRefundAll())

	cmd.AddCommand(CmdProposeSweepAddressQuery())

	cmd.AddCommand(CmdProposeSweepAddressesAll())

	// this line is used by starport scaffolding # 1

	return cmd
}
