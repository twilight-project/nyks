package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/twilight-project/nyks/x/bridge/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdMsgConfirmBtcDeposit())
	cmd.AddCommand(CmdRegisterDepositAddress())
	cmd.AddCommand(CmdRegisterReserveAddress())
	cmd.AddCommand(CmdRegisterJudge())
	cmd.AddCommand(CmdWithdrawRequest())
	cmd.AddCommand(CmdSweepProposal())
	cmd.AddCommand(CmdWithdrawTxSigned())
	cmd.AddCommand(CmdWithdrawTxFinal())
	cmd.AddCommand(CmdSignRefund())
	cmd.AddCommand(CmdBroadcastTxSweep())
	cmd.AddCommand(CmdSignSweep())
	cmd.AddCommand(CmdProposeRefundHash())
	cmd.AddCommand(CmdConfirmBtcWithdraw())
	cmd.AddCommand(CmdUnsignedTxSweep())
	cmd.AddCommand(CmdUnsignedTxRefund())
	cmd.AddCommand(CmdBroadcastTxRefund())
	cmd.AddCommand(CmdProposeSweepAddress())
	// this line is used by starport scaffolding # 1

	return cmd
}
