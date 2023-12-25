package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	volttypes "github.com/twilight-project/nyks/x/volt/types"
)

const TypeMsgWithdrawBtcRequest = "withdraw_btc_request"

var _ sdk.Msg = &MsgWithdrawBtcRequest{}

func NewMsgWithdrawBtcRequest(withdrawAddress string, reserveId uint64, withdrawAmount uint64, twilightAddress string) *MsgWithdrawBtcRequest {
	return &MsgWithdrawBtcRequest{
		WithdrawAddress: withdrawAddress,
		ReserveId:       reserveId,
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

	// Validate reserveId (it should be a positive number)
	if msg.ReserveId <= 1 && msg.ReserveId >= volttypes.BtcReserveMaxLimit {
		return sdkerrors.Wrapf(ErrInvalid, "invalid reserveId")
	}

	if msg.WithdrawAmount == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "WithdrawAmount cannot be zero")
	}

	return nil
}
