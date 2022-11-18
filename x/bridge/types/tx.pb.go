// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: bridge/tx.proto

package types

import (
	context "context"
	fmt "fmt"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type MsgMsgConfirmBtcDeposit struct {
	DepositAddress         string `protobuf:"bytes,1,opt,name=depositAddress,proto3" json:"depositAddress,omitempty"`
	DepositAmount          uint64 `protobuf:"varint,2,opt,name=depositAmount,proto3" json:"depositAmount,omitempty"`
	InputAddress           string `protobuf:"bytes,3,opt,name=inputAddress,proto3" json:"inputAddress,omitempty"`
	BlockHeight            uint64 `protobuf:"varint,4,opt,name=blockHeight,proto3" json:"blockHeight,omitempty"`
	BlockHash              string `protobuf:"bytes,5,opt,name=blockHash,proto3" json:"blockHash,omitempty"`
	TwilightDepositAddress string `protobuf:"bytes,6,opt,name=twilightDepositAddress,proto3" json:"twilightDepositAddress,omitempty"`
	BtcOracleAddress       string `protobuf:"bytes,7,opt,name=btcOracleAddress,proto3" json:"btcOracleAddress,omitempty"`
}

func (m *MsgMsgConfirmBtcDeposit) Reset()         { *m = MsgMsgConfirmBtcDeposit{} }
func (m *MsgMsgConfirmBtcDeposit) String() string { return proto.CompactTextString(m) }
func (*MsgMsgConfirmBtcDeposit) ProtoMessage()    {}
func (*MsgMsgConfirmBtcDeposit) Descriptor() ([]byte, []int) {
	return fileDescriptor_41dc2e30e6049cae, []int{0}
}
func (m *MsgMsgConfirmBtcDeposit) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgMsgConfirmBtcDeposit) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgMsgConfirmBtcDeposit.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgMsgConfirmBtcDeposit) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgMsgConfirmBtcDeposit.Merge(m, src)
}
func (m *MsgMsgConfirmBtcDeposit) XXX_Size() int {
	return m.Size()
}
func (m *MsgMsgConfirmBtcDeposit) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgMsgConfirmBtcDeposit.DiscardUnknown(m)
}

var xxx_messageInfo_MsgMsgConfirmBtcDeposit proto.InternalMessageInfo

func (m *MsgMsgConfirmBtcDeposit) GetDepositAddress() string {
	if m != nil {
		return m.DepositAddress
	}
	return ""
}

func (m *MsgMsgConfirmBtcDeposit) GetDepositAmount() uint64 {
	if m != nil {
		return m.DepositAmount
	}
	return 0
}

func (m *MsgMsgConfirmBtcDeposit) GetInputAddress() string {
	if m != nil {
		return m.InputAddress
	}
	return ""
}

func (m *MsgMsgConfirmBtcDeposit) GetBlockHeight() uint64 {
	if m != nil {
		return m.BlockHeight
	}
	return 0
}

func (m *MsgMsgConfirmBtcDeposit) GetBlockHash() string {
	if m != nil {
		return m.BlockHash
	}
	return ""
}

func (m *MsgMsgConfirmBtcDeposit) GetTwilightDepositAddress() string {
	if m != nil {
		return m.TwilightDepositAddress
	}
	return ""
}

func (m *MsgMsgConfirmBtcDeposit) GetBtcOracleAddress() string {
	if m != nil {
		return m.BtcOracleAddress
	}
	return ""
}

type MsgMsgConfirmBtcDepositResponse struct {
	TwilightDepositAddress string `protobuf:"bytes,1,opt,name=twilightDepositAddress,proto3" json:"twilightDepositAddress,omitempty"`
}

