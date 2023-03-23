// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: volt/reserve.proto

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

// IndividualTwilightReserveAccount is used to keep a mapping of how much btc an individual
// twilight address has in the reserve
type IndividualTwilightReserveAccount struct {
	TwilightAddress string `protobuf:"bytes,1,opt,name=TwilightAddress,proto3" json:"TwilightAddress,omitempty"`
	BtcValue        uint64 `protobuf:"varint,2,opt,name=BtcValue,proto3" json:"BtcValue,omitempty"`
}

func (m *IndividualTwilightReserveAccount) Reset()         { *m = IndividualTwilightReserveAccount{} }
func (m *IndividualTwilightReserveAccount) String() string { return proto.CompactTextString(m) }
func (*IndividualTwilightReserveAccount) ProtoMessage()    {}
func (*IndividualTwilightReserveAccount) Descriptor() ([]byte, []int) {
	return fileDescriptor_583498972364f69e, []int{0}
}
func (m *IndividualTwilightReserveAccount) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *IndividualTwilightReserveAccount) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_IndividualTwilightReserveAccount.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *IndividualTwilightReserveAccount) XXX_Merge(src proto.Message) {
	xxx_messageInfo_IndividualTwilightReserveAccount.Merge(m, src)
}
func (m *IndividualTwilightReserveAccount) XXX_Size() int {
	return m.Size()
}
func (m *IndividualTwilightReserveAccount) XXX_DiscardUnknown() {
	xxx_messageInfo_IndividualTwilightReserveAccount.DiscardUnknown(m)
}

var xxx_messageInfo_IndividualTwilightReserveAccount proto.InternalMessageInfo

func (m *IndividualTwilightReserveAccount) GetTwilightAddress() string {
	if m != nil {
		return m.TwilightAddress
	}
	return ""
}

func (m *IndividualTwilightReserveAccount) GetBtcValue() uint64 {
	if m != nil {
		return m.BtcValue
	}
	return 0
}

// BtcReserve is a mapping of a validator address to a reserve ID
// It holds other values in the reserve struct such as total
// value, private pool value, public pool value, and the btc relay capacity value
type BtcReserve struct {
	ReserveId                        uint64                              `protobuf:"varint,1,opt,name=ReserveId,proto3" json:"ReserveId,omitempty"`
	ReserveAddress                   string                              `protobuf:"bytes,2,opt,name=ReserveAddress,proto3" json:"ReserveAddress,omitempty"`
	ValidatorAddress                 string                              `protobuf:"bytes,3,opt,name=ValidatorAddress,proto3" json:"ValidatorAddress,omitempty"`
	BtcRelayCapacityValue            uint64                              `protobuf:"varint,4,opt,name=BtcRelayCapacityValue,proto3" json:"BtcRelayCapacityValue,omitempty"`
	TotalValue                       uint64                              `protobuf:"varint,5,opt,name=TotalValue,proto3" json:"TotalValue,omitempty"`
	PrivatePoolValue                 uint64                              `protobuf:"varint,6,opt,name=PrivatePoolValue,proto3" json:"PrivatePoolValue,omitempty"`
	PublicValue                      uint64                              `protobuf:"varint,7,opt,name=PublicValue,proto3" json:"PublicValue,omitempty"`
	FeePool                          uint64                              `protobuf:"varint,8,opt,name=FeePool,proto3" json:"FeePool,omitempty"`
	IndividualTwilightReserveAccount []*IndividualTwilightReserveAccount `protobuf:"bytes,9,rep,name=IndividualTwilightReserveAccount,proto3" json:"IndividualTwilightReserveAccount,omitempty"`
}

