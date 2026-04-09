package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

func (k msgServer) UpdateBtcDepositAddress(goCtx context.Context, msg *types.MsgUpdateBtcDepositAddress) (*types.MsgUpdateBtcDepositAddressResponse, error) {
	err := msg.ValidateBasic()
	if err != nil {
		return nil, err
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check that the sender is a bonded validator
	_, err = k.NyksKeeper.CheckOrchestratorValidatorInSet(ctx, msg.ValidatorAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "caller is not a bonded validator")
	}

	btcAddr, e1 := types.NewBtcAddress(msg.BtcDepositAddress)
	twilightAddress, e2 := sdk.AccAddressFromBech32(msg.TwilightAddress)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	} else if e2 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e2.Error())
	}

	errSetting := k.VoltKeeper.SetBtcDeposit(ctx, *btcAddr, twilightAddress, msg.TwilightStakingAmount, msg.BtcSatoshiTestAmount)
	if errSetting != nil {
		return nil, errSetting
	}

	ctx.EventManager().EmitTypedEvent(
		&types.EventRegisterBtcDepositAddress{
			Message:        msg.Type(),
			DepositAddress: btcAddr.GetBtcAddress(),
		},
	)

	return &types.MsgUpdateBtcDepositAddressResponse{}, nil
}
