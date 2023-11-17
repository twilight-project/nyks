// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: nyks/volt/clearing.proto

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

type IndividualTwilightReserveAccountBalance struct {
	ReserveId uint64 `protobuf:"varint,1,opt,name=ReserveId,proto3" json:"ReserveId,omitempty"`
	Amount    uint64 `protobuf:"varint,2,opt,name=Amount,proto3" json:"Amount,omitempty"`
}

func (m *IndividualTwilightReserveAccountBalance) Reset() {
	*m = IndividualTwilightReserveAccountBalance{}
}
func (m *IndividualTwilightReserveAccountBalance) String() string { return proto.CompactTextString(m) }
func (*IndividualTwilightReserveAccountBalance) ProtoMessage()    {}
func (*IndividualTwilightReserveAccountBalance) Descriptor() ([]byte, []int) {
	return fileDescriptor_1c47080687c58e5f, []int{0}
}
func (m *IndividualTwilightReserveAccountBalance) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *IndividualTwilightReserveAccountBalance) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_IndividualTwilightReserveAccountBalance.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *IndividualTwilightReserveAccountBalance) XXX_Merge(src proto.Message) {
	xxx_messageInfo_IndividualTwilightReserveAccountBalance.Merge(m, src)
}
func (m *IndividualTwilightReserveAccountBalance) XXX_Size() int {
	return m.Size()
}
func (m *IndividualTwilightReserveAccountBalance) XXX_DiscardUnknown() {
	xxx_messageInfo_IndividualTwilightReserveAccountBalance.DiscardUnknown(m)
}

var xxx_messageInfo_IndividualTwilightReserveAccountBalance proto.InternalMessageInfo

func (m *IndividualTwilightReserveAccountBalance) GetReserveId() uint64 {
	if m != nil {
		return m.ReserveId
	}
	return 0
}

func (m *IndividualTwilightReserveAccountBalance) GetAmount() uint64 {
	if m != nil {
		return m.Amount
	}
	return 0
}

// ClearingAccount is used to keep a mapping of how a user's addresses and its reserve account balances
type ClearingAccount struct {
	TwilightAddress              string                                     `protobuf:"bytes,1,opt,name=TwilightAddress,proto3" json:"TwilightAddress,omitempty"`
	BtcDepositAddress            string                                     `protobuf:"bytes,2,opt,name=BtcDepositAddress,proto3" json:"BtcDepositAddress,omitempty"`
	BtcDepositAddressIdentifier  uint32                                     `protobuf:"varint,3,opt,name=BtcDepositAddressIdentifier,proto3" json:"BtcDepositAddressIdentifier,omitempty"`
	BtcWithdrawAddress           string                                     `protobuf:"bytes,4,opt,name=BtcWithdrawAddress,proto3" json:"BtcWithdrawAddress,omitempty"`
	BtcWithdrawAddressIdentifier uint32                                     `protobuf:"varint,5,opt,name=BtcWithdrawAddressIdentifier,proto3" json:"BtcWithdrawAddressIdentifier,omitempty"`
	ReserveAccountBalances       []*IndividualTwilightReserveAccountBalance `protobuf:"bytes,6,rep,name=ReserveAccountBalances,proto3" json:"ReserveAccountBalances,omitempty"`
}

func (m *ClearingAccount) Reset()         { *m = ClearingAccount{} }
func (m *ClearingAccount) String() string { return proto.CompactTextString(m) }
func (*ClearingAccount) ProtoMessage()    {}
func (*ClearingAccount) Descriptor() ([]byte, []int) {
	return fileDescriptor_1c47080687c58e5f, []int{1}
}
func (m *ClearingAccount) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ClearingAccount) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ClearingAccount.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ClearingAccount) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ClearingAccount.Merge(m, src)
}
func (m *ClearingAccount) XXX_Size() int {
	return m.Size()
}
func (m *ClearingAccount) XXX_DiscardUnknown() {
	xxx_messageInfo_ClearingAccount.DiscardUnknown(m)
}

var xxx_messageInfo_ClearingAccount proto.InternalMessageInfo

func (m *ClearingAccount) GetTwilightAddress() string {
	if m != nil {
		return m.TwilightAddress
	}
	return ""
}

