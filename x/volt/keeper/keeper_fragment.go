package keeper

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	forkstypes "github.com/twilight-project/nyks/x/forks/types"
	"github.com/twilight-project/nyks/x/volt/types"
)

// SetSignerApplication set a specific signerApplication in the store from its index

func (k msgServer) SetSignerApplication(ctx sdk.Context, msg *types.MsgSignerApplication) {

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetSignerApplicationFeeKey(msg.FragmentId, sdk.AccAddress(msg.SignerAddress))
	store.Set(aKey, k.cdc.MustMarshal(msg))
}

// RegisterNewFragment sets a new fragment in the store
func (k Keeper) RegisterNewFragment(ctx sdk.Context, judgeAddress sdk.AccAddress) (uint64, error) {

	// Get the latest fragment id
	// We keep fragment ids in a separate store and keep track of it as a counter
	LastRegisteredFragment := k.GetLastRegisteredFragment(ctx)
	fragmentId := LastRegisteredFragment + 1

	// Check if the fragment limit has been reached
	if (fragmentId) > types.FragmentMaxLimit {
		return 0, sdkerrors.Wrapf(types.ErrFragmentMaxLimitReached, fmt.Sprint(types.BtcReserveMaxLimit))
	}

	// Create a new fragment
	fragment := &types.Fragment{
		FragmentId:     fragmentId,
		FragmentStatus: false, // Initial status can be set to false or as needed
		JudgeAddress:   judgeAddress.String(),
		JudgeStatus:    "init", // Initial judge status can be set as needed
		Signers:        []*types.FragmentSigners{},
		FeePool:        0,
		FeeBips:        0,
		Reserves:       []*types.BtcReserve{},
	}

	// Set the fragment
	err := k.SetFragment(ctx, fragment)
	if err != nil {
		return 0, sdkerrors.Wrapf(types.ErrCouldNotSetFragment, fmt.Sprint(fragmentId))
	} else {
		k.setLastRegisteredFragment(ctx, fragmentId)
	}

	return fragmentId, nil
}

// SetFragment sets a fragment in the store
func (k Keeper) SetFragment(ctx sdk.Context, fragment *types.Fragment) error {

	store := ctx.KVStore(k.storeKey)
	fragmentKey := types.GetFragmentKey(fragment.FragmentId)
	store.Set(fragmentKey, k.cdc.MustMarshal(fragment))

	return nil
}

// setLastRegisteredFragment sets the latest fragment id
func (k Keeper) setLastRegisteredFragment(ctx sdk.Context, fragmentId uint64) {
	store := ctx.KVStore(k.storeKey)

	store.Set(types.LastRegisteredReserveKey, forkstypes.UInt64Bytes(fragmentId))
}

// GetLastRegisteredFragment returns the latest fragment id
func (k Keeper) GetLastRegisteredFragment(ctx sdk.Context) uint64 {
	store := ctx.KVStore(k.storeKey)
	bytes := store.Get(types.LastRegisteredFragmentKey)

	if len(bytes) == 0 {
		return 0
	}
	return forkstypes.UInt64FromBytes(bytes)
}
