package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	forktypes "github.com/twilight-project/nyks/x/forks/types"
)

const TypeMsgSignerApplication = "signer_application"

var _ sdk.Msg = &MsgSignerApplication{}

func NewMsgSignerApplication(fragmentId uint64, applicationFee uint64, feeBips uint64, btcPubKey string, signerAddress string) *MsgSignerApplication {
	return &MsgSignerApplication{
		FragmentId:     fragmentId,
		ApplicationFee: applicationFee,
		FeeBips:        feeBips,
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

	// Check FeeBips is less than 10000
	if msg.FeeBips > 10000 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "feeBips must be less than 10000")
	}

	// Validate BtcPubKey
	if msg.BtcPubKey != "" {
		if _, err := forktypes.NewBtcPublicKey(msg.BtcPubKey); err != nil {
			return sdkerrors.Wrapf(sdkerrors.ErrInvalidPubKey, "invalid BtcPublicKey (%s)", err)
		}
	}

	// Validate signerAddress
	_, err := sdk.AccAddressFromBech32(msg.SignerAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", err)
	}

	return nil
}
