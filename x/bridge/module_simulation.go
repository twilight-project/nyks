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

	opWeightMsgRegisterJudge = "op_weight_msg_register_judge"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRegisterJudge int = 100

	opWeightMsgWithdrawRequest = "op_weight_msg_withdraw_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgWithdrawRequest int = 100

	opWeightMsgSweepProposal = "op_weight_msg_sweep_proposal"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSweepProposal int = 100

	opWeightMsgWithdrawTxSigned = "op_weight_msg_withdraw_tx_signed"
	// TODO: Determine the simulation weight value
	defaultWeightMsgWithdrawTxSigned int = 100

	opWeightMsgWithdrawTxFinal = "op_weight_msg_withdraw_tx_final"
	// TODO: Determine the simulation weight value
	defaultWeightMsgWithdrawTxFinal int = 100

	opWeightMsgConfirmBtcWithdraw = "op_weight_msg_confirm_btc_withdraw"
	// TODO: Determine the simulation weight value
	defaultWeightMsgConfirmBtcWithdraw int = 100

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

	var weightMsgRegisterJudge int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRegisterJudge, &weightMsgRegisterJudge, nil,
		func(_ *rand.Rand) {
			weightMsgRegisterJudge = defaultWeightMsgRegisterJudge
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRegisterJudge,
		bridgesimulation.SimulateMsgRegisterJudge(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgWithdrawRequest int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgWithdrawRequest, &weightMsgWithdrawRequest, nil,
		func(_ *rand.Rand) {
			weightMsgWithdrawRequest = defaultWeightMsgWithdrawRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgWithdrawRequest,
		bridgesimulation.SimulateMsgWithdrawRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSweepProposal int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSweepProposal, &weightMsgSweepProposal, nil,
		func(_ *rand.Rand) {
			weightMsgSweepProposal = defaultWeightMsgSweepProposal
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSweepProposal,
		bridgesimulation.SimulateMsgSweepProposal(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgWithdrawTxSigned int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgWithdrawTxSigned, &weightMsgWithdrawTxSigned, nil,
		func(_ *rand.Rand) {
			weightMsgWithdrawTxSigned = defaultWeightMsgWithdrawTxSigned
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgWithdrawTxSigned,
		bridgesimulation.SimulateMsgWithdrawTxSigned(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgWithdrawTxFinal int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgWithdrawTxFinal, &weightMsgWithdrawTxFinal, nil,
		func(_ *rand.Rand) {
			weightMsgWithdrawTxFinal = defaultWeightMsgWithdrawTxFinal
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgWithdrawTxFinal,
		bridgesimulation.SimulateMsgWithdrawTxFinal(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgConfirmBtcWithdraw int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgConfirmBtcWithdraw, &weightMsgConfirmBtcWithdraw, nil,
		func(_ *rand.Rand) {
			weightMsgConfirmBtcWithdraw = defaultWeightMsgConfirmBtcWithdraw
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgConfirmBtcWithdraw,
		bridgesimulation.SimulateMsgConfirmBtcWithdraw(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
