// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: nyks/tx.proto

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

type MsgSetDelegateAddresses struct {
	Creator             string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	ValidatorAddress    string `protobuf:"bytes,2,opt,name=validatorAddress,proto3" json:"validatorAddress,omitempty"`
	OrchestratorAddress string `protobuf:"bytes,3,opt,name=orchestratorAddress,proto3" json:"orchestratorAddress,omitempty"`
	BtcPublicKey        string `protobuf:"bytes,4,opt,name=btcPublicKey,proto3" json:"btcPublicKey,omitempty"`
}

func (m *MsgSetDelegateAddresses) Reset()         { *m = MsgSetDelegateAddresses{} }
func (m *MsgSetDelegateAddresses) String() string { return proto.CompactTextString(m) }
func (*MsgSetDelegateAddresses) ProtoMessage()    {}
func (*MsgSetDelegateAddresses) Descriptor() ([]byte, []int) {
	return fileDescriptor_ee2a9480042ea503, []int{0}
}
func (m *MsgSetDelegateAddresses) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgSetDelegateAddresses) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgSetDelegateAddresses.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgSetDelegateAddresses) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgSetDelegateAddresses.Merge(m, src)
}
func (m *MsgSetDelegateAddresses) XXX_Size() int {
	return m.Size()
}
func (m *MsgSetDelegateAddresses) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgSetDelegateAddresses.DiscardUnknown(m)
}

var xxx_messageInfo_MsgSetDelegateAddresses proto.InternalMessageInfo

func (m *MsgSetDelegateAddresses) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *MsgSetDelegateAddresses) GetValidatorAddress() string {
	if m != nil {
		return m.ValidatorAddress
	}
	return ""
}

func (m *MsgSetDelegateAddresses) GetOrchestratorAddress() string {
	if m != nil {
		return m.OrchestratorAddress
	}
	return ""
}

func (m *MsgSetDelegateAddresses) GetBtcPublicKey() string {
	if m != nil {
		return m.BtcPublicKey
	}
	return ""
}

type MsgSetDelegateAddressesResponse struct {
	Id uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (m *MsgSetDelegateAddressesResponse) Reset()         { *m = MsgSetDelegateAddressesResponse{} }
func (m *MsgSetDelegateAddressesResponse) String() string { return proto.CompactTextString(m) }
func (*MsgSetDelegateAddressesResponse) ProtoMessage()    {}
func (*MsgSetDelegateAddressesResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_ee2a9480042ea503, []int{1}
}
func (m *MsgSetDelegateAddressesResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgSetDelegateAddressesResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgSetDelegateAddressesResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgSetDelegateAddressesResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgSetDelegateAddressesResponse.Merge(m, src)
}
func (m *MsgSetDelegateAddressesResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgSetDelegateAddressesResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgSetDelegateAddressesResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgSetDelegateAddressesResponse proto.InternalMessageInfo

func (m *MsgSetDelegateAddressesResponse) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

type MsgSeenBtcChainTip struct {
	Creator             string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Height              uint64 `protobuf:"varint,2,opt,name=height,proto3" json:"height,omitempty"`
	Hash                string `protobuf:"bytes,3,opt,name=hash,proto3" json:"hash,omitempty"`
	OrchestratorAddress string `protobuf:"bytes,4,opt,name=orchestratorAddress,proto3" json:"orchestratorAddress,omitempty"`
}

func (m *MsgSeenBtcChainTip) Reset()         { *m = MsgSeenBtcChainTip{} }
func (m *MsgSeenBtcChainTip) String() string { return proto.CompactTextString(m) }
func (*MsgSeenBtcChainTip) ProtoMessage()    {}
func (*MsgSeenBtcChainTip) Descriptor() ([]byte, []int) {
	return fileDescriptor_ee2a9480042ea503, []int{2}
}
func (m *MsgSeenBtcChainTip) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgSeenBtcChainTip) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgSeenBtcChainTip.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgSeenBtcChainTip) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgSeenBtcChainTip.Merge(m, src)
}
func (m *MsgSeenBtcChainTip) XXX_Size() int {
	return m.Size()
}
func (m *MsgSeenBtcChainTip) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgSeenBtcChainTip.DiscardUnknown(m)
}

var xxx_messageInfo_MsgSeenBtcChainTip proto.InternalMessageInfo

func (m *MsgSeenBtcChainTip) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *MsgSeenBtcChainTip) GetHeight() uint64 {
	if m != nil {
		return m.Height
	}
	return 0
}

