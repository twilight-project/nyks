// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: nyks/volt/reserve.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
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

// BtcReserve is a mapping of a validator address to a reserve ID
// It holds other values in the reserve struct such as total
// value, private pool value, public pool value, and the btc relay capacity value
type BtcReserve struct {
	ReserveId             uint64 `protobuf:"varint,1,opt,name=ReserveId,proto3" json:"ReserveId,omitempty"`
	ReserveAddress        string `protobuf:"bytes,2,opt,name=ReserveAddress,proto3" json:"ReserveAddress,omitempty"`
	JudgeAddress          string `protobuf:"bytes,3,opt,name=JudgeAddress,proto3" json:"JudgeAddress,omitempty"`
	BtcRelayCapacityValue uint64 `protobuf:"varint,4,opt,name=BtcRelayCapacityValue,proto3" json:"BtcRelayCapacityValue,omitempty"`
	TotalValue            uint64 `protobuf:"varint,5,opt,name=TotalValue,proto3" json:"TotalValue,omitempty"`
	PrivatePoolValue      uint64 `protobuf:"varint,6,opt,name=PrivatePoolValue,proto3" json:"PrivatePoolValue,omitempty"`
	PublicValue           uint64 `protobuf:"varint,7,opt,name=PublicValue,proto3" json:"PublicValue,omitempty"`
	FeePool               uint64 `protobuf:"varint,8,opt,name=FeePool,proto3" json:"FeePool,omitempty"`
	UnlockHeight          uint64 `protobuf:"varint,9,opt,name=UnlockHeight,proto3" json:"UnlockHeight,omitempty"`
	RoundId               uint64 `protobuf:"varint,10,opt,name=RoundId,proto3" json:"RoundId,omitempty"`
}

func (m *BtcReserve) Reset()         { *m = BtcReserve{} }
func (m *BtcReserve) String() string { return proto.CompactTextString(m) }
func (*BtcReserve) ProtoMessage()    {}
func (*BtcReserve) Descriptor() ([]byte, []int) {
	return fileDescriptor_62e17cadbce9b02c, []int{0}
}
func (m *BtcReserve) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *BtcReserve) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_BtcReserve.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *BtcReserve) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BtcReserve.Merge(m, src)
}
func (m *BtcReserve) XXX_Size() int {
	return m.Size()
}
func (m *BtcReserve) XXX_DiscardUnknown() {
	xxx_messageInfo_BtcReserve.DiscardUnknown(m)
}

var xxx_messageInfo_BtcReserve proto.InternalMessageInfo

func (m *BtcReserve) GetReserveId() uint64 {
	if m != nil {
		return m.ReserveId
	}
	return 0
}

func (m *BtcReserve) GetReserveAddress() string {
	if m != nil {
		return m.ReserveAddress
	}
	return ""
}

func (m *BtcReserve) GetJudgeAddress() string {
	if m != nil {
		return m.JudgeAddress
	}
	return ""
}

func (m *BtcReserve) GetBtcRelayCapacityValue() uint64 {
	if m != nil {
		return m.BtcRelayCapacityValue
	}
	return 0
}

func (m *BtcReserve) GetTotalValue() uint64 {
	if m != nil {
		return m.TotalValue
	}
	return 0
}

func (m *BtcReserve) GetPrivatePoolValue() uint64 {
	if m != nil {
		return m.PrivatePoolValue
	}
	return 0
}

func (m *BtcReserve) GetPublicValue() uint64 {
	if m != nil {
		return m.PublicValue
	}
	return 0
}

func (m *BtcReserve) GetFeePool() uint64 {
	if m != nil {
		return m.FeePool
	}
	return 0
}

func (m *BtcReserve) GetUnlockHeight() uint64 {
	if m != nil {
		return m.UnlockHeight
	}
	return 0
}

func (m *BtcReserve) GetRoundId() uint64 {
	if m != nil {
		return m.RoundId
	}
	return 0
}

func init() {
	proto.RegisterType((*BtcReserve)(nil), "twilightproject.nyks.volt.BtcReserve")
}

func init() { proto.RegisterFile("nyks/volt/reserve.proto", fileDescriptor_62e17cadbce9b02c) }

