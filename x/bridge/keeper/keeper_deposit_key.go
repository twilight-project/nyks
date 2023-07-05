package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	"github.com/twilight-project/nyks/x/bridge/types"
)

// SetReserveAddressForJudge sets the btc address for a given twilight address
func (k Keeper) SetReserveAddressForJudge(ctx sdk.Context, judgeAddress sdk.AccAddress, reserveScript types.BtcScript, reserveAddress types.BtcAddress) {
	if err := sdk.VerifyAddressFormat(judgeAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}

	// After validation reforming the MsgRegisterReserveAddress to avoid double loops while retreiving the data
	regRes := &types.MsgRegisterReserveAddress{
		ReserveScript:  reserveScript.BtcScript,
		ReserveAddress: reserveAddress.BtcAddress,
		JudgeAddress:   judgeAddress.String(),
	}

	store := ctx.KVStore(k.storeKey)
	aKey := types.GetBtcRegisterReserveAddressKey(judgeAddress, reserveAddress)
	store.Set(aKey, k.cdc.MustMarshal(regRes))
}

// IterateBtcReserveAddresses iterates through all of the registered reserve addresses
func (k Keeper) IterateBtcReserveAddresses(ctx sdk.Context, cb func([]byte, types.MsgRegisterReserveAddress) bool) {
	store := ctx.KVStore(k.storeKey)
	prefix := types.BtcReserveAddressKey
	iter := store.Iterator(prefixRange(prefix))
	defer iter.Close()

	for ; iter.Valid(); iter.Next() {
		res := types.MsgRegisterReserveAddress{
			ReserveScript:  "",
			ReserveAddress: "",
			JudgeAddress:   "",
		}

		k.cdc.MustUnmarshal(iter.Value(), &res)

		// cb returns true to stop early
		if cb(iter.Key(), res) {
			return
		}
	}
}

// SetJudgeAddressForValidatorAddress that will take judgeAddress and validatorAddress as input and store it in the store
func (k Keeper) SetJudgeAddressForValidatorAddress(ctx sdk.Context, creator sdk.AccAddress, validatorAddress sdk.ValAddress, judgeAddress sdk.AccAddress) error {
	if err := sdk.VerifyAddressFormat(validatorAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}

	regJudge := &types.MsgRegisterJudge{
		Creator:          creator.String(),
		ValidatorAddress: validatorAddress.String(),
		JudgeAddress:     judgeAddress.String(),
	}
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetRegisterJudgeAddressKey(validatorAddress)
	store.Set(aKey, k.cdc.MustMarshal(regJudge))

	return nil
}

// GetJudgeAddressForValidatorAddress returns the judge address for a given validator address
func (k Keeper) GetJudgeAddressForValidatorAddress(ctx sdk.Context, validatorAddress sdk.ValAddress) (sdk.AccAddress, error) {
	if err := sdk.VerifyAddressFormat(validatorAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid judge address"))
	}

	store := ctx.KVStore(k.storeKey)
	prefix := types.JudgeAddressKey
	iter := store.Iterator(prefixRange(prefix))
	defer iter.Close()

	for ; iter.Valid(); iter.Next() {
		res := types.MsgRegisterJudge{
			Creator:          "",
			ValidatorAddress: "",
			JudgeAddress:     "",
		}

		k.cdc.MustUnmarshal(iter.Value(), &res)

		if res.ValidatorAddress == validatorAddress.String() {
			judgeAddress, err := sdk.AccAddressFromBech32(res.JudgeAddress)
			if err != nil {
				ctx.Logger().Error("validator encoded could not be returned as ValAddress")
				return nil, err
			}
			return judgeAddress, nil
		}
	}

	return nil, sdkerrors.Wrapf(types.ErrValidatorAddressNotFound, "validator address %v", validatorAddress)
}

// GetValidatorAddressForJudgeAddress returns the validator address for a given judge address
func (k Keeper) GetValidatorAddressForJudgeAddress(ctx sdk.Context, judgeAddress sdk.AccAddress) (sdk.ValAddress, error) {
	if err := sdk.VerifyAddressFormat(judgeAddress); err != nil {
		panic(sdkerrors.Wrap(err, "invalid judge address"))
	}

	store := ctx.KVStore(k.storeKey)
	prefix := types.JudgeAddressKey
	iter := store.Iterator(prefixRange(prefix))
	defer iter.Close()

	for ; iter.Valid(); iter.Next() {
		res := types.MsgRegisterJudge{
			Creator:          "",
			ValidatorAddress: "",
			JudgeAddress:     "",
		}

		k.cdc.MustUnmarshal(iter.Value(), &res)

		if res.JudgeAddress == judgeAddress.String() {
			validatorAddress, err := sdk.ValAddressFromBech32(res.ValidatorAddress)
			if err != nil {
				ctx.Logger().Error("validator encoded could not be returned as ValAddress")
				return nil, err
			}
			return validatorAddress, nil
		}
		ctx.Logger().Error("not able to fine judges")
	}

	return nil, sdkerrors.Wrapf(types.ErrValidatorAddressNotFound, "judge address %v", judgeAddress)
}

