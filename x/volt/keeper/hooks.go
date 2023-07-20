package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
)

// TrackBeforeSend tracks the transfers
func (k Keeper) TrackBeforeSend(ctx sdk.Context, from sdk.AccAddress, to sdk.AccAddress, amount sdk.Coins) {
	for _, coin := range amount {
		if coin.Denom == "sats" {
			ctx.Logger().Error("we have got a sats transfer")
			k.UpdateBtcReserveAfterTransfer(ctx, from, to, amount)
		}
	}

}

// Hooks wrapper struct for slashing keeper
type Hooks struct {
	k Keeper
}

var _ banktypes.BankHooks = Hooks{}

// Return the wrapper struct
func (k Keeper) Hooks() Hooks {
	return Hooks{k}
}

// Implements sdk.BankHooks

func (h Hooks) BlockBeforeSend(ctx sdk.Context, from sdk.AccAddress, to sdk.AccAddress, amount sdk.Coins) error {
	return nil
}

func (h Hooks) TrackBeforeSend(ctx sdk.Context, from sdk.AccAddress, to sdk.AccAddress, amount sdk.Coins) {
	h.k.TrackBeforeSend(ctx, from, to, amount)
}
