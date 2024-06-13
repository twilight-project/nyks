package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRegisterReserveAddress = "register_reserve_address"

var _ sdk.Msg = &MsgRegisterReserveAddress{}

func NewMsgRegisterReserveAddress(fragmentId uint64, reserveScript string, reserveAddress string, judgeAddress string) *MsgRegisterReserveAddress {
	return &MsgRegisterReserveAddress{
		FragmentId:     fragmentId,
		ReserveScript:  reserveScript,
		ReserveAddress: reserveAddress,
		JudgeAddress:   judgeAddress,
	}
}

func (msg *MsgRegisterReserveAddress) Route() string {
	return RouterKey
}

func (msg *MsgRegisterReserveAddress) Type() string {
	return TypeMsgRegisterReserveAddress
}

func (msg *MsgRegisterReserveAddress) GetSigners() []sdk.AccAddress {
	judgeAddress, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{judgeAddress}
}

func (msg *MsgRegisterReserveAddress) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRegisterReserveAddress) ValidateBasic() error {
	if msg.FragmentId == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "fragment ID cannot be zero")
	}
	_, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid judge address (%s)", err)
	}

	return nil
}
