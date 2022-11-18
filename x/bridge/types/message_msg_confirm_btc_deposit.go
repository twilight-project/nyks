package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgConfirmBtcDeposit = "confirm_btc_deposit"

var _ sdk.Msg = &MsgConfirmBtcDeposit{}

func NewMsgConfirmBtcDeposit(depositAddress string, depositAmount uint64, inputAddress string, blockHeight uint64, blockHash string, twilightDepositAddress string, btcOracleAddress string) *MsgConfirmBtcDeposit {
	return &MsgConfirmBtcDeposit{
		DepositAddress:         depositAddress,
		DepositAmount:          depositAmount,
		InputAddress:           inputAddress,
		BlockHeight:            blockHeight,
		BlockHash:              blockHash,
		TwilightDepositAddress: twilightDepositAddress,
		BtcOracleAddress:       btcOracleAddress,
	}
}

func (msg *MsgConfirmBtcDeposit) Route() string {
	return RouterKey
}

func (msg *MsgConfirmBtcDeposit) Type() string {
	return TypeMsgConfirmBtcDeposit
}

func (msg *MsgConfirmBtcDeposit) GetSigners() []sdk.AccAddress {
	btcOracleAddress, err := sdk.AccAddressFromBech32(msg.BtcOracleAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{btcOracleAddress}
}

func (msg *MsgConfirmBtcDeposit) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgConfirmBtcDeposit) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.BtcOracleAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
