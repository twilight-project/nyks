package types

import (
	"encoding/hex"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgProposeRefundHash = "propose_refund_hash"

var _ sdk.Msg = &MsgProposeRefundHash{}

func NewMsgProposeRefundHash(refundHash string, judgeAddress string) *MsgProposeRefundHash {
	return &MsgProposeRefundHash{
		RefundHash:   refundHash,
		JudgeAddress: judgeAddress,
	}
}

func (msg *MsgProposeRefundHash) Route() string {
	return RouterKey
}

func (msg *MsgProposeRefundHash) Type() string {
	return TypeMsgProposeRefundHash
}

func (msg *MsgProposeRefundHash) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgProposeRefundHash) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgProposeRefundHash) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid judgeAddress address (%s)", err)
	}

	// Check if the reveal hash is a valid 64-character long hexadecimal string
	if len(msg.RefundHash) != 64 {
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "RefundHash must be a 64-character long hexadecimal string")
	}

	if _, err := hex.DecodeString(msg.RefundHash); err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "RefundHash must be a valid hexadecimal string")
	}

	return nil
}
