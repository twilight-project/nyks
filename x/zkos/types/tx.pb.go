// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: nyks/zkos/tx.proto

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

type MsgTransferTx struct {
	TxId            string `protobuf:"bytes,1,opt,name=txId,proto3" json:"txId,omitempty"`
	TxByteCode      string `protobuf:"bytes,2,opt,name=txByteCode,proto3" json:"txByteCode,omitempty"`
	ZkOracleAddress string `protobuf:"bytes,3,opt,name=zkOracleAddress,proto3" json:"zkOracleAddress,omitempty"`
}

func (m *MsgTransferTx) Reset()         { *m = MsgTransferTx{} }
func (m *MsgTransferTx) String() string { return proto.CompactTextString(m) }
func (*MsgTransferTx) ProtoMessage()    {}
func (*MsgTransferTx) Descriptor() ([]byte, []int) {
	return fileDescriptor_d3a47139806fd53b, []int{0}
}
func (m *MsgTransferTx) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgTransferTx) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgTransferTx.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgTransferTx) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgTransferTx.Merge(m, src)
}
func (m *MsgTransferTx) XXX_Size() int {
	return m.Size()
}
func (m *MsgTransferTx) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgTransferTx.DiscardUnknown(m)
}

var xxx_messageInfo_MsgTransferTx proto.InternalMessageInfo

func (m *MsgTransferTx) GetTxId() string {
	if m != nil {
		return m.TxId
	}
	return ""
}

func (m *MsgTransferTx) GetTxByteCode() string {
	if m != nil {
		return m.TxByteCode
	}
	return ""
}

func (m *MsgTransferTx) GetZkOracleAddress() string {
	if m != nil {
		return m.ZkOracleAddress
	}
	return ""
}

type MsgTransferTxResponse struct {
}

func (m *MsgTransferTxResponse) Reset()         { *m = MsgTransferTxResponse{} }
func (m *MsgTransferTxResponse) String() string { return proto.CompactTextString(m) }
func (*MsgTransferTxResponse) ProtoMessage()    {}
func (*MsgTransferTxResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_d3a47139806fd53b, []int{1}
}
func (m *MsgTransferTxResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgTransferTxResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgTransferTxResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgTransferTxResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgTransferTxResponse.Merge(m, src)
}
func (m *MsgTransferTxResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgTransferTxResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgTransferTxResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgTransferTxResponse proto.InternalMessageInfo

type MsgMintBurnTradingBtc struct {
	MintOrBurn      bool   `protobuf:"varint,1,opt,name=mintOrBurn,proto3" json:"mintOrBurn,omitempty"`
	BtcValue        uint64 `protobuf:"varint,2,opt,name=btcValue,proto3" json:"btcValue,omitempty"`
	QqAccount       string `protobuf:"bytes,3,opt,name=qqAccount,proto3" json:"qqAccount,omitempty"`
	EncryptScalar   string `protobuf:"bytes,4,opt,name=encryptScalar,proto3" json:"encryptScalar,omitempty"`
	TwilightAddress string `protobuf:"bytes,5,opt,name=twilightAddress,proto3" json:"twilightAddress,omitempty"`
}

func (m *MsgMintBurnTradingBtc) Reset()         { *m = MsgMintBurnTradingBtc{} }
func (m *MsgMintBurnTradingBtc) String() string { return proto.CompactTextString(m) }
func (*MsgMintBurnTradingBtc) ProtoMessage()    {}
func (*MsgMintBurnTradingBtc) Descriptor() ([]byte, []int) {
	return fileDescriptor_d3a47139806fd53b, []int{2}
}
func (m *MsgMintBurnTradingBtc) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgMintBurnTradingBtc) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgMintBurnTradingBtc.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgMintBurnTradingBtc) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgMintBurnTradingBtc.Merge(m, src)
}
func (m *MsgMintBurnTradingBtc) XXX_Size() int {
	return m.Size()
}
func (m *MsgMintBurnTradingBtc) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgMintBurnTradingBtc.DiscardUnknown(m)
}

var xxx_messageInfo_MsgMintBurnTradingBtc proto.InternalMessageInfo

func (m *MsgMintBurnTradingBtc) GetMintOrBurn() bool {
	if m != nil {
		return m.MintOrBurn
	}
	return false
}

func (m *MsgMintBurnTradingBtc) GetBtcValue() uint64 {
	if m != nil {
		return m.BtcValue
	}
	return 0
}

func (m *MsgMintBurnTradingBtc) GetQqAccount() string {
	if m != nil {
		return m.QqAccount
	}
	return ""
}

