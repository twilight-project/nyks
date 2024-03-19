package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/twilight-project/nyks/x/bootstrap/keeper"
	"github.com/twilight-project/nyks/x/bootstrap/types"
)

func SimulateMsgCreateValidatorWrapper(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgCreateValidatorWrapper{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the CreateValidatorWrapper simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "CreateValidatorWrapper simulation not implemented"), nil, nil
	}
}
