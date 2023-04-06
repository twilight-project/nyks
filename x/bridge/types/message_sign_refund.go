package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSignRefund = "sign_refund"

var _ sdk.Msg = &MsgSignRefund{}

func NewMsgSignRefund(creator string, reserveAddress string, signerAddress string, refundSignature string, sweepSignature string) *MsgSignRefund {
	return &MsgSignRefund{
		Creator:         creator,
		ReserveAddress:  reserveAddress,
		SignerAddress:   signerAddress,
		RefundSignature: refundSignature,
		SweepSignature:  sweepSignature,
	}
}

func (msg *MsgSignRefund) Route() string {
	return RouterKey
}

func (msg *MsgSignRefund) Type() string {
	return TypeMsgSignRefund
}

func (msg *MsgSignRefund) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSignRefund) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSignRefund) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
