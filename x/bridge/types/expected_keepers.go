package types

import (
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/auth/types"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	nykstypes "github.com/twilight-project/nyks/x/forks/types"
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
	SendCoinsFromAccountToModule(ctx sdk.Context, senderAddr sdk.AccAddress, recipientModule string, amt sdk.Coins) error
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
	GetBtcReserve(ctx sdk.Context, reserveId uint64) (*volttypes.BtcReserve, error)
	RegisterNewBtcReserve(ctx sdk.Context, judgeAddress sdk.AccAddress, reserveAddress string) (uint64, error)
	SetBtcDeposit(ctx sdk.Context, btcDepositAddress BtcAddress, twilightAddress sdk.AccAddress, twilightStakingAmount uint64, btcSatoshiTestAmount uint64) error
	GetBtcDepositAddressByTwilightAddress(ctx sdk.Context, twilightAddress sdk.AccAddress) (btcDeposit *volttypes.BtcDepositAddress, found bool)
	GetClearingAccount(ctx sdk.Context, twilightAddress sdk.AccAddress) (*volttypes.ClearingAccount, bool)
	GetAllBtcRegisteredDepositAddresses(ctx sdk.Context) (btcDepositAddresses []volttypes.BtcDepositAddress)
	CheckBtcAddress(ctx sdk.Context, twilightAddress sdk.Address, btcAddress BtcAddress, newSatoshiTestAmount uint64) bool
	SetBtcWithdrawRequest(ctx sdk.Context, twilightAddress sdk.AccAddress, reserveId uint64, withdrawAddress string, withdrawAmount uint64) error
	GetBtcWithdrawRequest(ctx sdk.Context, twilightAddress sdk.AccAddress, reserveId uint64, withdrawAddress string, withdrawAmount uint64) (*volttypes.BtcWithdrawRequestInternal, bool)
	IterateBtcWithdrawRequests(ctx sdk.Context, cb func([]byte, *volttypes.BtcWithdrawRequestInternal) bool)
	CheckClearingAccountBalance(ctx sdk.Context, twilightAddress sdk.AccAddress, reserveId uint64, amount uint64) error
	CheckReserveWithdrawSnapshot(ctx sdk.Context, btcTxHex string, reserveId uint64, roundId uint64) (bool, error)
	CheckRefundTxSnapshot(ctx sdk.Context, btcTxHex string, reserveId uint64, roundId uint64) (bool, error)
	CheckBtcReserveExists(ctx sdk.Context, reserveId uint64) bool
}
