package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUnsignedTxSweep = "unsigned_tx_sweep"

var _ sdk.Msg = &MsgUnsignedTxSweep{}

func NewMsgUnsignedTxSweep(txId string, btcUnsignedSweepTx string, judgeAddress string) *MsgUnsignedTxSweep {
	return &MsgUnsignedTxSweep{
		TxId:               txId,
		BtcUnsignedSweepTx: btcUnsignedSweepTx,
		JudgeAddress:       judgeAddress,
	}
}

func (msg *MsgUnsignedTxSweep) Route() string {
	return RouterKey
}

func (msg *MsgUnsignedTxSweep) Type() string {
	return TypeMsgUnsignedTxSweep
}

func (msg *MsgUnsignedTxSweep) GetSigners() []sdk.AccAddress {
	judgeAddress, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{judgeAddress}
}

func (msg *MsgUnsignedTxSweep) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUnsignedTxSweep) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
