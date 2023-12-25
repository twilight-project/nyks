package types

import (
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgTransferTx = "transfer_tx"

var _ sdk.Msg = &MsgTransferTx{}

func NewMsgTransferTx(txId string, txByteCode string, txFee uint64, zkOracleAddress string) *MsgTransferTx {
	return &MsgTransferTx{
		TxId:            txId,
		TxByteCode:      txByteCode,
		TxFee:           txFee,
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
	// Check if the transaction ID is empty
	if strings.TrimSpace(msg.TxId) == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "transaction ID cannot be empty")
	}

	// Check if the transaction bytecode is empty and its length
	if len(msg.TxByteCode) < 25 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "transaction bytecode must be at least 25 bytes long")
	}

	// Check if the transaction fee is zero or negative
	if msg.TxFee <= 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidCoins, "transaction fee must be positive")
	}

	// Validate the zkOracleAddress as a bech32 address
	if _, err := sdk.AccAddressFromBech32(msg.ZkOracleAddress); err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidAddress, "zkOracleAddress must be a valid bech32 address")
	}

	return nil
}
