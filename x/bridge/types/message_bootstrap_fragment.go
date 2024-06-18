package types

import (
	"unicode"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	volttypes "github.com/twilight-project/nyks/x/volt/types"
)

const TypeMsgBootstrapFragment = "bootstrap_fragment"

var _ sdk.Msg = &MsgBootstrapFragment{}

func NewMsgBootstrapFragment(judgeAddress string, numOfSigners uint64, threshold uint64, signerApplicationFee uint64, reserveAddress string, reserveScript string, fragmentFeeBips uint64, arbitraryData string, validatorAddress string) *MsgBootstrapFragment {
	return &MsgBootstrapFragment{
		JudgeAddress:         judgeAddress,
		NumOfSigners:         numOfSigners,
		Threshold:            threshold,
		SignerApplicationFee: signerApplicationFee,
		ReserveAddress:       reserveAddress,
		ReserveScript:        reserveScript,
		FragmentFeeBips:      fragmentFeeBips,
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

// ValidateBasic performs basic validation on the MsgBootstrapFragment message
func (msg *MsgBootstrapFragment) ValidateBasic() error {
	// Validate judge address
	if _, err := sdk.AccAddressFromBech32(msg.JudgeAddress); err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid judge address (%s)", err)
	}

	// Validate validator address
	// if _, err := sdk.ValAddressFromBech32(msg.ValidatorAddress); err != nil {
	// 	return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid validator address (%s)", err)
	// }

	// Validate numOfSigners is greater than two
	if msg.NumOfSigners < volttypes.MinSignersPerFragment {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "number of signers must be greater than zero")
	}

	// Validate threshold is positive and not greater than numOfSigners
	if msg.Threshold == 0 || msg.Threshold > msg.NumOfSigners {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "threshold must be positive and less than or equal to number of signers")
	}

	// Validate reserve address
	if len(msg.ReserveAddress) == 0 {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "reserve address cannot be empty")
	}

	// Validate reserve script
	if len(msg.ReserveScript) == 0 {
		return sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "reserve script cannot be empty")
	}

	// Validate arbitrary data
	if err := validateArbitraryData(msg.ArbitraryData); err != nil {
		return err
	}

	return nil
}

// validateArbitraryData performs basic validation on arbitrary data
func validateArbitraryData(data string) error {
	// Check length
	if len(data) > 256 {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "arbitrary data too long, must be 256 characters or less")
	}

	// Check for disallowed characters (e.g., non-printable ASCII)
	for _, char := range data {
		if !unicode.IsPrint(char) && !unicode.IsSpace(char) {
			return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "arbitrary data contains non-printable characters")
		}
	}

	return nil
}