func (m *BtcReserve) Reset()         { *m = BtcReserve{} }
func (m *BtcReserve) String() string { return proto.CompactTextString(m) }
func (*BtcReserve) ProtoMessage()    {}
func (*BtcReserve) Descriptor() ([]byte, []int) {
	return fileDescriptor_583498972364f69e, []int{1}
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

func (m *BtcReserve) GetValidatorAddress() string {
	if m != nil {
		return m.ValidatorAddress
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

func (m *BtcReserve) GetIndividualTwilightReserveAccount() []*IndividualTwilightReserveAccount {
	if m != nil {
		return m.IndividualTwilightReserveAccount
	}
	return nil
}

func init() {
	proto.RegisterType((*IndividualTwilightReserveAccount)(nil), "twilightproject.nyks.volt.IndividualTwilightReserveAccount")
	proto.RegisterType((*BtcReserve)(nil), "twilightproject.nyks.volt.BtcReserve")
}

func init() { proto.RegisterFile("volt/reserve.proto", fileDescriptor_583498972364f69e) }

var fileDescriptor_583498972364f69e = []byte{
	// 366 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x92, 0x4f, 0x4b, 0xf3, 0x40,
	0x10, 0xc6, 0x9b, 0xb6, 0x6f, 0xff, 0x4c, 0xe1, 0x7d, 0x5f, 0x16, 0x84, 0x28, 0x12, 0x42, 0x0f,
	0x12, 0x84, 0x26, 0xa0, 0xde, 0x3c, 0xb5, 0x82, 0xd2, 0x5b, 0x09, 0xa5, 0x07, 0x6f, 0xdb, 0x64,
	0x69, 0x57, 0xd7, 0x6e, 0x48, 0x26, 0xd1, 0x7c, 0x02, 0xaf, 0x7e, 0x2a, 0xf1, 0xd8, 0xa3, 0x47,
	0x69, 0xbf, 0x88, 0x74, 0xbb, 0xd1, 0xd2, 0x2a, 0xbd, 0x65, 0x9f, 0xf9, 0xcd, 0x3c, 0x0f, 0x99,
	0x01, 0x92, 0x49, 0x81, 0x5e, 0xcc, 0x12, 0x16, 0x67, 0xcc, 0x8d, 0x62, 0x89, 0x92, 0x1c, 0xe2,
	0x23, 0x17, 0x7c, 0x32, 0xc5, 0x28, 0x96, 0x77, 0x2c, 0x40, 0x77, 0x96, 0xdf, 0x27, 0xee, 0x0a,
	0x6c, 0x4f, 0xc1, 0xee, 0xcf, 0x42, 0x9e, 0xf1, 0x30, 0xa5, 0x62, 0xa8, 0x31, 0x7f, 0xdd, 0xdd,
	0x0d, 0x02, 0x99, 0xce, 0x90, 0x38, 0xf0, 0xaf, 0xa8, 0x74, 0xc3, 0x30, 0x66, 0x49, 0x62, 0x1a,
	0xb6, 0xe1, 0x34, 0xfd, 0x6d, 0x99, 0x1c, 0x41, 0xa3, 0x87, 0xc1, 0x88, 0x8a, 0x94, 0x99, 0x65,
	0xdb, 0x70, 0xaa, 0xfe, 0xd7, 0xbb, 0xfd, 0x5a, 0x01, 0xe8, 0x61, 0xa0, 0x67, 0x93, 0x63, 0x68,
	0xea, 0xcf, 0x7e, 0xa8, 0xc6, 0x55, 0xfd, 0x6f, 0x81, 0x9c, 0xc0, 0xdf, 0x22, 0x84, 0x76, 0x2c,
	0x2b, 0xc7, 0x2d, 0x95, 0x9c, 0xc2, 0xff, 0x11, 0x15, 0x3c, 0xa4, 0x28, 0xe3, 0x82, 0xac, 0x28,
	0x72, 0x47, 0x27, 0x17, 0x70, 0xa0, 0xfc, 0x05, 0xcd, 0xaf, 0x68, 0x44, 0x03, 0x8e, 0xf9, 0x3a,
	0x69, 0x55, 0xb9, 0xff, 0x5c, 0x24, 0x16, 0xc0, 0x50, 0x22, 0x15, 0x6b, 0xf4, 0x8f, 0x42, 0x37,
	0x94, 0x55, 0x82, 0x41, 0xcc, 0x33, 0x8a, 0x6c, 0x20, 0xa5, 0xa6, 0x6a, 0x8a, 0xda, 0xd1, 0x89,
	0x0d, 0xad, 0x41, 0x3a, 0x16, 0x5c, 0xff, 0xa1, 0xba, 0xc2, 0x36, 0x25, 0x62, 0x42, 0xfd, 0x9a,
	0xa9, 0x0e, 0xb3, 0xa1, 0xaa, 0xc5, 0x93, 0x3c, 0x1b, 0xfb, 0x37, 0x65, 0x36, 0xed, 0x8a, 0xd3,
	0x3a, 0xbb, 0x74, 0x7f, 0xdd, 0xb7, 0xbb, 0x6f, 0x84, 0xbf, 0xd7, 0xa4, 0x77, 0xf3, 0xb6, 0xb0,
	0x8c, 0xf9, 0xc2, 0x32, 0x3e, 0x16, 0x96, 0xf1, 0xb2, 0xb4, 0x4a, 0xf3, 0xa5, 0x55, 0x7a, 0x5f,
	0x5a, 0xa5, 0xdb, 0xce, 0x84, 0xe3, 0x34, 0x1d, 0xbb, 0x81, 0x7c, 0xf0, 0x8a, 0x08, 0x1d, 0x9d,
	0xc1, 0x5b, 0x65, 0xf0, 0x9e, 0x3c, 0x75, 0x9e, 0x98, 0x47, 0x2c, 0x19, 0xd7, 0xd4, 0x75, 0x9e,
	0x7f, 0x06, 0x00, 0x00, 0xff, 0xff, 0x93, 0xbc, 0xc6, 0x53, 0xb3, 0x02, 0x00, 0x00,
}

func (m *IndividualTwilightReserveAccount) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *IndividualTwilightReserveAccount) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *IndividualTwilightReserveAccount) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.BtcValue != 0 {
		i = encodeVarintReserve(dAtA, i, uint64(m.BtcValue))
		i--
		dAtA[i] = 0x10
	}
	if len(m.TwilightAddress) > 0 {
		i -= len(m.TwilightAddress)
		copy(dAtA[i:], m.TwilightAddress)
		i = encodeVarintReserve(dAtA, i, uint64(len(m.TwilightAddress)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
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
	if len(m.IndividualTwilightReserveAccount) > 0 {
		for iNdEx := len(m.IndividualTwilightReserveAccount) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.IndividualTwilightReserveAccount[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintReserve(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x4a
		}
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
	if len(m.ValidatorAddress) > 0 {
		i -= len(m.ValidatorAddress)
		copy(dAtA[i:], m.ValidatorAddress)
		i = encodeVarintReserve(dAtA, i, uint64(len(m.ValidatorAddress)))
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
func (m *IndividualTwilightReserveAccount) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.TwilightAddress)
	if l > 0 {
		n += 1 + l + sovReserve(uint64(l))
	}
	if m.BtcValue != 0 {
		n += 1 + sovReserve(uint64(m.BtcValue))
	}
	return n
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
	l = len(m.ValidatorAddress)
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
	if len(m.IndividualTwilightReserveAccount) > 0 {
		for _, e := range m.IndividualTwilightReserveAccount {
			l = e.Size()
			n += 1 + l + sovReserve(uint64(l))
		}
	}
	return n
}

func sovReserve(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozReserve(x uint64) (n int) {
	return sovReserve(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *IndividualTwilightReserveAccount) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: IndividualTwilightReserveAccount: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: IndividualTwilightReserveAccount: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TwilightAddress", wireType)
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
			m.TwilightAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field BtcValue", wireType)
			}
			m.BtcValue = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReserve
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
				return fmt.Errorf("proto: wrong wireType = %d for field ValidatorAddress", wireType)
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
			m.ValidatorAddress = string(dAtA[iNdEx:postIndex])
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
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field IndividualTwilightReserveAccount", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReserve
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
				return ErrInvalidLengthReserve
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthReserve
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.IndividualTwilightReserveAccount = append(m.IndividualTwilightReserveAccount, &IndividualTwilightReserveAccount{})
			if err := m.IndividualTwilightReserveAccount[len(m.IndividualTwilightReserveAccount)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
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