func (m *MsgSeenBtcChainTip) GetHash() string {
	if m != nil {
		return m.Hash
	}
	return ""
}

func (m *MsgSeenBtcChainTip) GetOrchestratorAddress() string {
	if m != nil {
		return m.OrchestratorAddress
	}
	return ""
}

type MsgSeenBtcChainTipResponse struct {
}

func (m *MsgSeenBtcChainTipResponse) Reset()         { *m = MsgSeenBtcChainTipResponse{} }
func (m *MsgSeenBtcChainTipResponse) String() string { return proto.CompactTextString(m) }
func (*MsgSeenBtcChainTipResponse) ProtoMessage()    {}
func (*MsgSeenBtcChainTipResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_ee2a9480042ea503, []int{3}
}
func (m *MsgSeenBtcChainTipResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgSeenBtcChainTipResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgSeenBtcChainTipResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgSeenBtcChainTipResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgSeenBtcChainTipResponse.Merge(m, src)
}
func (m *MsgSeenBtcChainTipResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgSeenBtcChainTipResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgSeenBtcChainTipResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgSeenBtcChainTipResponse proto.InternalMessageInfo

func init() {
	proto.RegisterType((*MsgSetDelegateAddresses)(nil), "twilightproject.nyks.nyks.MsgSetDelegateAddresses")
	proto.RegisterType((*MsgSetDelegateAddressesResponse)(nil), "twilightproject.nyks.nyks.MsgSetDelegateAddressesResponse")
	proto.RegisterType((*MsgSeenBtcChainTip)(nil), "twilightproject.nyks.nyks.MsgSeenBtcChainTip")
	proto.RegisterType((*MsgSeenBtcChainTipResponse)(nil), "twilightproject.nyks.nyks.MsgSeenBtcChainTipResponse")
}

func init() { proto.RegisterFile("nyks/tx.proto", fileDescriptor_ee2a9480042ea503) }

var fileDescriptor_ee2a9480042ea503 = []byte{
	// 365 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x53, 0xcd, 0x4a, 0xc3, 0x40,
	0x10, 0xee, 0xa6, 0xa1, 0xe2, 0xe0, 0x1f, 0xab, 0x68, 0x2c, 0x12, 0x25, 0x27, 0x11, 0x9a, 0x6a,
	0xc5, 0x8b, 0x37, 0xab, 0xe0, 0x41, 0x0a, 0x12, 0x3d, 0x79, 0xcb, 0xcf, 0x90, 0xac, 0xc6, 0x24,
	0x64, 0xb7, 0xb6, 0x7d, 0x01, 0xbd, 0x78, 0xf0, 0x65, 0x7c, 0x07, 0x8f, 0x3d, 0x7a, 0x94, 0xf6,
	0x45, 0xa4, 0x6b, 0x22, 0xd6, 0x36, 0x4a, 0x2f, 0x49, 0x66, 0xe6, 0x9b, 0xc9, 0xf7, 0x7d, 0xc3,
	0xc0, 0x62, 0xd4, 0xbb, 0xe3, 0x75, 0xd1, 0x35, 0x93, 0x34, 0x16, 0x31, 0xdd, 0x14, 0x1d, 0x16,
	0x32, 0x3f, 0x10, 0x49, 0x1a, 0xdf, 0xa2, 0x2b, 0xcc, 0x51, 0x59, 0x3e, 0x8c, 0x57, 0x02, 0x1b,
	0x2d, 0xee, 0x5f, 0xa1, 0x38, 0xc3, 0x10, 0x7d, 0x5b, 0xe0, 0x89, 0xe7, 0xa5, 0xc8, 0x39, 0x72,
	0xaa, 0xc1, 0x9c, 0x9b, 0xa2, 0x2d, 0xe2, 0x54, 0x23, 0x3b, 0x64, 0x77, 0xde, 0xca, 0x43, 0xba,
	0x07, 0x2b, 0x0f, 0x76, 0xc8, 0xbc, 0x51, 0x90, 0xe1, 0x35, 0x45, 0x42, 0x26, 0xf2, 0x74, 0x1f,
	0x56, 0xe3, 0xd4, 0x0d, 0x90, 0x8b, 0xf4, 0x27, 0xbc, 0x2c, 0xe1, 0xd3, 0x4a, 0xd4, 0x80, 0x05,
	0x47, 0xb8, 0x97, 0x6d, 0x27, 0x64, 0xee, 0x05, 0xf6, 0x34, 0x55, 0x42, 0xc7, 0x72, 0xc6, 0x01,
	0x6c, 0x17, 0xd0, 0xb6, 0x90, 0x27, 0x71, 0xc4, 0x91, 0x2e, 0x81, 0xc2, 0x3c, 0xc9, 0x5c, 0xb5,
	0x14, 0xe6, 0x19, 0xcf, 0x04, 0xa8, 0xec, 0xc1, 0xa8, 0x29, 0xdc, 0xd3, 0xc0, 0x66, 0xd1, 0x35,
	0x4b, 0xfe, 0x50, 0xb9, 0x0e, 0x95, 0x00, 0x47, 0xb6, 0x49, 0x6d, 0xaa, 0x95, 0x45, 0x94, 0x82,
	0x1a, 0xd8, 0x3c, 0xc8, 0x24, 0xc8, 0xef, 0x22, 0x95, 0x6a, 0xa1, 0x4a, 0x63, 0x0b, 0xaa, 0x93,
	0x6c, 0x72, 0xf2, 0x8d, 0x27, 0x05, 0xca, 0x2d, 0xee, 0xd3, 0x47, 0x02, 0x6b, 0x53, 0x97, 0xd3,
	0x30, 0x0b, 0x97, 0x6a, 0x16, 0x38, 0x53, 0x3d, 0x9e, 0xbd, 0xe7, 0xdb, 0xcd, 0x0e, 0x2c, 0xff,
	0x76, 0xae, 0xf6, 0xdf, 0xb8, 0x31, 0x78, 0xf5, 0x68, 0x26, 0x78, 0xfe, 0xe3, 0xe6, 0xf9, 0xdb,
	0x40, 0x27, 0xfd, 0x81, 0x4e, 0x3e, 0x06, 0x3a, 0x79, 0x19, 0xea, 0xa5, 0xfe, 0x50, 0x2f, 0xbd,
	0x0f, 0xf5, 0xd2, 0x4d, 0xcd, 0x67, 0x22, 0x68, 0x3b, 0xa6, 0x1b, 0xdf, 0xd7, 0xf3, 0xd1, 0xb5,
	0x6c, 0x76, 0x5d, 0x5e, 0x40, 0xf7, 0xeb, 0x25, 0x7a, 0x09, 0x72, 0xa7, 0x22, 0x8f, 0xe1, 0xf0,
	0x33, 0x00, 0x00, 0xff, 0xff, 0xee, 0x16, 0x4d, 0x54, 0x1d, 0x03, 0x00, 0x00,
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
	SetDelegateAddresses(ctx context.Context, in *MsgSetDelegateAddresses, opts ...grpc.CallOption) (*MsgSetDelegateAddressesResponse, error)
	SeenBtcChainTip(ctx context.Context, in *MsgSeenBtcChainTip, opts ...grpc.CallOption) (*MsgSeenBtcChainTipResponse, error)
}

type msgClient struct {
	cc grpc1.ClientConn
}

func NewMsgClient(cc grpc1.ClientConn) MsgClient {
	return &msgClient{cc}
}

func (c *msgClient) SetDelegateAddresses(ctx context.Context, in *MsgSetDelegateAddresses, opts ...grpc.CallOption) (*MsgSetDelegateAddressesResponse, error) {
	out := new(MsgSetDelegateAddressesResponse)
	err := c.cc.Invoke(ctx, "/twilightproject.nyks.nyks.Msg/SetDelegateAddresses", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *msgClient) SeenBtcChainTip(ctx context.Context, in *MsgSeenBtcChainTip, opts ...grpc.CallOption) (*MsgSeenBtcChainTipResponse, error) {
	out := new(MsgSeenBtcChainTipResponse)
	err := c.cc.Invoke(ctx, "/twilightproject.nyks.nyks.Msg/SeenBtcChainTip", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MsgServer is the server API for Msg service.
type MsgServer interface {
	SetDelegateAddresses(context.Context, *MsgSetDelegateAddresses) (*MsgSetDelegateAddressesResponse, error)
	SeenBtcChainTip(context.Context, *MsgSeenBtcChainTip) (*MsgSeenBtcChainTipResponse, error)
}

// UnimplementedMsgServer can be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func (*UnimplementedMsgServer) SetDelegateAddresses(ctx context.Context, req *MsgSetDelegateAddresses) (*MsgSetDelegateAddressesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetDelegateAddresses not implemented")
}
func (*UnimplementedMsgServer) SeenBtcChainTip(ctx context.Context, req *MsgSeenBtcChainTip) (*MsgSeenBtcChainTipResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SeenBtcChainTip not implemented")
}

func RegisterMsgServer(s grpc1.Server, srv MsgServer) {
	s.RegisterService(&_Msg_serviceDesc, srv)
}

func _Msg_SetDelegateAddresses_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgSetDelegateAddresses)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).SetDelegateAddresses(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/twilightproject.nyks.nyks.Msg/SetDelegateAddresses",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).SetDelegateAddresses(ctx, req.(*MsgSetDelegateAddresses))
	}
	return interceptor(ctx, in, info, handler)
}

