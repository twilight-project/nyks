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
	TxFee           uint64 `protobuf:"varint,3,opt,name=txFee,proto3" json:"txFee,omitempty"`
	ZkOracleAddress string `protobuf:"bytes,4,opt,name=zkOracleAddress,proto3" json:"zkOracleAddress,omitempty"`
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

func (m *MsgTransferTx) GetTxFee() uint64 {
	if m != nil {
		return m.TxFee
	}
	return 0
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
	// 400 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x92, 0xcf, 0xaa, 0xd3, 0x40,
	0x14, 0xc6, 0x3b, 0xde, 0x5c, 0xb9, 0x3d, 0x70, 0x11, 0x06, 0xc5, 0x58, 0x34, 0x5e, 0x82, 0x8b,
	0x6c, 0x9a, 0x88, 0x6e, 0xdc, 0x36, 0x82, 0xe2, 0xa2, 0x14, 0x62, 0x71, 0xe1, 0x2e, 0x9d, 0x8c,
	0x69, 0x6c, 0x3a, 0x93, 0xce, 0x9c, 0x60, 0xd2, 0x95, 0xe0, 0x0b, 0xf8, 0x4a, 0xee, 0x5c, 0x76,
	0xe9, 0x52, 0xda, 0x37, 0xf0, 0x09, 0x24, 0xd3, 0x46, 0xdb, 0x5a, 0xd1, 0xbb, 0xcb, 0x7c, 0xe7,
	0x4f, 0x7e, 0xdf, 0x39, 0x07, 0xa8, 0xa8, 0x67, 0x3a, 0x58, 0xce, 0xa4, 0x0e, 0xb0, 0xf2, 0x0b,
	0x25, 0x51, 0xd2, 0x7b, 0xf8, 0x21, 0xcb, 0xb3, 0x74, 0x8a, 0x85, 0x92, 0xef, 0x39, 0x43, 0xbf,
	0xc9, 0xf1, 0x9b, 0x1c, 0xf7, 0x13, 0x81, 0xcb, 0xa1, 0x4e, 0xc7, 0x2a, 0x16, 0xfa, 0x1d, 0x57,
	0xe3, 0x8a, 0x52, 0xb0, 0xb0, 0x7a, 0x95, 0xd8, 0xe4, 0x8a, 0x78, 0xdd, 0xc8, 0x7c, 0x53, 0x07,
	0x00, 0xab, 0xb0, 0x46, 0xfe, 0x5c, 0x26, 0xdc, 0xbe, 0x61, 0x22, 0x7b, 0x0a, 0xbd, 0x0d, 0xe7,
	0x58, 0xbd, 0xe0, 0xdc, 0x3e, 0xbb, 0x22, 0x9e, 0x15, 0x6d, 0x1f, 0xd4, 0x83, 0x5b, 0xcb, 0xd9,
	0x48, 0xc5, 0x2c, 0xe7, 0x83, 0x24, 0x51, 0x5c, 0x6b, 0xdb, 0x32, 0xa5, 0xc7, 0xb2, 0x7b, 0x17,
	0xee, 0x1c, 0x40, 0x44, 0x5c, 0x17, 0x52, 0x68, 0xee, 0x7e, 0x21, 0x26, 0x32, 0xcc, 0x04, 0x86,
	0xa5, 0x12, 0x63, 0x15, 0x27, 0x99, 0x48, 0x43, 0x64, 0x0d, 0xd2, 0x3c, 0x13, 0x38, 0x52, 0x8d,
	0x6e, 0x60, 0x2f, 0xa2, 0x3d, 0x85, 0xf6, 0xe0, 0x62, 0x82, 0xec, 0x4d, 0x9c, 0x97, 0x5b, 0x60,
	0x2b, 0xfa, 0xf5, 0xa6, 0xf7, 0xa1, 0xbb, 0x58, 0x0c, 0x18, 0x93, 0xa5, 0x40, 0x83, 0xdc, 0x8d,
	0x7e, 0x0b, 0xf4, 0x11, 0x5c, 0x72, 0xc1, 0x54, 0x5d, 0xe0, 0x6b, 0x16, 0xe7, 0xb1, 0xda, 0x41,
	0x1f, 0x8a, 0x8d, 0xb9, 0x76, 0xaa, 0xad, 0xb9, 0xf3, 0xad, 0xb9, 0x23, 0xd9, 0x7d, 0x08, 0x0f,
	0x4e, 0x5a, 0x68, 0x4d, 0x3e, 0xf9, 0x41, 0xe0, 0x6c, 0xa8, 0x53, 0x3a, 0x05, 0xd8, 0xdb, 0x83,
	0xe7, 0xff, 0x75, 0x6b, 0xfe, 0xc1, 0xb0, 0x7a, 0x8f, 0xff, 0x37, 0xb3, 0xfd, 0x23, 0xfd, 0x48,
	0x80, 0x9e, 0x98, 0xe9, 0x3f, 0x1a, 0xfd, 0x59, 0xd1, 0x7b, 0x76, 0xdd, 0x8a, 0x16, 0x21, 0x7c,
	0xf9, 0x75, 0xed, 0x90, 0xd5, 0xda, 0x21, 0xdf, 0xd7, 0x0e, 0xf9, 0xbc, 0x71, 0x3a, 0xab, 0x8d,
	0xd3, 0xf9, 0xb6, 0x71, 0x3a, 0x6f, 0xfb, 0x69, 0x86, 0xd3, 0x72, 0xe2, 0x33, 0x39, 0x0f, 0xda,
	0xee, 0xfd, 0x5d, 0xfb, 0xc0, 0x5c, 0x77, 0xb5, 0xbb, 0xef, 0xba, 0xe0, 0x7a, 0x72, 0xd3, 0xdc,
	0xf8, 0xd3, 0x9f, 0x01, 0x00, 0x00, 0xff, 0xff, 0x86, 0xec, 0x35, 0x85, 0xf9, 0x02, 0x00, 0x00,
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
		dAtA[i] = 0x22
	}
	if m.TxFee != 0 {
		i = encodeVarintTx(dAtA, i, uint64(m.TxFee))
		i--
		dAtA[i] = 0x18
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
	if m.TxFee != 0 {
		n += 1 + sovTx(uint64(m.TxFee))
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
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field TxFee", wireType)
			}
			m.TxFee = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.TxFee |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
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
