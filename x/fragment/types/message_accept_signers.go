package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAcceptSigners = "accept_signers"

var _ sdk.Msg = &MsgAcceptSigners{}

func NewMsgAcceptSigners(creator string, fragmentId int32, signerAddresses string, judgeAddress string) *MsgAcceptSigners {
	return &MsgAcceptSigners{
		Creator:         creator,
		FragmentId:      fragmentId,
		SignerAddresses: signerAddresses,
		JudgeAddress:    judgeAddress,
	}
}

func (msg *MsgAcceptSigners) Route() string {
	return RouterKey
}

func (msg *MsgAcceptSigners) Type() string {
	return TypeMsgAcceptSigners
}

func (msg *MsgAcceptSigners) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAcceptSigners) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAcceptSigners) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
