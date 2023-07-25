package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMintBurnTradingBtc = "mint_burn_trading_btc"

var _ sdk.Msg = &MsgMintBurnTradingBtc{}

func NewMsgMintBurnTradingBtc(mintOrBurn bool, btcValue uint64, qqAccount string, encryptScalar string, twilightAddress string) *MsgMintBurnTradingBtc {
	return &MsgMintBurnTradingBtc{
		MintOrBurn:      mintOrBurn,
		BtcValue:        btcValue,
		QqAccount:       qqAccount,
		EncryptScalar:   encryptScalar,
		TwilightAddress: twilightAddress,
	}
}

func (msg *MsgMintBurnTradingBtc) Route() string {
	return RouterKey
}

func (msg *MsgMintBurnTradingBtc) Type() string {
	return TypeMsgMintBurnTradingBtc
}

func (msg *MsgMintBurnTradingBtc) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.TwilightAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMintBurnTradingBtc) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMintBurnTradingBtc) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.TwilightAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
