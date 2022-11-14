package types

import (
	fmt "fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/tendermint/tendermint/crypto/tmhash"
)

// BtcProposal represents a proposal of the latest btc chaintip
type BtcProposal interface {
	// The block height that the proposal (checkpoint event on btc chain) occurred on.
	GetHeight() uint64
	// the delegate address of the proposar (orchestrator)
	GetProposarOrchestrator() sdk.AccAddress
	// Which type of proposal this is - this is for future functionality
	GetType() ProposalType
	ValidateBasic() error
	// The proposal hash of this proposal. This is used to store these proposals and also used to check if two different
	// validators proposals agree. Therefore it's extremely important that this include all elements of the proposal
	// with the exception of the orchestrator who sent it in, which will be used as a different part of the index
	ProposalHash() ([]byte, error)
}

func (msg MsgSeenBtcChainTip) GetProposarOrchestrator() sdk.AccAddress {
	err := msg.ValidateBasic()
	if err != nil {
		panic("MsgSeenBtcChainTip failed ValidateBasic! Should have been handled earlier")
	}

	val, err := sdk.AccAddressFromBech32(msg.BtcOracleAddress)
	if err != nil {
		panic(err)
	}

	return val
}

// GetType returns the claim type
func (msg *MsgSeenBtcChainTip) GetType() ProposalType {
	return PROPOSAL_TYPE_BTC_CHAINTIP
}

func (msg *MsgSeenBtcChainTip) ProposalHash() ([]byte, error) {
	path := fmt.Sprintf("%d/%s/", msg.Height, msg.Hash)
	return tmhash.Sum([]byte(path)), nil
}