func (m *ClearingAccount) GetBtcDepositAddress() string {
	if m != nil {
		return m.BtcDepositAddress
	}
	return ""
}

func (m *ClearingAccount) GetBtcDepositAddressIdentifier() uint32 {
	if m != nil {
		return m.BtcDepositAddressIdentifier
	}
	return 0
}

func (m *ClearingAccount) GetBtcWithdrawAddress() string {
	if m != nil {
		return m.BtcWithdrawAddress
	}
	return ""
}

func (m *ClearingAccount) GetBtcWithdrawAddressIdentifier() uint32 {
	if m != nil {
		return m.BtcWithdrawAddressIdentifier
	}
	return 0
}

func (m *ClearingAccount) GetReserveAccountBalances() []*IndividualTwilightReserveAccountBalance {
	if m != nil {
		return m.ReserveAccountBalances
	}
	return nil
}

// RefundTxSnap is used to keep a mapping of the last refund transaction for a reserve
type RefundTxAccountSnap struct {
	Amount                      uint64 `protobuf:"varint,1,opt,name=Amount,proto3" json:"Amount,omitempty"`
	BtcDepositAddress           string `protobuf:"bytes,2,opt,name=BtcDepositAddress,proto3" json:"BtcDepositAddress,omitempty"`
	BtcDepositAddressIdentifier uint32 `protobuf:"varint,3,opt,name=BtcDepositAddressIdentifier,proto3" json:"BtcDepositAddressIdentifier,omitempty"`
}

func (m *RefundTxAccountSnap) Reset()         { *m = RefundTxAccountSnap{} }
func (m *RefundTxAccountSnap) String() string { return proto.CompactTextString(m) }
func (*RefundTxAccountSnap) ProtoMessage()    {}
func (*RefundTxAccountSnap) Descriptor() ([]byte, []int) {
	return fileDescriptor_1c47080687c58e5f, []int{2}
}
func (m *RefundTxAccountSnap) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *RefundTxAccountSnap) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_RefundTxAccountSnap.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *RefundTxAccountSnap) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RefundTxAccountSnap.Merge(m, src)
}
func (m *RefundTxAccountSnap) XXX_Size() int {
	return m.Size()
}
func (m *RefundTxAccountSnap) XXX_DiscardUnknown() {
	xxx_messageInfo_RefundTxAccountSnap.DiscardUnknown(m)
}

var xxx_messageInfo_RefundTxAccountSnap proto.InternalMessageInfo

func (m *RefundTxAccountSnap) GetAmount() uint64 {
	if m != nil {
		return m.Amount
	}
	return 0
}

func (m *RefundTxAccountSnap) GetBtcDepositAddress() string {
	if m != nil {
		return m.BtcDepositAddress
	}
	return ""
}

func (m *RefundTxAccountSnap) GetBtcDepositAddressIdentifier() uint32 {
	if m != nil {
		return m.BtcDepositAddressIdentifier
	}
	return 0
}

// LastRefundTxSnapshot is a snapshot of the last refund for this reserve id
type LastRefundTxSnapshot struct {
	ReserveId                uint64                 `protobuf:"varint,1,opt,name=ReserveId,proto3" json:"ReserveId,omitempty"`
	RoundId                  uint64                 `protobuf:"varint,2,opt,name=RoundId,proto3" json:"RoundId,omitempty"`
	RefundAccounts           []*RefundTxAccountSnap `protobuf:"bytes,3,rep,name=refundAccounts,proto3" json:"refundAccounts,omitempty"`
	EndBlockerHeightTwilight int64                  `protobuf:"varint,4,opt,name=EndBlockerHeightTwilight,proto3" json:"EndBlockerHeightTwilight,omitempty"`
}

func (m *LastRefundTxSnapshot) Reset()         { *m = LastRefundTxSnapshot{} }
func (m *LastRefundTxSnapshot) String() string { return proto.CompactTextString(m) }
func (*LastRefundTxSnapshot) ProtoMessage()    {}
func (*LastRefundTxSnapshot) Descriptor() ([]byte, []int) {
	return fileDescriptor_1c47080687c58e5f, []int{3}
}
func (m *LastRefundTxSnapshot) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *LastRefundTxSnapshot) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_LastRefundTxSnapshot.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *LastRefundTxSnapshot) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LastRefundTxSnapshot.Merge(m, src)
}
func (m *LastRefundTxSnapshot) XXX_Size() int {
	return m.Size()
}
func (m *LastRefundTxSnapshot) XXX_DiscardUnknown() {
	xxx_messageInfo_LastRefundTxSnapshot.DiscardUnknown(m)
}

