package keeper

import (
	"context"
	"fmt"

	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/twilight-project/nyks/x/bridge/types"
	volttypes "github.com/twilight-project/nyks/x/volt/types"
)

func (k msgServer) ConfirmBtcDeposit(goCtx context.Context, msg *types.MsgConfirmBtcDeposit) (*types.MsgConfirmBtcDepositResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	err := k.NyksKeeper.CheckOrchestratorValidatorInSet(ctx, msg.OracleAddress)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not check orchstrator validator inset")
	}

	// Check registered reserve address
	_, err1 := k.VoltKeeper.GetBtcReserveIdByAddress(ctx, msg.ReserveAddress)
	if err1 != nil {
		return nil, sdkerrors.Wrapf(volttypes.ErrBtcReserveNotFound, fmt.Sprint(msg.ReserveAddress))
	}

	twilightDepositAddress, err := sdk.AccAddressFromBech32(msg.TwilightDepositAddress)
	if err != nil {
		return nil, err
	}

	_, found := k.VoltKeeper.GetClearingAccount(ctx, sdk.AccAddress(twilightDepositAddress))
	if !found {
		// check GetBtcDepositAddressByTwilightAddress to see if it exists in uncofirmed deposits
		_, found := k.VoltKeeper.GetBtcDepositAddressByTwilightAddress(ctx, sdk.AccAddress(twilightDepositAddress))
		if !found {
			return nil, sdkerrors.Wrap(types.ErrClearingAccountDoesNotExist, "Clearing account for given twilight address doesn't exist")
		}
	}

	any, err := codectypes.NewAnyWithValue(msg)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Could not check Any value")
	}

	val, found := k.NyksKeeper.GetOrchestratorValidator(ctx, msg.GetProposarOrchestrator())
	if !found {
		panic("Could not find ValAddr for delegate key")
	}
	valAddr := val.GetOperator()

	if err := sdk.VerifyAddressFormat(valAddr); err != nil {
		return nil, sdkerrors.Wrap(err, "invalid orchestrator validator address")
	}

	err = k.NyksKeeper.ClaimHandlerCommon(ctx, any, valAddr, msg)
	if err != nil {
		return nil, err
	}

	return &types.MsgConfirmBtcDepositResponse{}, nil
}
