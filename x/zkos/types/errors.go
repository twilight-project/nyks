package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/zkos module sentinel errors
var (
	ErrTransferTxNotFound             = sdkerrors.Register(ModuleName, 1, "could not find transfer tx")
	ErrMintOrBurnNotFound             = sdkerrors.Register(ModuleName, 2, "could not find mint or burn message")
	ErrInvalidCommitment              = sdkerrors.Register(ModuleName, 3, "invalid commitment")
	ErrClearingAccountNotFound        = sdkerrors.Register(ModuleName, 4, "could not find clearing account")
	ErrNotEnoughBalanceInPublic       = sdkerrors.Register(ModuleName, 5, "not enough balance in public pool")
	ErrReserveNotFound                = sdkerrors.Register(ModuleName, 6, "could not find reserve")
	ErrNotEnoughBalanceInPrivate      = sdkerrors.Register(ModuleName, 7, "not enough balance in private pool")
	ErrNotEnoughUserBalanceInReserves = sdkerrors.Register(ModuleName, 8, "not enough user balance in reserves")
	ErrInvalidTwilightAddress         = sdkerrors.Register(ModuleName, 9, "invalid twilight address")
	ErrInvalidInput                   = sdkerrors.Register(ModuleName, 10, "invalid input")
)