var fileDescriptor_62e17cadbce9b02c = []byte{
	// 323 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x91, 0xc1, 0x4a, 0xc3, 0x30,
	0x18, 0xc7, 0xd7, 0x39, 0x37, 0xf7, 0x29, 0x22, 0x01, 0x31, 0x82, 0x84, 0xb1, 0x83, 0x0c, 0x61,
	0xed, 0x41, 0x5f, 0xc0, 0x09, 0xea, 0x3c, 0x8d, 0xa2, 0x1e, 0xbc, 0x65, 0x49, 0xd8, 0xe2, 0xe2,
	0x52, 0xd2, 0x74, 0xda, 0xb7, 0xf0, 0xb1, 0x3c, 0xee, 0xe8, 0x51, 0xd6, 0x37, 0xf0, 0x09, 0xa4,
	0x69, 0xa7, 0x9b, 0x7a, 0xeb, 0xf7, 0xfb, 0x7e, 0x7f, 0x3e, 0x9a, 0x3f, 0x1c, 0x4c, 0xd3, 0x49,
	0x1c, 0xcc, 0xb4, 0xb2, 0x81, 0x11, 0xb1, 0x30, 0x33, 0xe1, 0x47, 0x46, 0x5b, 0x8d, 0x0e, 0xed,
	0xb3, 0x54, 0x72, 0x34, 0xb6, 0x91, 0xd1, 0x8f, 0x82, 0x59, 0x3f, 0x17, 0xfd, 0x5c, 0x6c, 0x7f,
	0x56, 0x01, 0x7a, 0x96, 0x85, 0x85, 0x8f, 0x8e, 0xa0, 0x59, 0x7e, 0xf6, 0x39, 0xf6, 0x5a, 0x5e,
	0xa7, 0x16, 0xfe, 0x00, 0x74, 0x0c, 0xbb, 0xe5, 0x70, 0xce, 0xb9, 0x11, 0x71, 0x8c, 0xab, 0x2d,
	0xaf, 0xd3, 0x0c, 0x7f, 0x51, 0xd4, 0x86, 0x9d, 0x9b, 0x84, 0x8f, 0xbe, 0xad, 0x0d, 0x67, 0xad,
	0x31, 0x74, 0x06, 0xfb, 0xee, 0xae, 0xa2, 0xe9, 0x05, 0x8d, 0x28, 0x93, 0x36, 0xbd, 0xa7, 0x2a,
	0x11, 0xb8, 0xe6, 0xae, 0xfe, 0xbf, 0x44, 0x04, 0xe0, 0x56, 0x5b, 0xaa, 0x0a, 0x75, 0xd3, 0xa9,
	0x2b, 0x04, 0x9d, 0xc0, 0xde, 0xc0, 0xc8, 0x19, 0xb5, 0x62, 0xa0, 0x75, 0x69, 0xd5, 0x9d, 0xf5,
	0x87, 0xa3, 0x16, 0x6c, 0x0f, 0x92, 0xa1, 0x92, 0xac, 0xd0, 0x1a, 0x4e, 0x5b, 0x45, 0x08, 0x43,
	0xe3, 0x52, 0xb8, 0x04, 0xde, 0x72, 0xdb, 0xe5, 0x98, 0xff, 0xe1, 0xdd, 0x54, 0x69, 0x36, 0xb9,
	0x16, 0xf9, 0xbb, 0xe2, 0xa6, 0x5b, 0xaf, 0xb1, 0x3c, 0x1d, 0xea, 0x64, 0xca, 0xfb, 0x1c, 0x43,
	0x91, 0x2e, 0xc7, 0xde, 0xd5, 0xdb, 0x82, 0x78, 0xf3, 0x05, 0xf1, 0x3e, 0x16, 0xc4, 0x7b, 0xcd,
	0x48, 0x65, 0x9e, 0x91, 0xca, 0x7b, 0x46, 0x2a, 0x0f, 0xdd, 0x91, 0xb4, 0xe3, 0x64, 0xe8, 0x33,
	0xfd, 0x14, 0x2c, 0x4b, 0xeb, 0x96, 0xad, 0x05, 0xae, 0xde, 0x97, 0xa2, 0x60, 0x9b, 0x46, 0x22,
	0x1e, 0xd6, 0x5d, 0xbf, 0xa7, 0x5f, 0x01, 0x00, 0x00, 0xff, 0xff, 0xe0, 0x1e, 0x7e, 0x29, 0xfa,
	0x01, 0x00, 0x00,
}

