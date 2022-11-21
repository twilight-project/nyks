package keeper

import (
	"context"

	"github.com/twilight-project/nyks/x/bridge/types"
)

// RegisterDepositAddress registers a bitcoin address along with a client's twilight address (a mapping) so that later on we can
// identify an incoming btc deposit.
func (k msgServer) RegisterBtcDepositAddress(goCtx context.Context, msg *types.MsgRegisterBtcDepositAddress) (*types.MsgRegisterBtcDepositAddressResponse, error) {
	// ensure that this passes validation, checks the key validity
	err := msg.ValidateBasic()
	if err != nil {
		return nil, err
	}

	// ctx := sdk.UnwrapSDKContext(goCtx)

	// // check the following, all should be validated in validate basic
	// btcPk, e1 := types.NewBtcAddress(msg.DepositAddress)
	// twilightAddress, e2 := sdk.AccAddressFromBech32(msg.TwilightDepositAddress)
	// if e1 != nil {
	// 	return nil, sdkerrors.Wrap(types.ErrInvalid, e1.Error())
	// } else if e2 != nil {
	// 	return nil, sdkerrors.Wrap(types.ErrInvalid, e2.Error())
	// } else if e3 != nil {
	// 	return nil, sdkerrors.Wrap(types.ErrInvalid, e3.Error())
	// }

	return &types.MsgRegisterBtcDepositAddressResponse{}, nil
}
