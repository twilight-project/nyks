package types

const (
	// FragmentMaxLimit is the total number of fragments
	FragmentMaxLimit = 8

	// FragmentSignersMaxLimit is the total number of signers in a fragment
	FragmentSignersMaxLimit = 6

	// FragmentSignersMinLimit is the minimum number of signers in a fragment
	FragmentSignersMinLimit = 3

	// FragmentSignersMinThreshold is the minimum number of signers that needs to sign
	FragmentSignersMinThreshold = 2

	// MaxReservesPerFragment is the total number of reserves per fragment
	MaxReservesPerFragment = 1

	// BtcReserveMaxLimit is the total number of reserves
	BtcReserveMaxLimit = 1

	// MaxOutgoingBtcOutputs is the number of outputs we can create in a btc request
	MaxOutgoingBtcOutputs = 2
)
