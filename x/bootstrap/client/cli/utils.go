package cli

// x/staking/client/cli/utils.go

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"os"

	"github.com/cosmos/cosmos-sdk/codec"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/staking/types"
)

// validator struct to define the fields of the validator
type ValidatorJSON struct {
	Description       types.Description     `json:"description"`
	CommissionRates   types.CommissionRates `json:"commission"`
	MinSelfDelegation string                `json:"min_self_delegation"`
	DelegatorAddress  string                `json:"delegator_address"`
	ValidatorAddress  string                `json:"validator_address"`
	PubKey            string                `json:"pubkey"` // In JSON, this will be a Base64-encoded string
	Value             string                `json:"value"`  // This should be a string representation of the coin, e.g., "1000coin"
}

func parseAndValidateValidatorJSON(cdc codec.Codec, path string) (types.MsgCreateValidator, error) {
	contents, err := os.ReadFile(path)
	if err != nil {
		return types.MsgCreateValidator{}, err
	}

	var valJSON ValidatorJSON
	if err := json.Unmarshal(contents, &valJSON); err != nil {
		return types.MsgCreateValidator{}, err
	}

	if valJSON.PubKey == "" {
		return types.MsgCreateValidator{}, fmt.Errorf("must specify a public key")
	}

	pubKeyBytes, err := base64.StdEncoding.DecodeString(valJSON.PubKey)
	if err != nil {
		return types.MsgCreateValidator{}, fmt.Errorf("failed to decode public key: %w", err)
	}

	var pk cryptotypes.PubKey
	if err := cdc.UnmarshalInterfaceJSON(pubKeyBytes, &pk); err != nil {
		return types.MsgCreateValidator{}, err
	}

	anyPubKey, err := codectypes.NewAnyWithValue(pk)
	if err != nil {
		return types.MsgCreateValidator{}, err
	}

	minSelfDelegation, ok := sdk.NewIntFromString(valJSON.MinSelfDelegation)
	if !ok {
		return types.MsgCreateValidator{}, fmt.Errorf("invalid minimum self delegation: %s", valJSON.MinSelfDelegation)
	}

	delegatorAddr, err := sdk.AccAddressFromBech32(valJSON.DelegatorAddress)
	if err != nil {
		return types.MsgCreateValidator{}, err
	}

	validatorAddr, err := sdk.ValAddressFromBech32(valJSON.ValidatorAddress)
	if err != nil {
		return types.MsgCreateValidator{}, err
	}

	value, err := sdk.ParseCoinNormalized(valJSON.Value)
	if err != nil {
		return types.MsgCreateValidator{}, err
	}

	msg := types.MsgCreateValidator{
		Description:       valJSON.Description,
		Commission:        valJSON.CommissionRates,
		MinSelfDelegation: minSelfDelegation,
		DelegatorAddress:  delegatorAddr.String(),
		ValidatorAddress:  validatorAddr.String(),
		Pubkey:            anyPubKey,
		Value:             value,
	}

	return msg, nil
}

// func buildCommissionRates(rateStr, maxRateStr, maxChangeRateStr string) (commission types.CommissionRates, err error) {
// 	if rateStr == "" || maxRateStr == "" || maxChangeRateStr == "" {
// 		return commission, errors.New("must specify all validator commission parameters")
// 	}

// 	rate, err := math.LegacyNewDecFromStr(rateStr)
// 	if err != nil {
// 		return commission, err
// 	}

// 	maxRate, err := math.LegacyNewDecFromStr(maxRateStr)
// 	if err != nil {
// 		return commission, err
// 	}

// 	maxChangeRate, err := math.LegacyNewDecFromStr(maxChangeRateStr)
// 	if err != nil {
// 		return commission, err
// 	}

// 	commission = types.NewCommissionRates(rate, maxRate, maxChangeRate)

// 	return commission, nil
// }
