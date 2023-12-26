package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/auth/types"
)

type GovKeeper interface {
	// Methods imported from gov should be defined here
}

type StakingKeeper interface {
	// Methods imported from staking should be defined here
}

type SlashingKeeper interface {
	// Methods imported from slashing should be defined here
}

type VoltKeeper interface {
	// Methods imported from volt should be defined here
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
