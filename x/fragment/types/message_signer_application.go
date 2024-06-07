package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSignerApplication = "signer_application"

var _ sdk.Msg = &MsgSignerApplication{}

func NewMsgSignerApplication(creator string, fragmentId int32, applicationFee int32, btcPubKey string, signerAddress string) *MsgSignerApplication {
	return &MsgSignerApplication{
		Creator:        creator,
		FragmentId:     fragmentId,
		ApplicationFee: applicationFee,
		BtcPubKey:      btcPubKey,
		SignerAddress:  signerAddress,
	}
}

func (msg *MsgSignerApplication) Route() string {
	return RouterKey
}

func (msg *MsgSignerApplication) Type() string {
	return TypeMsgSignerApplication
}

func (msg *MsgSignerApplication) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSignerApplication) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSignerApplication) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
