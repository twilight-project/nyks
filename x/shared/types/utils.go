package shared

import (
	forksTypes "github.com/twilight-project/nyks/x/forks/types"
	voltTypes "github.com/twilight-project/nyks/x/volt/types"
)

func ConvertIndividualTwilightAccounts(individualTwilightAccounter []*forksTypes.IndividualTwilightReserveAccounter) []*voltTypes.IndividualTwilightReserveAccount {
	converted := make([]*voltTypes.IndividualTwilightReserveAccount, len(individualTwilightAccounter))
	for i, acc := range individualTwilightAccounter {
		converted[i] = (*acc).(*voltTypes.IndividualTwilightReserveAccount)
	}
	return converted
}

func ConvertToIndividualTwilightAccounter(individualTwilightAccounts []*voltTypes.IndividualTwilightReserveAccount) []*forksTypes.IndividualTwilightReserveAccounter {
	converted := make([]*forksTypes.IndividualTwilightReserveAccounter, len(individualTwilightAccounts))
	for i, acc := range individualTwilightAccounts {
		accounter := forksTypes.IndividualTwilightReserveAccounter(acc)
		converted[i] = &accounter
	}
	return converted
}
