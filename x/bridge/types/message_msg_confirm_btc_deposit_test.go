package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"github.com/twilight-project/nyks/testutil/sample"
)

func TestMsgConfirmBtcDeposit_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgConfirmBtcDeposit
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgConfirmBtcDeposit{
				BtcOracleAddress: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgConfirmBtcDeposit{
				BtcOracleAddress: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
