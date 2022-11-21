package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/bridge module sentinel errors
var (
	ErrInvalid = sdkerrors.Register(ModuleName, 1, "invalid")
)
