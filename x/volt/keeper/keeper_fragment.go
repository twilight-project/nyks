package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/volt/types"
)

// SetSignerApplication set a specific signerApplication in the store from its index

func (k msgServer) SetSignerApplication(ctx sdk.Context, msg *types.MsgSignerApplication) {

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetSignerApplicationFeeKey(msg.FragmentId, sdk.AccAddress(msg.SignerAddress))
	store.Set(aKey, k.cdc.MustMarshal(msg))
}
