// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: nyks/bootstrap/tx.proto

package types

import (
	context "context"
	fmt "fmt"
	types "github.com/cosmos/cosmos-sdk/x/staking/types"
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

type MsgCreateValidatorWrapper struct {
	Creator          string                    `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	CreateValidator  *types.MsgCreateValidator `protobuf:"bytes,2,opt,name=createValidator,proto3" json:"createValidator,omitempty"`
	ZkOracleAddress  string                    `protobuf:"bytes,3,opt,name=zkOracleAddress,proto3" json:"zkOracleAddress,omitempty"`
	BtcOracleAddress string                    `protobuf:"bytes,4,opt,name=btcOracleAddress,proto3" json:"btcOracleAddress,omitempty"`
}

func (m *MsgCreateValidatorWrapper) Reset()         { *m = MsgCreateValidatorWrapper{} }
func (m *MsgCreateValidatorWrapper) String() string { return proto.CompactTextString(m) }
func (*MsgCreateValidatorWrapper) ProtoMessage()    {}
func (*MsgCreateValidatorWrapper) Descriptor() ([]byte, []int) {
	return fileDescriptor_a7024711f982013c, []int{0}
}
func (m *MsgCreateValidatorWrapper) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgCreateValidatorWrapper) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgCreateValidatorWrapper.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgCreateValidatorWrapper) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgCreateValidatorWrapper.Merge(m, src)
}
func (m *MsgCreateValidatorWrapper) XXX_Size() int {
	return m.Size()
}
func (m *MsgCreateValidatorWrapper) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgCreateValidatorWrapper.DiscardUnknown(m)
}

var xxx_messageInfo_MsgCreateValidatorWrapper proto.InternalMessageInfo

func (m *MsgCreateValidatorWrapper) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *MsgCreateValidatorWrapper) GetCreateValidator() *types.MsgCreateValidator {
	if m != nil {
		return m.CreateValidator
	}
	return nil
}

func (m *MsgCreateValidatorWrapper) GetZkOracleAddress() string {
	if m != nil {
		return m.ZkOracleAddress
	}
	return ""
}

func (m *MsgCreateValidatorWrapper) GetBtcOracleAddress() string {
	if m != nil {
		return m.BtcOracleAddress
	}
	return ""
}

type MsgCreateValidatorWrapperResponse struct {
}

func (m *MsgCreateValidatorWrapperResponse) Reset()         { *m = MsgCreateValidatorWrapperResponse{} }
func (m *MsgCreateValidatorWrapperResponse) String() string { return proto.CompactTextString(m) }
func (*MsgCreateValidatorWrapperResponse) ProtoMessage()    {}
func (*MsgCreateValidatorWrapperResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_a7024711f982013c, []int{1}
}
func (m *MsgCreateValidatorWrapperResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MsgCreateValidatorWrapperResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MsgCreateValidatorWrapperResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MsgCreateValidatorWrapperResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MsgCreateValidatorWrapperResponse.Merge(m, src)
}
func (m *MsgCreateValidatorWrapperResponse) XXX_Size() int {
	return m.Size()
}
func (m *MsgCreateValidatorWrapperResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_MsgCreateValidatorWrapperResponse.DiscardUnknown(m)
}

var xxx_messageInfo_MsgCreateValidatorWrapperResponse proto.InternalMessageInfo

func init() {
	proto.RegisterType((*MsgCreateValidatorWrapper)(nil), "twilightproject.nyks.bootstrap.MsgCreateValidatorWrapper")
	proto.RegisterType((*MsgCreateValidatorWrapperResponse)(nil), "twilightproject.nyks.bootstrap.MsgCreateValidatorWrapperResponse")
}

func init() { proto.RegisterFile("nyks/bootstrap/tx.proto", fileDescriptor_a7024711f982013c) }

var fileDescriptor_a7024711f982013c = []byte{
	// 320 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x92, 0xbf, 0x4f, 0x7a, 0x31,
	0x10, 0xc0, 0xe9, 0x97, 0x6f, 0x34, 0xd6, 0x01, 0xd3, 0x41, 0x9f, 0x0c, 0x15, 0x71, 0x21, 0x24,
	0xb6, 0x01, 0x27, 0x47, 0x74, 0x95, 0x98, 0x10, 0xa3, 0x89, 0x5b, 0x5f, 0x69, 0x1e, 0x4f, 0x7e,
	0xb4, 0xe9, 0x9d, 0x0a, 0xfe, 0x15, 0x4e, 0x8e, 0xfe, 0x3d, 0x8e, 0x8c, 0x8e, 0x0a, 0xff, 0x88,
	0xe1, 0xc9, 0x23, 0x02, 0x79, 0x0e, 0x8e, 0xbd, 0x7e, 0xee, 0x3e, 0xed, 0xdd, 0xd1, 0xbd, 0xc1,
	0xa8, 0x0b, 0x32, 0xb4, 0x16, 0x01, 0xbd, 0x72, 0x12, 0x87, 0xc2, 0x79, 0x8b, 0x96, 0x71, 0x7c,
	0x8c, 0x7b, 0x71, 0xd4, 0x41, 0xe7, 0xed, 0x9d, 0xd1, 0x28, 0x66, 0xa0, 0x58, 0x80, 0xc5, 0x03,
	0x6d, 0xa1, 0x6f, 0x41, 0x02, 0xaa, 0x6e, 0x3c, 0x88, 0xe4, 0x43, 0x2d, 0x34, 0xa8, 0x6a, 0x8b,
	0x02, 0xe5, 0x4f, 0x42, 0xf7, 0x9b, 0x10, 0x9d, 0x7b, 0xa3, 0xd0, 0x5c, 0xab, 0x5e, 0xdc, 0x56,
	0x68, 0xfd, 0x8d, 0x57, 0xce, 0x19, 0xcf, 0x02, 0xba, 0xa9, 0x67, 0x37, 0xd6, 0x07, 0xa4, 0x44,
	0x2a, 0x5b, 0xad, 0xf4, 0xc8, 0xae, 0x68, 0x41, 0x2f, 0xe7, 0x04, 0xff, 0x4a, 0xa4, 0xb2, 0x5d,
	0xaf, 0x8a, 0x6f, 0xa5, 0x98, 0x2b, 0xc5, 0x5c, 0x29, 0xd6, 0x2d, 0xad, 0xd5, 0x12, 0xac, 0x42,
	0x0b, 0x4f, 0xdd, 0x4b, 0xaf, 0x74, 0xcf, 0x34, 0xda, 0x6d, 0x6f, 0x00, 0x82, 0x7c, 0xe2, 0x5d,
	0x0d, 0xb3, 0x2a, 0xdd, 0x09, 0x51, 0x2f, 0xa3, 0xff, 0x13, 0x74, 0x2d, 0x5e, 0x3e, 0xa2, 0x87,
	0x99, 0x5f, 0x6c, 0x19, 0x70, 0x76, 0x00, 0xa6, 0xfe, 0x4a, 0x68, 0xbe, 0x09, 0x11, 0x7b, 0x21,
	0x74, 0x37, 0xa3, 0x1b, 0xa7, 0xe2, 0xf7, 0x6e, 0x8b, 0x4c, 0x4b, 0xb1, 0xf1, 0xe7, 0xd4, 0xf4,
	0x81, 0x67, 0x17, 0x6f, 0x13, 0x4e, 0xc6, 0x13, 0x4e, 0x3e, 0x26, 0x9c, 0x3c, 0x4f, 0x79, 0x6e,
	0x3c, 0xe5, 0xb9, 0xf7, 0x29, 0xcf, 0xdd, 0xd6, 0xa3, 0x18, 0x3b, 0xf7, 0xa1, 0xd0, 0xb6, 0x2f,
	0x53, 0xcd, 0xf1, 0xdc, 0x23, 0x93, 0xcd, 0x19, 0xfe, 0xdc, 0x9d, 0x91, 0x33, 0x10, 0x6e, 0x24,
	0xe3, 0x3f, 0xf9, 0x0a, 0x00, 0x00, 0xff, 0xff, 0x73, 0x2b, 0x77, 0x9c, 0x5a, 0x02, 0x00, 0x00,
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
	CreateValidatorWrapper(ctx context.Context, in *MsgCreateValidatorWrapper, opts ...grpc.CallOption) (*MsgCreateValidatorWrapperResponse, error)
}

type msgClient struct {
	cc grpc1.ClientConn
}

func NewMsgClient(cc grpc1.ClientConn) MsgClient {
	return &msgClient{cc}
}

func (c *msgClient) CreateValidatorWrapper(ctx context.Context, in *MsgCreateValidatorWrapper, opts ...grpc.CallOption) (*MsgCreateValidatorWrapperResponse, error) {
	out := new(MsgCreateValidatorWrapperResponse)
	err := c.cc.Invoke(ctx, "/twilightproject.nyks.bootstrap.Msg/CreateValidatorWrapper", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MsgServer is the server API for Msg service.
type MsgServer interface {
	CreateValidatorWrapper(context.Context, *MsgCreateValidatorWrapper) (*MsgCreateValidatorWrapperResponse, error)
}

// UnimplementedMsgServer can be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func (*UnimplementedMsgServer) CreateValidatorWrapper(ctx context.Context, req *MsgCreateValidatorWrapper) (*MsgCreateValidatorWrapperResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateValidatorWrapper not implemented")
}

func RegisterMsgServer(s grpc1.Server, srv MsgServer) {
	s.RegisterService(&_Msg_serviceDesc, srv)
}

func _Msg_CreateValidatorWrapper_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MsgCreateValidatorWrapper)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MsgServer).CreateValidatorWrapper(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/twilightproject.nyks.bootstrap.Msg/CreateValidatorWrapper",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MsgServer).CreateValidatorWrapper(ctx, req.(*MsgCreateValidatorWrapper))
	}
	return interceptor(ctx, in, info, handler)
}

var _Msg_serviceDesc = grpc.ServiceDesc{
	ServiceName: "twilightproject.nyks.bootstrap.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateValidatorWrapper",
			Handler:    _Msg_CreateValidatorWrapper_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "nyks/bootstrap/tx.proto",
}

func (m *MsgCreateValidatorWrapper) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgCreateValidatorWrapper) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgCreateValidatorWrapper) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.BtcOracleAddress) > 0 {
		i -= len(m.BtcOracleAddress)
		copy(dAtA[i:], m.BtcOracleAddress)
		i = encodeVarintTx(dAtA, i, uint64(len(m.BtcOracleAddress)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.ZkOracleAddress) > 0 {
		i -= len(m.ZkOracleAddress)
		copy(dAtA[i:], m.ZkOracleAddress)
		i = encodeVarintTx(dAtA, i, uint64(len(m.ZkOracleAddress)))
		i--
		dAtA[i] = 0x1a
	}
	if m.CreateValidator != nil {
		{
			size, err := m.CreateValidator.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintTx(dAtA, i, uint64(size))
		}
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

func (m *MsgCreateValidatorWrapperResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MsgCreateValidatorWrapperResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MsgCreateValidatorWrapperResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
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
func (m *MsgCreateValidatorWrapper) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	if m.CreateValidator != nil {
		l = m.CreateValidator.Size()
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.ZkOracleAddress)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	l = len(m.BtcOracleAddress)
	if l > 0 {
		n += 1 + l + sovTx(uint64(l))
	}
	return n
}

func (m *MsgCreateValidatorWrapperResponse) Size() (n int) {
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
func (m *MsgCreateValidatorWrapper) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: MsgCreateValidatorWrapper: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgCreateValidatorWrapper: illegal tag %d (wire type %d)", fieldNum, wire)
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
				return fmt.Errorf("proto: wrong wireType = %d for field CreateValidator", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTx
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
				return ErrInvalidLengthTx
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.CreateValidator == nil {
				m.CreateValidator = &types.MsgCreateValidator{}
			}
			if err := m.CreateValidator.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
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
		case 4:
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
func (m *MsgCreateValidatorWrapperResponse) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: MsgCreateValidatorWrapperResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MsgCreateValidatorWrapperResponse: illegal tag %d (wire type %d)", fieldNum, wire)
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