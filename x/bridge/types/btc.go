package types

import (
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
	// if !regexp.MustCompile("^0x[0-9a-fA-F]{64}$").MatchString(PublicKey) {
	// 	return fmt.Errorf("PublicKey(%s) doesn't pass regex", PublicKey)
	// }

	return nil
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
