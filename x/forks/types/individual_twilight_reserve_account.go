package types

// IndividualTwilightReserveAccounter is an interface that describes the methods
// required from the IndividualTwilightReserveAccount type in the volt module.
type IndividualTwilightReserveAccounter interface {
	// Define the methods you need from the volt.IndividualTwilightReserveAccount type.
	GetTwilightAddress() string
	GetBtcValue() uint64
}
