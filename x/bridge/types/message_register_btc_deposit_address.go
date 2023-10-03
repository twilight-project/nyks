package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRegisterBtcDepositAddress = "register_btc_deposit_address"

var _ sdk.Msg = &MsgRegisterBtcDepositAddress{}

func NewMsgRegisterBtcDepositAddress(depositAddress string, twilightDepositAddress string, depositAmount uint64) *MsgRegisterBtcDepositAddress {
	return &MsgRegisterBtcDepositAddress{
		DepositAddress:         depositAddress,
		TwilightDepositAddress: twilightDepositAddress,
		DepositAmount:          depositAmount,
	}
}

func (msg *MsgRegisterBtcDepositAddress) Route() string {
	return RouterKey
}

func (msg *MsgRegisterBtcDepositAddress) Type() string {
	return TypeMsgRegisterBtcDepositAddress
}

func (msg *MsgRegisterBtcDepositAddress) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.TwilightDepositAddress)
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
	if msg.DepositAddress == "" {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid BTC deposit address: cannot be empty")
	}

	// Validate the twilight deposit address
	_, err := sdk.AccAddressFromBech32(msg.TwilightDepositAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid twilight deposit address")
	}

	// Validate the deposit amount
	if msg.DepositAmount <= 0 {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidCoins, "invalid deposit amount: must be greater than zero")
	}
	return nil
}
