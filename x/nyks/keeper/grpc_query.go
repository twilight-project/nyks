package keeper

import (
	"github.com/twilight-project/nyks/x/nyks/types"
)

var _ types.QueryServer = Keeper{}
