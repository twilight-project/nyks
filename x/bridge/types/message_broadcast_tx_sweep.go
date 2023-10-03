package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/forks/types"
)

const TypeMsgBroadcastTxSweep = "broadcast_refund"

var _ sdk.Msg = &MsgBroadcastTxSweep{}

func NewMsgBroadcastTxSweep(reserveId uint64, roundId uint64, signedSweepTx string, judgeAddress string) *MsgBroadcastTxSweep {
	return &MsgBroadcastTxSweep{
		ReserveId:     reserveId,
		RoundId:       roundId,
		SignedSweepTx: signedSweepTx,
		JudgeAddress:  judgeAddress,
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
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid judge address (%s)", err)
	}

	err = ValidateBtcTransaction(msg.SignedSweepTx)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signed sweep tx (%s)", err)
	}

	return nil
}
