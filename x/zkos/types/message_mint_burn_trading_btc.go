package types

import (
	"regexp"

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

// TwilightAddress = Standard cosmos address
// EncryptScalar = 32 bytes hex string
// QuisQuisDepositAccount = Address (69 bytes) + encryption (64 bytes)). Hex string
// Address = Net(1 byte) + g (32 bytes) + h (32bytes) + checksum(4 bytes)
// encryption = c (32 bytes) + d (32 bytes)
func (msg *MsgMintBurnTradingBtc) ValidateBasic() error {

	// Validate TwilightAddress
	_, err := sdk.AccAddressFromBech32(msg.TwilightAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid twilight address (%s)", err)
	}

	// Validate EncryptScalar
	if len(msg.EncryptScalar) != 64 { // 32 bytes = 64 characters in hex
		return sdkerrors.Wrapf(ErrInvalidInput, "EncryptScalar must be a 32 bytes hex string")
	}
	match, _ := regexp.MatchString("^[a-fA-F0-9]{64}$", msg.EncryptScalar)
	if !match {
		return sdkerrors.Wrapf(ErrInvalidInput, "EncryptScalar must be a valid hex string")
	}

	// Validate QuisQuisDepositAccount
	if len(msg.QqAccount) != 266 { // (69 + 64) bytes = 133*2 characters in hex
		return sdkerrors.Wrapf(ErrInvalidInput, "QqAccount must be a 133 bytes hex string")
	}
	match, _ = regexp.MatchString("^[a-fA-F0-9]{266}$", msg.QqAccount)
	if !match {
		return sdkerrors.Wrapf(ErrInvalidInput, "QqAccount must be a valid hex string")
	}

	// Further split QqAccount into Address and Encryption for more detailed validation
	address := msg.QqAccount[:138] // 69 bytes = 138 characters in hex
	encryption := msg.QqAccount[138:]

	// Validate Address
	if len(address) != 138 { // 69 bytes = 138 characters in hex
		return sdkerrors.Wrapf(ErrInvalidInput, "Address part of QqAccount must be a 69 bytes hex string")
	}

	// Validate Encryption
	if len(encryption) != 128 { // 64 bytes = 128 characters in hex
		return sdkerrors.Wrapf(ErrInvalidInput, "Encryption part of QqAccount must be a 64 bytes hex string")
	}

	return nil
}
