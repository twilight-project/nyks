package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBroadcastTxSweep = "broadcast_refund"

var _ sdk.Msg = &MsgBroadcastTxSweep{}

func NewMsgBroadcastTxSweep(signedRefundTx string, judgeAddress string) *MsgBroadcastTxSweep {
	return &MsgBroadcastTxSweep{
		SignedRefundTx: signedRefundTx,
		JudgeAddress:   judgeAddress,
	}
}

func (msg *MsgBroadcastTxSweep) Route() string {
	return RouterKey
}

func (msg *MsgBroadcastTxSweep) Type() string {
	return TypeMsgBroadcastTxSweep
}

func (msg *MsgBroadcastTxSweep) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBroadcastTxSweep) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBroadcastTxSweep) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid judge address (%s)", err)
	}

	err = ValidateBtcTransaction(msg.SignedRefundTx)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid Signed Refund Tx (%s)", err)
	}

	return nil
}
