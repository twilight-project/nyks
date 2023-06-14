package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSignSweep = "sign_sweep"

var _ sdk.Msg = &MsgSignSweep{}

func NewMsgSignSweep(reserveAddress string, signerAddress string, sweepSignature string, btcOracleAddress string) *MsgSignSweep {
	return &MsgSignSweep{
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
	creator, err := sdk.AccAddressFromBech32(msg.BtcOracleAddress)
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
	_, err := sdk.AccAddressFromBech32(msg.BtcOracleAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid btcOracleAddress address (%s)", err)
	}
	return nil
}
