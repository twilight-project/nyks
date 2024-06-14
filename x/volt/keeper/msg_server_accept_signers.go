package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/twilight-project/nyks/x/volt/types"
)

func (k msgServer) AcceptSigners(goCtx context.Context, msg *types.MsgAcceptSigners) (*types.MsgAcceptSignersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Process each signer info
	for _, signerInfo := range msg.SignerInfos {
		err := k.AddSignersToFragment(ctx, msg.FragmentId, signerInfo.SignerAddress, signerInfo.SignerFeeBips)
		if err != nil {
			return nil, err
		}
	}

	// Emit event and return response
	ctx.EventManager().EmitTypedEvent(
		&types.EventAcceptSigners{
			Message:      msg.Type(),
			FragmentId:   msg.FragmentId,
			JudgeAddress: msg.JudgeAddress,
		},
	)
	return &types.MsgAcceptSignersResponse{}, nil
}
