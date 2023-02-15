package volt_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/twilight-project/nyks/testutil/keeper"
	"github.com/twilight-project/nyks/testutil/nullify"
	"github.com/twilight-project/nyks/x/volt"
	"github.com/twilight-project/nyks/x/volt/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.VoltKeeper(t)
	volt.InitGenesis(ctx, *k, genesisState)
	got := volt.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