func (m *MsgMsgConfirmBtcDepositResponse) Reset()         { *m = MsgMsgConfirmBtcDepositResponse{} }
func (m *MsgMsgConfirmBtcDepositResponse) String() string { return proto.CompactTextString(m) }
func (*MsgMsgConfirmBtcDepositResponse) ProtoMessage()    {}
func (*MsgMsgConfirmBtcDepositResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_41dc2e30e6049cae, []int{1}
}
func (m *MsgMsgConfirmBtcDepositResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgMsgConfirmBtcDepositResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgMsgConfirmBtcDepositResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgMsgConfirmBtcDepositResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgMsgConfirmBtcDepositResponse.Merge(m, src)
}
func (m *MsgMsgConfirmBtcDepositResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgMsgConfirmBtcDepositResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgMsgConfirmBtcDepositResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgMsgConfirmBtcDepositResponse proto.InternalMessageInfo

func (m *MsgMsgConfirmBtcDepositResponse) GetTwilightDepositAddress() string {
	if m != nil {
		return m.TwilightDepositAddress
	}
	return ""
}

type MsgRegisterBtcDepositAddress struct {
	DepositAddress         string `protobuf:"bytes,1,opt,name=depositAddress,proto3" json:"depositAddress,omitempty"`
	DepositAmount          uint64 `protobuf:"varint,2,opt,name=depositAmount,proto3" json:"depositAmount,omitempty"`
	AddressScript          string `protobuf:"bytes,3,opt,name=addressScript,proto3" json:"addressScript,omitempty"`
	TwilightDepositAddress string `protobuf:"bytes,4,opt,name=twilightDepositAddress,proto3" json:"twilightDepositAddress,omitempty"`
}

func (m *MsgRegisterBtcDepositAddress) Reset()         { *m = MsgRegisterBtcDepositAddress{} }
func (m *MsgRegisterBtcDepositAddress) String() string { return proto.CompactTextString(m) }
func (*MsgRegisterBtcDepositAddress) ProtoMessage()    {}
func (*MsgRegisterBtcDepositAddress) Descriptor() ([]byte, []int) {
	return fileDescriptor_41dc2e30e6049cae, []int{2}
}
func (m *MsgRegisterBtcDepositAddress) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgRegisterBtcDepositAddress) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgRegisterBtcDepositAddress.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgRegisterBtcDepositAddress) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgRegisterBtcDepositAddress.Merge(m, src)
}
func (m *MsgRegisterBtcDepositAddress) XXX_Size() int {
	return m.Size()
}
func (m *MsgRegisterBtcDepositAddress) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgRegisterBtcDepositAddress.DiscardUnknown(m)
}

var xxx_messageInfo_MsgRegisterBtcDepositAddress proto.InternalMessageInfo

func (m *MsgRegisterBtcDepositAddress) GetDepositAddress() string {
	if m != nil {
		return m.DepositAddress
	}
	return ""
}

func (m *MsgRegisterBtcDepositAddress) GetDepositAmount() uint64 {
	if m != nil {
		return m.DepositAmount
	}
	return 0
}

func (m *MsgRegisterBtcDepositAddress) GetAddressScript() string {
	if m != nil {
		return m.AddressScript
	}
	return ""
}

func (m *MsgRegisterBtcDepositAddress) GetTwilightDepositAddress() string {
	if m != nil {
		return m.TwilightDepositAddress
	}
	return ""
}

type MsgRegisterDepositAddressResponse struct {
}