// CheckJudgeValidatorInSet checks if the validator address of a judge is in the set of validators
func (k Keeper) CheckJudgeValidatorInSet(ctx sdk.Context, judgeAddress sdk.AccAddress) bool {
	ctx.Logger().Error(judgeAddress.String())
	validatorAddress, err := k.GetValidatorAddressForJudgeAddress(ctx, judgeAddress)
	if err != nil {
		return false
	}
	_, found := k.StakingKeeper.GetValidator(ctx, validatorAddress)
	return found
}

func (k Keeper) GetJudgeValidator(ctx sdk.Context, judgeAddress sdk.AccAddress) stakingtypes.Validator {
	validatorAddress, err := k.GetValidatorAddressForJudgeAddress(ctx, judgeAddress)
	if err != nil {
		panic(sdkerrors.Wrap(err, "invalid validator address"))
	}
	validator, _ := k.StakingKeeper.GetValidator(ctx, validatorAddress)
	return validator
}

// IterateRegisteredJudges iterates through all of the registered judge addresses
func (k Keeper) IterateRegisteredJudges(ctx sdk.Context, cb func([]byte, types.MsgRegisterJudge) bool) {
	store := ctx.KVStore(k.storeKey)
	prefix := types.JudgeAddressKey
	iter := store.Iterator(prefixRange(prefix))
	defer iter.Close()

	for ; iter.Valid(); iter.Next() {
		res := types.MsgRegisterJudge{
			Creator:          "",
			ValidatorAddress: "",
			JudgeAddress:     "",
		}

		k.cdc.MustUnmarshal(iter.Value(), &res)

		// cb returns true to stop early
		if cb(iter.Key(), res) {
			return
		}
	}
}

// GetBtcWithdrawRequest returns the btc withdraw request for a given twilight address, reserve address, withdraw address, and withdraw amount
func (k Keeper) GetBtcWithdrawRequest(ctx sdk.Context, twilightAddress sdk.AccAddress, reserveAddress types.BtcAddress, withdrawAddress types.BtcAddress, withdrawAmount uint64) (*types.MsgWithdrawBtcRequest, bool) {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetBtcWithdrawRequestKey(twilightAddress, reserveAddress, withdrawAddress, withdrawAmount)
	if !store.Has(aKey) {
		return nil, false
	}

	bz := store.Get(aKey)
	var withdrawRequest types.MsgWithdrawBtcRequest
	k.cdc.MustUnmarshal(bz, &withdrawRequest)

	return &withdrawRequest, true
}

// SetBtcWithdrawRequest sets the btc withdraw request for a given twilight address, reserve address, withdraw address, and withdraw amount
func (k Keeper) SetBtcWithdrawRequest(ctx sdk.Context, twilightAddress sdk.AccAddress, reserveAddress types.BtcAddress, withdrawAddress types.BtcAddress, withdrawAmount uint64) error {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetBtcWithdrawRequestKey(twilightAddress, reserveAddress, withdrawAddress, withdrawAmount)

	// After validation reforming the MsgWithdrawBtcRequest to avoid double loops while retreiving the data
	withdrawRequest := &types.MsgWithdrawBtcRequest{
		TwilightAddress: twilightAddress.String(),
		ReserveAddress:  reserveAddress.BtcAddress,
		WithdrawAddress: withdrawAddress.BtcAddress,
		WithdrawAmount:  withdrawAmount,
	}
	store.Set(aKey, k.cdc.MustMarshal(withdrawRequest))
	return nil
}

// IterateRegisteredWithdrawBtcRequests iterates through all of the registered withdraw btc requests
func (k Keeper) IterateRegisteredWithdrawBtcRequests(ctx sdk.Context, cb func([]byte, types.MsgWithdrawBtcRequest) bool) {
	store := ctx.KVStore(k.storeKey)
	prefix := types.BtcWithdrawRequestKey
	iter := store.Iterator(prefixRange(prefix))
	defer iter.Close()

	for ; iter.Valid(); iter.Next() {
		res := types.MsgWithdrawBtcRequest{
			TwilightAddress: "",
			ReserveAddress:  "",
			WithdrawAddress: "",
			WithdrawAmount:  0,
		}

		k.cdc.MustUnmarshal(iter.Value(), &res)

		// cb returns true to stop early
		if cb(iter.Key(), res) {
			return
		}
	}
}

