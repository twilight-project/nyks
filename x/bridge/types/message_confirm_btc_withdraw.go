package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgConfirmBtcWithdraw = "confirm_btc_withdraw"

var _ sdk.Msg = &MsgConfirmBtcWithdraw{}

func NewMsgConfirmBtcWithdraw(creator string, validatorAddress string, txHash string) *MsgConfirmBtcWithdraw {
	return &MsgConfirmBtcWithdraw{
		Creator:          creator,
		ValidatorAddress: validatorAddress,
		TxHash:           txHash,
	}
}

func (msg *MsgConfirmBtcWithdraw) Route() string {
	return RouterKey
}

func (msg *MsgConfirmBtcWithdraw) Type() string {
	return TypeMsgConfirmBtcWithdraw
}

func (msg *MsgConfirmBtcWithdraw) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgConfirmBtcWithdraw) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgConfirmBtcWithdraw) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
