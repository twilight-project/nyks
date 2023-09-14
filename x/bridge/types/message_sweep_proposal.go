package types

import (
	fmt "fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tendermint/tendermint/crypto/tmhash"
	nykstypes "github.com/twilight-project/nyks/x/forks/types"
)

const TypeMsgSweepProposal = "sweep_proposal"

var _ sdk.Msg = &MsgSweepProposal{}

func NewMsgSweepProposal(reserveId uint64, reserveAddress string, judgeAddress string, btcBlockNumber uint64, btcRelayCapacityValue uint64, BtcTxHash string, unlockHeight uint64, roundId uint64, withdrawIdentifiers [][]byte) *MsgSweepProposal {
	return &MsgSweepProposal{
		ReserveId:             reserveId,
		NewReserveAddress:     reserveAddress,
		JudgeAddress:          judgeAddress,
		BtcBlockNumber:        btcBlockNumber,
		BtcRelayCapacityValue: btcRelayCapacityValue,
		BtcTxHash:             BtcTxHash,
		UnlockHeight:          unlockHeight,
		RoundId:               roundId,
		WithdrawIdentifiers:   withdrawIdentifiers,
	}
}

func (msg *MsgSweepProposal) Route() string {
	return RouterKey
}

func (msg *MsgSweepProposal) Type() string {
	return TypeMsgSweepProposal
}

func (msg *MsgSweepProposal) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSweepProposal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSweepProposal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid judge address (%s)", err)
	}

	err = ValidateBtcAddress(msg.NewReserveAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid btc reserve address (%s)", err)
	}

	// check if the reserve id is valid
	if msg.ReserveId == 0 {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid reserve id (%d)", msg.ReserveId)
	}

	err = ValidateBtcTransaction(msg.BtcTxHash)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid btc refund tx (%s)", err)
	}

	// Validate withdrawIdentifiers
	if len(msg.WithdrawIdentifiers) == 0 {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "withdrawIdentifiers cannot be empty")
	}
	for _, identifier := range msg.WithdrawIdentifiers {
		if len(identifier) == 0 {
			return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid identifier: identifier cannot be empty")
		}
		// Add more validation for individual identifiers if needed
	}

	return nil
}

func (msg MsgSweepProposal) GetProposarOrchestrator() sdk.AccAddress {
	err := msg.ValidateBasic()
	if err != nil {
		panic("MsgSweepProposal failed ValidateBasic! Should have been handled earlier")
	}

	val, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		panic(err)
	}

	return val
}

// GetType returns the claim type
func (msg *MsgSweepProposal) GetType() nykstypes.ProposalType {
	return nykstypes.PROPOSAL_TYPE_SWEEP_PROPOSAL
}

func (msg *MsgSweepProposal) ProposalHash() ([]byte, error) {
	path := fmt.Sprintf("%s", msg.BtcTxHash)
	return tmhash.Sum([]byte(path)), nil
}

// We will always return for the height of this message as BtcProposal requires a GetHeight method
// but a sweep proposal doesn't have a btc block height as refund and sweep txs it is proposing are not
// yet broadcasted to the bitcoin network
func (msg *MsgSweepProposal) GetHeight() uint64 {
	return 0
}
