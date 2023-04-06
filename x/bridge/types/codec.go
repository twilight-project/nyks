package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
	nykstypes "github.com/twilight-project/nyks/x/forks/types"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgConfirmBtcDeposit{}, "bridge/MsgConfirmBtcDeposit", nil)
	cdc.RegisterConcrete(&MsgRegisterBtcDepositAddress{}, "bridge/RegisterBtcDepositAddress", nil)
	cdc.RegisterConcrete(&MsgRegisterReserveAddress{}, "bridge/RegisterReserveAddress", nil)
	cdc.RegisterConcrete(&MsgRegisterJudge{}, "bridge/RegisterJudge", nil)
	cdc.RegisterConcrete(&MsgWithdrawRequest{}, "bridge/WithdrawRequest", nil)
	cdc.RegisterConcrete(&MsgSweepProposal{}, "bridge/SweepProposal", nil)
	cdc.RegisterConcrete(&MsgWithdrawTxSigned{}, "bridge/WithdrawTxSigned", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgConfirmBtcDeposit{},
	)
	registry.RegisterInterface(
		"BtcProposal",
		(*nykstypes.BtcProposal)(nil),
		&MsgConfirmBtcDeposit{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRegisterBtcDepositAddress{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRegisterReserveAddress{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRegisterJudge{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgWithdrawRequest{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSweepProposal{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgWithdrawTxSigned{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
