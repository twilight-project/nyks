package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSeenBtcChainTip = "seen_btc_chain_tip"

var _ sdk.Msg = &MsgSeenBtcChainTip{}

func NewMsgSeenBtcChainTip(creator string, height uint64, hash string, orchestratorAddress string) *MsgSeenBtcChainTip {
	return &MsgSeenBtcChainTip{
		Creator:             creator,
		Height:              height,
		Hash:                hash,
		OrchestratorAddress: orchestratorAddress,
	}
}

func (msg *MsgSeenBtcChainTip) Route() string {
	return RouterKey
}

func (msg *MsgSeenBtcChainTip) Type() string {
	return TypeMsgSeenBtcChainTip
}

func (msg *MsgSeenBtcChainTip) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSeenBtcChainTip) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSeenBtcChainTip) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