func (m *MsgRegisterDepositAddressResponse) Reset()         { *m = MsgRegisterDepositAddressResponse{} }
func (m *MsgRegisterDepositAddressResponse) String() string { return proto.CompactTextString(m) }
func (*MsgRegisterDepositAddressResponse) ProtoMessage()    {}
func (*MsgRegisterDepositAddressResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_41dc2e30e6049cae, []int{3}
}
func (m *MsgRegisterDepositAddressResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgRegisterDepositAddressResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgRegisterDepositAddressResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgRegisterDepositAddressResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgRegisterDepositAddressResponse.Merge(m, src)
}
func (m *MsgRegisterDepositAddressResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgRegisterDepositAddressResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgRegisterDepositAddressResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgRegisterDepositAddressResponse proto.InternalMessageInfo

func init() {
	proto.RegisterType((*MsgMsgConfirmBtcDeposit)(nil), "twilightproject.nyks.bridge.MsgMsgConfirmBtcDeposit")
	proto.RegisterType((*MsgMsgConfirmBtcDepositResponse)(nil), "twilightproject.nyks.bridge.MsgMsgConfirmBtcDepositResponse")
	proto.RegisterType((*MsgRegisterBtcDepositAddress)(nil), "twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress")
	proto.RegisterType((*MsgRegisterDepositAddressResponse)(nil), "twilightproject.nyks.bridge.MsgRegisterDepositAddressResponse")
}

func init() { proto.RegisterFile("bridge/tx.proto", fileDescriptor_41dc2e30e6049cae) }

var fileDescriptor_41dc2e30e6049cae = []byte{
	// 413 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0x4f, 0x2a, 0xca, 0x4c,
	0x49, 0x4f, 0xd5, 0x2f, 0xa9, 0xd0, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x92, 0x2e, 0x29, 0xcf,
	0xcc, 0xc9, 0x4c, 0xcf, 0x28, 0x29, 0x28, 0xca, 0xcf, 0x4a, 0x4d, 0x2e, 0xd1, 0xcb, 0xab, 0xcc,
	0x2e, 0xd6, 0x83, 0xa8, 0x52, 0x5a, 0xcf, 0xc4, 0x25, 0xee, 0x5b, 0x9c, 0xee, 0x5b, 0x9c, 0xee,
	0x9c, 0x9f, 0x97, 0x96, 0x59, 0x94, 0xeb, 0x54, 0x92, 0xec, 0x92, 0x5a, 0x90, 0x5f, 0x9c, 0x59,
	0x22, 0xa4, 0xc6, 0xc5, 0x97, 0x02, 0x61, 0x3a, 0xa6, 0xa4, 0x14, 0xa5, 0x16, 0x17, 0x4b, 0x30,
	0x2a, 0x30, 0x6a, 0x70, 0x06, 0xa1, 0x89, 0x0a, 0xa9, 0x70, 0xf1, 0xc2, 0x44, 0x72, 0xf3, 0x4b,
	0xf3, 0x4a, 0x24, 0x98, 0x14, 0x18, 0x35, 0x58, 0x82, 0x50, 0x05, 0x85, 0x94, 0xb8, 0x78, 0x32,
	0xf3, 0x0a, 0x4a, 0xe1, 0x66, 0x31, 0x83, 0xcd, 0x42, 0x11, 0x13, 0x52, 0xe0, 0xe2, 0x4e, 0xca,
	0xc9, 0x4f, 0xce, 0xf6, 0x48, 0x05, 0xb9, 0x57, 0x82, 0x05, 0x6c, 0x0e, 0xb2, 0x90, 0x90, 0x0c,
	0x17, 0x27, 0x84, 0x9b, 0x58, 0x9c, 0x21, 0xc1, 0x0a, 0x36, 0x02, 0x21, 0x20, 0x64, 0xc6, 0x25,
	0x06, 0xf3, 0xac, 0x0b, 0xaa, 0xcb, 0xd9, 0xc0, 0x4a, 0x71, 0xc8, 0x0a, 0x69, 0x71, 0x09, 0x24,
	0x95, 0x24, 0xfb, 0x17, 0x25, 0x26, 0xe7, 0xa4, 0xc2, 0x74, 0xb0, 0x83, 0x75, 0x60, 0x88, 0x2b,
	0x45, 0x72, 0xc9, 0xe3, 0x08, 0xb0, 0xa0, 0xd4, 0xe2, 0x82, 0xfc, 0xbc, 0xe2, 0x54, 0x3c, 0xce,
	0x60, 0xc4, 0xe7, 0x0c, 0xa5, 0x53, 0x8c, 0x5c, 0x32, 0xbe, 0xc5, 0xe9, 0x41, 0xa9, 0xe9, 0x99,
	0xc5, 0x25, 0xa9, 0x45, 0x08, 0x93, 0x61, 0xee, 0xa4, 0x6e, 0x8c, 0xa8, 0x70, 0xf1, 0x26, 0x42,
	0x34, 0x04, 0x27, 0x17, 0x65, 0x16, 0x94, 0x40, 0xa3, 0x04, 0x55, 0x10, 0x8f, 0x67, 0x58, 0xf0,
	0x7a, 0x46, 0x99, 0x4b, 0x11, 0xc9, 0x2f, 0xa8, 0x92, 0xb0, 0x90, 0x32, 0x5a, 0xc1, 0xc4, 0xc5,
	0xec, 0x5b, 0x9c, 0x2e, 0xd4, 0xc5, 0xc8, 0x25, 0x82, 0x35, 0x0d, 0x9a, 0xe8, 0xe1, 0x49, 0xbd,
	0x7a, 0x38, 0x22, 0x42, 0xca, 0x86, 0x1c, 0x5d, 0xf0, 0xe8, 0x9b, 0xcc, 0xc8, 0x25, 0x86, 0xdd,
	0xdd, 0x42, 0x96, 0x84, 0x0c, 0xc6, 0x19, 0x77, 0x52, 0x76, 0xc4, 0x6a, 0xc5, 0x1e, 0x54, 0x4e,
	0x9e, 0x27, 0x1e, 0xc9, 0x31, 0x5e, 0x78, 0x24, 0xc7, 0xf8, 0xe0, 0x91, 0x1c, 0xe3, 0x84, 0xc7,
	0x72, 0x0c, 0x17, 0x1e, 0xcb, 0x31, 0xdc, 0x78, 0x2c, 0xc7, 0x10, 0xa5, 0x9f, 0x9e, 0x59, 0x92,
	0x51, 0x9a, 0xa4, 0x97, 0x9c, 0x9f, 0xab, 0x0f, 0xb3, 0x43, 0x17, 0x6a, 0x89, 0x3e, 0xc8, 0x12,
	0xfd, 0x0a, 0x7d, 0x58, 0xa1, 0x50, 0x59, 0x90, 0x5a, 0x9c, 0xc4, 0x06, 0x2e, 0x18, 0x8c, 0x01,
	0x01, 0x00, 0x00, 0xff, 0xff, 0x83, 0x75, 0xd0, 0xba, 0x2b, 0x04, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MsgClient is the client API for Msg service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MsgClient interface {
	MsgConfirmBtcDeposit(ctx context.Context, in *MsgMsgConfirmBtcDeposit, opts ...grpc.CallOption) (*MsgMsgConfirmBtcDepositResponse, error)
	RegisterDepositAddress(ctx context.Context, in *MsgRegisterBtcDepositAddress, opts ...grpc.CallOption) (*MsgRegisterDepositAddressResponse, error)
}

type msgClient struct {
	cc grpc1.ClientConn
}

func NewMsgClient(cc grpc1.ClientConn) MsgClient {
	return &msgClient{cc}
}

func (c *msgClient) MsgConfirmBtcDeposit(ctx context.Context, in *MsgMsgConfirmBtcDeposit, opts ...grpc.CallOption) (*MsgMsgConfirmBtcDepositResponse, error) {
	out := new(MsgMsgConfirmBtcDepositResponse)
	err := c.cc.Invoke(ctx, "/twilightproject.nyks.bridge.Msg/MsgConfirmBtcDeposit", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) RegisterDepositAddress(ctx context.Context, in *MsgRegisterBtcDepositAddress, opts ...grpc.CallOption) (*MsgRegisterDepositAddressResponse, error) {
	out := new(MsgRegisterDepositAddressResponse)
	err := c.cc.Invoke(ctx, "/twilightproject.nyks.bridge.Msg/RegisterDepositAddress", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MsgServer is the server API for Msg service.
type MsgServer interface {
	MsgConfirmBtcDeposit(context.Context, *MsgMsgConfirmBtcDeposit) (*MsgMsgConfirmBtcDepositResponse, error)
	RegisterDepositAddress(context.Context, *MsgRegisterBtcDepositAddress) (*MsgRegisterDepositAddressResponse, error)
}

// UnimplementedMsgServer can be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func (*UnimplementedMsgServer) MsgConfirmBtcDeposit(ctx context.Context, req *MsgMsgConfirmBtcDeposit) (*MsgMsgConfirmBtcDepositResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MsgConfirmBtcDeposit not implemented")
}
func (*UnimplementedMsgServer) RegisterDepositAddress(ctx context.Context, req *MsgRegisterBtcDepositAddress) (*MsgRegisterDepositAddressResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RegisterDepositAddress not implemented")
}

func RegisterMsgServer(s grpc1.Server, srv MsgServer) {
	s.RegisterService(&_Msg_serviceDesc, srv)
}

func _Msg_MsgConfirmBtcDeposit_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgMsgConfirmBtcDeposit)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).MsgConfirmBtcDeposit(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/twilightproject.nyks.bridge.Msg/MsgConfirmBtcDeposit",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).MsgConfirmBtcDeposit(ctx, req.(*MsgMsgConfirmBtcDeposit))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_RegisterDepositAddress_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgRegisterBtcDepositAddress)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).RegisterDepositAddress(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/twilightproject.nyks.bridge.Msg/RegisterDepositAddress",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).RegisterDepositAddress(ctx, req.(*MsgRegisterBtcDepositAddress))
	}
	return interceptor(ctx, in, info, handler)
}

