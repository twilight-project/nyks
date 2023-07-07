package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/zkos module sentinel errors
var (
	ErrTransferTxNotFound = sdkerrors.Register(ModuleName, 1, "could not find transfer tx")
)
