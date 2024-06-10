package types

import (
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAcceptSigners = "accept_signers"

var _ sdk.Msg = &MsgAcceptSigners{}

func NewMsgAcceptSigners(fragmentId int32, signerAddresses string, judgeAddress string) *MsgAcceptSigners {
	return &MsgAcceptSigners{
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
	creator, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAcceptSigners) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

// ValidateBasic performs basic validation of the MsgAcceptSigners fields.
func (msg *MsgAcceptSigners) ValidateBasic() error {
	// Check if fragmentId is positive
	if msg.FragmentId <= 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "fragmentId must be positive")
	}

	// Validate judgeAddress
	_, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid judge address (%s)", err)
	}

	// Validate signerAddresses
	signerAddresses := strings.Split(msg.SignerAddresses, ",")
	if len(signerAddresses) == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "signerAddresses cannot be empty")
	}

	for _, address := range signerAddresses {
		if _, err := sdk.AccAddressFromBech32(strings.TrimSpace(address)); err != nil {
			return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid signer address (%s)", err)
		}
	}

	return nil
}