var _Msg_serviceDesc = grpc.ServiceDesc{
	ServiceName: "twilightproject.nyks.bridge.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "MsgConfirmBtcDeposit",
			Handler:    _Msg_MsgConfirmBtcDeposit_Handler,
		},
		{
			MethodName: "RegisterDepositAddress",
			Handler:    _Msg_RegisterDepositAddress_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "bridge/tx.proto",
}

func (m *MsgMsgConfirmBtcDeposit) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgMsgConfirmBtcDeposit) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgMsgConfirmBtcDeposit) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.BtcOracleAddress) > 0 {
		i -= len(m.BtcOracleAddress)
		copy(dAtA[i:], m.BtcOracleAddress)
		i = encodeVarintTx(dAtA, i, uint64(len(m.BtcOracleAddress)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.TwilightDepositAddress) > 0 {
		i -= len(m.TwilightDepositAddress)
		copy(dAtA[i:], m.TwilightDepositAddress)
		i = encodeVarintTx(dAtA, i, uint64(len(m.TwilightDepositAddress)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.BlockHash) > 0 {
		i -= len(m.BlockHash)
		copy(dAtA[i:], m.BlockHash)
		i = encodeVarintTx(dAtA, i, uint64(len(m.BlockHash)))
		i--
		dAtA[i] = 0x2a
	}
	if m.BlockHeight != 0 {
		i = encodeVarintTx(dAtA, i, uint64(m.BlockHeight))
		i--
		dAtA[i] = 0x20
	}
	if len(m.InputAddress) > 0 {
		i -= len(m.InputAddress)
		copy(dAtA[i:], m.InputAddress)
		i = encodeVarintTx(dAtA, i, uint64(len(m.InputAddress)))
		i--
		dAtA[i] = 0x1a
	}
	if m.DepositAmount != 0 {
		i = encodeVarintTx(dAtA, i, uint64(m.DepositAmount))
		i--
		dAtA[i] = 0x10
	}
	if len(m.DepositAddress) > 0 {
		i -= len(m.DepositAddress)
		copy(dAtA[i:], m.DepositAddress)
		i = encodeVarintTx(dAtA, i, uint64(len(m.DepositAddress)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgMsgConfirmBtcDepositResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgMsgConfirmBtcDepositResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgMsgConfirmBtcDepositResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.TwilightDepositAddress) > 0 {
		i -= len(m.TwilightDepositAddress)
		copy(dAtA[i:], m.TwilightDepositAddress)
		i = encodeVarintTx(dAtA, i, uint64(len(m.TwilightDepositAddress)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgRegisterBtcDepositAddress) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgRegisterBtcDepositAddress) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgRegisterBtcDepositAddress) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.TwilightDepositAddress) > 0 {
		i -= len(m.TwilightDepositAddress)
		copy(dAtA[i:], m.TwilightDepositAddress)
		i = encodeVarintTx(dAtA, i, uint64(len(m.TwilightDepositAddress)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.AddressScript) > 0 {
		i -= len(m.AddressScript)
		copy(dAtA[i:], m.AddressScript)
		i = encodeVarintTx(dAtA, i, uint64(len(m.AddressScript)))
		i--
		dAtA[i] = 0x1a
	}
	if m.DepositAmount != 0 {
		i = encodeVarintTx(dAtA, i, uint64(m.DepositAmount))
		i--
		dAtA[i] = 0x10
	}
	if len(m.DepositAddress) > 0 {
		i -= len(m.DepositAddress)
		copy(dAtA[i:], m.DepositAddress)
		i = encodeVarintTx(dAtA, i, uint64(len(m.DepositAddress)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgRegisterDepositAddressResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgRegisterDepositAddressResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgRegisterDepositAddressResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func encodeVarintTx(dAtA []byte, offset int, v uint64) int {
	offset -= sovTx(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *MsgMsgConfirmBtcDeposit) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.DepositAddress)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	if m.DepositAmount != 0 {
		n += 1 + sovTx(uint64(m.DepositAmount))
	}
	l = len(m.InputAddress)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	if m.BlockHeight != 0 {
		n += 1 + sovTx(uint64(m.BlockHeight))
	}
	l = len(m.BlockHash)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.TwilightDepositAddress)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.BtcOracleAddress)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func (m *MsgMsgConfirmBtcDepositResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.TwilightDepositAddress)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func (m *MsgRegisterBtcDepositAddress) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.DepositAddress)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	if m.DepositAmount != 0 {
		n += 1 + sovTx(uint64(m.DepositAmount))
	}
	l = len(m.AddressScript)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.TwilightDepositAddress)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func (m *MsgRegisterDepositAddressResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func sovTx(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTx(x uint64) (n int) {
	return sovTx(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *MsgMsgConfirmBtcDeposit) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgMsgConfirmBtcDeposit: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgMsgConfirmBtcDeposit: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DepositAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DepositAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field DepositAmount", wireType)
			}
			m.DepositAmount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.DepositAmount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field InputAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.InputAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field BlockHeight", wireType)
			}
			m.BlockHeight = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.BlockHeight |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BlockHash", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BlockHash = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TwilightDepositAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.TwilightDepositAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BtcOracleAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BtcOracleAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgMsgConfirmBtcDepositResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgMsgConfirmBtcDepositResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgMsgConfirmBtcDepositResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TwilightDepositAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.TwilightDepositAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgRegisterBtcDepositAddress) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgRegisterBtcDepositAddress: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgRegisterBtcDepositAddress: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DepositAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DepositAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field DepositAmount", wireType)
			}
			m.DepositAmount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.DepositAmount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AddressScript", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AddressScript = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TwilightDepositAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.TwilightDepositAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *MsgRegisterDepositAddressResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: MsgRegisterDepositAddressResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgRegisterDepositAddressResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipTx(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTx
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthTx
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTx
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTx
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTx        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTx          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTx = fmt.Errorf("proto: unexpected end of group")
)
