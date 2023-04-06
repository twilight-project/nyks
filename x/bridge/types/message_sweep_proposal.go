package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	volttypes "github.com/twilight-project/nyks/x/volt/types"
)

const TypeMsgSweepProposal = "sweep_proposal"

var _ sdk.Msg = &MsgSweepProposal{}

func NewMsgSweepProposal(creator string, reserveId uint64, reserveAddress string, judgeAddress string, btcRelayCapacityValue uint64, totalValue uint64, privatePoolValue uint64, publicValue uint64, feePool uint64, individualTwilightReserveAccount []string, btcRefundTx string, btcSweepTx string) *MsgSweepProposal {
	return &MsgSweepProposal{
		Creator:                          creator,
		ReserveId:                        reserveId,
		ReserveAddress:                   reserveAddress,
		JudgeAddress:                     judgeAddress,
		BtcRelayCapacityValue:            btcRelayCapacityValue,
		TotalValue:                       totalValue,
		PrivatePoolValue:                 privatePoolValue,
		PublicValue:                      publicValue,
		FeePool:                          feePool,
		IndividualTwilightReserveAccount: []*volttypes.IndividualTwilightReserveAccount{},
		BtcRefundTx:                      btcRefundTx,
		BtcSweepTx:                       btcSweepTx,
	}
}

func (msg *MsgSweepProposal) Route() string {
	return RouterKey
}

func (msg *MsgSweepProposal) Type() string {
	return TypeMsgSweepProposal
}

func (msg *MsgSweepProposal) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSweepProposal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSweepProposal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