var xxx_messageInfo_LastRefundTxSnapshot proto.InternalMessageInfo

func (m *LastRefundTxSnapshot) GetReserveId() uint64 {
	if m != nil {
		return m.ReserveId
	}
	return 0
}

func (m *LastRefundTxSnapshot) GetRoundId() uint64 {
	if m != nil {
		return m.RoundId
	}
	return 0
}

func (m *LastRefundTxSnapshot) GetRefundAccounts() []*RefundTxAccountSnap {
	if m != nil {
		return m.RefundAccounts
	}
	return nil
}

func (m *LastRefundTxSnapshot) GetEndBlockerHeightTwilight() int64 {
	if m != nil {
		return m.EndBlockerHeightTwilight
	}
	return 0
}

func init() {
	proto.RegisterType((*IndividualTwilightReserveAccountBalance)(nil), "twilightproject.nyks.volt.IndividualTwilightReserveAccountBalance")
	proto.RegisterType((*ClearingAccount)(nil), "twilightproject.nyks.volt.ClearingAccount")
	proto.RegisterType((*RefundTxAccountSnap)(nil), "twilightproject.nyks.volt.RefundTxAccountSnap")
	proto.RegisterType((*LastRefundTxSnapshot)(nil), "twilightproject.nyks.volt.LastRefundTxSnapshot")
}

func init() { proto.RegisterFile("nyks/volt/clearing.proto", fileDescriptor_1c47080687c58e5f) }

