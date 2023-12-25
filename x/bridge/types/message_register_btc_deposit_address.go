package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRegisterBtcDepositAddress = "register_btc_deposit_address"

var _ sdk.Msg = &MsgRegisterBtcDepositAddress{}

func NewMsgRegisterBtcDepositAddress(btcDepositAddress string, btcSatoshiTestAmount uint64, twilightStakingAmount uint64, twilightAddress string) *MsgRegisterBtcDepositAddress {
	return &MsgRegisterBtcDepositAddress{
		BtcDepositAddress:     btcDepositAddress,
		BtcSatoshiTestAmount:  btcSatoshiTestAmount,
		TwilightStakingAmount: twilightStakingAmount,
		TwilightAddress:       twilightAddress,
	}
}

func (msg *MsgRegisterBtcDepositAddress) Route() string {
	return RouterKey
}

func (msg *MsgRegisterBtcDepositAddress) Type() string {
	return TypeMsgRegisterBtcDepositAddress
}

func (msg *MsgRegisterBtcDepositAddress) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.TwilightAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRegisterBtcDepositAddress) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRegisterBtcDepositAddress) ValidateBasic() error {
	// Validate the BTC deposit address
	if msg.BtcDepositAddress == "" {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid BTC deposit address: cannot be empty")
	}

	// Validate the twilight deposit address
	_, err := sdk.AccAddressFromBech32(msg.TwilightAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid twilight deposit address")
	}

	// Validate the btc satoshi test amount
	if msg.BtcSatoshiTestAmount <= 0 {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidCoins, "invalid satoshi test amount: must be greater than zero")
	}

	// Validate the twilight staking amount
	if msg.TwilightStakingAmount <= 0 {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidCoins, "invalid twilight staking amount: must be greater than zero")
	}
	return nil
}
