package keeper

import (
	"github.com/twilight-project/nyks/x/forks/types"
)

var _ types.QueryServer = Keeper{}
