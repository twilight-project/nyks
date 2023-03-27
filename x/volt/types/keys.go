package types

import (
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
	BtcReserveKey = forkstypes.HashString("BtcKeyReserve")

	// LastRegisteredReserveKey indexes the reserve LastRegisteredReserveKey
	LastRegisteredReserveKey = forkstypes.HashString("LastRegisteredReserveKey")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

// GetReserveKey returns the following key format
// prefix reserve-key, reserve-address
func GetReserveKey(reserveAdderss string) []byte {
	return forkstypes.AppendBytes(BtcReserveKey, []byte(reserveAdderss))
}
