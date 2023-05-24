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
	// BtcAddressForClearingAccountKey indexes btc address according to users twilight address
	BtcAddressForClearingAccountKey = forkstypes.HashString("BtcAddressForClearingAccountKey")

	// KeyReserve indexes the reserve KeyReserve
	BtcReserveKey = forkstypes.HashString("BtcKeyReserve")

	// LastRegisteredReserveKey indexes the reserve LastRegisteredReserveKey
	LastRegisteredReserveKey = forkstypes.HashString("LastRegisteredReserveKey")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

// GetBtcAddressForClearingAccountKey returns the following key format
// [HashString("GetBtcAddressForClearingAccountKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm]
func GetBtcAddressForClearingAccountKey(twilightAddress sdk.AccAddress) []byte {
	if err := sdk.VerifyAddressFormat(twilightAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}
	return forkstypes.AppendBytes(BtcAddressForClearingAccountKey, twilightAddress.Bytes())
}

// GetReserveKey returns the following key format
// prefix reserve-key, reserve-address
func GetReserveKey(reserveId uint64) []byte {
	reserveBufBytes := new(bytes.Buffer)
	err := binary.Write(reserveBufBytes, binary.LittleEndian, reserveId)
	if err != nil {
		panic("Failed to convert uint64 to bytes")
	}
	return forkstypes.AppendBytes(BtcReserveKey, reserveBufBytes.Bytes())
}
