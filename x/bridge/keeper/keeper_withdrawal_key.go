package keeper

import (
	"encoding/binary"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// WithdrawalCounterKey is just used to stamp a withdrawal
const (
	MaxUint16            = 65535
	WithdrawalCounterKey = "withdrawal_counter"
)

// InitWithdrawalCounter is called from module's InitGenesis, it sets the counter in state
func (k Keeper) InitWithdrawalCounter(ctx sdk.Context) {
	store := ctx.KVStore(k.storeKey)
	if !store.Has([]byte(WithdrawalCounterKey)) {
		b := make([]byte, 4)
		binary.LittleEndian.PutUint32(b, 0)
		store.Set([]byte(WithdrawalCounterKey), b)
	}
}

// IncrementCounter increases the counter and returns the new value
func (k Keeper) IncrementCounter(ctx sdk.Context) uint32 {
	store := ctx.KVStore(k.storeKey)
	var counter uint32

	// Check if the counter has reached the maximum value for uint16
	if k.GetCounter(ctx) >= MaxUint16 {
		// Use 4 bytes (uint32)
		counter = k.GetCounter(ctx) + 1
		b := make([]byte, 4)
		binary.LittleEndian.PutUint32(b, counter)
		store.Set([]byte(WithdrawalCounterKey), b)
	} else {
		// Use 2 bytes (uint16)
		counter = uint32(k.GetCounter(ctx) + 1)
		b := make([]byte, 2)
		binary.LittleEndian.PutUint16(b, uint16(counter))
		store.Set([]byte(WithdrawalCounterKey), b)
	}

	return counter
}

// GetCounter retrieves the current counter value
func (k Keeper) GetCounter(ctx sdk.Context) uint32 {
	store := ctx.KVStore(k.storeKey)
	b := store.Get([]byte(WithdrawalCounterKey))

	// Determine the size of the stored counter
	if len(b) == 2 {
		return uint32(binary.LittleEndian.Uint16(b))
	} else if len(b) == 4 {
		return binary.LittleEndian.Uint32(b)
	} else {
		return 0
	}
}