func (m *MsgMintBurnTradingBtc) GetEncryptScalar() string {
	if m != nil {
		return m.EncryptScalar
	}
	return ""
}

func (m *MsgMintBurnTradingBtc) GetTwilightAddress() string {
	if m != nil {
		return m.TwilightAddress
	}
	return ""
}

type MsgMintBurnTradingBtcResponse struct {
}

func (m *MsgMintBurnTradingBtcResponse) Reset()         { *m = MsgMintBurnTradingBtcResponse{} }
func (m *MsgMintBurnTradingBtcResponse) String() string { return proto.CompactTextString(m) }
func (*MsgMintBurnTradingBtcResponse) ProtoMessage()    {}
func (*MsgMintBurnTradingBtcResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_d3a47139806fd53b, []int{3}
}
func (m *MsgMintBurnTradingBtcResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgMintBurnTradingBtcResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgMintBurnTradingBtcResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgMintBurnTradingBtcResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgMintBurnTradingBtcResponse.Merge(m, src)
}
func (m *MsgMintBurnTradingBtcResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgMintBurnTradingBtcResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgMintBurnTradingBtcResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgMintBurnTradingBtcResponse proto.InternalMessageInfo

func init() {
	proto.RegisterType((*MsgTransferTx)(nil), "twilightproject.nyks.zkos.MsgTransferTx")
	proto.RegisterType((*MsgTransferTxResponse)(nil), "twilightproject.nyks.zkos.MsgTransferTxResponse")
	proto.RegisterType((*MsgMintBurnTradingBtc)(nil), "twilightproject.nyks.zkos.MsgMintBurnTradingBtc")
	proto.RegisterType((*MsgMintBurnTradingBtcResponse)(nil), "twilightproject.nyks.zkos.MsgMintBurnTradingBtcResponse")
}

func init() { proto.RegisterFile("nyks/zkos/tx.proto", fileDescriptor_d3a47139806fd53b) }

var fileDescriptor_d3a47139806fd53b = []byte{
	// 379 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x52, 0x31, 0x4f, 0xc2, 0x40,
	0x14, 0xe6, 0x04, 0x0d, 0x5c, 0x42, 0x4c, 0x2e, 0x31, 0x56, 0xa2, 0xd5, 0x34, 0x0e, 0x2c, 0xb4,
	0x46, 0x17, 0x57, 0xea, 0x60, 0x1c, 0x08, 0x49, 0x25, 0x0e, 0x6e, 0xe5, 0x7a, 0x96, 0x4a, 0xb9,
	0x2b, 0x77, 0xd7, 0xd8, 0x32, 0xf9, 0x13, 0xfc, 0x4b, 0x6e, 0x8e, 0x8c, 0x8e, 0x06, 0xfe, 0x81,
	0xbf, 0xc0, 0xf4, 0xa0, 0x0a, 0x88, 0x51, 0xb7, 0xf6, 0x7b, 0xdf, 0x7b, 0xef, 0xfb, 0xbe, 0x7b,
	0x10, 0xd1, 0xb4, 0x2f, 0xac, 0x51, 0x9f, 0x09, 0x4b, 0x26, 0x66, 0xc4, 0x99, 0x64, 0x68, 0x4f,
	0x3e, 0x04, 0x61, 0xe0, 0xf7, 0x64, 0xc4, 0xd9, 0x3d, 0xc1, 0xd2, 0xcc, 0x38, 0x66, 0xc6, 0x31,
	0x06, 0xb0, 0xda, 0x12, 0x7e, 0x87, 0xbb, 0x54, 0xdc, 0x11, 0xde, 0x49, 0x10, 0x82, 0x25, 0x99,
	0x5c, 0x79, 0x1a, 0x38, 0x02, 0xf5, 0x8a, 0xa3, 0xbe, 0x91, 0x0e, 0xa1, 0x4c, 0xec, 0x54, 0x92,
	0x0b, 0xe6, 0x11, 0x6d, 0x43, 0x55, 0x16, 0x10, 0x54, 0x87, 0xdb, 0xa3, 0x7e, 0x9b, 0xbb, 0x38,
	0x24, 0x4d, 0xcf, 0xe3, 0x44, 0x08, 0xad, 0xa8, 0x48, 0xab, 0xb0, 0xb1, 0x0b, 0x77, 0x96, 0xd6,
	0x39, 0x44, 0x44, 0x8c, 0x0a, 0x62, 0x3c, 0x03, 0x55, 0x69, 0x05, 0x54, 0xda, 0x31, 0xa7, 0x1d,
	0xee, 0x7a, 0x01, 0xf5, 0x6d, 0x89, 0xb3, 0xe5, 0x83, 0x80, 0xca, 0x36, 0xcf, 0x70, 0x25, 0xab,
	0xec, 0x2c, 0x20, 0xa8, 0x06, 0xcb, 0x5d, 0x89, 0x6f, 0xdc, 0x30, 0x9e, 0x49, 0x2b, 0x39, 0x9f,
	0xff, 0x68, 0x1f, 0x56, 0x86, 0xc3, 0x26, 0xc6, 0x2c, 0xa6, 0x72, 0x2e, 0xe9, 0x0b, 0x40, 0xc7,
	0xb0, 0x4a, 0x28, 0xe6, 0x69, 0x24, 0xaf, 0xb1, 0x1b, 0xba, 0x5c, 0x2b, 0x29, 0xc6, 0x32, 0x98,
	0x99, 0xcb, 0xe3, 0xcb, 0xcd, 0x6d, 0xce, 0xcc, 0xad, 0xc0, 0xc6, 0x21, 0x3c, 0x58, 0x6b, 0x21,
	0x37, 0x79, 0xfa, 0x0e, 0x60, 0xb1, 0x25, 0x7c, 0xd4, 0x83, 0x70, 0x21, 0xf1, 0xba, 0xf9, 0xe3,
	0xf3, 0x98, 0x4b, 0x61, 0xd5, 0x4e, 0xfe, 0xca, 0xcc, 0x37, 0xa2, 0x47, 0x00, 0xd1, 0x9a, 0x4c,
	0x7f, 0x19, 0xf4, 0xbd, 0xa3, 0x76, 0xfe, 0xdf, 0x8e, 0x5c, 0x82, 0x7d, 0xf9, 0x32, 0xd1, 0xc1,
	0x78, 0xa2, 0x83, 0xb7, 0x89, 0x0e, 0x9e, 0xa6, 0x7a, 0x61, 0x3c, 0xd5, 0x0b, 0xaf, 0x53, 0xbd,
	0x70, 0xdb, 0xf0, 0x03, 0xd9, 0x8b, 0xbb, 0x26, 0x66, 0x03, 0x2b, 0x9f, 0xde, 0x98, 0x8f, 0xb7,
	0xd4, 0x19, 0x27, 0xf3, 0x43, 0x4e, 0x23, 0x22, 0xba, 0x5b, 0xea, 0x98, 0xcf, 0x3e, 0x02, 0x00,
	0x00, 0xff, 0xff, 0xd7, 0x54, 0xfe, 0xe0, 0xe2, 0x02, 0x00, 0x00,
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
	TransferTx(ctx context.Context, in *MsgTransferTx, opts ...grpc.CallOption) (*MsgTransferTxResponse, error)
	MintBurnTradingBtc(ctx context.Context, in *MsgMintBurnTradingBtc, opts ...grpc.CallOption) (*MsgMintBurnTradingBtcResponse, error)
}

type msgClient struct {
	cc grpc1.ClientConn
}

func NewMsgClient(cc grpc1.ClientConn) MsgClient {
	return &msgClient{cc}
}

func (c *msgClient) TransferTx(ctx context.Context, in *MsgTransferTx, opts ...grpc.CallOption) (*MsgTransferTxResponse, error) {
	out := new(MsgTransferTxResponse)
	err := c.cc.Invoke(ctx, "/twilightproject.nyks.zkos.Msg/TransferTx", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) MintBurnTradingBtc(ctx context.Context, in *MsgMintBurnTradingBtc, opts ...grpc.CallOption) (*MsgMintBurnTradingBtcResponse, error) {
	out := new(MsgMintBurnTradingBtcResponse)
	err := c.cc.Invoke(ctx, "/twilightproject.nyks.zkos.Msg/MintBurnTradingBtc", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MsgServer is the server API for Msg service.
type MsgServer interface {
	TransferTx(context.Context, *MsgTransferTx) (*MsgTransferTxResponse, error)
	MintBurnTradingBtc(context.Context, *MsgMintBurnTradingBtc) (*MsgMintBurnTradingBtcResponse, error)
}

// UnimplementedMsgServer can be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func (*UnimplementedMsgServer) TransferTx(ctx context.Context, req *MsgTransferTx) (*MsgTransferTxResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TransferTx not implemented")
}
func (*UnimplementedMsgServer) MintBurnTradingBtc(ctx context.Context, req *MsgMintBurnTradingBtc) (*MsgMintBurnTradingBtcResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MintBurnTradingBtc not implemented")
}

func RegisterMsgServer(s grpc1.Server, srv MsgServer) {
	s.RegisterService(&_Msg_serviceDesc, srv)
}

func _Msg_TransferTx_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgTransferTx)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).TransferTx(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/twilightproject.nyks.zkos.Msg/TransferTx",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).TransferTx(ctx, req.(*MsgTransferTx))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_MintBurnTradingBtc_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgMintBurnTradingBtc)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).MintBurnTradingBtc(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/twilightproject.nyks.zkos.Msg/MintBurnTradingBtc",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).MintBurnTradingBtc(ctx, req.(*MsgMintBurnTradingBtc))
	}
	return interceptor(ctx, in, info, handler)
}

