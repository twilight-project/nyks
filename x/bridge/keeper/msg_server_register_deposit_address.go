package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
)

// const (
// 	StakeAcctAddr = sdk.AccAddress(crypto.AddressHash([]byte(stakeAccountName)))
// )

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
	btcAddr, e1 := types.NewBtcAddress(msg.BtcDepositAddress)
	twilightAddress, e2 := sdk.AccAddressFromBech32(msg.TwilightAddress)
	if e1 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	} else if e2 != nil {
		return nil, sdkerrors.Wrap(types.ErrInvalid, e2.Error())
	}

	// check if a btc address is already registered against this twilight address
	address, foundExistingBtcAddress := k.VoltKeeper.GetBtcDepositAddressByTwilightAddress(ctx, twilightAddress)

	if foundExistingBtcAddress {
		return nil, sdkerrors.Wrap(types.ErrResetBtcAddress, address.BtcDepositAddress)
	}

	// check if a btc address is registered against *any other twilight address* as well
	checkBtcAddress := k.VoltKeeper.CheckBtcAddress(ctx, twilightAddress, *btcAddr, msg.BtcSatoshiTestAmount)
	if checkBtcAddress {
		return nil, sdkerrors.Wrap(types.ErrBtcAddressAlreadyExists, btcAddr.GetBtcAddress())
	}

	// Convert msg.DepositAmount into sdk.Coins from uint64
	depositAmount := sdk.NewCoin("nyks", sdk.NewIntFromUint64(msg.TwilightStakingAmount))

	// Get the account's balance in nyks
	balance := k.BankKeeper.GetBalance(ctx, twilightAddress, "nyks")

	// Check if the balance is sufficient
	if balance.IsLT(depositAmount) {
		return nil, sdkerrors.Wrapf(types.ErrInsufficientBalanceInBank, "insufficient funds: %s < %s", balance, depositAmount)
	}

	// Transfer the staking amount from the user's account to a module account
	errTakeStake := k.BankKeeper.SendCoinsFromAccountToModule(ctx, twilightAddress, types.ModuleName, sdk.NewCoins(depositAmount))
	if errTakeStake != nil {
		return nil, errTakeStake
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

	return &types.MsgRegisterBtcDepositAddressResponse{}, nil
}