var fileDescriptor_1c47080687c58e5f = []byte{
	// 439 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xbc, 0x53, 0x4d, 0x6f, 0x13, 0x31,
	0x10, 0x8d, 0xbb, 0x25, 0xa8, 0x83, 0xa0, 0xc2, 0xa0, 0xca, 0x88, 0x6a, 0x15, 0xe5, 0x42, 0x0e,
	0xd4, 0x91, 0xe0, 0xc6, 0x89, 0x2c, 0x20, 0x88, 0xc4, 0xc9, 0x54, 0x20, 0x71, 0x41, 0x5b, 0xdb,
	0x4d, 0x4c, 0xb7, 0xf6, 0xca, 0xf6, 0xa6, 0x2d, 0xbf, 0x82, 0x3b, 0xe2, 0xff, 0x70, 0xec, 0x91,
	0x23, 0xda, 0xfc, 0x11, 0xb4, 0xc6, 0x0b, 0x51, 0xf3, 0x01, 0x27, 0x8e, 0x9e, 0xf7, 0x34, 0xef,
	0x79, 0xde, 0x0c, 0x10, 0x7d, 0x71, 0xe2, 0x86, 0x33, 0x53, 0xf8, 0x21, 0x2f, 0x64, 0x6e, 0x95,
	0x9e, 0xd0, 0xd2, 0x1a, 0x6f, 0xf0, 0x3d, 0x7f, 0xa6, 0x0a, 0x35, 0x99, 0xfa, 0xd2, 0x9a, 0x8f,
	0x92, 0x7b, 0xda, 0x30, 0x69, 0xc3, 0xec, 0x7f, 0x80, 0x07, 0x63, 0x2d, 0xd4, 0x4c, 0x89, 0x2a,
	0x2f, 0x0e, 0x23, 0x8d, 0x49, 0x27, 0xed, 0x4c, 0x8e, 0x38, 0x37, 0x95, 0xf6, 0x59, 0x5e, 0xe4,
	0x9a, 0x4b, 0xbc, 0x0f, 0x3b, 0x11, 0x18, 0x0b, 0x82, 0x7a, 0x68, 0xb0, 0xcd, 0xfe, 0x14, 0xf0,
	0x1e, 0x74, 0x47, 0xa7, 0x0d, 0x9d, 0x6c, 0x05, 0x28, 0xbe, 0xfa, 0x5f, 0x12, 0xd8, 0x7d, 0x16,
	0xed, 0xc4, 0x86, 0x78, 0x00, 0xbb, 0xad, 0xd4, 0x48, 0x08, 0x2b, 0x9d, 0x0b, 0xfd, 0x76, 0xd8,
	0xd5, 0x32, 0x7e, 0x08, 0xb7, 0x33, 0xcf, 0x9f, 0xcb, 0xd2, 0x38, 0xf5, 0x9b, 0xbb, 0x15, 0xb8,
	0xcb, 0x00, 0x7e, 0x0a, 0xf7, 0x97, 0x8a, 0x63, 0x21, 0xb5, 0x57, 0xc7, 0x4a, 0x5a, 0x92, 0xf4,
	0xd0, 0xe0, 0x26, 0xdb, 0x44, 0xc1, 0x14, 0x70, 0xe6, 0xf9, 0x3b, 0xe5, 0xa7, 0xc2, 0xe6, 0x67,
	0xad, 0xe0, 0x76, 0x10, 0x5c, 0x81, 0xe0, 0x0c, 0xf6, 0x97, 0xab, 0x0b, 0x92, 0xd7, 0x82, 0xe4,
	0x46, 0x0e, 0xfe, 0x04, 0x7b, 0x2b, 0x07, 0xee, 0x48, 0xb7, 0x97, 0x0c, 0x6e, 0x3c, 0xca, 0xe8,
	0xda, 0xf8, 0xe8, 0x3f, 0x66, 0xc7, 0xd6, 0x28, 0xf4, 0xbf, 0x22, 0xb8, 0xc3, 0xe4, 0x71, 0xa5,
	0xc5, 0xe1, 0x79, 0xc4, 0xde, 0xe8, 0xbc, 0x5c, 0x48, 0x13, 0x2d, 0xa6, 0xf9, 0xbf, 0xf3, 0xe8,
	0xd7, 0x08, 0xee, 0xbe, 0xce, 0x9d, 0x6f, 0x3d, 0x36, 0xe6, 0xdc, 0xd4, 0xf8, 0xbf, 0x2c, 0x23,
	0x81, 0xeb, 0xcc, 0x54, 0x5a, 0x8c, 0x45, 0xdc, 0xc6, 0xf6, 0x89, 0xdf, 0xc2, 0x2d, 0x1b, 0x7a,
	0xc5, 0xdf, 0x3a, 0x92, 0x84, 0x21, 0xd3, 0x0d, 0x43, 0x5e, 0x31, 0x20, 0x76, 0xa5, 0x0b, 0x7e,
	0x02, 0xe4, 0x85, 0x16, 0x59, 0x61, 0xf8, 0x89, 0xb4, 0xaf, 0x64, 0xd3, 0xa8, 0x4d, 0x24, 0xac,
	0x4f, 0xc2, 0xd6, 0xe2, 0xd9, 0xcb, 0x6f, 0x75, 0x8a, 0x2e, 0xeb, 0x14, 0xfd, 0xa8, 0x53, 0xf4,
	0x79, 0x9e, 0x76, 0x2e, 0xe7, 0x69, 0xe7, 0xfb, 0x3c, 0xed, 0xbc, 0x3f, 0x98, 0x28, 0x3f, 0xad,
	0x8e, 0x28, 0x37, 0xa7, 0xc3, 0xd6, 0xdf, 0x41, 0x34, 0x38, 0x0c, 0xe7, 0x7e, 0xfe, 0xeb, 0xe0,
	0xfd, 0x45, 0x29, 0xdd, 0x51, 0x37, 0x9c, 0xfb, 0xe3, 0x9f, 0x01, 0x00, 0x00, 0xff, 0xff, 0x97,
	0x1c, 0x15, 0x48, 0x0a, 0x04, 0x00, 0x00,
}

