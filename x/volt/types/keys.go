package types

import (
	"bytes"
	"encoding/binary"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
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
	// TwilightClearingAccountKey indexes clearing accounts according to users twilight address
	TwilightClearingAccountKey = forkstypes.HashString("TwilightClearingAccountKey")

	// KeyReserve indexes the reserve KeyReserve
	BtcReserveKey = forkstypes.HashString("BtcKeyReserve")

	// LastRegisteredReserveKey indexes the reserve LastRegisteredReserveKey
	LastRegisteredReserveKey = forkstypes.HashString("LastRegisteredReserveKey")

	// WithdrawPoolKey indexes the reserve ReserveWithdrawPool
	WithdrawPoolKey = forkstypes.HashString("WithdrawPoolKey")

	// LastUnlockedReserveKey indexes the reserve LastUnlockedReserveKey
	LastUnlockedReserveKey = forkstypes.HashString("LastUnlockedReserveKey")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

// GetClearingAccountKey returns the following key format
// [HashString("GetClearingAccountKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm]
func GetClearingAccountKey(twilightAddress sdk.AccAddress) []byte {
	if err := sdk.VerifyAddressFormat(twilightAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}
	return forkstypes.AppendBytes(TwilightClearingAccountKey, twilightAddress.Bytes())
}

// GetReserveKey returns the following key format
// prefix [LastRegisteredReserveKey][1]
func GetReserveKey(reserveId uint64) []byte {
	reserveBufBytes := new(bytes.Buffer)
	err := binary.Write(reserveBufBytes, binary.LittleEndian, reserveId)
	if err != nil {
		panic("Failed to convert uint64 to bytes")
	}
	return forkstypes.AppendBytes(BtcReserveKey, reserveBufBytes.Bytes())
}

// GetWithdrawPoolKey returns the following key format
// prefix reserve-key
func GetWithdrawPoolKey(reserveId uint64) []byte {
	reserveBufBytes := new(bytes.Buffer)
	err := binary.Write(reserveBufBytes, binary.LittleEndian, reserveId)
	if err != nil {
		panic("Failed to convert uint64 to bytes")
	}
	return forkstypes.AppendBytes(WithdrawPoolKey, reserveBufBytes.Bytes())
}
