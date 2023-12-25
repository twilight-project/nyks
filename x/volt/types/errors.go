package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/volt module sentinel errors
var (
	ErrBtcReserveMaxLimitReached      = sdkerrors.Register(ModuleName, 1, "Btc max reserve limit reached")
	ErrBtcReserveNotFound             = sdkerrors.Register(ModuleName, 2, "Btc reserve not found")
	ErrInsufficientBtcValue           = sdkerrors.Register(ModuleName, 3, "Insufficient Btc value")
	ErrClearingAccountNotFound        = sdkerrors.Register(ModuleName, 4, "Clearing account not found")
	ErrCouldNotSetReserve             = sdkerrors.Register(ModuleName, 5, "Could not set reserve")
	ErrCouldNotSetReserveWithdrawPool = sdkerrors.Register(ModuleName, 6, "Could not set reserve withdraw pool")
	ErrCouldNotMarshalWithdrawPool    = sdkerrors.Register(ModuleName, 7, "Could not marshal withdraw pool")
	ErrBtcDepositAddressNotFound      = sdkerrors.Register(ModuleName, 8, "Btc deposit address not found")
	ErrCouldNotSetClearingAccount     = sdkerrors.Register(ModuleName, 9, "Could not set clearing account")
	ErrCouldNotReturnUserDeposit      = sdkerrors.Register(ModuleName, 10, "Could not return user deposit")
	ErrBtcSatoshiTestAmountNotEqual   = sdkerrors.Register(ModuleName, 11, "Btc satoshi test amount not equal")
	ErrInsufficientBalanceInReserve   = sdkerrors.Register(ModuleName, 12, "Insufficient balance in reserve")
	ErrSnapshotNotFound               = sdkerrors.Register(ModuleName, 13, "Snapshot not found")
	ErrInvalid                        = sdkerrors.Register(ModuleName, 14, "Invalid")
)
