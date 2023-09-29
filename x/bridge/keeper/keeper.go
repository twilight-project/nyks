package keeper

import (
	"fmt"

	"github.com/tendermint/tendermint/libs/log"

	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	authkeeper "github.com/cosmos/cosmos-sdk/x/auth/keeper"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	stakingkeeper "github.com/cosmos/cosmos-sdk/x/staking/keeper"
	"github.com/twilight-project/nyks/x/bridge/types"
	nykskeeper "github.com/twilight-project/nyks/x/forks/keeper"
	voltkeeper "github.com/twilight-project/nyks/x/volt/keeper"
)

// Check that our expected keeper types are implemented
var _ types.NyksKeeper = (*nykskeeper.Keeper)(nil)

type (
	Keeper struct {
		cdc        codec.BinaryCodec
		storeKey   sdk.StoreKey
		memKey     sdk.StoreKey
		paramstore paramtypes.Subspace

		// NOTE: If you add anything to this struct, add a nil check to ValidateMembers below!
		StakingKeeper *stakingkeeper.Keeper
		NyksKeeper    *nykskeeper.Keeper
		VoltKeeper    *voltkeeper.Keeper
		accountKeeper *authkeeper.AccountKeeper
		BankKeeper    types.BankKeeper
	}
)

func NewKeeper(
	cdc codec.BinaryCodec,
	storeKey,
	memKey sdk.StoreKey,
	ps paramtypes.Subspace,
	stakingKeeper *stakingkeeper.Keeper,
	nyksKeeper *nykskeeper.Keeper,
	voltKeeper *voltkeeper.Keeper,
	accKeeper *authkeeper.AccountKeeper,
	bankKeeper types.BankKeeper,
) *Keeper {
	// set KeyTable if it has not already been set
	if !ps.HasKeyTable() {
		ps = ps.WithKeyTable(types.ParamKeyTable())
	}

	return &Keeper{

		cdc:        cdc,
		storeKey:   storeKey,
		memKey:     memKey,
		paramstore: ps,

		StakingKeeper: stakingKeeper,
		NyksKeeper:    nyksKeeper,
		accountKeeper: accKeeper,
		VoltKeeper:    voltKeeper,
		BankKeeper:    bankKeeper,
	}
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}

// GetBankKeeper returns the bank keeper.
func (k Keeper) GetBankKeeper() types.BankKeeper {
	return k.BankKeeper
}

// GetAccountKeeper returns the account keeper.
func (k Keeper) GetAccountKeeper() types.AccountKeeper {
	return *k.accountKeeper
}
