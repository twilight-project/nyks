package types

import (
	fmt "fmt"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	BtcAddressMinLen = 27
	BtcAddressMaxLen = 32
)

// Regular BtcAddress
type BtcAddress struct {
	BtcAddress string
}

// Returns the contained PublicKey as a string
func (ea BtcAddress) GetBtcAddress() string {
	return ea.BtcAddress
}

// Sets the contained PublicKey, performing validation before updating the value
func (ea BtcAddress) SetBtcAddress(PublicKey string) error {
	if err := ValidateBtcAddress(PublicKey); err != nil {
		return err
	}
	ea.BtcAddress = PublicKey
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
	// if !regexp.MustCompile("^0x[0-9a-fA-F]{64}$").MatchString(PublicKey) {
	// 	return fmt.Errorf("PublicKey(%s) doesn't pass regex", PublicKey)
	// }

	return nil
}
