package cli

import (
	"os"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/twilight-project/nyks/x/bootstrap/types"
)

var _ = strconv.Itoa(0)

func CmdCreateValidatorWrapper() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-validator-wrapper [path/to/validator.json] [zk-oracle-address] [btc-oracle-address]",
		Short: "Broadcast message createValidatorWrapper",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Read the JSON file
			contents, err := os.ReadFile(args[0])
			if err != nil {
				return err
			}

			// Parse and validate the JSON contents to the Cosmos SDK MsgCreateValidator
			createValidator, err := parseAndValidateValidatorJSON(clientCtx.Codec, string(contents))
			if err != nil {
				return err
			}

			// Additional oracle address fields
			zkOracleAddress := args[1]
			btcOracleAddress := args[2]

			// Create the MsgCreateValidatorWrapper
			msg := types.NewMsgCreateValidatorWrapper(
				clientCtx.GetFromAddress().String(),
				&createValidator, // Passing the reference of MsgCreateValidator
				zkOracleAddress,
				btcOracleAddress,
			)

			// Validate the MsgCreateValidatorWrapper
			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			// Broadcast the transaction
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	// Flags can be added here

	return cmd
}
