// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: nyks/bridge/events.proto

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

type EventRegisterBtcDepositAddress struct {
	Message        string `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
	DepositAddress string `protobuf:"bytes,2,opt,name=depositAddress,proto3" json:"depositAddress,omitempty"`
}

func (m *EventRegisterBtcDepositAddress) Reset()         { *m = EventRegisterBtcDepositAddress{} }
func (m *EventRegisterBtcDepositAddress) String() string { return proto.CompactTextString(m) }
func (*EventRegisterBtcDepositAddress) ProtoMessage()    {}
func (*EventRegisterBtcDepositAddress) Descriptor() ([]byte, []int) {
	return fileDescriptor_73850f14c9042236, []int{0}
}
func (m *EventRegisterBtcDepositAddress) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *EventRegisterBtcDepositAddress) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_EventRegisterBtcDepositAddress.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *EventRegisterBtcDepositAddress) XXX_Merge(src proto.Message) {
	xxx_messageInfo_EventRegisterBtcDepositAddress.Merge(m, src)
}
func (m *EventRegisterBtcDepositAddress) XXX_Size() int {
	return m.Size()
}
func (m *EventRegisterBtcDepositAddress) XXX_DiscardUnknown() {
	xxx_messageInfo_EventRegisterBtcDepositAddress.DiscardUnknown(m)
}

var xxx_messageInfo_EventRegisterBtcDepositAddress proto.InternalMessageInfo

func (m *EventRegisterBtcDepositAddress) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func (m *EventRegisterBtcDepositAddress) GetDepositAddress() string {
	if m != nil {
		return m.DepositAddress
	}
	return ""
}

type EventRegisterReserveScript struct {
	Message       string `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
	ReserveScript string `protobuf:"bytes,2,opt,name=reserveScript,proto3" json:"reserveScript,omitempty"`
}

func (m *EventRegisterReserveScript) Reset()         { *m = EventRegisterReserveScript{} }
func (m *EventRegisterReserveScript) String() string { return proto.CompactTextString(m) }
func (*EventRegisterReserveScript) ProtoMessage()    {}
func (*EventRegisterReserveScript) Descriptor() ([]byte, []int) {
	return fileDescriptor_73850f14c9042236, []int{1}
}
func (m *EventRegisterReserveScript) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *EventRegisterReserveScript) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_EventRegisterReserveScript.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *EventRegisterReserveScript) XXX_Merge(src proto.Message) {
	xxx_messageInfo_EventRegisterReserveScript.Merge(m, src)
}
func (m *EventRegisterReserveScript) XXX_Size() int {
	return m.Size()
}
func (m *EventRegisterReserveScript) XXX_DiscardUnknown() {
	xxx_messageInfo_EventRegisterReserveScript.DiscardUnknown(m)
}

var xxx_messageInfo_EventRegisterReserveScript proto.InternalMessageInfo

func (m *EventRegisterReserveScript) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func (m *EventRegisterReserveScript) GetReserveScript() string {
	if m != nil {
		return m.ReserveScript
	}
	return ""
}

