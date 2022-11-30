package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	forkstypes "github.com/twilight-project/nyks/x/forks/types"
)

const (
	// ModuleName defines the module name
	ModuleName = "bridge"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_bridge"
)

var (
	// BtcAddressByTwilightAddressKey indexes btc address according to users twilight address
	BtcAddressByTwilightAddressKey = forkstypes.HashString("BtcAddressByTwilightAddressKey")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

// GetBtcAddressByTwilightAddressKey returns the following key format
// [HashString("BtcAddressByTwilightAddressKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm]
func GetBtcAddressByTwilightAddressKey(twilightAddress sdk.AccAddress) []byte {
	if err := sdk.VerifyAddressFormat(twilightAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}
	return forkstypes.AppendBytes(BtcAddressByTwilightAddressKey, twilightAddress.Bytes())
}
