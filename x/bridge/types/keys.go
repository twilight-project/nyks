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

	// BtcBroadcastTxSweepMsgKey is the key for the btc broadcast sweep msg
	BtcBroadcastTxSweepMsgKey = forkstypes.HashString("BtcBroadcastTxSweepMsg")

	// BtcBroadcastTxRefundMsgKey is the key for the btc broadcast refund msg
	BtcBroadcastTxRefundMsgKey = forkstypes.HashString("BtcBroadcastTxRefundMsg")

	// BtcProposeRefundHashMsgKey is the key for the btc propose refund hash msg
	BtcProposeRefundHashMsgKey = forkstypes.HashString("BtcProposeRefundHashMsg")

	// UnsignedTxSweepMsgKey is the key for the unsigned tx sweep msg
	UnsignedTxSweepMsgKey = forkstypes.HashString("UnsignedTxSweepMsg")

	// UnsignedTxRefundMsgKey is the key for the unsigned tx refund msg
	UnsignedTxRefundMsgKey = forkstypes.HashString("UnsignedTxRefundMsg")

	// ProposeSweepAddressMsg is the key for the propose sweep address
	ProposeSweepAddressMsg = forkstypes.HashString("ProposeSweepAddressMsg")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

// GetBtcRegisterReserveAddressKey returns the following key format
// [HashString("BtcReserveAddressKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm][1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd]
func GetBtcRegisterReserveAddressKey(judgeAddress sdk.AccAddress, reserveAddress BtcAddress) []byte {
	if err := sdk.VerifyAddressFormat(judgeAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}
	return forkstypes.AppendBytes(BtcReserveAddressKey, judgeAddress.Bytes(), []byte(reserveAddress.BtcAddress))
}

// GetBtcRegisterReserveScriptKey returns the following key format
// [HashString("BtcReserveScriptKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm][1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd]
func GetBtcRegisterReserveScriptKey(judgeAddress sdk.AccAddress, reserveAddress BtcAddress) []byte {
	if err := sdk.VerifyAddressFormat(judgeAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}
	return forkstypes.AppendBytes(BtcReserveScriptKey, judgeAddress.Bytes(), []byte(reserveAddress.BtcAddress))
}

// GetRegisterJudgeAddressKey returns the following key format
// [HashString("JudgeAddressKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm]
func GetRegisterJudgeAddressKey(validatorAddress sdk.ValAddress) []byte {
	if err := sdk.VerifyAddressFormat(validatorAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}
	return forkstypes.AppendBytes(JudgeAddressKey, validatorAddress.Bytes())
}

// GetBtcWithdrawRequestKey returns the following key format
// [HashString("BtcWithdrawRequest")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm][1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm][1]]
func GetBtcWithdrawRequestKey(twilightAddress sdk.AccAddress, reserveAddress BtcAddress, withdrawAddress BtcAddress, withdrawAmount uint64) []byte {
	if err := sdk.VerifyAddressFormat(twilightAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid twilight address"))
	}

	withdrawAmountBuf := new(bytes.Buffer)
	err := binary.Write(withdrawAmountBuf, binary.LittleEndian, withdrawAmount)
	if err != nil {
		panic("Failed to convert uint64 to bytes")
	}
	return forkstypes.AppendBytes(BtcWithdrawRequestKey, twilightAddress.Bytes(), []byte(reserveAddress.BtcAddress), []byte(withdrawAddress.BtcAddress), withdrawAmountBuf.Bytes())
}

// GetBtcProposeRefundHashMsgKey returns the following key format
// [HashString("BtcProposeRefundHashMsgKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm][e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855]
func GetBtcProposeRefundHashMsgKey(judgeAddress sdk.AccAddress, refundHash string) []byte {
	if err := sdk.VerifyAddressFormat(judgeAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid judge address"))
	}

	return forkstypes.AppendBytes(BtcProposeRefundHashMsgKey, judgeAddress.Bytes(), []byte(refundHash))
}

// GetProposeSweepAddressMsgKey returns the following key format
// [HashString("ProposeSweepAddressMsgKey")][1][1]
func GetProposeSweepAddressMsgKey(reserveId uint64, roundId uint64) []byte {
	return generateMsgKey(ProposeSweepAddressMsg, reserveId, roundId)
}

// GetUnsignedTxSweepMsgKey returns the following key format
// [HashString("UnsignedTxSweepMsgKey")][1][1]
func GetUnsignedTxSweepMsgKey(reserveId uint64, roundId uint64) []byte {
	return generateMsgKey(UnsignedTxSweepMsgKey, reserveId, roundId)
}

// GetUnsignedTxRefundMsgKey returns the following key format
// [HashString("UnsignedTxRefundMsgKey")][1][1]
func GetUnsignedTxRefundMsgKey(reserveId uint64, roundId uint64) []byte {
	return generateMsgKey(UnsignedTxRefundMsgKey, reserveId, roundId)
}

// GetBtcSignRefundMsgKey returns the following key format
// [HashString("BtcSignRefundMsgKey")][1][1][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm]
func GetBtcSignRefundMsgKey(reserveId uint64, roundId uint64, btcOracleAddress sdk.AccAddress) []byte {
	msgKey := generateMsgKey(BtcSignRefundMsgKey, reserveId, roundId)
	return forkstypes.AppendBytes(msgKey, btcOracleAddress.Bytes())
}

// GetBtcSignSweepMsgKey returns the following key format
// [HashString("BtcSignSweepMsgKey")][1][1][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm]
func GetBtcSignSweepMsgKey(reserveId uint64, roundId uint64, btcOracleAddress sdk.AccAddress) []byte {
	msgKey := generateMsgKey(BtcSignSweepMsgKey, reserveId, roundId)
	return forkstypes.AppendBytes(msgKey, btcOracleAddress.Bytes())
}

// GetBtcSignRefundMsgPrefix returns the following key format
// [HashString("BtcSignRefundMsgKey")][1][1]
func GetBtcSignRefundMsgPrefix(reserveId uint64, roundId uint64) []byte {
	return generateMsgKey(BtcSignRefundMsgKey, reserveId, roundId)
}

// GetBtcSignSweepMsgPrefix returns the following key format
// [HashString("BtcSignSweepMsgKey")][1][1]
func GetBtcSignSweepMsgPrefix(reserveId uint64, roundId uint64) []byte {
	return generateMsgKey(BtcSignSweepMsgKey, reserveId, roundId)
}

// GetBtcBroadcastTxRefundMsgKey returns the following key format
// [HashString("BtcBroadcastTxRefundMsgKey")][1][1]
func GetBtcBroadcastTxRefundMsgKey(reserveId uint64, roundId uint64) []byte {
	return generateMsgKey(BtcBroadcastTxRefundMsgKey, reserveId, roundId)
}

// GetBtcBroadcastTxSweepMsgKey returns the following key format
// [HashString("BtcBroadcastTxSweepMsgKey")][1][1]
func GetBtcBroadcastTxSweepMsgKey(reserveId uint64, roundId uint64) []byte {
	return generateMsgKey(BtcBroadcastTxSweepMsgKey, reserveId, roundId)
}

// Helper functions to generate keys
func uint64ToBytes(value uint64) []byte {
	buf := new(bytes.Buffer)
	err := binary.Write(buf, binary.LittleEndian, value)
	if err != nil {
		panic("Failed to convert uint64 to bytes")
	}
	return buf.Bytes()
}

func generateMsgKey(hashKey []byte, reserveId uint64, roundId uint64) []byte {
	return forkstypes.AppendBytes(hashKey, uint64ToBytes(reserveId), uint64ToBytes(roundId))
}
