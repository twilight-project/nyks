package types

import (
	"bytes"
	"encoding/hex"
	fmt "fmt"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	BtcPublicKeyLen = 64
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
// PublicKeyes must not be empty, have 42 character length, start with 0x and have 40 remaining characters in [0-9a-fA-F]
func ValidateBtcPublicKey(PublicKey string) error {
	if PublicKey == "" {
		return fmt.Errorf("empty")
	}
	if len(PublicKey) != BtcPublicKeyLen {
		return fmt.Errorf("PublicKey(%s) of the wrong length exp(%d) actual(%d)", PublicKey, BtcPublicKeyLen, len(PublicKey))
	}
	// if !regexp.MustCompile("^0x[0-9a-fA-F]{64}$").MatchString(PublicKey) {
	// 	return fmt.Errorf("PublicKey(%s) doesn't pass regex", PublicKey)
	// }

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
