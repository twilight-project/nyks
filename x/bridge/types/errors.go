package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/bridge module sentinel errors
var (
	ErrInvalid                     = sdkerrors.Register(ModuleName, 1, "invalid")
	ErrDuplicate                   = sdkerrors.Register(ModuleName, 2, "duplicate")
	ErrResetBtcAddress             = sdkerrors.Register(ModuleName, 3, "can not set btc to twilight address mapping more than once")
	ErrInvalidBtcAddress           = sdkerrors.Register(ModuleName, 4, "invalid btc address")
	ErrInvalidTwilightAddress      = sdkerrors.Register(ModuleName, 5, "invalid twilight address")
	ErrJudgeAddressNotFound        = sdkerrors.Register(ModuleName, 6, "judge address not found")
	ErrValidatorAddressNotFound    = sdkerrors.Register(ModuleName, 7, "validator address not found")
	ErrJudgeValidatorNotFound      = sdkerrors.Register(ModuleName, 8, "validator for the judge not found")
	ErrInsufficientBalance         = sdkerrors.Register(ModuleName, 9, "insufficient user balance in reserve")
	ErrInsufficientBalanceInBank   = sdkerrors.Register(ModuleName, 10, "insufficient balance in bank")
	ErrClearingAccountDoesNotExist = sdkerrors.Register(ModuleName, 11, "clearing account does not exist")
	ErrBtcAddressAlreadyExists     = sdkerrors.Register(ModuleName, 12, "btc address already exists")
)
