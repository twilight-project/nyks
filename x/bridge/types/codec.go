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
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
