package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgTransferTx = "transfer_tx"

var _ sdk.Msg = &MsgTransferTx{}

func NewMsgTransferTx(txId string, txByteCode string, zkOracleAddress string) *MsgTransferTx {
	return &MsgTransferTx{
		TxId:            txId,
		TxByteCode:      txByteCode,
		ZkOracleAddress: zkOracleAddress,
	}
}

func (msg *MsgTransferTx) Route() string {
	return RouterKey
}

func (msg *MsgTransferTx) Type() string {
	return TypeMsgTransferTx
}

func (msg *MsgTransferTx) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.ZkOracleAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgTransferTx) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgTransferTx) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.ZkOracleAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
