package bootstrap

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/twilight-project/nyks/testutil/sample"
	bootstrapsimulation "github.com/twilight-project/nyks/x/bootstrap/simulation"
	"github.com/twilight-project/nyks/x/bootstrap/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = bootstrapsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateValidatorWrapper = "op_weight_msg_create_validator_wrapper"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateValidatorWrapper int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	bootstrapGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&bootstrapGenesis)
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

	var weightMsgCreateValidatorWrapper int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateValidatorWrapper, &weightMsgCreateValidatorWrapper, nil,
		func(_ *rand.Rand) {
			weightMsgCreateValidatorWrapper = defaultWeightMsgCreateValidatorWrapper
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateValidatorWrapper,
		bootstrapsimulation.SimulateMsgCreateValidatorWrapper(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
