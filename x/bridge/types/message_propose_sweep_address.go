package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgProposeSweepAddress = "propose_sweep_address"

var _ sdk.Msg = &MsgProposeSweepAddress{}

func NewMsgProposeSweepAddress(creator string, btcAddress string, btcScript string, reserveId int32, judgeAddress string) *MsgProposeSweepAddress {
	return &MsgProposeSweepAddress{
		Creator:      creator,
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
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
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
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
