package types

import (
	"encoding/hex"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/forks/types"
)

const TypeMsgSignSweep = "sign_sweep"

var _ sdk.Msg = &MsgSignSweep{}

func NewMsgSignSweep(reserveId uint64, roundId uint64, signerPublicKey string, sweepSignatures []string, btcOracleAddress string) *MsgSignSweep {
	return &MsgSignSweep{
		ReserveId:        reserveId,
		RoundId:          roundId,
		SignerPublicKey:  signerPublicKey,
		SweepSignature:   sweepSignatures,
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
	// Validate ReserveId
	if msg.ReserveId == 0 {
		return sdkerrors.Wrapf(types.ErrInvalid, "Reserve address cannot be empty")
	}

	// Validate RoundId
	if msg.RoundId == 0 {
		return sdkerrors.Wrapf(types.ErrInvalid, "Round ID cannot be empty")
	}

	_, err := sdk.AccAddressFromBech32(msg.BtcOracleAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid btcOracleAddress address (%s)", err)
	}

	// Validate signerPublicKey (BTC public key)
	signerPublicKeyBytes, err := hex.DecodeString(msg.SignerPublicKey)
	if err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "Invalid BTC public key format")
	}

	if len(signerPublicKeyBytes) != 33 && len(signerPublicKeyBytes) != 65 {
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "Invalid BTC public key length")
	}

	if len(signerPublicKeyBytes) == 33 && (signerPublicKeyBytes[0] != 0x02 && signerPublicKeyBytes[0] != 0x03) {
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "Invalid BTC compressed public key prefix")
	}

	if len(signerPublicKeyBytes) == 65 && signerPublicKeyBytes[0] != 0x04 {
		return sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, "Invalid BTC uncompressed public key prefix")
	}

	// Check that at least one signature is present in the array
	if len(msg.SweepSignature) == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "at least one sweep signature must be provided")
	}

	return nil
}
