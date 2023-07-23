package zkos

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/twilight-project/nyks/testutil/sample"
	zkossimulation "github.com/twilight-project/nyks/x/zkos/simulation"
	"github.com/twilight-project/nyks/x/zkos/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = zkossimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgTransferTx = "op_weight_msg_transfer_tx"
	// TODO: Determine the simulation weight value
	defaultWeightMsgTransferTx int = 100

	opWeightMsgMintBurnTradingBtc = "op_weight_msg_mint_burn_trading_btc"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMintBurnTradingBtc int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	zkosGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&zkosGenesis)
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

	var weightMsgTransferTx int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgTransferTx, &weightMsgTransferTx, nil,
		func(_ *rand.Rand) {
			weightMsgTransferTx = defaultWeightMsgTransferTx
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgTransferTx,
		zkossimulation.SimulateMsgTransferTx(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMintBurnTradingBtc int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMintBurnTradingBtc, &weightMsgMintBurnTradingBtc, nil,
		func(_ *rand.Rand) {
			weightMsgMintBurnTradingBtc = defaultWeightMsgMintBurnTradingBtc
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMintBurnTradingBtc,
		zkossimulation.SimulateMsgMintBurnTradingBtc(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
