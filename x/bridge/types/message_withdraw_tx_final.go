package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgWithdrawTxFinal = "withdraw_tx_final"

var _ sdk.Msg = &MsgWithdrawTxFinal{}

func NewMsgWithdrawTxFinal(creator string, judgeAddress string, btcTx string) *MsgWithdrawTxFinal {
	return &MsgWithdrawTxFinal{
		Creator:      creator,
		JudgeAddress: judgeAddress,
		BtcTx:        btcTx,
	}
}

func (msg *MsgWithdrawTxFinal) Route() string {
	return RouterKey
}

func (msg *MsgWithdrawTxFinal) Type() string {
	return TypeMsgWithdrawTxFinal
}

func (msg *MsgWithdrawTxFinal) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgWithdrawTxFinal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgWithdrawTxFinal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
