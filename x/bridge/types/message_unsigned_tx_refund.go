package types

import (
	"errors"

	"github.com/cosmos/cosmos-sdk/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	volttypes "github.com/twilight-project/nyks/x/volt/types"
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
	// Validate reserveId (it should be a positive number)
	if msg.ReserveId <= 1 && msg.ReserveId >= volttypes.BtcReserveMaxLimit {
		return errors.New("invalid reserveId")
	}

	// Validate judgeAddress (Cosmos address)
	if _, err := types.AccAddressFromBech32(msg.JudgeAddress); err != nil {
		return errors.New("invalid judgeAddress format")
	}

	// Validate BtcUnsignedRefundTx (Bitcoin transaction)
	err := ValidateBtcTransaction(msg.BtcUnsignedRefundTx)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid unsigned refund tx (%s)", err)
	}

	return nil
}