func (m *BtcReserve) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *BtcReserve) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *BtcReserve) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.RoundId != 0 {
		i = encodeVarintReserve(dAtA, i, uint64(m.RoundId))
		i--
		dAtA[i] = 0x50
	}
	if m.UnlockHeight != 0 {
		i = encodeVarintReserve(dAtA, i, uint64(m.UnlockHeight))
		i--
		dAtA[i] = 0x48
	}
	if m.FeePool != 0 {
		i = encodeVarintReserve(dAtA, i, uint64(m.FeePool))
		i--
		dAtA[i] = 0x40
	}
	if m.PublicValue != 0 {
		i = encodeVarintReserve(dAtA, i, uint64(m.PublicValue))
		i--
		dAtA[i] = 0x38
	}
	if m.PrivatePoolValue != 0 {
		i = encodeVarintReserve(dAtA, i, uint64(m.PrivatePoolValue))
		i--
		dAtA[i] = 0x30
	}
	if m.TotalValue != 0 {
		i = encodeVarintReserve(dAtA, i, uint64(m.TotalValue))
		i--
		dAtA[i] = 0x28
	}
	if m.BtcRelayCapacityValue != 0 {
		i = encodeVarintReserve(dAtA, i, uint64(m.BtcRelayCapacityValue))
		i--
		dAtA[i] = 0x20
	}
	if len(m.JudgeAddress) > 0 {
		i -= len(m.JudgeAddress)
		copy(dAtA[i:], m.JudgeAddress)
		i = encodeVarintReserve(dAtA, i, uint64(len(m.JudgeAddress)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.ReserveAddress) > 0 {
		i -= len(m.ReserveAddress)
		copy(dAtA[i:], m.ReserveAddress)
		i = encodeVarintReserve(dAtA, i, uint64(len(m.ReserveAddress)))
		i--
		dAtA[i] = 0x12
	}
	if m.ReserveId != 0 {
		i = encodeVarintReserve(dAtA, i, uint64(m.ReserveId))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintReserve(dAtA []byte, offset int, v uint64) int {
	offset -= sovReserve(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *BtcReserve) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.ReserveId != 0 {
		n += 1 + sovReserve(uint64(m.ReserveId))
	}
	l = len(m.ReserveAddress)
	if l > 0 {
		n += 1 + l + sovReserve(uint64(l))
	}
	l = len(m.JudgeAddress)
	if l > 0 {
		n += 1 + l + sovReserve(uint64(l))
	}
	if m.BtcRelayCapacityValue != 0 {
		n += 1 + sovReserve(uint64(m.BtcRelayCapacityValue))
	}
	if m.TotalValue != 0 {
		n += 1 + sovReserve(uint64(m.TotalValue))
	}
	if m.PrivatePoolValue != 0 {
		n += 1 + sovReserve(uint64(m.PrivatePoolValue))
	}
	if m.PublicValue != 0 {
		n += 1 + sovReserve(uint64(m.PublicValue))
	}
	if m.FeePool != 0 {
		n += 1 + sovReserve(uint64(m.FeePool))
	}
	if m.UnlockHeight != 0 {
		n += 1 + sovReserve(uint64(m.UnlockHeight))
	}
	if m.RoundId != 0 {
		n += 1 + sovReserve(uint64(m.RoundId))
	}
	return n
}

func sovReserve(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozReserve(x uint64) (n int) {
	return sovReserve(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *BtcReserve) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowReserve
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
			return fmt.Errorf("proto: BtcReserve: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: BtcReserve: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ReserveId", wireType)
			}
			m.ReserveId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReserve
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ReserveId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ReserveAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReserve
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
				return ErrInvalidLengthReserve
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthReserve
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ReserveAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field JudgeAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReserve
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
				return ErrInvalidLengthReserve
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthReserve
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.JudgeAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field BtcRelayCapacityValue", wireType)
			}
			m.BtcRelayCapacityValue = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReserve
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.BtcRelayCapacityValue |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field TotalValue", wireType)
			}
			m.TotalValue = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReserve
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.TotalValue |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field PrivatePoolValue", wireType)
			}
			m.PrivatePoolValue = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReserve
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.PrivatePoolValue |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field PublicValue", wireType)
			}
			m.PublicValue = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReserve
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.PublicValue |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 8:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field FeePool", wireType)
			}
			m.FeePool = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReserve
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.FeePool |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 9:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field UnlockHeight", wireType)
			}
			m.UnlockHeight = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReserve
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.UnlockHeight |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 10:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field RoundId", wireType)
			}
			m.RoundId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReserve
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.RoundId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipReserve(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthReserve
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
func skipReserve(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowReserve
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
					return 0, ErrIntOverflowReserve
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
					return 0, ErrIntOverflowReserve
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
				return 0, ErrInvalidLengthReserve
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupReserve
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthReserve
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthReserve        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowReserve          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupReserve = fmt.Errorf("proto: unexpected end of group")
)
