package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/twilight-project/nyks/testutil/keeper"
	"github.com/twilight-project/nyks/x/bootstrap/keeper"
	"github.com/twilight-project/nyks/x/bootstrap/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.BootstrapKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
