package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
)

const TypeMsgCreateValidatorWrapper = "create_validator_wrapper"

var _ sdk.Msg = &MsgCreateValidatorWrapper{}

func NewMsgCreateValidatorWrapper(creator string, createValidator *stakingtypes.MsgCreateValidator, zkOracleAddress string, btcOracleAddress string) *MsgCreateValidatorWrapper {
	return &MsgCreateValidatorWrapper{
		Creator:          creator,
		CreateValidator:  createValidator,
		ZkOracleAddress:  zkOracleAddress,
		BtcOracleAddress: btcOracleAddress,
	}
}

func (msg *MsgCreateValidatorWrapper) Route() string {
	return RouterKey
}

func (msg *MsgCreateValidatorWrapper) Type() string {
	return TypeMsgCreateValidatorWrapper
}

func (msg *MsgCreateValidatorWrapper) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateValidatorWrapper) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateValidatorWrapper) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
