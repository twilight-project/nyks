package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBroadcastTxRefund = "broadcast_tx_refund"

var _ sdk.Msg = &MsgBroadcastTxRefund{}

func NewMsgBroadcastTxRefund(signedRefundTx string, judgeAddress string) *MsgBroadcastTxRefund {
	return &MsgBroadcastTxRefund{
		SignedRefundTx: signedRefundTx,
		JudgeAddress:   judgeAddress,
	}
}

func (msg *MsgBroadcastTxRefund) Route() string {
	return RouterKey
}

func (msg *MsgBroadcastTxRefund) Type() string {
	return TypeMsgBroadcastTxRefund
}

func (msg *MsgBroadcastTxRefund) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBroadcastTxRefund) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBroadcastTxRefund) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
