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

	// BtcSignRefundMsgKey is the key for the btc sign refund msg
	BtcSignRefundMsgKey = forkstypes.HashString("BtcSignRefundMsg")

	// BtcSignSweepMsgKey is the key for the btc sign sweep msg
	BtcSignSweepMsgKey = forkstypes.HashString("BtcSignSweepMsg")
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
		panic(sdkerrors.Wrap(err, "invalid twilight address"))
	}

	return forkstypes.AppendBytes(BtcWithdrawRequestKey, twilightAddress.Bytes(), []byte(reserveAddress.BtcAddress), []byte(withdrawAddress.BtcAddress), withdrawAmount.BigInt().Bytes())
}

// GetBtcSignRefundMsgKey returns the following key format
// [HashString("BtcSignRefundMsgKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm] [1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd][3045022100a6fbb0b1a49b65789e2c33a76c12488f66e12edf24a6ddacbe6a4e4e44f4d79f02205ad4c7e0bb27ae984e7f2cd9d41423f68b2a0c8aaee0f1c409bdd7e3f67d3c7d]
func GetBtcSignRefundMsgKey(btcOracleAddress sdk.AccAddress, reserveAddress BtcAddress, refundSignature string) []byte {
	if err := sdk.VerifyAddressFormat(btcOracleAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid btc oracle address"))
	}

	return forkstypes.AppendBytes(BtcSignRefundMsgKey, btcOracleAddress.Bytes(), []byte(reserveAddress.BtcAddress), []byte(refundSignature))
}

// GetBtcSignSweepMsgKey returns the following key format
// [HashString("BtcSignSweepMsgKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm] [1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd][3045022100a6fbb0b1a49b65789e2c33a76c12488f66e12edf24a6ddacbe6a4e4e44f4d79f02205ad4c7e0bb27ae984e7f2cd9d41423f68b2a0c8aaee0f1c409bdd7e3f67d3c7d]
func GetBtcSignSweepMsgKey(btcOracleAddress sdk.AccAddress, reserveAddress BtcAddress, sweepSignature string) []byte {
	if err := sdk.VerifyAddressFormat(btcOracleAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid btc oracle address"))
	}

	return forkstypes.AppendBytes(BtcSignSweepMsgKey, btcOracleAddress.Bytes(), []byte(reserveAddress.BtcAddress), []byte(sweepSignature))
}
