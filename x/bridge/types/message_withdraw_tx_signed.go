package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgWithdrawTxSigned = "withdraw_tx_signed"

var _ sdk.Msg = &MsgWithdrawTxSigned{}

func NewMsgWithdrawTxSigned(creator string, validatorAddress string, btcTxSigned string) *MsgWithdrawTxSigned {
	return &MsgWithdrawTxSigned{
		Creator:          creator,
		ValidatorAddress: validatorAddress,
		BtcTxSigned:      btcTxSigned,
	}
}

func (msg *MsgWithdrawTxSigned) Route() string {
	return RouterKey
}

func (msg *MsgWithdrawTxSigned) Type() string {
	return TypeMsgWithdrawTxSigned
}

func (msg *MsgWithdrawTxSigned) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgWithdrawTxSigned) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgWithdrawTxSigned) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
