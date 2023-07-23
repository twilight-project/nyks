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

	KeyMintOrBurnTradingBtc = forkstypes.HashString("KeyMintOrBurnTradingBtc")
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
func GetMintOrBurnTradingBtcKey(encryptScalar string, twilightAddress string) []byte {
	return forkstypes.AppendBytes(KeyMintOrBurnTradingBtc, []byte(twilightAddress), []byte(encryptScalar))
}