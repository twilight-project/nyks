package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAcceptSigners = "accept_signers"

var _ sdk.Msg = &MsgAcceptSigners{}

func NewMsgAcceptSigners(fragmentId uint64, applicationIds []uint64, judgeAddress string) *MsgAcceptSigners {
	return &MsgAcceptSigners{
		FragmentId:           fragmentId,
		SignerApplicationIds: applicationIds,
		JudgeAddress:         judgeAddress,
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

	// Validate signerApplicationIds
	if len(msg.SignerApplicationIds) == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "signerApplicationIds cannot be empty")
	}

	return nil
}