func _Msg_SeenBtcChainTip_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgSeenBtcChainTip)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).SeenBtcChainTip(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/twilightproject.nyks.nyks.Msg/SeenBtcChainTip",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).SeenBtcChainTip(ctx, req.(*MsgSeenBtcChainTip))
	}
	return interceptor(ctx, in, info, handler)
}

var _Msg_serviceDesc = grpc.ServiceDesc{
	ServiceName: "twilightproject.nyks.nyks.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SetDelegateAddresses",
			Handler:    _Msg_SetDelegateAddresses_Handler,
		},
		{
			MethodName: "SeenBtcChainTip",
			Handler:    _Msg_SeenBtcChainTip_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "nyks/tx.proto",
}

func (m *MsgSetDelegateAddresses) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgSetDelegateAddresses) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgSetDelegateAddresses) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.BtcPublicKey) > 0 {
		i -= len(m.BtcPublicKey)
		copy(dAtA[i:], m.BtcPublicKey)
		i = encodeVarintTx(dAtA, i, uint64(len(m.BtcPublicKey)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.OrchestratorAddress) > 0 {
		i -= len(m.OrchestratorAddress)
		copy(dAtA[i:], m.OrchestratorAddress)
		i = encodeVarintTx(dAtA, i, uint64(len(m.OrchestratorAddress)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.ValidatorAddress) > 0 {
		i -= len(m.ValidatorAddress)
		copy(dAtA[i:], m.ValidatorAddress)
		i = encodeVarintTx(dAtA, i, uint64(len(m.ValidatorAddress)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgSetDelegateAddressesResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgSetDelegateAddressesResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgSetDelegateAddressesResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Id != 0 {
		i = encodeVarintTx(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *MsgSeenBtcChainTip) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgSeenBtcChainTip) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgSeenBtcChainTip) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.OrchestratorAddress) > 0 {
		i -= len(m.OrchestratorAddress)
		copy(dAtA[i:], m.OrchestratorAddress)
		i = encodeVarintTx(dAtA, i, uint64(len(m.OrchestratorAddress)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Hash) > 0 {
		i -= len(m.Hash)
		copy(dAtA[i:], m.Hash)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Hash)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Height != 0 {
		i = encodeVarintTx(dAtA, i, uint64(m.Height))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintTx(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *MsgSeenBtcChainTipResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgSeenBtcChainTipResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgSeenBtcChainTipResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
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
func (m *MsgSetDelegateAddresses) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.ValidatorAddress)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.OrchestratorAddress)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.BtcPublicKey)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func (m *MsgSetDelegateAddressesResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovTx(uint64(m.Id))
	}
	return n
}

func (m *MsgSeenBtcChainTip) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	if m.Height != 0 {
		n += 1 + sovTx(uint64(m.Height))
	}
	l = len(m.Hash)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.OrchestratorAddress)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func (m *MsgSeenBtcChainTipResponse) Size() (n int) {
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
func (m *MsgSetDelegateAddresses) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: MsgSetDelegateAddresses: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgSetDelegateAddresses: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
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
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ValidatorAddress", wireType)
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
			m.ValidatorAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field OrchestratorAddress", wireType)
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
			m.OrchestratorAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BtcPublicKey", wireType)
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
			m.BtcPublicKey = string(dAtA[iNdEx:postIndex])
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
func (m *MsgSetDelegateAddressesResponse) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: MsgSetDelegateAddressesResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgSetDelegateAddressesResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
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
func (m *MsgSeenBtcChainTip) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: MsgSeenBtcChainTip: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgSeenBtcChainTip: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
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
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Height", wireType)
			}
			m.Height = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Height |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Hash", wireType)
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
			m.Hash = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field OrchestratorAddress", wireType)
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
			m.OrchestratorAddress = string(dAtA[iNdEx:postIndex])
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
func (m *MsgSeenBtcChainTipResponse) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: MsgSeenBtcChainTipResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgSeenBtcChainTipResponse: illegal tag %d (wire type %d)", fieldNum, wire)
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
