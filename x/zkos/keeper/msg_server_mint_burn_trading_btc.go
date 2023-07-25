package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/zkos/types"
)

func (k msgServer) MintBurnTradingBtc(goCtx context.Context, msg *types.MsgMintBurnTradingBtc) (*types.MsgMintBurnTradingBtcResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	check, err := k.RevealCommitment(msg.QqAccount, msg.EncryptScalar, msg.GetBtcValue())

	if !check {
		return nil, sdkerrors.Wrap(types.ErrInvalidCommitment, err.Error())
	}

	// set the mint or burn trading btc
	k.SetMintOrBurnTradingBtc(ctx, msg)

	return &types.MsgMintBurnTradingBtcResponse{}, nil
}
