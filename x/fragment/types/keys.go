package types

import (
	"bytes"
	"encoding/binary"

	sdk "github.com/cosmos/cosmos-sdk/types"
	forkstypes "github.com/twilight-project/nyks/x/forks/types"
)

const (
	// ModuleName defines the module name
	ModuleName = "fragment"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_fragment"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

var (
	// SignerApplicationFeeKey defines the key to store the value of SignerApplicationFee
	SignerApplicationFeeKey = KeyPrefix("SignerApplicationFeeKey")
)

// GetSignerApplicationFeeKey returns the key for the value of SignerApplicationFee
func GetSignerApplicationFeeKey(fragmentId uint64, signerAddress sdk.AccAddress) []byte {
	fragmentIdBuf := new(bytes.Buffer)
	err := binary.Write(fragmentIdBuf, binary.LittleEndian, fragmentId)
	if err != nil {
		panic("Failed to convert uint64 to bytes")
	}
	return forkstypes.AppendBytes(SignerApplicationFeeKey, fragmentIdBuf.Bytes(), signerAddress.Bytes())
}
