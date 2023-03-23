package types

import (
	fmt "fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tendermint/tendermint/crypto/tmhash"
	nykstypes "github.com/twilight-project/nyks/x/forks/types"
)

const TypeMsgConfirmBtcDeposit = "confirm_btc_deposit"

var _ sdk.Msg = &MsgConfirmBtcDeposit{}

func NewMsgConfirmBtcDeposit(depositAddress string, depositAmount uint64, height uint64, hash string, twilightDepositAddress string, reserveAddress string, oracleAddress string) *MsgConfirmBtcDeposit {
	return &MsgConfirmBtcDeposit{
		DepositAddress:         depositAddress,
		DepositAmount:          depositAmount,
		Height:                 height,
		Hash:                   hash,
		TwilightDepositAddress: twilightDepositAddress,
		ReserveAddress:         reserveAddress,
		OracleAddress:          oracleAddress,
	}
}

func (msg *MsgConfirmBtcDeposit) Route() string {
	return RouterKey
}

func (msg *MsgConfirmBtcDeposit) Type() string {
	return TypeMsgConfirmBtcDeposit
}

func (msg *MsgConfirmBtcDeposit) GetSigners() []sdk.AccAddress {
	btcOracleAddress, err := sdk.AccAddressFromBech32(msg.OracleAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{btcOracleAddress}
}

func (msg *MsgConfirmBtcDeposit) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgConfirmBtcDeposit) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.OracleAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	e1 := ValidateBtcAddress(msg.DepositAddress)
	e2 := ValidateBtcAddress(msg.ReserveAddress)
	_, e3 := sdk.AccAddressFromBech32(msg.TwilightDepositAddress)
	if e1 != nil {
		return sdkerrors.Wrap(ErrInvalid, e1.Error())
	} else if e2 != nil {
		return sdkerrors.Wrap(ErrInvalid, e2.Error())
	} else if e3 != nil {
		return sdkerrors.Wrap(ErrInvalid, e3.Error())
	}
	return nil
}

func (msg MsgConfirmBtcDeposit) GetProposarOrchestrator() sdk.AccAddress {
	err := msg.ValidateBasic()
	if err != nil {
		panic("MsgSeenBtcChainTip failed ValidateBasic! Should have been handled earlier")
	}

	val, err := sdk.AccAddressFromBech32(msg.OracleAddress)
	if err != nil {
		panic(err)
	}

	return val
}

// GetType returns the claim type
func (msg *MsgConfirmBtcDeposit) GetType() nykstypes.ProposalType {
	return nykstypes.PROPOSAL_TYPE_BTC_DEPOSIT
}

func (msg *MsgConfirmBtcDeposit) ProposalHash() ([]byte, error) {
	path := fmt.Sprintf("%d/%s/", msg.Height, msg.Hash)
	return tmhash.Sum([]byte(path)), nil
}
