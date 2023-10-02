package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/forks/types"
)

const TypeMsgBroadcastTxRefund = "broadcast_tx_refund"

var _ sdk.Msg = &MsgBroadcastTxRefund{}

func NewMsgBroadcastTxRefund(reserveId uint64, roundId uint64, signedRefundTx string, judgeAddress string) *MsgBroadcastTxRefund {
	return &MsgBroadcastTxRefund{
		ReserveId:      reserveId,
		RoundId:        roundId,
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
	// Validate ReserveId
	if msg.ReserveId == 0 {
		return sdkerrors.Wrapf(types.ErrInvalid, "Reserve address cannot be empty")
	}

	// Validate RoundId
	if msg.RoundId == 0 {
		return sdkerrors.Wrapf(types.ErrInvalid, "Round ID cannot be empty")
	}
	_, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
