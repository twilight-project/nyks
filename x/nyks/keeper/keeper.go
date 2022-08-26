package keeper

import (
	"fmt"

	"github.com/tendermint/tendermint/libs/log"

	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	stakingkeeper "github.com/cosmos/cosmos-sdk/x/staking/keeper"
	"github.com/twilight-project/nyks/x/nyks/types"
)

// Check that our expected keeper types are implemented
var _ types.StakingKeeper = (*stakingkeeper.Keeper)(nil)

type (
	Keeper struct {
		cdc        codec.BinaryCodec // The wire codec for binary encoding/decoding.
		storeKey   sdk.StoreKey      // Unexposed key to access store from sdk.Context
		memKey     sdk.StoreKey
		paramstore paramtypes.Subspace

		// NOTE: If you add anything to this struct, add a nil check to ValidateMembers below!
		StakingKeeper *stakingkeeper.Keeper
	}
)

// Check for nil members
func (k Keeper) ValidateMembers() {
	if k.StakingKeeper == nil {
		panic("Nil StakingKeeper!")
	}
}

func NewKeeper(
	cdc codec.BinaryCodec,
	storeKey,
	memKey sdk.StoreKey,
	ps paramtypes.Subspace,
	stakingKeeper *stakingkeeper.Keeper,
) *Keeper {
	// set KeyTable if it has not already been set
	if !ps.HasKeyTable() {
		ps = ps.WithKeyTable(types.ParamKeyTable())
	}

	k := Keeper{
		cdc:        cdc,
		storeKey:   storeKey,
		memKey:     memKey,
		paramstore: ps,

		StakingKeeper: stakingKeeper,
	}

	return &k
}

func (k Keeper) logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}
