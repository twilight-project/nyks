package types

import (
	"bytes"
	"encoding/hex"
	fmt "fmt"

	btcec "github.com/btcsuite/btcd/btcec"
	"github.com/btcsuite/btcd/wire"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	BtcPublicKeyLen = 66
)

// Regular BtcPublicKey
type BtcPublicKey struct {
	BtcPublicKey string
}

// Returns the contained PublicKey as a string
func (ea BtcPublicKey) GetBtcPublicKey() string {
	return ea.BtcPublicKey
}

// Sets the contained PublicKey, performing validation before updating the value
func (ea BtcPublicKey) SetBtcPublicKey(PublicKey string) error {
	if err := ValidateBtcPublicKey(PublicKey); err != nil {
		return err
	}
	ea.BtcPublicKey = PublicKey
	return nil
}

// Creates a new BtcPublicKey from a string, performing validation and returning any validation errors
func NewBtcPublicKey(PublicKey string) (*BtcPublicKey, error) {
	if err := ValidateBtcPublicKey(PublicKey); err != nil {
		return nil, sdkerrors.Wrap(err, "invalid input PublicKey")
	}
	addr := BtcPublicKey{PublicKey}
	return &addr, nil
}

// Validates the input string as an Btc PublicKey
// PublicKeyes must not be empty, have 64 character length, start with 0x and have 40 remaining characters in [0-9a-fA-F]
func ValidateBtcPublicKey(PublicKey string) error {
	if PublicKey == "" {
		return fmt.Errorf("empty")
	}
	if len(PublicKey) != BtcPublicKeyLen {
		return fmt.Errorf("PublicKey (%s) of the wrong length exp(%d) actual(%d)", PublicKey, BtcPublicKeyLen, len(PublicKey))
	}

	// validate the public key first
	// checks for compressed key length, valid prefix and the public key point is a valid curve point
	pkBytes, err := hex.DecodeString(PublicKey)
	if err != nil {
		return fmt.Errorf("PublicKey(%s) is not encoded properly", PublicKey)
	}

	pk, err := btcec.ParsePubKey(pkBytes, btcec.S256())
	if err != nil {
		return fmt.Errorf("PublicKey(%s) doesn't pass btcec.ParsePubKey check", pk)
	}

	return nil
}

// Performs validation on the wrapped string
func (ea BtcPublicKey) ValidateBasic() error {
	return ValidateBtcPublicKey(ea.BtcPublicKey)
}

// BtcAddrLessThan migrates the Btc PublicKey less than function
func BtcAddrLessThan(e BtcPublicKey, o BtcPublicKey) bool {
	return bytes.Compare([]byte(e.GetBtcPublicKey())[:], []byte(o.GetBtcPublicKey())[:]) == -1
}

// Converts a stored byte btc public key into an encoded string
// THIS FUNCTION NEEDS TESTING
func NewBtcPublicKeyFromBytes(publicKeyBytes []byte) (*BtcPublicKey, error) {
	if err := ValidateBtcPublicKey(hex.EncodeToString(publicKeyBytes)); err != nil {
		return nil, sdkerrors.Wrap(err, "invalid input publicKeyBytes")
	}

	pk := BtcPublicKey{hex.EncodeToString(publicKeyBytes)}

	return &pk, nil
}

// CreateTxFromHex creates a btc transaction object from a hex string
func CreateTxFromHex(txHex string) (*wire.MsgTx, error) {
	// Decode the transaction hex string
	txBytes, err := hex.DecodeString(txHex)
	if err != nil {
		return nil, fmt.Errorf("failed to decode hex string: %v", err)
	}

	// Create a new transaction object
	tx := wire.NewMsgTx(wire.TxVersion)

	// Deserialize the transaction bytes
	err = tx.Deserialize(bytes.NewReader(txBytes))
	if err != nil {
		return nil, fmt.Errorf("failed to deserialize transaction: %v", err)
	}

	return tx, nil
}
