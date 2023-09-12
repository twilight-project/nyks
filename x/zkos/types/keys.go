package types

import (
	forkstypes "github.com/twilight-project/nyks/x/forks/types"
)

const (
	// ModuleName defines the module name
	ModuleName = "zkos"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_zkos"
)

var (
	// KeyTransferTx indexes the zkos transfer txs according to the tx id
	KeyTransferTx = forkstypes.HashString("KeyTransferTx")

	// KeyMintOrBurnTradingBtc indexes the mint or burn trading messages
	KeyMintOrBurnTradingBtc = forkstypes.HashString("KeyMintOrBurnTradingBtc")

	// KeyUsedQqAccount indexes the used QqAccounts
	KeyUsedQqAccount = forkstypes.HashString("KeyUsedQqAccount")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

// GetTransferTxKey returns the following key format
// prefix txid
// [HashString("KeyTransferTx")][1]
func GetTransferTxKey(txId string) []byte {
	return forkstypes.AppendBytes(KeyTransferTx, []byte(txId))
}

// GetMintOrBurnTradingBtcKey returns the following key format
// prefix twilightAddress
// [HashString("KeyMintOrBurnTradingBtc")][1]
func GetMintOrBurnTradingBtcKey(twilightAddress string, QqAccount string) []byte {
	return forkstypes.AppendBytes(KeyMintOrBurnTradingBtc, []byte(twilightAddress), []byte(QqAccount))
}

// GetUsedQqAccountKey returns the following key format
// [HashString("KeyUsedQqAccount")][QqAccount]
func GetUsedQqAccountKey(QqAccount string) []byte {
	return forkstypes.AppendBytes(KeyUsedQqAccount, []byte(QqAccount))
}
