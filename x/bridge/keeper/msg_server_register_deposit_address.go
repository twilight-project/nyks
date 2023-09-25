package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

// RegisterDepositAddress registers a bitcoin address along with a client's twilight address (a mapping) so that later on we can
// identify an incoming btc deposit.
func (k msgServer) RegisterBtcDepositAddress(goCtx context.Context, msg *types.MsgRegisterBtcDepositAddress) (*types.MsgRegisterBtcDepositAddressResponse, error) {
	// ensure that this passes validation, checks the key validity
	err := msg.ValidateBasic()
	if err != nil {
		return nil, err
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// check the following, all should be validated in validate basic
	btcAddr, e1 := types.NewBtcAddress(msg.DepositAddress)
	twilightAddress, e2 := sdk.AccAddressFromBech32(msg.TwilightDepositAddress)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	} else if e2 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e2.Error())
	}

	address, foundExistingBtcAddress := k.VoltKeeper.GetBtcAddressByTwilightAddress(ctx, twilightAddress)

	if foundExistingBtcAddress {
		return nil, sdkerrors.Wrap(types.ErrResetBtcAddress, address.BtcAddress)
	}

	// Convert msg.DepositAmount into sdk.Coins from uint64
	depositAmount := sdk.NewCoins(sdk.NewCoin("sats", sdk.NewIntFromUint64(msg.SatoshiTestAmount)))

	// Transfer the staking amount from the user's account to a module account
	errTakeStake := k.BankKeeper.SendCoinsFromAccountToModule(ctx, twilightAddress, types.ModuleName, depositAmount)
	if errTakeStake != nil {
		return nil, errTakeStake
	}

	errSetting := k.VoltKeeper.SetBtcAddressForClearingAccount(ctx, twilightAddress, *btcAddr)
	if errSetting != nil {
		return nil, errSetting
	}
	ctx.EventManager().EmitTypedEvent(
		&types.EventRegisterBtcDepositAddress{
			Message:        msg.Type(),
			DepositAddress: btcAddr.GetBtcAddress(),
		},
	)

	return &types.MsgRegisterBtcDepositAddressResponse{}, nil
}
