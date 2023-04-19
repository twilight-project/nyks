package types

import (
	fmt "fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tendermint/tendermint/crypto/tmhash"
	nykstypes "github.com/twilight-project/nyks/x/forks/types"
)

const TypeMsgConfirmWithdraw = "confirm_withdraw"

var _ sdk.Msg = &MsgConfirmWithdraw{}

func NewMsgConfirmWithdraw(txHash string, height uint64, hash string, judgeAddress string) *MsgConfirmWithdraw {
	return &MsgConfirmWithdraw{
		TxHash:       txHash,
		Height:       height,
		Hash:         hash,
		JudgeAddress: judgeAddress,
	}
}

func (msg *MsgConfirmWithdraw) Route() string {
	return RouterKey
}

func (msg *MsgConfirmWithdraw) Type() string {
	return TypeMsgConfirmWithdraw
}

func (msg *MsgConfirmWithdraw) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgConfirmWithdraw) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgConfirmWithdraw) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	if msg.TxHash == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "TxHash cannot be empty")
	}

	boolVal := IsValidBtcTxHash(msg.TxHash)
	if boolVal != true {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid btc tx hash (%s)", err)
	}

	if msg.Height == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Height must be greater than 0")
	}
	if msg.Hash == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Hash cannot be empty")
	}

	return nil
}

func (msg MsgConfirmWithdraw) GetProposarOrchestrator() sdk.AccAddress {
	err := msg.ValidateBasic()
	if err != nil {
		panic("MsgSeenBtcChainTip failed ValidateBasic! Should have been handled earlier")
	}

	val, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		panic(err)
	}

	return val
}

// GetType returns the claim type
func (msg *MsgConfirmWithdraw) GetType() nykstypes.ProposalType {
	return nykstypes.PROPOSAL_TYPE_CONFIRM_WITHDRAW
}

func (msg *MsgConfirmWithdraw) ProposalHash() ([]byte, error) {
	path := fmt.Sprintf("%d/%s/", msg.Height, msg.Hash)
	return tmhash.Sum([]byte(path)), nil
}
