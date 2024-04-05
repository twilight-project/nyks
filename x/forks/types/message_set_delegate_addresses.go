package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSetDelegateAddresses = "set_delegate_addresses"

var _ sdk.Msg = &MsgSetDelegateAddresses{}

func NewMsgSetDelegateAddresses(validatorAddress string, btcOracleAddress string, btcPublicKey string, zkOracleAddress string) *MsgSetDelegateAddresses {
	return &MsgSetDelegateAddresses{
		ValidatorAddress: validatorAddress,
		BtcOracleAddress: btcOracleAddress,
		BtcPublicKey:     btcPublicKey,
		ZkOracleAddress:  zkOracleAddress,
	}
}

func (msg *MsgSetDelegateAddresses) Route() string {
	return RouterKey
}

func (msg *MsgSetDelegateAddresses) Type() string {
	return TypeMsgSetDelegateAddresses
}

func (msg *MsgSetDelegateAddresses) GetSigners() []sdk.AccAddress {
	acc, err := sdk.ValAddressFromBech32(msg.ValidatorAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{sdk.AccAddress(acc)}
}

func (msg *MsgSetDelegateAddresses) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSetDelegateAddresses) ValidateBasic() error {
	if _, err := sdk.ValAddressFromBech32(msg.ValidatorAddress); err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid validator address (%s)", err)
	}

	if _, err := sdk.AccAddressFromBech32(msg.BtcOracleAddress); err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid BtcOracleAddress address (%s)", err)
	}

	if msg.BtcPublicKey == "" && msg.ZkOracleAddress == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "at least one of BtcPublicKey or ZkOracleAddress must be provided")
	}

	if msg.BtcPublicKey != "" {
		if _, err := NewBtcPublicKey(msg.BtcPublicKey); err != nil {
			return sdkerrors.Wrapf(sdkerrors.ErrInvalidPubKey, "invalid BtcPublicKey (%s)", err)
		}
	}

	if msg.ZkOracleAddress != "" {
		if _, err := sdk.AccAddressFromBech32(msg.ZkOracleAddress); err != nil {
			return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid ZkOracleAddress address (%s)", err)
		}
	}

	return nil
}
