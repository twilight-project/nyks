package keeper

import (
	"context"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/forks/types"
)

func (k msgServer) SetDelegateAddresses(goCtx context.Context, msg *types.MsgSetDelegateAddresses) (*types.MsgSetDelegateAddressesResponse, error) {
	// ensure that this passes validation, checks the key validity
	err := msg.ValidateBasic()
	if err != nil {
		return nil, err
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// check the following, all should be validated in validate basic
	val, e1 := sdk.ValAddressFromBech32(msg.ValidatorAddress)
	orch, e2 := sdk.AccAddressFromBech32(msg.OrchestratorAddress)
	btcPk, e3 := types.NewBtcPublicKey(msg.BtcPublicKey)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	} else if e2 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e2.Error())
	} else if e3 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e3.Error())
	}

	// check that the validator does not have an existing key
	// _, foundExistingOrchestratorKey := k.GetOrchestratorValidator(ctx, orch)
	// pk, foundExistingBtcPublicKey := k.GetBtcPublicKeyByValidator(ctx, val)
	// if pk != nil {
	// 	ctx.Logger().Error(pk.BtcPublicKey)
	// }
	// ensure that the validator exists
	// if k.Keeper.StakingKeeper.Validator(ctx, val) == nil {
	// 	return nil, sdkerrors.Wrap(stakingtypes.ErrNoValidatorFound, val.String())
	// } else if foundExistingOrchestratorKey || foundExistingBtcPublicKey {
	// 	return nil, sdkerrors.Wrap(types.ErrResetDelegateKeys, val.String())
	// }

	// check that neither key is a duplicate
	delegateKeys, keyErr := k.GetDelegateKeys(ctx)
	if keyErr != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, keyErr.Error())
	}
	for i := range delegateKeys {
		if delegateKeys[i].BtcPublicKey == btcPk.BtcPublicKey {
			return nil, sdkerrors.Wrap(types.ErrDuplicate, "Duplicate BTC Public Key")
		}
		if delegateKeys[i].OrchestratorAddress == orch.String() {
			return nil, sdkerrors.Wrap(types.ErrDuplicate, "Duplicate Orchestrator Key")
		}
	}

	// set the orchestrator address
	k.SetOrchestratorValidator(ctx, val, orch)
	// set the ethereum address
	k.SetBtcPublicKeyForValidator(ctx, val, *btcPk)

	ctx.EventManager().EmitTypedEvent(
		&types.EventSetDelegateAddresses{
			Message: msg.Type(),
			Address: orch.String(),
		},
	)

	return &types.MsgSetDelegateAddressesResponse{}, nil
}
