package types

import (
	"encoding/hex"
	fmt "fmt"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	BtcAddressMinLen = 26
	BtcAddressMaxLen = 62
)

// Regular BtcAddress
type BtcAddress struct {
	BtcAddress string
}

// Regular BtcScript
type BtcScript struct {
	BtcScript string
}

// Returns the contained PublicKey as a string
func (ea BtcAddress) GetBtcAddress() string {
	return ea.BtcAddress
}

// Sets the contained Address, performing validation before updating the value
func (ea BtcAddress) SetBtcAddress(Address string) error {
	if err := ValidateBtcAddress(Address); err != nil {
		return err
	}
	ea.BtcAddress = Address
	return nil
}

// Creates a new BtcAddress from a string, performing validation and returning any validation errors
func NewBtcAddress(Address string) (*BtcAddress, error) {
	if err := ValidateBtcAddress(Address); err != nil {
		return nil, sdkerrors.Wrap(err, "invalid input PublicKey")
	}
	addr := BtcAddress{Address}
	return &addr, nil
}

// Validates the input string as an Btc PublicKey
// PublicKeyes must not be empty, have 42 character length, start with 0x and have 40 remaining characters in [0-9a-fA-F]
func ValidateBtcAddress(Address string) error {
	if Address == "" {
		return fmt.Errorf("empty")
	}
	if len(Address) < BtcAddressMinLen && len(Address) > BtcAddressMaxLen {
		return fmt.Errorf("Address (%s) of the wrong length expected between (%d) and (%d) actual(%d)", Address, BtcAddressMinLen, BtcAddressMaxLen, len(Address))
	}

	return nil
}

// IsValidSignature verifies that the signature is a valid hex string within the DER format length range
// It's a basic check
func IsValidSignature(signature string) bool {
	signatureLen := len(signature)

	// Check if the length is valid for either DER format (between 140 and 144 characters)
	// or fixed 64-byte format (128 characters)
	if (signatureLen < 140 || signatureLen > 144) && signatureLen != 128 {
		return false
	}

	// Check if the string is a valid hex
	_, err := hex.DecodeString(signature)
	if err != nil {
		return false
	}

	return true
}

// Returns the contained PublicKey as a string
func (ea BtcScript) GetBtcReserveScript() string {
	return ea.BtcScript
}

// Sets the contained Address, performing validation before updating the value
func (ea BtcScript) SetBtcReserveScript(Script string) error {
	ea.BtcScript = Script
	return nil
}

// Creates a new BtcScript from a string,
// SHOULD perform validation and returning any validation errors
func NewBtcScript(Address string) (*BtcScript, error) {
	script := BtcScript{Address}
	return &script, nil
}

// ValidateBtcTransaction validates the input string as an Btc Transaction
func ValidateBtcTransaction(tx string) error {
	// Check if the transaction data is not empty
	if len(tx) == 0 {
		return sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "%s cannot be empty", tx)
	}

	// Deserialize the Bitcoin transaction data
	txBytes, err := hex.DecodeString(tx)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "Invalid transaction data: not a valid hex tx %s", tx)
	}

	// Check the transaction size (replace minSize and maxSize with appropriate values)
	minSize := 100    // minimum allowed transaction size in bytes
	maxSize := 100000 // maximum allowed transaction size in bytes

	if len(txBytes) < minSize || len(txBytes) > maxSize {
		return sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, fmt.Sprintf("Invalid transaction size: must be between %d and %d bytes, transaction passed %s", minSize, maxSize, tx))
	}

	return nil
}

func IsValidBtcTxHash(txHash string) bool {
	// Check if the hash string is a valid hexadecimal string
	_, err := hex.DecodeString(txHash)
	if err != nil {
		return false
	}

	// Check if the hash string has the correct length (64 characters)
	if len(txHash) != 64 {
		return false
	}

	return true
}