// GetBtcSignRefundMsg returns the signed refund message for btc chain using btcOracleAddress, reserveAddress, signerAddress and refundSignature
func (k Keeper) GetBtcSignRefundMsg(ctx sdk.Context, btcOracleAddress sdk.AccAddress, reserveAddress types.BtcAddress, signerAddress types.BtcAddress, refundSignature string) (*types.MsgSignRefund, bool) {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetBtcSignRefundMsgKey(btcOracleAddress, reserveAddress, refundSignature)
	if !store.Has(aKey) {
		return nil, false
	}

	bz := store.Get(aKey)
	var signRefund types.MsgSignRefund
	k.cdc.MustUnmarshal(bz, &signRefund)

	return &signRefund, true
}

// SetBtcSignRefundMsg sets the signed refund message for btc chain using btcOracleAddress, reserveAddress, signerAddress and refundSignature
func (k Keeper) SetBtcSignRefundMsg(ctx sdk.Context, btcOracleAddress sdk.AccAddress, reserveAddress types.BtcAddress, signerAddress types.BtcAddress, refundSignature string) error {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetBtcSignRefundMsgKey(btcOracleAddress, reserveAddress, refundSignature)

	signRefund := &types.MsgSignRefund{
		BtcOracleAddress: btcOracleAddress.String(),
		ReserveAddress:   reserveAddress.BtcAddress,
		SignerAddress:    signerAddress.BtcAddress,
		RefundSignature:  refundSignature,
	}
	store.Set(aKey, k.cdc.MustMarshal(signRefund))
	return nil
}

// IterateRegisteredSignRefundMsgs iterates through all of the registered sign refund messages
func (k Keeper) IterateRegisteredSignRefundMsgs(ctx sdk.Context, cb func([]byte, types.MsgSignRefund) bool) {
	store := ctx.KVStore(k.storeKey)
	prefix := types.BtcSignRefundMsgKey
	iter := store.Iterator(prefixRange(prefix))
	defer iter.Close()

	for ; iter.Valid(); iter.Next() {
		res := types.MsgSignRefund{
			ReserveAddress:   "",
			SignerAddress:    "",
			RefundSignature:  "",
			BtcOracleAddress: "",
		}

		k.cdc.MustUnmarshal(iter.Value(), &res)

		// cb returns true to stop early
		if cb(iter.Key(), res) {
			return
		}
	}
}

// GetBtcSignSweepMsg returns the signed sweep message for btc chain using btcOracleAddress, reserveAddress, signerAddress and sweepSignature
func (k Keeper) GetBtcSignSweepMsg(ctx sdk.Context, btcOracleAddress sdk.AccAddress, reserveAddress types.BtcAddress, signerAddress types.BtcAddress, sweepSignature string) (*types.MsgSignSweep, bool) {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetBtcSignSweepMsgKey(btcOracleAddress, reserveAddress, sweepSignature)
	if !store.Has(aKey) {
		return nil, false
	}

	bz := store.Get(aKey)
	var signSweep types.MsgSignSweep
	k.cdc.MustUnmarshal(bz, &signSweep)

	return &signSweep, true
}

// SetBtcSignSweepMsg sets the signed sweep message for btc chain using btcOracleAddress, reserveAddress, signerAddress and sweepSignature
func (k Keeper) SetBtcSignSweepMsg(ctx sdk.Context, btcOracleAddress sdk.AccAddress, reserveAddress types.BtcAddress, signerAddress types.BtcAddress, sweepSignature string) error {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetBtcSignSweepMsgKey(btcOracleAddress, reserveAddress, sweepSignature)

	signSweep := &types.MsgSignSweep{
		ReserveAddress:   reserveAddress.BtcAddress,
		SignerAddress:    signerAddress.BtcAddress,
		SweepSignature:   sweepSignature,
		BtcOracleAddress: btcOracleAddress.String(),
	}
	store.Set(aKey, k.cdc.MustMarshal(signSweep))
	return nil
}

// IterateRegisteredSignSweepMsgs iterates through all of the registered sign sweep messages
func (k Keeper) IterateRegisteredSignSweepMsgs(ctx sdk.Context, cb func([]byte, types.MsgSignSweep) bool) {
	store := ctx.KVStore(k.storeKey)
	prefix := types.BtcSignSweepMsgKey
	iter := store.Iterator(prefixRange(prefix))
	defer iter.Close()

	for ; iter.Valid(); iter.Next() {
		res := types.MsgSignSweep{
			ReserveAddress:   "",
			SignerAddress:    "",
			SweepSignature:   "",
			BtcOracleAddress: "",
		}
		k.cdc.MustUnmarshal(iter.Value(), &res)

		// cb returns true to stop early
		if cb(iter.Key(), res) {
			return
		}
	}
}

