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

	// BtcDepositKey is the key for the user deposit
	BtcDepositKey = forkstypes.HashString("BtcDepositKey")

	// BtcWithdrawRequestKey is the key for the user withdraw request
	BtcWithdrawRequestKey = forkstypes.HashString("BtcWithdrawRequestKey")

	// ReserveWithdrawPoolKey is the key for the reserve withdraw pool
	ReserveWithdrawPoolKey = forkstypes.HashString("ReserveWithdrawPoolKey")

	// NewSweepProposalReceivedKey is the key for the new sweep proposal received
	NewSweepProposalReceivedKey = forkstypes.HashString("NewSweepProposalReceivedKey")

	// ReserveWithdrawSnapshotKey is the key for the last withdraw snapshot
	ReserveWithdrawSnapshotKey = forkstypes.HashString("LastWithdrawSnapshotKey")

	// RefundTxSnapshotKey is the key for the last refund tx snapshot
	RefundTxSnapshotKey = forkstypes.HashString("LastRefundTxSnapshotKey")
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

// GetBtcDepositKey returns the following key format
// [HashString("BtcDepositKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm]
func GetBtcDepositKey(twilightAddress sdk.AccAddress) []byte {
	if err := sdk.VerifyAddressFormat(twilightAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid twilight address"))
	}

	return forkstypes.AppendBytes(BtcDepositKey, twilightAddress.Bytes())
}

// GetBtcWithdrawRequestKeyInternal returns the following key format
// [HashString("BtcWithdrawRequestKey")][twilight1ahx7f8wyertuus9r20284ej0asrs085ceqtfnm][reserveAddress][withdrawAddress][withdrawAmount]
func GetBtcWithdrawRequestKeyInternal(twilightAddress sdk.AccAddress, reserveId uint64, withdrawAddress string, withdrawAmount uint64) []byte {
	if err := sdk.VerifyAddressFormat(twilightAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid twilight address"))
	}

	withdrawAmountBuf := new(bytes.Buffer)
	err := binary.Write(withdrawAmountBuf, binary.LittleEndian, withdrawAmount)
	if err != nil {
		panic("Failed to convert uint64 to bytes")
	}

	reserveBufBytes := new(bytes.Buffer)
	err = binary.Write(reserveBufBytes, binary.LittleEndian, reserveId)
	if err != nil {
		panic("Failed to convert uint64 to bytes")
	}
	return forkstypes.AppendBytes(BtcWithdrawRequestKey, twilightAddress.Bytes(), reserveBufBytes.Bytes(), []byte(withdrawAddress), withdrawAmountBuf.Bytes())
}

// GetReserveWithdrawPoolKey returns the following key format
// [HashString("ReserveWithdrawPoolKey")][1]
func GetReserveWithdrawPoolKey(reserveId uint64) []byte {
	reserveBufBytes := new(bytes.Buffer)
	err := binary.Write(reserveBufBytes, binary.LittleEndian, reserveId)
	if err != nil {
		panic("Failed to convert uint64 to bytes")
	}
	return forkstypes.AppendBytes(ReserveWithdrawPoolKey, reserveBufBytes.Bytes())
}

// GetNewSweepProposalReceivedKey returns the following key format
// [HashString("NewSweepProposalReceivedKey")][1][1]
func GetNewSweepProposalReceivedKey() []byte {
	return NewSweepProposalReceivedKey
}

// GetReserveWithdrawSnapshotKey returns the following key format
// [HashString("LastReserveWithdrawSnapshotKey")][1][1]
func GetReserveWithdrawSnapshotKey(reserveId uint64, roundId uint64) []byte {
	reserveBufBytes := new(bytes.Buffer)
	err := binary.Write(reserveBufBytes, binary.LittleEndian, reserveId)
	if err != nil {
		panic("Failed to convert uint64 to bytes")
	}

	roundBufBytes := new(bytes.Buffer)
	err = binary.Write(roundBufBytes, binary.LittleEndian, roundId)
	if err != nil {
		panic("Failed to convert uint64 to bytes")
	}

	return forkstypes.AppendBytes(ReserveWithdrawSnapshotKey, reserveBufBytes.Bytes(), roundBufBytes.Bytes())
}

// GetLastRefundTxSnapshotKey returns the following key format
// [HashString("LastRefundTxSnapshotKey")][1][1]
func GetRefundTxSnapshotKey(reserveId uint64, roundId uint64) []byte {
	reserveBufBytes := new(bytes.Buffer)
	err := binary.Write(reserveBufBytes, binary.LittleEndian, reserveId)
	if err != nil {
		panic("Failed to convert uint64 to bytes")
	}

	roundBufBytes := new(bytes.Buffer)
	err = binary.Write(roundBufBytes, binary.LittleEndian, roundId)
	if err != nil {
		panic("Failed to convert uint64 to bytes")
	}

	return forkstypes.AppendBytes(RefundTxSnapshotKey, reserveBufBytes.Bytes(), roundBufBytes.Bytes())
}

// GetNewSweepProposalReceivedKey
