package types

import (
	"encoding/hex"
	fmt "fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBroadcastRefund = "broadcast_refund"

var _ sdk.Msg = &MsgBroadcastRefund{}

func NewMsgBroadcastRefund(signedRefundTx string, judgeAddress string) *MsgBroadcastRefund {
	return &MsgBroadcastRefund{
		SignedRefundTx: signedRefundTx,
		JudgeAddress:   judgeAddress,
	}
}

func (msg *MsgBroadcastRefund) Route() string {
	return RouterKey
}

func (msg *MsgBroadcastRefund) Type() string {
	return TypeMsgBroadcastRefund
}

func (msg *MsgBroadcastRefund) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
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
	_, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	// Check if the transaction data is not empty
	if len(msg.SignedRefundTx) == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "SignedRefundTx cannot be empty")
	}

	// Deserialize the Bitcoin transaction data
	txBytes, err := hex.DecodeString(msg.SignedRefundTx)
	if err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "Invalid transaction data: not a valid hex string")
	}

	// Check the transaction size (replace minSize and maxSize with appropriate values)
	minSize := 100    // minimum allowed transaction size in bytes
	maxSize := 100000 // maximum allowed transaction size in bytes

	if len(txBytes) < minSize || len(txBytes) > maxSize {
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, fmt.Sprintf("Invalid transaction size: must be between %d and %d bytes", minSize, maxSize))
	}
	return nil
}
