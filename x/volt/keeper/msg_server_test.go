package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/twilight-project/nyks/testutil/keeper"
	"github.com/twilight-project/nyks/x/volt/keeper"
	"github.com/twilight-project/nyks/x/volt/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.VoltKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
