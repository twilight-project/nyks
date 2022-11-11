package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMsgConfirmBtcDeposit = "msg_confirm_btc_deposit"

var _ sdk.Msg = &MsgMsgConfirmBtcDeposit{}

func NewMsgMsgConfirmBtcDeposit(depositAddress string, depositAmount uint64, inputAddress string, blockHeight uint64, blockHash string, cosmosDepositAddress string, btcOracleAddress string) *MsgMsgConfirmBtcDeposit {
	return &MsgMsgConfirmBtcDeposit{
		DepositAddress:       depositAddress,
		DepositAmount:        depositAmount,
		InputAddress:         inputAddress,
		BlockHeight:          blockHeight,
		BlockHash:            blockHash,
		CosmosDepositAddress: cosmosDepositAddress,
		BtcOracleAddress:     btcOracleAddress,
	}
}

func (msg *MsgMsgConfirmBtcDeposit) Route() string {
	return RouterKey
}

func (msg *MsgMsgConfirmBtcDeposit) Type() string {
	return TypeMsgMsgConfirmBtcDeposit
}

func (msg *MsgMsgConfirmBtcDeposit) GetSigners() []sdk.AccAddress {
	btcOracleAddress, err := sdk.AccAddressFromBech32(msg.BtcOracleAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{btcOracleAddress}
}

func (msg *MsgMsgConfirmBtcDeposit) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMsgConfirmBtcDeposit) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.BtcOracleAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
