package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/auth/types"
	volttypes "github.com/twilight-project/nyks/x/volt/types"
)

// AccountKeeper defines the expected account keeper used for simulations (noalias)
type AccountKeeper interface {
	GetAccount(ctx sdk.Context, addr sdk.AccAddress) types.AccountI
	// Methods imported from account should be defined here
}

// BankKeeper defines the expected interface needed to retrieve account balances.
type BankKeeper interface {
	//SpendableCoins(ctx sdk.Context, addr sdk.AccAddress) sdk.Coins
	GetBalance(ctx sdk.Context, addr sdk.AccAddress, denom string) sdk.Coin
	MintCoins(ctx sdk.Context, moduleName string, amt sdk.Coins) error
	BurnCoins(ctx sdk.Context, moduleName string, amt sdk.Coins) error
	SendCoinsFromAccountToModule(ctx sdk.Context, senderAddr sdk.AccAddress, recipientModule string, amt sdk.Coins) error
	SendCoinsFromModuleToAccount(ctx sdk.Context, senderModule string, recipientAddr sdk.AccAddress, amt sdk.Coins) error
	// Methods imported from bank should be defined here
}

// VoltKeeper defines the expected interface needed for mapping of deposit addresses in a reserve
type VoltKeeper interface {
	SetBtcReserve(ctx sdk.Context, reserve *volttypes.BtcReserve) error
	GetBtcReserve(ctx sdk.Context, reserveId uint64) (*volttypes.BtcReserve, error)
	GetClearingAccount(ctx sdk.Context, twilightAddress sdk.AccAddress) (*volttypes.ClearingAccount, bool)
	SetClearingAccount(ctx sdk.Context, twilightAddress sdk.AccAddress, account *volttypes.ClearingAccount) error
	GetNextUnlockingReserve(ctx sdk.Context) (*uint64, *volttypes.BtcReserve, error)
}
