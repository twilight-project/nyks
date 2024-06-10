package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSignerApplication = "signer_application"

var _ sdk.Msg = &MsgSignerApplication{}

func NewMsgSignerApplication(fragmentId int32, applicationFee int32, btcPubKey string, signerAddress string) *MsgSignerApplication {
	return &MsgSignerApplication{
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
	creator, err := sdk.AccAddressFromBech32(msg.SignerAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSignerApplication) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

// ValidateBasic performs basic validation of the MsgSignerApplication fields.
func (msg *MsgSignerApplication) ValidateBasic() error {
	// Check if fragmentId is positive
	if msg.FragmentId <= 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "fragmentId must be positive")
	}

	// Check if applicationFee is positive
	if msg.ApplicationFee <= 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "applicationFee must be positive")
	}

	// Check if btcPubKey is not empty
	if len(msg.BtcPubKey) == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "btcPubKey cannot be empty")
	}

	// Check if btcPubKey has a valid length (this is just an example, adjust as needed)
	if len(msg.BtcPubKey) != 66 { // Example length for compressed BTC public key
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "btcPubKey has an invalid length")
	}

	// Validate signerAddress
	_, err := sdk.AccAddressFromBech32(msg.SignerAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", err)
	}

	return nil
}
