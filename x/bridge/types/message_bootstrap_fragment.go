package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBootstrapFragment = "bootstrap_fragment"

var _ sdk.Msg = &MsgBootstrapFragment{}

func NewMsgBootstrapFragment(judgeAddress string, numOfSigners uint32, threshold uint32, signerApplicationFee uint64, reserveAddress string, reserveScript string, arbitraryData string, validatorAddress string) *MsgBootstrapFragment {
	return &MsgBootstrapFragment{
		JudgeAddress:         judgeAddress,
		NumOfSigners:         numOfSigners,
		Threshold:            threshold,
		SignerApplicationFee: signerApplicationFee,
		ReserveAddress:       reserveAddress,
		ReserveScript:        reserveScript,
		ArbitraryData:        arbitraryData,
		ValidatorAddress:     validatorAddress,
	}
}

func (msg *MsgBootstrapFragment) Route() string {
	return RouterKey
}

func (msg *MsgBootstrapFragment) Type() string {
	return TypeMsgBootstrapFragment
}

func (msg *MsgBootstrapFragment) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.ValidatorAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBootstrapFragment) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBootstrapFragment) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.ValidatorAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
