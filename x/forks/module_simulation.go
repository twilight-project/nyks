package forks

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/twilight-project/nyks/testutil/sample"
	nykssimulation "github.com/twilight-project/nyks/x/forks/simulation"
	"github.com/twilight-project/nyks/x/forks/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = nykssimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgSetDelegateAddresses = "op_weight_msg_set_delegate_addresses"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSetDelegateAddresses int = 100

	opWeightMsgSeenBtcChainTip = "op_weight_msg_seen_btc_chain_tip"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSeenBtcChainTip int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	nyksGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&nyksGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgSetDelegateAddresses int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSetDelegateAddresses, &weightMsgSetDelegateAddresses, nil,
		func(_ *rand.Rand) {
			weightMsgSetDelegateAddresses = defaultWeightMsgSetDelegateAddresses
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSetDelegateAddresses,
		nykssimulation.SimulateMsgSetDelegateAddresses(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSeenBtcChainTip int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSeenBtcChainTip, &weightMsgSeenBtcChainTip, nil,
		func(_ *rand.Rand) {
			weightMsgSeenBtcChainTip = defaultWeightMsgSeenBtcChainTip
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSeenBtcChainTip,
		nykssimulation.SimulateMsgSeenBtcChainTip(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
