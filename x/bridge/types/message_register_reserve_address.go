package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRegisterReserveAddress = "register_reserve_address"

var _ sdk.Msg = &MsgRegisterReserveAddress{}

func NewMsgRegisterReserveAddress(reserveScript string, judgeAddress string) *MsgRegisterReserveAddress {
	return &MsgRegisterReserveAddress{
		ReserveScript: reserveScript,
		JudgeAddress:  judgeAddress,
	}
}

func (msg *MsgRegisterReserveAddress) Route() string {
	return RouterKey
}

func (msg *MsgRegisterReserveAddress) Type() string {
	return TypeMsgRegisterReserveAddress
}

func (msg *MsgRegisterReserveAddress) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRegisterReserveAddress) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRegisterReserveAddress) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
