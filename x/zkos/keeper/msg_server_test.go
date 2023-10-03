package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/twilight-project/nyks/testutil/keeper"
	"github.com/twilight-project/nyks/x/zkos/keeper"
	"github.com/twilight-project/nyks/x/zkos/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.ZkosKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
