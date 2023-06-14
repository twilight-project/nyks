package types

import (
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/auth/types"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	nykstypes "github.com/twilight-project/nyks/x/forks/types"
)

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

// NyksKeeper defines the expected interface needed for orchestrator/oracle related methods and proposals
type NyksKeeper interface {
	GetOrchestratorValidator(ctx sdk.Context, orch sdk.AccAddress) (validator stakingtypes.Validator, found bool)
	CheckOrchestratorValidatorInSet(ctx sdk.Context, orchestrator string) error
	ClaimHandlerCommon(ctx sdk.Context, msgAny *codectypes.Any, valAddr sdk.ValAddress, msg nykstypes.BtcProposal) error
}

// VoltKeeper defines the expected interface needed for mapping of deposit addresses in a reserve
type VoltKeeper interface {
	SetBtcReserve(ctx sdk.Context, judgeAddress sdk.AccAddress, reserveAddress string) error
	SetBtcAddressForClearingAccount(ctx sdk.Context, twilightAddress sdk.AccAddress, btcAddr BtcAddress) error
	GetBtcAddressByTwilightAddress(ctx sdk.Context, twilightAddress sdk.AccAddress) (btcAddress *BtcAddress, found bool)
}
