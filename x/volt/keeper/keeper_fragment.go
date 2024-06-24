package keeper

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	forkstypes "github.com/twilight-project/nyks/x/forks/types"
	"github.com/twilight-project/nyks/x/volt/types"
)

// SetSignerApplication set a specific signerApplication in the store from its index

func (k msgServer) SetSignerApplication(ctx sdk.Context, msg *types.SignerApplication) {

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetSignerApplicationFeeKey(msg.FragmentId, msg.ApplicationId)
	store.Set(aKey, k.cdc.MustMarshal(msg))
}

// RegisterNewFragment sets a new fragment in the store
func (k Keeper) RegisterNewFragment(ctx sdk.Context, judgeAddress sdk.AccAddress, threshold uint64, applicationFee uint64, numOfSigners uint64, fragmentFeeBips uint64, arbitraryData string) (uint64, error) {

	// Get the latest fragment id
	// We keep fragment ids in a separate store and keep track of it as a counter
	LastRegisteredFragment := k.GetLastRegisteredFragment(ctx)
	fragmentId := LastRegisteredFragment + 1

	// Check if the fragment limit has been reached
	if (fragmentId) > types.FragmentMaxLimit {
		return 0, sdkerrors.Wrapf(types.ErrFragmentMaxLimitReached, fmt.Sprint(types.FragmentMaxLimit))
	}

	// Create a new fragment
	fragment := &types.Fragment{
		FragmentId:           fragmentId,
		FragmentStatus:       false, // Initial status can be set to false or as needed
		JudgeAddress:         judgeAddress.String(),
		JudgeStatus:          true,
		Signers:              []*types.FragmentSigners{},
		SignerApplicationFee: applicationFee,
		Threshold:            threshold,
		FeePool:              0,
		FragmentFeeBips:      fragmentFeeBips,
		ArbitraryData:        arbitraryData,
		ReserveIds:           []uint64{},
	}

	// Set the fragment
	errSet := k.SetFragment(ctx, fragment)
	if errSet != nil {
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

	store.Set(types.LastRegisteredFragmentKey, forkstypes.UInt64Bytes(fragmentId))
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

// GetFragment retrieves a fragment from the store
func (k Keeper) GetFragment(ctx sdk.Context, fragmentId uint64) (*types.Fragment, bool) {
	store := ctx.KVStore(k.storeKey)
	fragmentKey := types.GetFragmentKey(fragmentId)
	bz := store.Get(fragmentKey)
	if bz == nil {
		return nil, false
	}

	var fragment types.Fragment
	k.cdc.MustUnmarshal(bz, &fragment)
	return &fragment, true
}

// UpdateFragmentReserves adds a reserve ID to the fragment's ReserveIds mapping
func (k Keeper) UpdateFragmentReserves(ctx sdk.Context, fragmentId uint64, reserveId uint64) error {
	// Retrieve the fragment from the store
	fragment, found := k.GetFragment(ctx, fragmentId)
	if !found {
		return sdkerrors.Wrapf(types.ErrFragmentNotFound, fmt.Sprintf("fragment ID %d not found", fragmentId))
	}

	// Check if the reserve ID is already in the fragment's ReserveIds mapping
	for _, id := range fragment.ReserveIds {
		if id == reserveId {
			return sdkerrors.Wrapf(types.ErrReserveAlreadyExists, fmt.Sprintf("reserve ID %d already exists in fragment ID %d", reserveId, fragmentId))
		}
	}

	// Add the new reserve ID to the fragment's ReserveIds mapping
	fragment.ReserveIds = append(fragment.ReserveIds, reserveId)

	// Save the updated fragment back to the store
	return k.SetFragment(ctx, fragment)
}

// ChangeFragmentStatus changes the status of a fragment - 0 for inactive, 1 for active
func (k Keeper) ChangeFragmentStatus(ctx sdk.Context, fragmentId uint64, newStatus bool) error {
	// Retrieve the fragment from the store
	fragment, found := k.GetFragment(ctx, fragmentId)
	if !found {
		return sdkerrors.Wrapf(types.ErrFragmentNotFound, "fragment %d not found", fragmentId)
	}

	// Check if the fragment has the minimum required signers
	if len(fragment.Signers) < int(types.MinSignersPerFragment) {
		return sdkerrors.Wrapf(types.ErrMinSignersNotMet, "fragment %d does not have the minimum required signers", fragmentId)
	}

	// Set the new status
	fragment.FragmentStatus = newStatus

	// Calculate the threshold
	if newStatus {
		fragment.Threshold = uint64((len(fragment.Signers) * 2 / 3) + 1)
	}

	// Save the updated fragment back to the store
	k.SetFragment(ctx, fragment)

	return nil
}

// GetFragmentForJudgeAddress retrieves all fragments associated with a given judge address
func (k Keeper) GetFragmentForJudgeAddress(ctx sdk.Context, judgeAddress string) ([]types.Fragment, error) {
	store := ctx.KVStore(k.storeKey)
	iterator := sdk.KVStorePrefixIterator(store, []byte(types.FragmentKey))
	defer iterator.Close()

	var fragments []types.Fragment

	for ; iterator.Valid(); iterator.Next() {
		var fragment types.Fragment
		k.cdc.MustUnmarshal(iterator.Value(), &fragment)

		if fragment.JudgeAddress == judgeAddress {
			fragments = append(fragments, fragment)
		}
	}

	if len(fragments) == 0 {
		return nil, sdkerrors.Wrapf(types.ErrFragmentNotFound, "no fragments found for judge address %s", judgeAddress)
	}

	return fragments, nil
}

// GetExistingSignerInFragments retrieves all fragments associated with a given signer address
func (k Keeper) GetExistingSignerInFragments(ctx sdk.Context, signerAddress string) bool {
	store := ctx.KVStore(k.storeKey)
	iterator := sdk.KVStorePrefixIterator(store, []byte(types.FragmentKey))
	defer iterator.Close()

	found := false

	k.IterateFragments(ctx, func(_ []byte, res types.Fragment) (abort bool) {
		for _, signer := range res.Signers {
			if signer.SignerAddress == signerAddress {
				found = true
				return true // Abort iteration
			}
		}
		return false
	})

	return found
}

// IterateFragments iterates over all fragments in the store and performs a callback function
func (k Keeper) IterateFragments(ctx sdk.Context, cb func([]byte, types.Fragment) bool) {
	store := ctx.KVStore(k.storeKey)
	iter := sdk.KVStorePrefixIterator(store, []byte(types.FragmentKey))
	defer iter.Close()

	for ; iter.Valid(); iter.Next() {
		var fragment types.Fragment
		k.cdc.MustUnmarshal(iter.Value(), &fragment)

		if cb(iter.Key(), fragment) {
			return
		}
	}
}

func (k Keeper) GetSignerApplications(ctx sdk.Context, fragmentId uint64) ([]types.SignerApplication, bool) {
	store := ctx.KVStore(k.storeKey)
	prefix := types.GetSignerApplicationFeePrefix(fragmentId)
	iterator := sdk.KVStorePrefixIterator(store, prefix)
	defer iterator.Close()

	var applications []types.SignerApplication

	for ; iterator.Valid(); iterator.Next() {
		var application types.SignerApplication
		k.cdc.MustUnmarshal(iterator.Value(), &application)

		applications = append(applications, application)
	}

	if len(applications) == 0 {
		return nil, false
	}

	return applications, true
}

// GetSignerApplication retrieves a signer application from the store
func (k Keeper) GetSignerApplication(ctx sdk.Context, fragmentId uint64, applicationId uint64) (*types.SignerApplication, bool) {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetSignerApplicationFeeKey(fragmentId, applicationId)
	bz := store.Get(aKey)
	if bz == nil {
		return nil, false
	}

	var application types.SignerApplication
	k.cdc.MustUnmarshal(bz, &application)
	return &application, true
}

// setLastRegisteredApplicationId sets the latest application id
func (k Keeper) setLastRegisteredApplicationId(ctx sdk.Context, applicationId uint64) {
	store := ctx.KVStore(k.storeKey)

	store.Set(types.LastRegisteredFragmentApplicationKey, forkstypes.UInt64Bytes(applicationId))
}

// GetLastRegisteredApplicationId returns the latest application id
func (k Keeper) GetLastRegisteredApplicationId(ctx sdk.Context) uint64 {
	store := ctx.KVStore(k.storeKey)
	bytes := store.Get(types.LastRegisteredFragmentApplicationKey)

	if len(bytes) == 0 {
		return 0
	}
	return forkstypes.UInt64FromBytes(bytes)
}
