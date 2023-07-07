package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/twilight-project/nyks/x/zkos/keeper"
	"github.com/twilight-project/nyks/x/zkos/types"
)

func SimulateMsgTransferTx(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgTransferTx{
			ZkOracleAddress: simAccount.Address.String(),
		}

		// TODO: Handling the TransferTx simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "TransferTx simulation not implemented"), nil, nil
	}
}
