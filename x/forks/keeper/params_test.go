package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/twilight-project/nyks/x/forks/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.nyksKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