// GetBtcBroadcastTxSweepMsg returns the broadcast tx sweep message for btc chain using judgeAddress and SignedRefundTx
func (k Keeper) GetBtcBroadcastTxSweepMsg(ctx sdk.Context, judgeAddress sdk.AccAddress, SignedRefundTx string) (*types.MsgBroadcastTxSweep, bool) {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetBtcBroadcastTxSweepMsgKey(judgeAddress, SignedRefundTx)
	if !store.Has(aKey) {
		return nil, false
	}

	bz := store.Get(aKey)
	var BroadcastTxSweep types.MsgBroadcastTxSweep
	k.cdc.MustUnmarshal(bz, &BroadcastTxSweep)

	return &BroadcastTxSweep, true
}

// SetBtcBroadcastTxSweepMsg sets the broadcast refund message for btc chain using judgeAddress and SignedRefundTx
func (k Keeper) SetBtcBroadcastTxSweepMsg(ctx sdk.Context, judgeAddress sdk.AccAddress, SignedRefundTx string, SignedSweepTx string) error {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetBtcBroadcastTxSweepMsgKey(judgeAddress, SignedRefundTx)

	BroadcastTxSweep := &types.MsgBroadcastTxSweep{
		SignedRefundTx: SignedRefundTx,
		SignedSweepTx:  SignedSweepTx,
		JudgeAddress:   judgeAddress.String(),
	}
	store.Set(aKey, k.cdc.MustMarshal(BroadcastTxSweep))
	return nil
}

// IterateRegisteredBroadcastTxSweepMsgs iterates through all of the registered broadcast refund messages
func (k Keeper) IterateRegisteredBroadcastTxSweepMsgs(ctx sdk.Context, cb func([]byte, types.MsgBroadcastTxSweep) bool) {
	store := ctx.KVStore(k.storeKey)
	prefix := types.BtcBroadcastTxSweepMsgKey
	iter := store.Iterator(prefixRange(prefix))
	defer iter.Close()

	for ; iter.Valid(); iter.Next() {
		res := types.MsgBroadcastTxSweep{
			SignedRefundTx: "",
			SignedSweepTx:  "",
			JudgeAddress:   "",
		}

		k.cdc.MustUnmarshal(iter.Value(), &res)

		// cb returns true to stop early
		if cb(iter.Key(), res) {
			return
		}
	}
}

// GetBtcProposeRefundHashMsg returns the propose refund hash message for btc chain using judgeAddress, refundHash
func (k Keeper) GetBtcProposeRefundHashMsg(ctx sdk.Context, judgeAddress sdk.AccAddress, refundHash string) (*types.MsgProposeRefundHash, bool) {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetBtcProposeRefundHashMsgKey(judgeAddress, refundHash)
	if !store.Has(aKey) {
		return nil, false
	}

	bz := store.Get(aKey)
	var proposeRefundHash types.MsgProposeRefundHash
	k.cdc.MustUnmarshal(bz, &proposeRefundHash)

	return &proposeRefundHash, true
}

// SetProposeRefundHashMsg sets the propose refund hash message for btc chain using judgeAddress, refundHash
func (k Keeper) SetBtcProposeRefundHashMsg(ctx sdk.Context, judgeAddress sdk.AccAddress, refundHash string) error {
	store := ctx.KVStore(k.storeKey)
	aKey := types.GetBtcProposeRefundHashMsgKey(judgeAddress, refundHash)

	proposeRefundHash := &types.MsgProposeRefundHash{
		JudgeAddress: judgeAddress.String(),
		RefundHash:   refundHash,
	}
	store.Set(aKey, k.cdc.MustMarshal(proposeRefundHash))
	return nil
}

// IterateRegisteredProposeRefundHashMsgs iterates through all of the registered propose refund hash messages
func (k Keeper) IterateRegisteredProposeRefundHashMsgs(ctx sdk.Context, cb func([]byte, types.MsgProposeRefundHash) bool) {
	store := ctx.KVStore(k.storeKey)
	prefix := types.BtcProposeRefundHashMsgKey
	iter := store.Iterator(prefixRange(prefix))
	defer iter.Close()

	for ; iter.Valid(); iter.Next() {
		res := types.MsgProposeRefundHash{
			JudgeAddress: "",
			RefundHash:   "",
		}

		k.cdc.MustUnmarshal(iter.Value(), &res)

		// cb returns true to stop early
		if cb(iter.Key(), res) {
			return
		}
	}
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
