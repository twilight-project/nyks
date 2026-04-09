package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUpdateBtcDepositAddress = "update_btc_deposit_address"

var _ sdk.Msg = &MsgUpdateBtcDepositAddress{}

func NewMsgUpdateBtcDepositAddress(btcDepositAddress string, btcSatoshiTestAmount uint64, twilightStakingAmount uint64, twilightAddress string, validatorAddress string) *MsgUpdateBtcDepositAddress {
	return &MsgUpdateBtcDepositAddress{
		BtcDepositAddress:     btcDepositAddress,
		BtcSatoshiTestAmount:  btcSatoshiTestAmount,
		TwilightStakingAmount: twilightStakingAmount,
		TwilightAddress:       twilightAddress,
		ValidatorAddress:      validatorAddress,
	}
}

func (msg *MsgUpdateBtcDepositAddress) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBtcDepositAddress) Type() string {
	return TypeMsgUpdateBtcDepositAddress
}

func (msg *MsgUpdateBtcDepositAddress) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.ValidatorAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBtcDepositAddress) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBtcDepositAddress) ValidateBasic() error {
	if msg.BtcDepositAddress == "" {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid BTC deposit address: cannot be empty")
	}

	_, err := sdk.AccAddressFromBech32(msg.TwilightAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid twilight address")
	}

	_, err = sdk.AccAddressFromBech32(msg.ValidatorAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid validator address")
	}

	return nil
}