func (m *IndividualTwilightReserveAccountBalance) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *IndividualTwilightReserveAccountBalance) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *IndividualTwilightReserveAccountBalance) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Amount != 0 {
		i = encodeVarintClearing(dAtA, i, uint64(m.Amount))
		i--
		dAtA[i] = 0x10
	}
	if m.ReserveId != 0 {
		i = encodeVarintClearing(dAtA, i, uint64(m.ReserveId))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *ClearingAccount) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ClearingAccount) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ClearingAccount) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.ReserveAccountBalances) > 0 {
		for iNdEx := len(m.ReserveAccountBalances) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.ReserveAccountBalances[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintClearing(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x32
		}
	}
	if m.BtcWithdrawAddressIdentifier != 0 {
		i = encodeVarintClearing(dAtA, i, uint64(m.BtcWithdrawAddressIdentifier))
		i--
		dAtA[i] = 0x28
	}
	if len(m.BtcWithdrawAddress) > 0 {
		i -= len(m.BtcWithdrawAddress)
		copy(dAtA[i:], m.BtcWithdrawAddress)
		i = encodeVarintClearing(dAtA, i, uint64(len(m.BtcWithdrawAddress)))
		i--
		dAtA[i] = 0x22
	}
	if m.BtcDepositAddressIdentifier != 0 {
		i = encodeVarintClearing(dAtA, i, uint64(m.BtcDepositAddressIdentifier))
		i--
		dAtA[i] = 0x18
	}
	if len(m.BtcDepositAddress) > 0 {
		i -= len(m.BtcDepositAddress)
		copy(dAtA[i:], m.BtcDepositAddress)
		i = encodeVarintClearing(dAtA, i, uint64(len(m.BtcDepositAddress)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.TwilightAddress) > 0 {
		i -= len(m.TwilightAddress)
		copy(dAtA[i:], m.TwilightAddress)
		i = encodeVarintClearing(dAtA, i, uint64(len(m.TwilightAddress)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *RefundTxAccountSnap) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *RefundTxAccountSnap) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *RefundTxAccountSnap) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.BtcDepositAddressIdentifier != 0 {
		i = encodeVarintClearing(dAtA, i, uint64(m.BtcDepositAddressIdentifier))
		i--
		dAtA[i] = 0x18
	}
	if len(m.BtcDepositAddress) > 0 {
		i -= len(m.BtcDepositAddress)
		copy(dAtA[i:], m.BtcDepositAddress)
		i = encodeVarintClearing(dAtA, i, uint64(len(m.BtcDepositAddress)))
		i--
		dAtA[i] = 0x12
	}
	if m.Amount != 0 {
		i = encodeVarintClearing(dAtA, i, uint64(m.Amount))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *LastRefundTxSnapshot) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *LastRefundTxSnapshot) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *LastRefundTxSnapshot) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.EndBlockerHeightTwilight != 0 {
		i = encodeVarintClearing(dAtA, i, uint64(m.EndBlockerHeightTwilight))
		i--
		dAtA[i] = 0x20
	}
	if len(m.RefundAccounts) > 0 {
		for iNdEx := len(m.RefundAccounts) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.RefundAccounts[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintClearing(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x1a
		}
	}
	if m.RoundId != 0 {
		i = encodeVarintClearing(dAtA, i, uint64(m.RoundId))
		i--
		dAtA[i] = 0x10
	}
	if m.ReserveId != 0 {
		i = encodeVarintClearing(dAtA, i, uint64(m.ReserveId))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintClearing(dAtA []byte, offset int, v uint64) int {
	offset -= sovClearing(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *IndividualTwilightReserveAccountBalance) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.ReserveId != 0 {
		n += 1 + sovClearing(uint64(m.ReserveId))
	}
	if m.Amount != 0 {
		n += 1 + sovClearing(uint64(m.Amount))
	}
	return n
}

func (m *ClearingAccount) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.TwilightAddress)
	if l > 0 {
		n += 1 + l + sovClearing(uint64(l))
	}
	l = len(m.BtcDepositAddress)
	if l > 0 {
		n += 1 + l + sovClearing(uint64(l))
	}
	if m.BtcDepositAddressIdentifier != 0 {
		n += 1 + sovClearing(uint64(m.BtcDepositAddressIdentifier))
	}
	l = len(m.BtcWithdrawAddress)
	if l > 0 {
		n += 1 + l + sovClearing(uint64(l))
	}
	if m.BtcWithdrawAddressIdentifier != 0 {
		n += 1 + sovClearing(uint64(m.BtcWithdrawAddressIdentifier))
	}
	if len(m.ReserveAccountBalances) > 0 {
		for _, e := range m.ReserveAccountBalances {
			l = e.Size()
			n += 1 + l + sovClearing(uint64(l))
		}
	}
	return n
}

func (m *RefundTxAccountSnap) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Amount != 0 {
		n += 1 + sovClearing(uint64(m.Amount))
	}
	l = len(m.BtcDepositAddress)
	if l > 0 {
		n += 1 + l + sovClearing(uint64(l))
	}
	if m.BtcDepositAddressIdentifier != 0 {
		n += 1 + sovClearing(uint64(m.BtcDepositAddressIdentifier))
	}
	return n
}

