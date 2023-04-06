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

	// BtcReserveAddressKey indexes btc address according to btc address
	BtcReserveAddressKey = forkstypes.HashString("BtcReserveAddressKey")

	// BtcReserveScriptKey indexes btc reserve script according to btc address
	BtcReserveScriptKey = forkstypes.HashString("BtcReserveScriptKey")

	// JudgeAddressKey indexes judge address according to the validator address
	JudgeAddressKey = forkstypes.HashString("JudgeAddressKey")

	// BtcWithdrawRequest is the key for the btc withdraw request
	BtcWithdrawRequestKey = forkstypes.HashString("BtcWithdrawRequest")
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

// GetBtcRegisterReserveAddressKey returns the following key format
// [HashString("BtcReserveAddressKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm] [1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd]
func GetBtcRegisterReserveAddressKey(judgeAddress sdk.AccAddress, reserveAddress BtcAddress) []byte {
	if err := sdk.VerifyAddressFormat(judgeAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}
	return forkstypes.AppendBytes(BtcReserveAddressKey, judgeAddress.Bytes(), []byte(reserveAddress.BtcAddress))
}

// GetBtcRegisterReserveScriptKey returns the following key format
// [HashString("BtcReserveScriptKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm] [1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd]
func GetBtcRegisterReserveScriptKey(judgeAddress sdk.AccAddress, reserveAddress BtcAddress) []byte {
	if err := sdk.VerifyAddressFormat(judgeAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}
	return forkstypes.AppendBytes(BtcReserveScriptKey, judgeAddress.Bytes(), []byte(reserveAddress.BtcAddress))
}

// GetRegisterJudgeAddressKey returns the following key format
// [HashString("JudgeAddressKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm] [twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm]
func GetRegisterJudgeAddressKey(validatorAddress sdk.ValAddress) []byte {
	if err := sdk.VerifyAddressFormat(validatorAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}
	return forkstypes.AppendBytes(JudgeAddressKey, validatorAddress.Bytes())
}

// GetBtcWithdrawRequestKey returns the following key format
// [HashString("BtcWithdrawRequest")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm] [1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm][1]]
func GetBtcWithdrawRequestKey(twilightAddress sdk.AccAddress, reserveAddress BtcAddress, withdrawAddress BtcAddress, withdrawAmount sdk.Int) []byte {
	if err := sdk.VerifyAddressFormat(twilightAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}

	return forkstypes.AppendBytes(BtcWithdrawRequestKey, twilightAddress.Bytes(), []byte(reserveAddress.BtcAddress), []byte(withdrawAddress.BtcAddress), withdrawAmount.BigInt().Bytes())
}
