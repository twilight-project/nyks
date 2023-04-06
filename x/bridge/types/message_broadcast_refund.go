package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBroadcastRefund = "broadcast_refund"

var _ sdk.Msg = &MsgBroadcastRefund{}

func NewMsgBroadcastRefund(creator string, judgeAddress string, signedRefundTx string, signedSweepTx string) *MsgBroadcastRefund {
	return &MsgBroadcastRefund{
		Creator:        creator,
		JudgeAddress:   judgeAddress,
		SignedRefundTx: signedRefundTx,
		SignedSweepTx:  signedSweepTx,
	}
}

func (msg *MsgBroadcastRefund) Route() string {
	return RouterKey
}

func (msg *MsgBroadcastRefund) Type() string {
	return TypeMsgBroadcastRefund
}

func (msg *MsgBroadcastRefund) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBroadcastRefund) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBroadcastRefund) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
