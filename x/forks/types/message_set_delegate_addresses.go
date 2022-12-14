package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSetDelegateAddresses = "set_delegate_addresses"

var _ sdk.Msg = &MsgSetDelegateAddresses{}

func NewMsgSetDelegateAddresses(validatorAddress string, btcOracleAddress string, btcPublicKey string) *MsgSetDelegateAddresses {
	return &MsgSetDelegateAddresses{
		ValidatorAddress: validatorAddress,
		BtcOracleAddress: btcOracleAddress,
		BtcPublicKey:     btcPublicKey,
	}
}

func (msg *MsgSetDelegateAddresses) Route() string {
	return RouterKey
}

func (msg *MsgSetDelegateAddresses) Type() string {
	return TypeMsgSetDelegateAddresses
}

func (msg *MsgSetDelegateAddresses) GetSigners() []sdk.AccAddress {
	acc, err := sdk.AccAddressFromBech32(msg.BtcOracleAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{acc}
}

func (msg *MsgSetDelegateAddresses) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSetDelegateAddresses) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.BtcOracleAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid BtcOracleAddress address (%s)", err)
	}
	return nil
}
