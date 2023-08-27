package types

import (
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgProposeSweepAddress = "propose_sweep_address"

var _ sdk.Msg = &MsgProposeSweepAddress{}

func NewMsgProposeSweepAddress(btcAddress string, btcScript string, reserveId uint64, judgeAddress string) *MsgProposeSweepAddress {
	return &MsgProposeSweepAddress{
		BtcAddress:   btcAddress,
		BtcScript:    btcScript,
		ReserveId:    reserveId,
		JudgeAddress: judgeAddress,
	}
}

func (msg *MsgProposeSweepAddress) Route() string {
	return RouterKey
}

func (msg *MsgProposeSweepAddress) Type() string {
	return TypeMsgProposeSweepAddress
}

func (msg *MsgProposeSweepAddress) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgProposeSweepAddress) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgProposeSweepAddress) ValidateBasic() error {
	// Validate BTC Address
	if strings.TrimSpace(msg.BtcAddress) == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "BTC address cannot be empty")
	}

	if ValidateBtcAddress(msg.BtcAddress) != nil {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "Invalid BTC address")
	}

	// Validate BTC Script
	if strings.TrimSpace(msg.BtcScript) == "" {
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "BTC script cannot be empty")
	}

	if len(msg.BtcScript) < 5 || len(msg.BtcScript) > 10000 {
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "Invalid BTC script length")
	}

	// Validate Reserve ID
	if msg.ReserveId == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Reserve ID cannot be zero")
	}

	// Validate Judge Address
	if _, err := sdk.AccAddressFromBech32(msg.JudgeAddress); err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "Invalid judge address")
	}
	return nil
}
