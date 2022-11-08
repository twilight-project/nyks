package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	// ModuleName defines the module name
	ModuleName = "nyks"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_nyks"
)

var (
	// KeyOrchestratorAddress indexes the validator keys for an orchestrator
	KeyOrchestratorAddress = HashString("KeyOrchestratorAddress")

	// BtcPublicKeyByValidatorKey indexes cosmos validator account addresses
	BtcPublicKeyByValidatorKey = HashString("BtcPublicKeyValidatorKey")

	// ValidatorByBtcPublicKeyKey is used to index btc validator key
	ValidatorByBtcPublicKeyKey = HashString("ValidatorByBtcPublicKeyKey")

	// OracleAttestationKey attestation used in GetAttestationKey
	OracleAttestationKey = HashString("OracleAttestationKey")

	// LastBlockHeightByValidatorKey indexes lateset block height by validator
	LastBlockHeightByValidatorKey = HashString("LastBlockHeightByValidatorKey")

	// LastObservedBlockHeightKey indexes the latest block height
	LastObservedBlockHeightKey = HashString("LastObservedBlockHeightKey")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

// GetOrchestratorAddressKey returns the following key format
// prefix orchestrator address
// [HashString("KeyOrchestratorAddress")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm]
func GetOrchestratorAddressKey(orc sdk.AccAddress) []byte {
	if err := sdk.VerifyAddressFormat(orc); err != nil {
		panic(sdkerrors.Wrap(err, "invalid orchestrator address"))
	}
	return AppendBytes(KeyOrchestratorAddress, orc.Bytes())
}

// GetBtcPublicKeyByValidatorKey returns the following key format
// prefix cosmos-validator
// [HashString("BtcPublicKeyByValidatorKey")][twilightvaloper1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm]
func GetBtcPublicKeyByValidatorKey(validator sdk.ValAddress) []byte {
	if err := sdk.VerifyAddressFormat(validator); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}
	return AppendBytes(BtcPublicKeyByValidatorKey, validator.Bytes())
}

// GetValidatorByBtcPublicKeyKeyy returns the following key format
// prefix cosmos-validator
// HashString("ValidatorByBtcPublicKeyKey")[0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B]
func GetValidatorByBtcPublicKeyKey(btcPk BtcPublicKey) []byte {
	return AppendBytes(ValidatorByBtcPublicKeyKey, []byte(btcPk.GetBtcPublicKey()))
}

// GetAttestationKey returns the following key format
// prefix btc-block-height proposal-details-hash
// [0x0][0 0 0 0 0 0 0 1][fd1af8cec6c67fcf156f1b61fdf91ebc04d05484d007436e75342fc05bbff35a]
func GetAttestationKey(btcBlockHeight uint64, proposalHash []byte) []byte {
	return AppendBytes(OracleAttestationKey, UInt64Bytes(btcBlockHeight), proposalHash)
}

// GetLastBlockHeightByValidatorKey indexes lateset btc-block-height by validator
func GetLastBlockHeightByValidatorKey(validator sdk.ValAddress) []byte {
	if err := sdk.VerifyAddressFormat(validator); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}
	return AppendBytes(LastBlockHeightByValidatorKey, validator.Bytes())
}
