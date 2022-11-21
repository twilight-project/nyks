package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRegisterBtcDepositAddress = "register_btc_deposit_address"

var _ sdk.Msg = &MsgRegisterBtcDepositAddress{}

func NewMsgRegisterBtcDepositAddress(depositAddress string, depositAmount uint64, addressScript string, twilightDepositAddress string) *MsgRegisterBtcDepositAddress {
	return &MsgRegisterBtcDepositAddress{
		DepositAddress:         depositAddress,
		DepositAmount:          depositAmount,
		AddressScript:          addressScript,
		TwilightDepositAddress: twilightDepositAddress,
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
	_, err := sdk.AccAddressFromBech32(msg.TwilightDepositAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