func (m *LastRefundTxSnapshot) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.ReserveId != 0 {
		n += 1 + sovClearing(uint64(m.ReserveId))
	}
	if m.RoundId != 0 {
		n += 1 + sovClearing(uint64(m.RoundId))
	}
	if len(m.RefundAccounts) > 0 {
		for _, e := range m.RefundAccounts {
			l = e.Size()
			n += 1 + l + sovClearing(uint64(l))
		}
	}
	if m.EndBlockerHeightTwilight != 0 {
		n += 1 + sovClearing(uint64(m.EndBlockerHeightTwilight))
	}
	return n
}

func sovClearing(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozClearing(x uint64) (n int) {
	return sovClearing(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *IndividualTwilightReserveAccountBalance) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowClearing
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
			return fmt.Errorf("proto: IndividualTwilightReserveAccountBalance: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: IndividualTwilightReserveAccountBalance: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ReserveId", wireType)
			}
			m.ReserveId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClearing
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
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			m.Amount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClearing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Amount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipClearing(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthClearing
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
func (m *ClearingAccount) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowClearing
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
			return fmt.Errorf("proto: ClearingAccount: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ClearingAccount: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TwilightAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClearing
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
				return ErrInvalidLengthClearing
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthClearing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.TwilightAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BtcDepositAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClearing
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
				return ErrInvalidLengthClearing
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthClearing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BtcDepositAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field BtcDepositAddressIdentifier", wireType)
			}
			m.BtcDepositAddressIdentifier = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClearing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.BtcDepositAddressIdentifier |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BtcWithdrawAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClearing
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
				return ErrInvalidLengthClearing
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthClearing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BtcWithdrawAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field BtcWithdrawAddressIdentifier", wireType)
			}
			m.BtcWithdrawAddressIdentifier = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClearing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.BtcWithdrawAddressIdentifier |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ReserveAccountBalances", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClearing
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
				return ErrInvalidLengthClearing
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthClearing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ReserveAccountBalances = append(m.ReserveAccountBalances, &IndividualTwilightReserveAccountBalance{})
			if err := m.ReserveAccountBalances[len(m.ReserveAccountBalances)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipClearing(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthClearing
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
func (m *RefundTxAccountSnap) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowClearing
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
			return fmt.Errorf("proto: RefundTxAccountSnap: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: RefundTxAccountSnap: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			m.Amount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClearing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Amount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BtcDepositAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClearing
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
				return ErrInvalidLengthClearing
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthClearing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BtcDepositAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field BtcDepositAddressIdentifier", wireType)
			}
			m.BtcDepositAddressIdentifier = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClearing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.BtcDepositAddressIdentifier |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipClearing(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthClearing
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
func (m *LastRefundTxSnapshot) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowClearing
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
			return fmt.Errorf("proto: LastRefundTxSnapshot: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: LastRefundTxSnapshot: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ReserveId", wireType)
			}
			m.ReserveId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClearing
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
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field RoundId", wireType)
			}
			m.RoundId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClearing
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
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RefundAccounts", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClearing
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
				return ErrInvalidLengthClearing
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthClearing
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.RefundAccounts = append(m.RefundAccounts, &RefundTxAccountSnap{})
			if err := m.RefundAccounts[len(m.RefundAccounts)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field EndBlockerHeightTwilight", wireType)
			}
			m.EndBlockerHeightTwilight = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowClearing
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.EndBlockerHeightTwilight |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipClearing(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthClearing
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
func skipClearing(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowClearing
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
					return 0, ErrIntOverflowClearing
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
					return 0, ErrIntOverflowClearing
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
				return 0, ErrInvalidLengthClearing
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupClearing
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthClearing
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthClearing        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowClearing          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupClearing = fmt.Errorf("proto: unexpected end of group")
)