type EventRegisterJudgeAddress struct {
	Message          string `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
	JudgeAddress     string `protobuf:"bytes,2,opt,name=judgeAddress,proto3" json:"judgeAddress,omitempty"`
	ValidatorAddress string `protobuf:"bytes,3,opt,name=validatorAddress,proto3" json:"validatorAddress,omitempty"`
}

func (m *EventRegisterJudgeAddress) Reset()         { *m = EventRegisterJudgeAddress{} }
func (m *EventRegisterJudgeAddress) String() string { return proto.CompactTextString(m) }
func (*EventRegisterJudgeAddress) ProtoMessage()    {}
func (*EventRegisterJudgeAddress) Descriptor() ([]byte, []int) {
	return fileDescriptor_73850f14c9042236, []int{2}
}
func (m *EventRegisterJudgeAddress) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *EventRegisterJudgeAddress) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_EventRegisterJudgeAddress.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *EventRegisterJudgeAddress) XXX_Merge(src proto.Message) {
	xxx_messageInfo_EventRegisterJudgeAddress.Merge(m, src)
}
func (m *EventRegisterJudgeAddress) XXX_Size() int {
	return m.Size()
}
func (m *EventRegisterJudgeAddress) XXX_DiscardUnknown() {
	xxx_messageInfo_EventRegisterJudgeAddress.DiscardUnknown(m)
}

var xxx_messageInfo_EventRegisterJudgeAddress proto.InternalMessageInfo

func (m *EventRegisterJudgeAddress) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func (m *EventRegisterJudgeAddress) GetJudgeAddress() string {
	if m != nil {
		return m.JudgeAddress
	}
	return ""
}

func (m *EventRegisterJudgeAddress) GetValidatorAddress() string {
	if m != nil {
		return m.ValidatorAddress
	}
	return ""
}

type EventWithdrawBtcRequest struct {
	Message         string `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
	TwilightAddress string `protobuf:"bytes,2,opt,name=twilightAddress,proto3" json:"twilightAddress,omitempty"`
	ReserveAddress  string `protobuf:"bytes,3,opt,name=reserveAddress,proto3" json:"reserveAddress,omitempty"`
	WithdrawAddress string `protobuf:"bytes,4,opt,name=withdrawAddress,proto3" json:"withdrawAddress,omitempty"`
	WithdrawAmount  uint64 `protobuf:"varint,5,opt,name=withdrawAmount,proto3" json:"withdrawAmount,omitempty"`
}

func (m *EventWithdrawBtcRequest) Reset()         { *m = EventWithdrawBtcRequest{} }
func (m *EventWithdrawBtcRequest) String() string { return proto.CompactTextString(m) }
func (*EventWithdrawBtcRequest) ProtoMessage()    {}
func (*EventWithdrawBtcRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_73850f14c9042236, []int{3}
}
func (m *EventWithdrawBtcRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *EventWithdrawBtcRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_EventWithdrawBtcRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *EventWithdrawBtcRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_EventWithdrawBtcRequest.Merge(m, src)
}
func (m *EventWithdrawBtcRequest) XXX_Size() int {
	return m.Size()
}
func (m *EventWithdrawBtcRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_EventWithdrawBtcRequest.DiscardUnknown(m)
}

var xxx_messageInfo_EventWithdrawBtcRequest proto.InternalMessageInfo

func (m *EventWithdrawBtcRequest) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func (m *EventWithdrawBtcRequest) GetTwilightAddress() string {
	if m != nil {
		return m.TwilightAddress
	}
	return ""
}

func (m *EventWithdrawBtcRequest) GetReserveAddress() string {
	if m != nil {
		return m.ReserveAddress
	}
	return ""
}

func (m *EventWithdrawBtcRequest) GetWithdrawAddress() string {
	if m != nil {
		return m.WithdrawAddress
	}
	return ""
}

func (m *EventWithdrawBtcRequest) GetWithdrawAmount() uint64 {
	if m != nil {
		return m.WithdrawAmount
	}
	return 0
}

func init() {
	proto.RegisterType((*EventRegisterBtcDepositAddress)(nil), "twilightproject.nyks.bridge.EventRegisterBtcDepositAddress")
	proto.RegisterType((*EventRegisterReserveScript)(nil), "twilightproject.nyks.bridge.EventRegisterReserveScript")
	proto.RegisterType((*EventRegisterJudgeAddress)(nil), "twilightproject.nyks.bridge.EventRegisterJudgeAddress")
	proto.RegisterType((*EventWithdrawBtcRequest)(nil), "twilightproject.nyks.bridge.EventWithdrawBtcRequest")
}

func init() { proto.RegisterFile("nyks/bridge/events.proto", fileDescriptor_73850f14c9042236) }

