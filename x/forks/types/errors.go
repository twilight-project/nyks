package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/nyks module sentinel errors
var (
	ErrInternal                = sdkerrors.Register(ModuleName, 1, "internal")
	ErrDuplicate               = sdkerrors.Register(ModuleName, 2, "duplicate")
	ErrInvalid                 = sdkerrors.Register(ModuleName, 3, "invalid")
	ErrTimeout                 = sdkerrors.Register(ModuleName, 4, "timeout")
	ErrResetDelegateKeys       = sdkerrors.Register(ModuleName, 5, "can not set btcOracle address mapping more than once")
	ErrInvalidBtcPublicKey     = sdkerrors.Register(ModuleName, 6, "invalid btc public key")
	ErrNonContiguousEventNonce = sdkerrors.Register(ModuleName, 9, "non contiguous event nonce, expected: %v received: %v")
)
