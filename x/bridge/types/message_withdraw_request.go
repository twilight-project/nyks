package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgWithdrawRequest = "withdraw_request"

var _ sdk.Msg = &MsgWithdrawRequest{}

func NewMsgWithdrawRequest(creator string, twilightAddress string, withdrawAddress string, reserveId uint64, withdrawAmount uint64) *MsgWithdrawRequest {
	return &MsgWithdrawRequest{
		Creator:         creator,
		TwilightAddress: twilightAddress,
		WithdrawAddress: withdrawAddress,
		ReserveId:       reserveId,
		WithdrawAmount:  withdrawAmount,
	}
}

func (msg *MsgWithdrawRequest) Route() string {
	return RouterKey
}

func (msg *MsgWithdrawRequest) Type() string {
	return TypeMsgWithdrawRequest
}

func (msg *MsgWithdrawRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgWithdrawRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgWithdrawRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
