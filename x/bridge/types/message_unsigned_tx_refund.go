package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUnsignedTxRefund = "unsigned_tx_refund"

var _ sdk.Msg = &MsgUnsignedTxRefund{}

func NewMsgUnsignedTxRefund(reserveId uint64, btcUnsignedRefundTx string, judgeAddress string) *MsgUnsignedTxRefund {
	return &MsgUnsignedTxRefund{
		ReserveId:           reserveId,
		BtcUnsignedRefundTx: btcUnsignedRefundTx,
		JudgeAddress:        judgeAddress,
	}
}

func (msg *MsgUnsignedTxRefund) Route() string {
	return RouterKey
}

func (msg *MsgUnsignedTxRefund) Type() string {
	return TypeMsgUnsignedTxRefund
}

func (msg *MsgUnsignedTxRefund) GetSigners() []sdk.AccAddress {
	judgeAddress, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{judgeAddress}
}

func (msg *MsgUnsignedTxRefund) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUnsignedTxRefund) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
