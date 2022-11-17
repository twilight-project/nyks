package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRegisterDepositAddress = "register_deposit_address"

var _ sdk.Msg = &MsgRegisterDepositAddress{}

func NewMsgRegisterDepositAddress(depositAddress string, depositAmount uint64, addressScript string, twilightDepositAddress string) *MsgRegisterDepositAddress {
	return &MsgRegisterDepositAddress{
		DepositAddress:         depositAddress,
		DepositAmount:          depositAmount,
		AddressScript:          addressScript,
		TwilightDepositAddress: twilightDepositAddress,
	}
}

func (msg *MsgRegisterDepositAddress) Route() string {
	return RouterKey
}

func (msg *MsgRegisterDepositAddress) Type() string {
	return TypeMsgRegisterDepositAddress
}

func (msg *MsgRegisterDepositAddress) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.TwilightDepositAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRegisterDepositAddress) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRegisterDepositAddress) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.TwilightDepositAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
