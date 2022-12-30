package keeper

import (
	"github.com/twilight-project/nyks/x/bridge/types"
)

var _ types.QueryServer = Keeper{}
