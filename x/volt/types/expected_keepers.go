package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/auth/types"
)

type BridgeKeeper interface {
	// Methods imported from bridge should be defined here
}

// AccountKeeper defines the expected account keeper used for simulations (noalias)
type AccountKeeper interface {
	GetAccount(ctx sdk.Context, addr sdk.AccAddress) types.AccountI
	// Methods imported from account should be defined here
}

// BankKeeper defines the expected interface needed to retrieve account balances.
type BankKeeper interface {
	SpendableCoins(ctx sdk.Context, addr sdk.AccAddress) sdk.Coins
	// Methods imported from bank should be defined here
}

// BankHooks event hooks for bank sends
type BankHooks interface {
	TrackBeforeSend(ctx sdk.Context, from sdk.AccAddress, to sdk.AccAddress, amount sdk.Coins)       // Must be before any send is executed
	BlockBeforeSend(ctx sdk.Context, from sdk.AccAddress, to sdk.AccAddress, amount sdk.Coins) error // Must be before any send is executed
}
