package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	forkstypes "github.com/twilight-project/nyks/x/forks/types"
)

const (
	// ModuleName defines the module name
	ModuleName = "volt"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_volt"
)

var (
	// KeyReserve indexes the reserve KeyReserve
	ReserveKey = forkstypes.HashString("KeyReserve")

	// LastRegisteredReserveKey indexes the reserve LastRegisteredReserveKey
	LastRegisteredReserveKey = forkstypes.HashString("LastRegisteredReserveKey")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

// GetReserveKey returns the following key format
// prefix reserve-key, judge address, reserve-nonce
func GetReserveKey(judgeAddress sdk.AccAddress, reserveNonce uint64) []byte {
	return forkstypes.AppendBytes(ReserveKey, judgeAddress.Bytes(), forkstypes.UInt64Bytes(reserveNonce))
}
