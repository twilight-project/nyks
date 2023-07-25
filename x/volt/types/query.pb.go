// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: nyks/volt/query.proto

package types

import (
	context "context"
	fmt "fmt"
	_ "github.com/cosmos/cosmos-sdk/types/query"
	_ "github.com/gogo/protobuf/gogoproto"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
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

// QueryParamsRequest is request type for the Query/Params RPC method.
type QueryParamsRequest struct {
}

func (m *QueryParamsRequest) Reset()         { *m = QueryParamsRequest{} }
func (m *QueryParamsRequest) String() string { return proto.CompactTextString(m) }
func (*QueryParamsRequest) ProtoMessage()    {}
func (*QueryParamsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_30511513d65993ee, []int{0}
}
func (m *QueryParamsRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryParamsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryParamsRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryParamsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryParamsRequest.Merge(m, src)
}
func (m *QueryParamsRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryParamsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryParamsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryParamsRequest proto.InternalMessageInfo

// QueryParamsResponse is response type for the Query/Params RPC method.
type QueryParamsResponse struct {
	// params holds all the parameters of this module.
	Params Params `protobuf:"bytes,1,opt,name=params,proto3" json:"params"`
}

func (m *QueryParamsResponse) Reset()         { *m = QueryParamsResponse{} }
func (m *QueryParamsResponse) String() string { return proto.CompactTextString(m) }
func (*QueryParamsResponse) ProtoMessage()    {}
func (*QueryParamsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_30511513d65993ee, []int{1}
}
func (m *QueryParamsResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryParamsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryParamsResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryParamsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryParamsResponse.Merge(m, src)
}
func (m *QueryParamsResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryParamsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryParamsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryParamsResponse proto.InternalMessageInfo

func (m *QueryParamsResponse) GetParams() Params {
	if m != nil {
		return m.Params
	}
	return Params{}
}

type QueryBtcReserveRequest struct {
}

func (m *QueryBtcReserveRequest) Reset()         { *m = QueryBtcReserveRequest{} }
func (m *QueryBtcReserveRequest) String() string { return proto.CompactTextString(m) }
func (*QueryBtcReserveRequest) ProtoMessage()    {}
func (*QueryBtcReserveRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_30511513d65993ee, []int{2}
}
func (m *QueryBtcReserveRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryBtcReserveRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryBtcReserveRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryBtcReserveRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryBtcReserveRequest.Merge(m, src)
}
func (m *QueryBtcReserveRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryBtcReserveRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryBtcReserveRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryBtcReserveRequest proto.InternalMessageInfo

type QueryBtcReserveResponse struct {
	BtcReserves []BtcReserve `protobuf:"bytes,1,rep,name=BtcReserves,proto3" json:"BtcReserves"`
}

func (m *QueryBtcReserveResponse) Reset()         { *m = QueryBtcReserveResponse{} }
func (m *QueryBtcReserveResponse) String() string { return proto.CompactTextString(m) }
func (*QueryBtcReserveResponse) ProtoMessage()    {}
func (*QueryBtcReserveResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_30511513d65993ee, []int{3}
}
func (m *QueryBtcReserveResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryBtcReserveResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryBtcReserveResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryBtcReserveResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryBtcReserveResponse.Merge(m, src)
}
func (m *QueryBtcReserveResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryBtcReserveResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryBtcReserveResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryBtcReserveResponse proto.InternalMessageInfo

func (m *QueryBtcReserveResponse) GetBtcReserves() []BtcReserve {
	if m != nil {
		return m.BtcReserves
	}
	return nil
}

// this line is used by starport scaffolding # 3
type QueryClearingAccountRequest struct {
	TwilightAddress string `protobuf:"bytes,1,opt,name=twilightAddress,proto3" json:"twilightAddress,omitempty"`
}

func (m *QueryClearingAccountRequest) Reset()         { *m = QueryClearingAccountRequest{} }
func (m *QueryClearingAccountRequest) String() string { return proto.CompactTextString(m) }
func (*QueryClearingAccountRequest) ProtoMessage()    {}
func (*QueryClearingAccountRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_30511513d65993ee, []int{4}
}
func (m *QueryClearingAccountRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryClearingAccountRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryClearingAccountRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryClearingAccountRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryClearingAccountRequest.Merge(m, src)
}
func (m *QueryClearingAccountRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryClearingAccountRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryClearingAccountRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryClearingAccountRequest proto.InternalMessageInfo

func (m *QueryClearingAccountRequest) GetTwilightAddress() string {
	if m != nil {
		return m.TwilightAddress
	}
	return ""
}

type QueryClearingAccountResponse struct {
	ClearingAccount ClearingAccount `protobuf:"bytes,1,opt,name=ClearingAccount,proto3" json:"ClearingAccount"`
}

func (m *QueryClearingAccountResponse) Reset()         { *m = QueryClearingAccountResponse{} }
func (m *QueryClearingAccountResponse) String() string { return proto.CompactTextString(m) }
func (*QueryClearingAccountResponse) ProtoMessage()    {}
func (*QueryClearingAccountResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_30511513d65993ee, []int{5}
}
func (m *QueryClearingAccountResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryClearingAccountResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryClearingAccountResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryClearingAccountResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryClearingAccountResponse.Merge(m, src)
}
func (m *QueryClearingAccountResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryClearingAccountResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryClearingAccountResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryClearingAccountResponse proto.InternalMessageInfo

func (m *QueryClearingAccountResponse) GetClearingAccount() ClearingAccount {
	if m != nil {
		return m.ClearingAccount
	}
	return ClearingAccount{}
}

func init() {
	proto.RegisterType((*QueryParamsRequest)(nil), "twilightproject.nyks.volt.QueryParamsRequest")
	proto.RegisterType((*QueryParamsResponse)(nil), "twilightproject.nyks.volt.QueryParamsResponse")
	proto.RegisterType((*QueryBtcReserveRequest)(nil), "twilightproject.nyks.volt.QueryBtcReserveRequest")
	proto.RegisterType((*QueryBtcReserveResponse)(nil), "twilightproject.nyks.volt.QueryBtcReserveResponse")
	proto.RegisterType((*QueryClearingAccountRequest)(nil), "twilightproject.nyks.volt.QueryClearingAccountRequest")
	proto.RegisterType((*QueryClearingAccountResponse)(nil), "twilightproject.nyks.volt.QueryClearingAccountResponse")
}

func init() { proto.RegisterFile("nyks/volt/query.proto", fileDescriptor_30511513d65993ee) }

var fileDescriptor_30511513d65993ee = []byte{
	// 507 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x94, 0x41, 0x6f, 0xd3, 0x30,
	0x14, 0xc7, 0x1b, 0x18, 0x95, 0x70, 0x0f, 0x93, 0xcc, 0xd8, 0x4a, 0x98, 0x02, 0x44, 0x20, 0x4a,
	0xa5, 0xc6, 0x6a, 0x91, 0xe0, 0x06, 0xac, 0x48, 0xec, 0x84, 0x04, 0x3d, 0x70, 0xd8, 0x65, 0x72,
	0x3c, 0xcb, 0x0d, 0xb4, 0x76, 0x66, 0xbb, 0x85, 0x82, 0xb8, 0xf0, 0x09, 0x40, 0xfb, 0x0a, 0x7c,
	0x98, 0x89, 0xd3, 0x24, 0x2e, 0x9c, 0x10, 0x6a, 0xf9, 0x20, 0x28, 0xb6, 0xa3, 0x40, 0xba, 0x65,
	0xf4, 0x16, 0xbd, 0xf7, 0xfe, 0xef, 0xf7, 0xf7, 0xf3, 0x73, 0xc0, 0x55, 0x3e, 0x7b, 0xa3, 0xd0,
	0x54, 0x8c, 0x34, 0x3a, 0x9c, 0x50, 0x39, 0x8b, 0x52, 0x29, 0xb4, 0x80, 0xd7, 0xf4, 0xdb, 0x64,
	0x94, 0xb0, 0xa1, 0x4e, 0xa5, 0x78, 0x4d, 0x89, 0x8e, 0xb2, 0xb2, 0x28, 0x2b, 0xf3, 0x37, 0x98,
	0x60, 0xc2, 0x54, 0xa1, 0xec, 0xcb, 0x0a, 0xfc, 0x6d, 0x26, 0x04, 0x1b, 0x51, 0x84, 0xd3, 0x04,
	0x61, 0xce, 0x85, 0xc6, 0x3a, 0x11, 0x5c, 0xb9, 0x6c, 0x9b, 0x08, 0x35, 0x16, 0x0a, 0xc5, 0x58,
	0x51, 0xcb, 0x41, 0xd3, 0x6e, 0x4c, 0x35, 0xee, 0xa2, 0x14, 0xb3, 0x84, 0x9b, 0x62, 0x57, 0xbb,
	0x59, 0x38, 0x4a, 0xb1, 0xc4, 0xe3, 0xbc, 0x47, 0xb3, 0x88, 0x93, 0x11, 0xc5, 0x32, 0xe1, 0xcc,
	0x65, 0xb6, 0x8a, 0x8c, 0xa4, 0x8a, 0xca, 0x29, 0xb5, 0x89, 0x70, 0x03, 0xc0, 0x97, 0x19, 0xec,
	0x85, 0xe9, 0x33, 0xa0, 0x87, 0x13, 0xaa, 0x74, 0xf8, 0x0a, 0x5c, 0xf9, 0x27, 0xaa, 0x52, 0xc1,
	0x15, 0x85, 0x8f, 0x41, 0xdd, 0xf2, 0x9a, 0xde, 0x4d, 0xaf, 0xd5, 0xe8, 0xdd, 0x8a, 0xce, 0x9c,
	0x41, 0x64, 0xa5, 0xfd, 0xb5, 0xe3, 0x9f, 0x37, 0x6a, 0x03, 0x27, 0x0b, 0x9b, 0x60, 0xd3, 0xf4,
	0xed, 0x6b, 0x32, 0xb0, 0x36, 0x72, 0xe2, 0x10, 0x6c, 0x2d, 0x65, 0x1c, 0xf5, 0x39, 0x68, 0x14,
	0xd1, 0x0c, 0x7d, 0xb1, 0xd5, 0xe8, 0xdd, 0xa9, 0x40, 0x17, 0xd5, 0x0e, 0xff, 0xb7, 0x3e, 0xdc,
	0x05, 0xd7, 0x0d, 0xe9, 0xa9, 0x9b, 0xd0, 0x0e, 0x21, 0x62, 0xc2, 0xb5, 0x33, 0x02, 0x5b, 0x60,
	0x3d, 0xef, 0xbc, 0x73, 0x70, 0x20, 0xa9, 0xb2, 0x87, 0xbd, 0x3c, 0x28, 0x87, 0xc3, 0xf7, 0x60,
	0xfb, 0xf4, 0x46, 0xce, 0xf7, 0x1e, 0x58, 0x2f, 0xa5, 0xdc, 0xd8, 0xda, 0x15, 0xde, 0x4b, 0x0a,
	0x77, 0x80, 0x72, 0xa3, 0xde, 0x97, 0x35, 0x70, 0xc9, 0xc0, 0xe1, 0x91, 0x07, 0xea, 0x76, 0xd6,
	0xb0, 0x53, 0xd1, 0x77, 0xf9, 0x92, 0xfd, 0xe8, 0x7f, 0xcb, 0xed, 0x79, 0xc2, 0xf6, 0xa7, 0xef,
	0xbf, 0x8f, 0x2e, 0xdc, 0x86, 0x21, 0xca, 0x75, 0x1d, 0x27, 0x44, 0xe5, 0x7d, 0x84, 0x5f, 0x3d,
	0x00, 0x8a, 0xa1, 0xc3, 0xee, 0x79, 0xa8, 0xa5, 0x85, 0xf0, 0x7b, 0xab, 0x48, 0x9c, 0x43, 0x64,
	0x1c, 0xde, 0x83, 0x77, 0xab, 0x1c, 0xc6, 0x9a, 0xec, 0xbb, 0x37, 0x00, 0xbf, 0x79, 0x4b, 0x77,
	0x04, 0x1f, 0x9c, 0x07, 0x3e, 0x7d, 0x71, 0xfc, 0x87, 0x2b, 0xeb, 0x9c, 0xeb, 0x67, 0xc6, 0xf5,
	0x13, 0xf8, 0xa8, 0xca, 0x75, 0xfe, 0x9e, 0xf7, 0xb1, 0x55, 0xa3, 0x0f, 0xa5, 0x75, 0xfc, 0xd8,
	0xdf, 0x3d, 0x9e, 0x07, 0xde, 0xc9, 0x3c, 0xf0, 0x7e, 0xcd, 0x03, 0xef, 0xf3, 0x22, 0xa8, 0x9d,
	0x2c, 0x82, 0xda, 0x8f, 0x45, 0x50, 0xdb, 0xeb, 0xb0, 0x44, 0x0f, 0x27, 0x71, 0x44, 0xc4, 0xf8,
	0x0c, 0xc6, 0x3b, 0x4b, 0xd1, 0xb3, 0x94, 0xaa, 0xb8, 0x6e, 0x7e, 0x0d, 0xf7, 0xff, 0x04, 0x00,
	0x00, 0xff, 0xff, 0x70, 0x4a, 0xbc, 0xf9, 0xf9, 0x04, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	// Parameters queries the parameters of the module.
	Params(ctx context.Context, in *QueryParamsRequest, opts ...grpc.CallOption) (*QueryParamsResponse, error)
	// Queries a list of BtcReserve items.
	BtcReserve(ctx context.Context, in *QueryBtcReserveRequest, opts ...grpc.CallOption) (*QueryBtcReserveResponse, error)
	// Queries a list of ClearingAccount items.
	ClearingAccount(ctx context.Context, in *QueryClearingAccountRequest, opts ...grpc.CallOption) (*QueryClearingAccountResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) Params(ctx context.Context, in *QueryParamsRequest, opts ...grpc.CallOption) (*QueryParamsResponse, error) {
	out := new(QueryParamsResponse)
	err := c.cc.Invoke(ctx, "/twilightproject.nyks.volt.Query/Params", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) BtcReserve(ctx context.Context, in *QueryBtcReserveRequest, opts ...grpc.CallOption) (*QueryBtcReserveResponse, error) {
	out := new(QueryBtcReserveResponse)
	err := c.cc.Invoke(ctx, "/twilightproject.nyks.volt.Query/BtcReserve", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) ClearingAccount(ctx context.Context, in *QueryClearingAccountRequest, opts ...grpc.CallOption) (*QueryClearingAccountResponse, error) {
	out := new(QueryClearingAccountResponse)
	err := c.cc.Invoke(ctx, "/twilightproject.nyks.volt.Query/ClearingAccount", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// Parameters queries the parameters of the module.
	Params(context.Context, *QueryParamsRequest) (*QueryParamsResponse, error)
	// Queries a list of BtcReserve items.
	BtcReserve(context.Context, *QueryBtcReserveRequest) (*QueryBtcReserveResponse, error)
	// Queries a list of ClearingAccount items.
	ClearingAccount(context.Context, *QueryClearingAccountRequest) (*QueryClearingAccountResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) Params(ctx context.Context, req *QueryParamsRequest) (*QueryParamsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Params not implemented")
}
func (*UnimplementedQueryServer) BtcReserve(ctx context.Context, req *QueryBtcReserveRequest) (*QueryBtcReserveResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BtcReserve not implemented")
}
func (*UnimplementedQueryServer) ClearingAccount(ctx context.Context, req *QueryClearingAccountRequest) (*QueryClearingAccountResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ClearingAccount not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_Params_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryParamsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Params(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/twilightproject.nyks.volt.Query/Params",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Params(ctx, req.(*QueryParamsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_BtcReserve_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryBtcReserveRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).BtcReserve(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/twilightproject.nyks.volt.Query/BtcReserve",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).BtcReserve(ctx, req.(*QueryBtcReserveRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_ClearingAccount_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryClearingAccountRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).ClearingAccount(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/twilightproject.nyks.volt.Query/ClearingAccount",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).ClearingAccount(ctx, req.(*QueryClearingAccountRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "twilightproject.nyks.volt.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Params",
			Handler:    _Query_Params_Handler,
		},
		{
			MethodName: "BtcReserve",
			Handler:    _Query_BtcReserve_Handler,
		},
		{
			MethodName: "ClearingAccount",
			Handler:    _Query_ClearingAccount_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "nyks/volt/query.proto",
}

func (m *QueryParamsRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryParamsRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryParamsRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *QueryParamsResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryParamsResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryParamsResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintQuery(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func (m *QueryBtcReserveRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryBtcReserveRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryBtcReserveRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *QueryBtcReserveResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryBtcReserveResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryBtcReserveResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.BtcReserves) > 0 {
		for iNdEx := len(m.BtcReserves) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.BtcReserves[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintQuery(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func (m *QueryClearingAccountRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryClearingAccountRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryClearingAccountRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.TwilightAddress) > 0 {
		i -= len(m.TwilightAddress)
		copy(dAtA[i:], m.TwilightAddress)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.TwilightAddress)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryClearingAccountResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryClearingAccountResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryClearingAccountResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.ClearingAccount.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintQuery(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryParamsRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *QueryParamsResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Params.Size()
	n += 1 + l + sovQuery(uint64(l))
	return n
}

func (m *QueryBtcReserveRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *QueryBtcReserveResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.BtcReserves) > 0 {
		for _, e := range m.BtcReserves {
			l = e.Size()
			n += 1 + l + sovQuery(uint64(l))
		}
	}
	return n
}

func (m *QueryClearingAccountRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.TwilightAddress)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryClearingAccountResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.ClearingAccount.Size()
	n += 1 + l + sovQuery(uint64(l))
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryParamsRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryParamsRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryParamsRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryParamsResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryParamsResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryParamsResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryBtcReserveRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryBtcReserveRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryBtcReserveRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryBtcReserveResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryBtcReserveResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryBtcReserveResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BtcReserves", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BtcReserves = append(m.BtcReserves, BtcReserve{})
			if err := m.BtcReserves[len(m.BtcReserves)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryClearingAccountRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryClearingAccountRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryClearingAccountRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TwilightAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.TwilightAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryClearingAccountResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryClearingAccountResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryClearingAccountResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ClearingAccount", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.ClearingAccount.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
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
					return 0, ErrIntOverflowQuery
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
					return 0, ErrIntOverflowQuery
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
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)
