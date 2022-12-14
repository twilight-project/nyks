package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/bridge module sentinel errors
var (
	ErrInvalid           = sdkerrors.Register(ModuleName, 1, "invalid")
	ErrDuplicate         = sdkerrors.Register(ModuleName, 2, "duplicate")
	ErrResetBtcAddress   = sdkerrors.Register(ModuleName, 3, "can not set btc to twilight address mapping more than once")
	ErrInvalidBtcAddress = sdkerrors.Register(ModuleName, 4, "invalid btc address")
)
