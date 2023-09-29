package types

import (
	"errors"
	"regexp"

	"github.com/cosmos/cosmos-sdk/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	volttypes "github.com/twilight-project/nyks/x/volt/types"
)

const TypeMsgUnsignedTxSweep = "unsigned_tx_sweep"

var _ sdk.Msg = &MsgUnsignedTxSweep{}

func NewMsgUnsignedTxSweep(txId string, btcUnsignedSweepTx string, reserveId uint64, roundId uint64, judgeAddress string) *MsgUnsignedTxSweep {
	return &MsgUnsignedTxSweep{
		TxId:               txId,
		BtcUnsignedSweepTx: btcUnsignedSweepTx,
		ReserveId:          reserveId,
		RoundId:            roundId,
		JudgeAddress:       judgeAddress,
	}
}

func (msg *MsgUnsignedTxSweep) Route() string {
	return RouterKey
}

func (msg *MsgUnsignedTxSweep) Type() string {
	return TypeMsgUnsignedTxSweep
}

func (msg *MsgUnsignedTxSweep) GetSigners() []sdk.AccAddress {
	judgeAddress, err := sdk.AccAddressFromBech32(msg.JudgeAddress)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{judgeAddress}
}

func (msg *MsgUnsignedTxSweep) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUnsignedTxSweep) ValidateBasic() error {
	// Validate txId (Cosmos transaction ID)
	if !isValidTxId(msg.TxId) {
		return errors.New("invalid txId format")
	}

	// Validate reserveId (it should be a positive number)
	if msg.ReserveId <= 1 && msg.ReserveId >= volttypes.BtcReserveMaxLimit {
		return sdkerrors.Wrapf(ErrInvalid, "invalid reserveId")
	}

	if msg.RoundId < 1 {
		return sdkerrors.Wrapf(ErrInvalid, "invalid roundId")
	}

	// Validate judgeAddress (Cosmos address)
	if _, err := types.AccAddressFromBech32(msg.JudgeAddress); err != nil {
		return errors.New("invalid judgeAddress format")
	}

	// Validate BtcUnsignedSweepTx (Bitcoin transaction)
	err := ValidateBtcTransaction(msg.BtcUnsignedSweepTx)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid unsigned sweep tx (%s)", err)
	}

	return nil
}

func isValidTxId(txId string) bool {
	// Regular expression to match the format of a Cosmos transaction ID
	re := regexp.MustCompile(`^[a-fA-F0-9]{64}$`)
	return re.MatchString(txId)
}
