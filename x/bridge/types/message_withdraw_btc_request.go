package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgWithdrawBtcRequest = "withdraw_btc_request"

var _ sdk.Msg = &MsgWithdrawBtcRequest{}

func NewMsgWithdrawBtcRequest(withdrawAddress string, reserveAddress string, withdrawAmount uint64, twilightAddress string) *MsgWithdrawBtcRequest {
	return &MsgWithdrawBtcRequest{
		WithdrawAddress: withdrawAddress,
		ReserveAddress:  reserveAddress,
		WithdrawAmount:  withdrawAmount,
		TwilightAddress: twilightAddress,
	}
}

func (msg *MsgWithdrawBtcRequest) Route() string {
	return RouterKey
}

func (msg *MsgWithdrawBtcRequest) Type() string {
	return TypeMsgWithdrawBtcRequest
}

func (msg *MsgWithdrawBtcRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.TwilightAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgWithdrawBtcRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgWithdrawBtcRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.TwilightAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid twilight address (%s)", err)
	}

	if msg.WithdrawAddress == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "WithdrawAddress cannot be empty")
	}

	if msg.ReserveAddress == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "ReserveAddress cannot be empty")
	}

	if msg.WithdrawAmount == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "WithdrawAmount cannot be zero")
	}

	return nil
}
