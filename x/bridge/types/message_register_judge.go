package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRegisterJudge = "register_judge"

var _ sdk.Msg = &MsgRegisterJudge{}

func NewMsgRegisterJudge(judgeAddress string, numOfSigners uint32, threshold uint32, signerApplicationFee uint64, arbitraryData string, validatorAddress string) *MsgRegisterJudge {
	return &MsgRegisterJudge{
		JudgeAddress:         judgeAddress,
		NumOfSigners:         numOfSigners,
		Threshold:            threshold,
		SignerApplicationFee: signerApplicationFee,
		ArbitraryData:        arbitraryData,
		ValidatorAddress:     validatorAddress,
	}
}

func (msg *MsgRegisterJudge) Route() string {
	return RouterKey
}

func (msg *MsgRegisterJudge) Type() string {
	return TypeMsgRegisterJudge
}

func (msg *MsgRegisterJudge) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.ValidatorAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRegisterJudge) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRegisterJudge) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.ValidatorAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