var _Msg_serviceDesc = grpc.ServiceDesc{
	ServiceName: "twilightproject.nyks.zkos.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "TransferTx",
			Handler:    _Msg_TransferTx_Handler,
		},
		{
			MethodName: "MintBurnTradingBtc",
			Handler:    _Msg_MintBurnTradingBtc_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "nyks/zkos/tx.proto",
}

func (m *MsgTransferTx) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgTransferTx) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgTransferTx) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.ZkOracleAddress) > 0 {
		i -= len(m.ZkOracleAddress)
		copy(dAtA[i:], m.ZkOracleAddress)
		i = encodeVarintTx(dAtA, i, uint64(len(m.ZkOracleAddress)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.TxByteCode) > 0 {
		i -= len(m.TxByteCode)
		copy(dAtA[i:], m.TxByteCode)
		i = encodeVarintTx(dAtA, i, uint64(len(m.TxByteCode)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.TxId) > 0 {
		i -= len(m.TxId)
		copy(dAtA[i:], m.TxId)
		i = encodeVarintTx(dAtA, i, uint64(len(m.TxId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgTransferTxResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgTransferTxResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgTransferTxResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *MsgMintBurnTradingBtc) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgMintBurnTradingBtc) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgMintBurnTradingBtc) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.TwilightAddress) > 0 {
		i -= len(m.TwilightAddress)
		copy(dAtA[i:], m.TwilightAddress)
		i = encodeVarintTx(dAtA, i, uint64(len(m.TwilightAddress)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.EncryptScalar) > 0 {
		i -= len(m.EncryptScalar)
		copy(dAtA[i:], m.EncryptScalar)
		i = encodeVarintTx(dAtA, i, uint64(len(m.EncryptScalar)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.QqAccount) > 0 {
		i -= len(m.QqAccount)
		copy(dAtA[i:], m.QqAccount)
		i = encodeVarintTx(dAtA, i, uint64(len(m.QqAccount)))
		i--
		dAtA[i] = 0x1a
	}
	if m.BtcValue != 0 {
		i = encodeVarintTx(dAtA, i, uint64(m.BtcValue))
		i--
		dAtA[i] = 0x10
	}
	if m.MintOrBurn {
		i--
		if m.MintOrBurn {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *MsgMintBurnTradingBtcResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgMintBurnTradingBtcResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgMintBurnTradingBtcResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
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
func (m *MsgTransferTx) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.TxId)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.TxByteCode)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.ZkOracleAddress)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func (m *MsgTransferTxResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *MsgMintBurnTradingBtc) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.MintOrBurn {
		n += 2
	}
	if m.BtcValue != 0 {
		n += 1 + sovTx(uint64(m.BtcValue))
	}
	l = len(m.QqAccount)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.EncryptScalar)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.TwilightAddress)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func (m *MsgMintBurnTradingBtcResponse) Size() (n int) {
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
func (m *MsgTransferTx) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: MsgTransferTx: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgTransferTx: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TxId", wireType)
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
			m.TxId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TxByteCode", wireType)
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
			m.TxByteCode = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ZkOracleAddress", wireType)
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
			m.ZkOracleAddress = string(dAtA[iNdEx:postIndex])
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
func (m *MsgTransferTxResponse) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: MsgTransferTxResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgTransferTxResponse: illegal tag %d (wire type %d)", fieldNum, wire)
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
func (m *MsgMintBurnTradingBtc) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: MsgMintBurnTradingBtc: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgMintBurnTradingBtc: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field MintOrBurn", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.MintOrBurn = bool(v != 0)
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field BtcValue", wireType)
			}
			m.BtcValue = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.BtcValue |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field QqAccount", wireType)
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
			m.QqAccount = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field EncryptScalar", wireType)
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
			m.EncryptScalar = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TwilightAddress", wireType)
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
			m.TwilightAddress = string(dAtA[iNdEx:postIndex])
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
func (m *MsgMintBurnTradingBtcResponse) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: MsgMintBurnTradingBtcResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgMintBurnTradingBtcResponse: illegal tag %d (wire type %d)", fieldNum, wire)
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
