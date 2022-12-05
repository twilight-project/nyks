package keeper

import (
	"encoding/hex"
	"sort"

	"github.com/cosmos/btcutil/base58"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

// SetBtcAddressForTwilightAddress sets the btc address for a given twilight address
func (k Keeper) SetBtcAddressForTwilightAddress(ctx sdk.Context, twilightAddress sdk.AccAddress, btcAddr types.BtcAddress) ([]byte, error) {
	if err := sdk.VerifyAddressFormat(twilightAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}

	btcAddrBytes, _, err := base58.CheckDecode(btcAddr.GetBtcAddress())
	if err != nil {
		return nil, sdkerrors.Wrapf(types.ErrInvalidBtcAddress, "invalid btc address hex encoding (%s) giving err (%s) ", btcAddr.GetBtcAddress(), err)
	}
	store := ctx.KVStore(k.storeKey)
	store.Set([]byte(types.GetBtcAddressByTwilightAddressKey(twilightAddress)), btcAddrBytes)

	return btcAddrBytes, nil
}

// GetBtcAddressByTwilightAddress returns the btc address for a given twilight address
func (k Keeper) GetBtcAddressByTwilightAddress(ctx sdk.Context, twilightAddress sdk.AccAddress) (btcPublicKey *types.BtcAddress, found bool) {
	if err := sdk.VerifyAddressFormat(twilightAddress); err != nil {
		ctx.Logger().Error("invalid validator address")
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}
	store := ctx.KVStore(k.storeKey)
	addrBytes := store.Get([]byte(types.GetBtcAddressByTwilightAddressKey(twilightAddress)))
	if addrBytes == nil {
		ctx.Logger().Error("btc address bytes were not found")
		return nil, false
	}

	address, err := types.NewBtcAddress(base58.Encode(addrBytes))
	if err != nil {
		ctx.Logger().Error("btcpk could not be converted")
		return nil, false
	}
	return address, true
}

// GetBtcDepositKeys iterates both the BtcPublicKey and Orchestrator address indexes to produce
// a vector of MsgSetOrchestratorAddress entires containing all the delgate keys for state
// export / import.
func (k Keeper) GetBtcDepositKeys(ctx sdk.Context) ([]types.MsgRegisterBtcDepositAddress, error) {
	store := ctx.KVStore(k.storeKey)
	prefix := types.BtcAddressByTwilightAddressKey
	iter := store.Iterator(prefixRange(prefix))
	defer iter.Close()

	btcAddresses := make(map[string]string)

	for ; iter.Valid(); iter.Next() {
		// the 'key' contains both the prefix and the value, so we need
		// to cut off the starting bytes, if you don't do this a valid
		// cosmos key will be made out of BtcPublicKeyByValidatorKey + the startin bytes
		// of the actual key
		key := iter.Key()[len(types.BtcAddressByTwilightAddressKey):]
		value := iter.Value()
		btcAddress, err := types.NewBtcAddress(hex.EncodeToString(value))
		if err != nil {
			return nil, sdkerrors.Wrapf(err, "found invalid btcAddress %v under key %v", string(value), key)
		}
		twilightAddress := sdk.AccAddress(key)
		if err := sdk.VerifyAddressFormat(twilightAddress); err != nil {
			return nil, sdkerrors.Wrapf(err, "invalid twilightAddress in key %v", twilightAddress)
		}
		btcAddresses[twilightAddress.String()] = btcAddress.GetBtcAddress()
	}

	var result []types.MsgRegisterBtcDepositAddress

	for twilightAddr, btcAddr := range btcAddresses {
		result = append(result, types.MsgRegisterBtcDepositAddress{
			DepositAddress:         btcAddr,
			TwilightDepositAddress: twilightAddr,
		})

	}

	// we iterated over a map, so now we have to sort to ensure the
	// output here is deterministic, btc deposit address chosen for no particular
	// reason
	sort.Slice(result, func(i, j int) bool {
		return result[i].DepositAddress < result[j].DepositAddress
	})

	return result, nil
}

// SetReserveAddressForJudge sets the btc address for a given twilight address
func (k Keeper) SetReserveAddressForJudge(ctx sdk.Context, judgeAddress sdk.AccAddress, reserveScript types.BtcScript) ([]byte, error) {
	if err := sdk.VerifyAddressFormat(judgeAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}

	// Validation checks for BtcScript are missing

	btcScriptBytes := []byte(reserveScript.BtcScript)

	store := ctx.KVStore(k.storeKey)
	store.Set([]byte(types.GetBtcAddressByTwilightAddressKey(judgeAddress)), btcScriptBytes)

	return btcScriptBytes, nil
}

/////////////////////////////
//       Parameters        //
/////////////////////////////

// prefixRange turns a prefix into a (start, end) range. The start is the given prefix value and
// the end is calculated by adding 1 bit to the start value. Nil is not allowed as prefix.
// 		Example: []byte{1, 3, 4} becomes []byte{1, 3, 5}
// 				 []byte{15, 42, 255, 255} becomes []byte{15, 43, 0, 0}
//
// In case of an overflow the end is set to nil.
//		Example: []byte{255, 255, 255, 255} becomes nil
// MARK finish-batches: this is where some crazy shit happens
func prefixRange(prefix []byte) ([]byte, []byte) {
	if prefix == nil {
		panic("nil key not allowed")
	}
	// special case: no prefix is whole range
	if len(prefix) == 0 {
		return nil, nil
	}

	// copy the prefix and update last byte
	end := make([]byte, len(prefix))
	copy(end, prefix)
	l := len(end) - 1
	end[l]++

	// wait, what if that overflowed?....
	for end[l] == 0 && l > 0 {
		l--
		end[l]++
	}

	// okay, funny guy, you gave us FFF, no end to this range...
	if l == 0 && end[0] == 0 {
		end = nil
	}
	return prefix, end
}
