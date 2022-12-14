package bridge

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/twilight-project/nyks/testutil/sample"
	bridgesimulation "github.com/twilight-project/nyks/x/bridge/simulation"
	"github.com/twilight-project/nyks/x/bridge/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = bridgesimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgConfirmBtcDeposit = "op_weight_msg_msg_confirm_btc_deposit"
	// TODO: Determine the simulation weight value
	defaultWeightMsgConfirmBtcDeposit int = 100

	opWeightMsgRegisterDepositAddress = "op_weight_msg_register_deposit_address"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRegisterDepositAddress int = 100

	opWeightMsgRegisterReserveAddress = "op_weight_msg_register_reserve_address"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRegisterReserveAddress int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	bridgeGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&bridgeGenesis)
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

	var weightMsgConfirmBtcDeposit int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgConfirmBtcDeposit, &weightMsgConfirmBtcDeposit, nil,
		func(_ *rand.Rand) {
			weightMsgConfirmBtcDeposit = defaultWeightMsgConfirmBtcDeposit
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgConfirmBtcDeposit,
		bridgesimulation.SimulateMsgConfirmBtcDeposit(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRegisterDepositAddress int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRegisterDepositAddress, &weightMsgRegisterDepositAddress, nil,
		func(_ *rand.Rand) {
			weightMsgRegisterDepositAddress = defaultWeightMsgRegisterDepositAddress
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRegisterDepositAddress,
		bridgesimulation.SimulateMsgRegisterDepositAddress(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRegisterReserveAddress int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRegisterReserveAddress, &weightMsgRegisterReserveAddress, nil,
		func(_ *rand.Rand) {
			weightMsgRegisterReserveAddress = defaultWeightMsgRegisterReserveAddress
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRegisterReserveAddress,
		bridgesimulation.SimulateMsgRegisterReserveAddress(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
