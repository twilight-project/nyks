package nyks_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/twilight-project/nyks/testutil/nullify"
	"github.com/twilight-project/nyks/x/nyks"
	"github.com/twilight-project/nyks/x/nyks/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.nyksKeeper(t)
	nyks.InitGenesis(ctx, *k, genesisState)
	got := nyks.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