var fileDescriptor_73850f14c9042236 = []byte{
	// 340 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x92, 0xcd, 0x4a, 0xc3, 0x40,
	0x14, 0x85, 0x3b, 0x5a, 0x15, 0x07, 0xff, 0xc8, 0xc6, 0xa8, 0x30, 0x94, 0x20, 0x52, 0x04, 0x93,
	0x85, 0x4f, 0x60, 0xd1, 0x85, 0x2e, 0xe3, 0x42, 0x10, 0x37, 0x49, 0xe6, 0x92, 0x4e, 0x6d, 0x3b,
	0x71, 0xe6, 0xa6, 0xb5, 0x0f, 0xe0, 0xde, 0xc7, 0x72, 0xd9, 0x9d, 0x2e, 0xa5, 0x7d, 0x11, 0x49,
	0x9a, 0x91, 0x4e, 0x84, 0xba, 0xcc, 0xc7, 0xc7, 0xc9, 0xb9, 0xc9, 0xa1, 0xee, 0x70, 0xf2, 0xac,
	0x83, 0x58, 0x09, 0x9e, 0x42, 0x00, 0x23, 0x18, 0xa2, 0xf6, 0x33, 0x25, 0x51, 0x3a, 0x27, 0x38,
	0x16, 0x7d, 0x91, 0x76, 0x31, 0x53, 0xb2, 0x07, 0x09, 0xfa, 0x85, 0xe9, 0x2f, 0x4c, 0x2f, 0xa6,
	0xec, 0xa6, 0x90, 0x43, 0x48, 0x85, 0x46, 0x50, 0x1d, 0x4c, 0xae, 0x21, 0x93, 0x5a, 0xe0, 0x15,
	0xe7, 0x0a, 0xb4, 0x76, 0x5c, 0xba, 0x35, 0x00, 0xad, 0xa3, 0x14, 0x5c, 0xd2, 0x22, 0xed, 0xed,
	0xd0, 0x3c, 0x3a, 0x67, 0x74, 0x8f, 0x5b, 0xae, 0xbb, 0x56, 0x0a, 0x35, 0xea, 0x3d, 0xd1, 0x63,
	0xeb, 0x1d, 0x21, 0x68, 0x50, 0x23, 0xb8, 0x4f, 0x94, 0xc8, 0x70, 0x45, 0xfe, 0x29, 0xdd, 0x55,
	0xcb, 0x6a, 0x15, 0x6f, 0x43, 0xef, 0x8d, 0xd0, 0x23, 0x2b, 0xfe, 0x2e, 0xe7, 0x29, 0xfc, 0xdf,
	0xde, 0xa3, 0x3b, 0xbd, 0x25, 0xb3, 0x0a, 0xb7, 0x98, 0x73, 0x4e, 0x0f, 0x46, 0x51, 0x5f, 0xf0,
	0x08, 0xa5, 0x32, 0xde, 0x7a, 0xe9, 0xfd, 0xe1, 0xde, 0x27, 0xa1, 0x87, 0x65, 0x8f, 0x07, 0x81,
	0x5d, 0xae, 0xa2, 0x71, 0x07, 0x93, 0x10, 0x5e, 0x72, 0xd0, 0xab, 0x6e, 0x6c, 0xd3, 0x7d, 0xf3,
	0x7b, 0xec, 0x22, 0x75, 0x5c, 0x7c, 0xed, 0xea, 0x70, 0xbb, 0x49, 0x8d, 0x16, 0x89, 0xe3, 0xaa,
	0x81, 0x11, 0x9b, 0x8b, 0xc4, 0x1a, 0x2e, 0x12, 0x7f, 0xd1, 0x40, 0xe6, 0x43, 0x74, 0x37, 0x5a,
	0xa4, 0xdd, 0x0c, 0x6b, 0xb4, 0x73, 0xfb, 0x31, 0x63, 0x64, 0x3a, 0x63, 0xe4, 0x7b, 0xc6, 0xc8,
	0xfb, 0x9c, 0x35, 0xa6, 0x73, 0xd6, 0xf8, 0x9a, 0xb3, 0xc6, 0x63, 0x90, 0x0a, 0xec, 0xe6, 0xb1,
	0x9f, 0xc8, 0x41, 0x60, 0xfa, 0x5e, 0x54, 0x33, 0x0b, 0xca, 0x41, 0xbe, 0x9a, 0x49, 0xe2, 0x24,
	0x03, 0x1d, 0x6f, 0x96, 0x93, 0xbc, 0xfc, 0x09, 0x00, 0x00, 0xff, 0xff, 0xe5, 0x32, 0x9e, 0xce,
	0xae, 0x02, 0x00, 0x00,
}

