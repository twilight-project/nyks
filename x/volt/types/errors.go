package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/volt module sentinel errors
var (
	ErrBtcReserveMaxLimitReached = sdkerrors.Register(ModuleName, 1, "Btc max reserve limit reached")
	ErrBtcReserveNotFound        = sdkerrors.Register(ModuleName, 2, "Btc reserve not found")
)
