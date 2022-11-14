package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/twilight-project/nyks/x/forks/keeper"
	"github.com/twilight-project/nyks/x/forks/types"
)

func SimulateMsgSeenBtcChainTip(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgSeenBtcChainTip{
			BtcOracleAddress: simAccount.Address.String(),
		}

		// TODO: Handling the SeenBtcChainTip simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "SeenBtcChainTip simulation not implemented"), nil, nil
	}
}
