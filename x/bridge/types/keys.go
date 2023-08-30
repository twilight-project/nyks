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

// GetBtcSignRefundMsgKey returns the following key format
// [HashString("BtcSignRefundMsgKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm][1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd][3045022100a6fbb0b1a49b65789e2c33a76c12488f66e12edf24a6ddacbe6a4e4e44f4d79f02205ad4c7e0bb27ae984e7f2cd9d41423f68b2a0c8aaee0f1c409bdd7e3f67d3c7d]
func GetBtcSignRefundMsgKey(btcOracleAddress sdk.AccAddress, reserveAddress BtcAddress, refundSignature string) []byte {
	if err := sdk.VerifyAddressFormat(btcOracleAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid btc oracle address"))
	}

	return forkstypes.AppendBytes(BtcSignRefundMsgKey, btcOracleAddress.Bytes(), []byte(reserveAddress.BtcAddress), []byte(refundSignature))
}

// GetBtcSignSweepMsgKey returns the following key format
// [HashString("BtcSignSweepMsgKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm][1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd][3045022100a6fbb0b1a49b65789e2c33a76c12488f66e12edf24a6ddacbe6a4e4e44f4d79f02205ad4c7e0bb27ae984e7f2cd9d41423f68b2a0c8aaee0f1c409bdd7e3f67d3c7d]
func GetBtcSignSweepMsgKey(btcOracleAddress sdk.AccAddress, reserveAddress BtcAddress, sweepSignatures string) []byte {
	if err := sdk.VerifyAddressFormat(btcOracleAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid btc oracle address"))
	}

	return forkstypes.AppendBytes(BtcSignSweepMsgKey, btcOracleAddress.Bytes(), []byte(reserveAddress.BtcAddress), []byte(sweepSignatures))
}

// GetBtcBroadcastTxSweepMsgKey returns the following key format
// [HashString("BtcBroadcastTxSweepMsgKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm][01000000015821f1bf602c89a57535286e7a59c302b3039c09e2d94bbf6464320fb0d3c5a2000000006a473044022075a48b0a69e66ea736d1aeae13dc6e8b6c7309636c45d6d01f2b43f8b3580a5a022068f1e72030c5cd2a5cdd6d99d195b5831008da88da6da79d1f91317a249fbbaa0121033686c32eeea239e2d7b2038f7312171b10ad76b0e146b676e4f4d4c708f0bb75ffffffff0288130000000000001976a91419134d474a759f7d3560b55ec977517a86e955f988ac7a110100000000001976a914f208a460bff15d809eafa80ee6cddb7ef486df7988ac00000000]
func GetBtcBroadcastTxSweepMsgKey(judgeAddress sdk.AccAddress, SignedSweepTx string) []byte {
	if err := sdk.VerifyAddressFormat(judgeAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid judge address"))
	}

	return forkstypes.AppendBytes(BtcBroadcastTxSweepMsgKey, judgeAddress.Bytes(), []byte(SignedSweepTx))
}

// GetBtcBroadcastTxRefundMsgKey returns the following key format
// [HashString("BtcBroadcastTxRefundMsgKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm][01000000015821f1bf602c89a57535286e7a59c302b3039c09e2d94bbf6464320fb0d3c5a2000000006a473044022075a48b0a69e66ea736d1aeae13dc6e8b6c7309636c45d6d01f2b43f8b3580a5a022068f1e72030c5cd2a5cdd6d99d195b5831008da88da6da79d1f91317a249fbbaa0121033686c32eeea239e2d7b2038f7312171b10ad76b0e146b676e4f4d4c708f0bb75ffffffff0288130000000000001976a91419134d474a759f7d3560b55ec977517a86e955f988ac7a110100000000001976a914f208a460bff15d809eafa80ee6cddb7ef486df7988ac00000000]
func GetBtcBroadcastTxRefundMsgKey(judgeAddress sdk.AccAddress, SignedRefundTx string) []byte {
	if err := sdk.VerifyAddressFormat(judgeAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid judge address"))
	}

	return forkstypes.AppendBytes(BtcBroadcastTxRefundMsgKey, judgeAddress.Bytes(), []byte(SignedRefundTx))
}

// GetBtcProposeRefundHashMsgKey returns the following key format
// [HashString("BtcProposeRefundHashMsgKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm][e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855]
func GetBtcProposeRefundHashMsgKey(judgeAddress sdk.AccAddress, refundHash string) []byte {
	if err := sdk.VerifyAddressFormat(judgeAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid judge address"))
	}

	return forkstypes.AppendBytes(BtcProposeRefundHashMsgKey, judgeAddress.Bytes(), []byte(refundHash))
}

// GetUnsignedTxSweepMsgKey returns the following key format
// [HashString("UnsignedTxSweepMsgKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm][4A5853994766261FC21283841EF51B740FBD9917CAEA4A1038663D216138294B]
func GetUnsignedTxSweepMsgKey(judgeAddress sdk.AccAddress, txId string) []byte {
	if err := sdk.VerifyAddressFormat(judgeAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid judge address"))
	}

	return forkstypes.AppendBytes(UnsignedTxSweepMsgKey, judgeAddress.Bytes(), []byte(txId))
}

// GetUnsignedTxRefundMsgKey returns the following key format
// [HashString("UnsignedTxRefundMsgKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm][1][bc1m]
func GetUnsignedTxRefundMsgKey(judgeAddress sdk.AccAddress, reserveId uint64, btcTxPrefix string) []byte {
	if err := sdk.VerifyAddressFormat(judgeAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid judge address"))
	}

	reserveIdBuf := new(bytes.Buffer)
	err := binary.Write(reserveIdBuf, binary.LittleEndian, reserveId)
	if err != nil {
		panic("Failed to convert uint64 to bytes")
	}

	return forkstypes.AppendBytes(UnsignedTxRefundMsgKey, judgeAddress.Bytes(), reserveIdBuf.Bytes(), []byte(btcTxPrefix))
}

// GetProposeSweepAddressMsgKey returns the following key format
// [HashString("ProposeSweepAddressMsgKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm][1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd]
func GetProposeSweepAddressMsgKey(judgeAddress sdk.AccAddress, reserveId uint64, btcAddress string) []byte {
	if err := sdk.VerifyAddressFormat(judgeAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid judge address"))
	}

	reserveIdBuf := new(bytes.Buffer)
	err := binary.Write(reserveIdBuf, binary.LittleEndian, reserveId)
	if err != nil {
		panic("Failed to convert uint64 to bytes")
	}

	return forkstypes.AppendBytes(ProposeSweepAddressMsg, judgeAddress.Bytes(), reserveIdBuf.Bytes(), []byte(btcAddress))
}
