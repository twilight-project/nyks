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
	cdc.RegisterConcrete(&MsgWithdrawBtcRequest{}, "bridge/WithdrawRequest", nil)
	cdc.RegisterConcrete(&MsgSweepProposal{}, "bridge/SweepProposal", nil)
	cdc.RegisterConcrete(&MsgWithdrawTxSigned{}, "bridge/WithdrawTxSigned", nil)
	cdc.RegisterConcrete(&MsgWithdrawTxFinal{}, "bridge/WithdrawTxFinal", nil)
	cdc.RegisterConcrete(&MsgSignRefund{}, "bridge/SignRefund", nil)
	cdc.RegisterConcrete(&MsgBroadcastRefund{}, "bridge/BroadcastRefund", nil)
	cdc.RegisterConcrete(&MsgSignSweep{}, "bridge/SignSweep", nil)
	cdc.RegisterConcrete(&MsgProposeRefundHash{}, "bridge/ProposeRefundHash", nil)
	cdc.RegisterConcrete(&MsgConfirmBtcWithdraw{}, "bridge/ConfirmBtcWithdraw", nil)
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
	registry.RegisterInterface(
		"BtcProposal",
		(*nykstypes.BtcProposal)(nil),
		&MsgSweepProposal{},
	)
	registry.RegisterInterface(
		"BtcProposal",
		(*nykstypes.BtcProposal)(nil),
		&MsgConfirmBtcWithdraw{},
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
		&MsgWithdrawBtcRequest{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSweepProposal{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgWithdrawTxSigned{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgWithdrawTxFinal{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSignRefund{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgBroadcastRefund{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSignSweep{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgProposeRefundHash{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgConfirmBtcWithdraw{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