func (m *EventRegisterBtcDepositAddress) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *EventRegisterBtcDepositAddress) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *EventRegisterBtcDepositAddress) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.DepositAddress) > 0 {
		i -= len(m.DepositAddress)
		copy(dAtA[i:], m.DepositAddress)
		i = encodeVarintEvents(dAtA, i, uint64(len(m.DepositAddress)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Message) > 0 {
		i -= len(m.Message)
		copy(dAtA[i:], m.Message)
		i = encodeVarintEvents(dAtA, i, uint64(len(m.Message)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *EventRegisterReserveScript) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *EventRegisterReserveScript) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *EventRegisterReserveScript) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.ReserveScript) > 0 {
		i -= len(m.ReserveScript)
		copy(dAtA[i:], m.ReserveScript)
		i = encodeVarintEvents(dAtA, i, uint64(len(m.ReserveScript)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Message) > 0 {
		i -= len(m.Message)
		copy(dAtA[i:], m.Message)
		i = encodeVarintEvents(dAtA, i, uint64(len(m.Message)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *EventRegisterJudgeAddress) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *EventRegisterJudgeAddress) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *EventRegisterJudgeAddress) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.ValidatorAddress) > 0 {
		i -= len(m.ValidatorAddress)
		copy(dAtA[i:], m.ValidatorAddress)
		i = encodeVarintEvents(dAtA, i, uint64(len(m.ValidatorAddress)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.JudgeAddress) > 0 {
		i -= len(m.JudgeAddress)
		copy(dAtA[i:], m.JudgeAddress)
		i = encodeVarintEvents(dAtA, i, uint64(len(m.JudgeAddress)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Message) > 0 {
		i -= len(m.Message)
		copy(dAtA[i:], m.Message)
		i = encodeVarintEvents(dAtA, i, uint64(len(m.Message)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *EventWithdrawBtcRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *EventWithdrawBtcRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *EventWithdrawBtcRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.WithdrawAmount != 0 {
		i = encodeVarintEvents(dAtA, i, uint64(m.WithdrawAmount))
		i--
		dAtA[i] = 0x28
	}
	if len(m.WithdrawAddress) > 0 {
		i -= len(m.WithdrawAddress)
		copy(dAtA[i:], m.WithdrawAddress)
		i = encodeVarintEvents(dAtA, i, uint64(len(m.WithdrawAddress)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.ReserveAddress) > 0 {
		i -= len(m.ReserveAddress)
		copy(dAtA[i:], m.ReserveAddress)
		i = encodeVarintEvents(dAtA, i, uint64(len(m.ReserveAddress)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.TwilightAddress) > 0 {
		i -= len(m.TwilightAddress)
		copy(dAtA[i:], m.TwilightAddress)
		i = encodeVarintEvents(dAtA, i, uint64(len(m.TwilightAddress)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Message) > 0 {
		i -= len(m.Message)
		copy(dAtA[i:], m.Message)
		i = encodeVarintEvents(dAtA, i, uint64(len(m.Message)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintEvents(dAtA []byte, offset int, v uint64) int {
	offset -= sovEvents(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *EventRegisterBtcDepositAddress) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Message)
	if l > 0 {
		n += 1 + l + sovEvents(uint64(l))
	}
	l = len(m.DepositAddress)
	if l > 0 {
		n += 1 + l + sovEvents(uint64(l))
	}
	return n
}

func (m *EventRegisterReserveScript) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Message)
	if l > 0 {
		n += 1 + l + sovEvents(uint64(l))
	}
	l = len(m.ReserveScript)
	if l > 0 {
		n += 1 + l + sovEvents(uint64(l))
	}
	return n
}

func (m *EventRegisterJudgeAddress) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Message)
	if l > 0 {
		n += 1 + l + sovEvents(uint64(l))
	}
	l = len(m.JudgeAddress)
	if l > 0 {
		n += 1 + l + sovEvents(uint64(l))
	}
	l = len(m.ValidatorAddress)
	if l > 0 {
		n += 1 + l + sovEvents(uint64(l))
	}
	return n
}

func (m *EventWithdrawBtcRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Message)
	if l > 0 {
		n += 1 + l + sovEvents(uint64(l))
	}
	l = len(m.TwilightAddress)
	if l > 0 {
		n += 1 + l + sovEvents(uint64(l))
	}
	l = len(m.ReserveAddress)
	if l > 0 {
		n += 1 + l + sovEvents(uint64(l))
	}
	l = len(m.WithdrawAddress)
	if l > 0 {
		n += 1 + l + sovEvents(uint64(l))
	}
	if m.WithdrawAmount != 0 {
		n += 1 + sovEvents(uint64(m.WithdrawAmount))
	}
	return n
}

func sovEvents(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozEvents(x uint64) (n int) {
	return sovEvents(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *EventRegisterBtcDepositAddress) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowEvents
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
			return fmt.Errorf("proto: EventRegisterBtcDepositAddress: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: EventRegisterBtcDepositAddress: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Message", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvents
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
				return ErrInvalidLengthEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Message = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DepositAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvents
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
				return ErrInvalidLengthEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DepositAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipEvents(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthEvents
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
func (m *EventRegisterReserveScript) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowEvents
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
			return fmt.Errorf("proto: EventRegisterReserveScript: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: EventRegisterReserveScript: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Message", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvents
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
				return ErrInvalidLengthEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Message = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ReserveScript", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvents
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
				return ErrInvalidLengthEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ReserveScript = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipEvents(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthEvents
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
func (m *EventRegisterJudgeAddress) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowEvents
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
			return fmt.Errorf("proto: EventRegisterJudgeAddress: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: EventRegisterJudgeAddress: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Message", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvents
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
				return ErrInvalidLengthEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Message = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field JudgeAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvents
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
				return ErrInvalidLengthEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.JudgeAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ValidatorAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvents
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
				return ErrInvalidLengthEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ValidatorAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipEvents(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthEvents
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
func (m *EventWithdrawBtcRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowEvents
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
			return fmt.Errorf("proto: EventWithdrawBtcRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: EventWithdrawBtcRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Message", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvents
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
				return ErrInvalidLengthEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Message = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TwilightAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvents
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
				return ErrInvalidLengthEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.TwilightAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ReserveAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvents
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
				return ErrInvalidLengthEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ReserveAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field WithdrawAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvents
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
				return ErrInvalidLengthEvents
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthEvents
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.WithdrawAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field WithdrawAmount", wireType)
			}
			m.WithdrawAmount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowEvents
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.WithdrawAmount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipEvents(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthEvents
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
func skipEvents(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowEvents
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
					return 0, ErrIntOverflowEvents
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
					return 0, ErrIntOverflowEvents
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
				return 0, ErrInvalidLengthEvents
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupEvents
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthEvents
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthEvents        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowEvents          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupEvents = fmt.Errorf("proto: unexpected end of group")
)
