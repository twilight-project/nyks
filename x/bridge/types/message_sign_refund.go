package types

import (
	"encoding/hex"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/forks/types"
)

const TypeMsgSignRefund = "sign_refund"

var _ sdk.Msg = &MsgSignRefund{}

func NewMsgSignRefund(reserveId uint64, roundId uint64, signerPublicKey string, refundSignature string, btcOracleAddress string) *MsgSignRefund {
	return &MsgSignRefund{
		ReserveId:        reserveId,
		RoundId:          roundId,
		SignerPublicKey:  signerPublicKey,
		RefundSignature:  refundSignature,
		BtcOracleAddress: btcOracleAddress,
	}
}

func (msg *MsgSignRefund) Route() string {
	return RouterKey
}

func (msg *MsgSignRefund) Type() string {
	return TypeMsgSignRefund
}

func (msg *MsgSignRefund) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.BtcOracleAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSignRefund) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg MsgSignRefund) ValidateBasic() error {
	// Validate ReserveId
	if msg.ReserveId == 0 {
		return sdkerrors.Wrapf(types.ErrInvalid, "Reserve address cannot be empty")
	}

	// Validate RoundId
	if msg.RoundId == 0 {
		return sdkerrors.Wrapf(types.ErrInvalid, "Round ID cannot be empty")
	}

	// Validate btcOracleAddress
	if len(msg.BtcOracleAddress) == 0 {
		return sdkerrors.Wrapf(types.ErrInvalid, "BTC Oracle address cannot be empty")
	}

	// Validate refundSignature
	if len(msg.RefundSignature) == 0 {
		return sdkerrors.Wrapf(types.ErrInvalid, "Refund signature cannot be empty")
	}

	// Validate signerPublicKey (BTC public key)
	signerPublicKeyBytes, err := hex.DecodeString(msg.SignerPublicKey)
	if err != nil {
		return sdkerrors.Wrapf(types.ErrInvalid, "Invalid BTC public key format")
	}

	if len(signerPublicKeyBytes) != 33 && len(signerPublicKeyBytes) != 65 {
		return sdkerrors.Wrapf(types.ErrInvalid, "Invalid BTC public key length")
	}

	if len(signerPublicKeyBytes) == 33 && (signerPublicKeyBytes[0] != 0x02 && signerPublicKeyBytes[0] != 0x03) {
		return sdkerrors.Wrapf(types.ErrInvalid, "Invalid BTC compressed public key prefix")
	}

	if len(signerPublicKeyBytes) == 65 && signerPublicKeyBytes[0] != 0x04 {
		return sdkerrors.Wrapf(types.ErrInvalid, "Invalid BTC uncompressed public key prefix")
	}

	return nil
}
