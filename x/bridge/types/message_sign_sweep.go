package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSignSweep = "sign_sweep"

var _ sdk.Msg = &MsgSignSweep{}

func NewMsgSignSweep(creator string, reserveAddress string, signerAddress string, sweepSignature string, btcOracleAddress string) *MsgSignSweep {
	return &MsgSignSweep{
		Creator:          creator,
		ReserveAddress:   reserveAddress,
		SignerAddress:    signerAddress,
		SweepSignature:   sweepSignature,
		BtcOracleAddress: btcOracleAddress,
	}
}

func (msg *MsgSignSweep) Route() string {
	return RouterKey
}

func (msg *MsgSignSweep) Type() string {
	return TypeMsgSignSweep
}

func (msg *MsgSignSweep) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSignSweep) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSignSweep) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
