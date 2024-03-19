package keeper

import (
	"github.com/twilight-project/nyks/x/bootstrap/types"
)

var _ types.QueryServer = Keeper{}
