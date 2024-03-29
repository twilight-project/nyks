package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "github.com/twilight-project/nyks/testutil/keeper"
	"github.com/twilight-project/nyks/x/volt/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.VoltKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
