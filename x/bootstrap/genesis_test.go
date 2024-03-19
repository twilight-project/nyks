package bootstrap_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/twilight-project/nyks/testutil/keeper"
	"github.com/twilight-project/nyks/testutil/nullify"
	"github.com/twilight-project/nyks/x/bootstrap"
	"github.com/twilight-project/nyks/x/bootstrap/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.BootstrapKeeper(t)
	bootstrap.InitGenesis(ctx, *k, genesisState)
	got := bootstrap.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
