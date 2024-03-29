package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "github.com/twilight-project/nyks/testutil/keeper"
	"github.com/twilight-project/nyks/x/zkos/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.ZkosKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
