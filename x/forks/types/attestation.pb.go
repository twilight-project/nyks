// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: forks/attestation.proto

package types

import (
	fmt "fmt"
	types "github.com/cosmos/cosmos-sdk/codec/types"
	_ "github.com/gogo/protobuf/gogoproto"
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

type ProposalType int32

const (
	PROPOSAL_TYPE_BTC_CHAINTIP ProposalType = 0
	PROPOSAL_TYPE_BTC_DEPOSIT  ProposalType = 1
)

var ProposalType_name = map[int32]string{
	0: "PROPOSAL_TYPE_BTC_CHAINTIP",
	1: "PROPOSAL_TYPE_BTC_DEPOSIT",
}

var ProposalType_value = map[string]int32{
	"PROPOSAL_TYPE_BTC_CHAINTIP": 0,
	"PROPOSAL_TYPE_BTC_DEPOSIT":  1,
}

func (x ProposalType) String() string {
	return proto.EnumName(ProposalType_name, int32(x))
}

func (ProposalType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_b58c888ec8911d90, []int{0}
}

// Attestation is an aggregate of `proposals` that eventually becomes `observed` by
// all orchestrators
// OBSERVED:
// Observed indicates that >67% of validators have attested to the event,
// and that the event should be executed by the state machine
//
// The actual content of the proposals is passed in with the transaction making the proposal
// and then passed through the call stack alongside the attestation while it is processed
// the key in which the attestation is stored is keyed on the exact details of the proposal
// but there is no reason to store those exact details becuause the next message sender
// will kindly provide you with them.
type Attestation struct {
	Observed bool       `protobuf:"varint,1,opt,name=observed,proto3" json:"observed,omitempty"`
	Votes    []string   `protobuf:"bytes,2,rep,name=votes,proto3" json:"votes,omitempty"`
	Height   uint64     `protobuf:"varint,3,opt,name=height,proto3" json:"height,omitempty"`
	Proposal *types.Any `protobuf:"bytes,4,opt,name=proposal,proto3" json:"proposal,omitempty"`
}

func (m *Attestation) Reset()         { *m = Attestation{} }
func (m *Attestation) String() string { return proto.CompactTextString(m) }
func (*Attestation) ProtoMessage()    {}
func (*Attestation) Descriptor() ([]byte, []int) {
	return fileDescriptor_b58c888ec8911d90, []int{0}
}
func (m *Attestation) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Attestation) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Attestation.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Attestation) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Attestation.Merge(m, src)
}
func (m *Attestation) XXX_Size() int {
	return m.Size()
}
func (m *Attestation) XXX_DiscardUnknown() {
	xxx_messageInfo_Attestation.DiscardUnknown(m)
}

var xxx_messageInfo_Attestation proto.InternalMessageInfo

func (m *Attestation) GetObserved() bool {
	if m != nil {
		return m.Observed
	}
	return false
}

func (m *Attestation) GetVotes() []string {
	if m != nil {
		return m.Votes
	}
	return nil
}

func (m *Attestation) GetHeight() uint64 {
	if m != nil {
		return m.Height
	}
	return 0
}

func (m *Attestation) GetProposal() *types.Any {
	if m != nil {
		return m.Proposal
	}
	return nil
}

type EventObservation struct {
	AttestationType string `protobuf:"bytes,1,opt,name=attestation_type,json=attestationType,proto3" json:"attestation_type,omitempty"`
	AttestationId   string `protobuf:"bytes,2,opt,name=attestation_id,json=attestationId,proto3" json:"attestation_id,omitempty"`
}

func (m *EventObservation) Reset()         { *m = EventObservation{} }
func (m *EventObservation) String() string { return proto.CompactTextString(m) }
func (*EventObservation) ProtoMessage()    {}
func (*EventObservation) Descriptor() ([]byte, []int) {
	return fileDescriptor_b58c888ec8911d90, []int{1}
}
func (m *EventObservation) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *EventObservation) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_EventObservation.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *EventObservation) XXX_Merge(src proto.Message) {
	xxx_messageInfo_EventObservation.Merge(m, src)
}
func (m *EventObservation) XXX_Size() int {
	return m.Size()
}
func (m *EventObservation) XXX_DiscardUnknown() {
	xxx_messageInfo_EventObservation.DiscardUnknown(m)
}

var xxx_messageInfo_EventObservation proto.InternalMessageInfo

func (m *EventObservation) GetAttestationType() string {
	if m != nil {
		return m.AttestationType
	}
	return ""
}

func (m *EventObservation) GetAttestationId() string {
	if m != nil {
		return m.AttestationId
	}
	return ""
}

func init() {
	proto.RegisterEnum("twilightproject.nyks.forks.ProposalType", ProposalType_name, ProposalType_value)
	proto.RegisterType((*Attestation)(nil), "twilightproject.nyks.forks.Attestation")
	proto.RegisterType((*EventObservation)(nil), "twilightproject.nyks.forks.EventObservation")
}

func init() { proto.RegisterFile("forks/attestation.proto", fileDescriptor_b58c888ec8911d90) }

var fileDescriptor_b58c888ec8911d90 = []byte{
	// 378 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x64, 0x91, 0xcf, 0xaa, 0xda, 0x40,
	0x14, 0xc6, 0x33, 0x6a, 0x45, 0xc7, 0xfe, 0x09, 0x41, 0xda, 0x18, 0xe8, 0x10, 0x84, 0x42, 0x5a,
	0xe8, 0x4c, 0x69, 0x9f, 0x20, 0x5a, 0xc1, 0x40, 0x69, 0x42, 0xcc, 0xa6, 0xdd, 0x84, 0xc4, 0x8c,
	0x31, 0xd5, 0x66, 0x42, 0x32, 0xda, 0xe6, 0x0d, 0xda, 0x5d, 0xdf, 0xa1, 0x2f, 0x73, 0x97, 0x2e,
	0xef, 0xf2, 0xa2, 0x2f, 0x72, 0xc9, 0x44, 0xbd, 0x81, 0xbb, 0x9b, 0xef, 0x9c, 0xef, 0x70, 0x7e,
	0x73, 0x3e, 0xf8, 0x6a, 0xc5, 0xf2, 0x4d, 0x41, 0x02, 0xce, 0x69, 0xc1, 0x03, 0x9e, 0xb0, 0x14,
	0x67, 0x39, 0xe3, 0x4c, 0xd1, 0xf8, 0xaf, 0x64, 0x9b, 0xc4, 0x6b, 0x9e, 0xe5, 0xec, 0x07, 0x5d,
	0x72, 0x9c, 0x96, 0x9b, 0x02, 0x0b, 0xb7, 0x36, 0x8c, 0x59, 0xcc, 0x84, 0x8d, 0x54, 0xaf, 0x7a,
	0x42, 0x1b, 0xc5, 0x8c, 0xc5, 0x5b, 0x4a, 0x84, 0x0a, 0x77, 0x2b, 0x12, 0xa4, 0x65, 0xdd, 0x1a,
	0xff, 0x05, 0x70, 0x60, 0x3e, 0xac, 0x50, 0x34, 0xd8, 0x63, 0x61, 0x41, 0xf3, 0x3d, 0x8d, 0x54,
	0xa0, 0x03, 0xa3, 0xe7, 0x5e, 0xb5, 0x32, 0x84, 0x4f, 0xf6, 0x8c, 0xd3, 0x42, 0x6d, 0xe9, 0x6d,
	0xa3, 0xef, 0xd6, 0x42, 0x79, 0x09, 0xbb, 0x6b, 0x5a, 0xe1, 0xa8, 0x6d, 0x1d, 0x18, 0x1d, 0xf7,
	0xac, 0x94, 0x0f, 0xb0, 0x97, 0xe5, 0x2c, 0x63, 0x45, 0xb0, 0x55, 0x3b, 0x3a, 0x30, 0x06, 0x1f,
	0x87, 0xb8, 0xe6, 0xc0, 0x17, 0x0e, 0x6c, 0xa6, 0xa5, 0x7b, 0x75, 0x8d, 0x23, 0x28, 0xcf, 0xf6,
	0x34, 0xe5, 0xb6, 0x58, 0x58, 0xf3, 0xbc, 0x85, 0x72, 0xe3, 0x02, 0x3e, 0x2f, 0x33, 0x2a, 0xb8,
	0xfa, 0xee, 0x8b, 0x46, 0xdd, 0x2b, 0x33, 0xaa, 0xbc, 0x81, 0xcf, 0x9b, 0xd6, 0x24, 0x52, 0x5b,
	0xc2, 0xf8, 0xac, 0x51, 0xb5, 0xa2, 0x77, 0x0b, 0xf8, 0xd4, 0x39, 0x6f, 0x14, 0x63, 0x08, 0x6a,
	0x8e, 0x6b, 0x3b, 0xf6, 0xc2, 0xfc, 0xe2, 0x7b, 0xdf, 0x9c, 0x99, 0x3f, 0xf1, 0xa6, 0xfe, 0x74,
	0x6e, 0x5a, 0x5f, 0x3d, 0xcb, 0x91, 0x25, 0xe5, 0x35, 0x1c, 0x3d, 0xee, 0x7f, 0x9e, 0x39, 0xf6,
	0xc2, 0xf2, 0x64, 0xa0, 0x75, 0xfe, 0xfc, 0x47, 0xd2, 0x64, 0x7e, 0x73, 0x44, 0xe0, 0x70, 0x44,
	0xe0, 0xee, 0x88, 0xc0, 0xbf, 0x13, 0x92, 0x0e, 0x27, 0x24, 0xdd, 0x9e, 0x90, 0xf4, 0x1d, 0xc7,
	0x09, 0x5f, 0xef, 0x42, 0xbc, 0x64, 0x3f, 0xc9, 0x25, 0xb8, 0xf7, 0xe7, 0xe4, 0x48, 0x95, 0x1c,
	0xf9, 0x4d, 0xea, 0xa4, 0xab, 0xbf, 0x15, 0x61, 0x57, 0x1c, 0xe7, 0xd3, 0x7d, 0x00, 0x00, 0x00,
	0xff, 0xff, 0x59, 0x70, 0xea, 0xa6, 0xff, 0x01, 0x00, 0x00,
}

func (m *Attestation) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Attestation) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Attestation) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Proposal != nil {
		{
			size, err := m.Proposal.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintAttestation(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x22
	}
	if m.Height != 0 {
		i = encodeVarintAttestation(dAtA, i, uint64(m.Height))
		i--
		dAtA[i] = 0x18
	}
	if len(m.Votes) > 0 {
		for iNdEx := len(m.Votes) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.Votes[iNdEx])
			copy(dAtA[i:], m.Votes[iNdEx])
			i = encodeVarintAttestation(dAtA, i, uint64(len(m.Votes[iNdEx])))
			i--
			dAtA[i] = 0x12
		}
	}
	if m.Observed {
		i--
		if m.Observed {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *EventObservation) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *EventObservation) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *EventObservation) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.AttestationId) > 0 {
		i -= len(m.AttestationId)
		copy(dAtA[i:], m.AttestationId)
		i = encodeVarintAttestation(dAtA, i, uint64(len(m.AttestationId)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.AttestationType) > 0 {
		i -= len(m.AttestationType)
		copy(dAtA[i:], m.AttestationType)
		i = encodeVarintAttestation(dAtA, i, uint64(len(m.AttestationType)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintAttestation(dAtA []byte, offset int, v uint64) int {
	offset -= sovAttestation(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Attestation) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Observed {
		n += 2
	}
	if len(m.Votes) > 0 {
		for _, s := range m.Votes {
			l = len(s)
			n += 1 + l + sovAttestation(uint64(l))
		}
	}
	if m.Height != 0 {
		n += 1 + sovAttestation(uint64(m.Height))
	}
	if m.Proposal != nil {
		l = m.Proposal.Size()
		n += 1 + l + sovAttestation(uint64(l))
	}
	return n
}

func (m *EventObservation) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.AttestationType)
	if l > 0 {
		n += 1 + l + sovAttestation(uint64(l))
	}
	l = len(m.AttestationId)
	if l > 0 {
		n += 1 + l + sovAttestation(uint64(l))
	}
	return n
}

func sovAttestation(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozAttestation(x uint64) (n int) {
	return sovAttestation(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Attestation) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAttestation
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
			return fmt.Errorf("proto: Attestation: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Attestation: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Observed", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAttestation
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
			m.Observed = bool(v != 0)
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Votes", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAttestation
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
				return ErrInvalidLengthAttestation
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAttestation
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Votes = append(m.Votes, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Height", wireType)
			}
			m.Height = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAttestation
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
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Proposal", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAttestation
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
				return ErrInvalidLengthAttestation
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthAttestation
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Proposal == nil {
				m.Proposal = &types.Any{}
			}
			if err := m.Proposal.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAttestation(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthAttestation
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
func (m *EventObservation) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAttestation
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
			return fmt.Errorf("proto: EventObservation: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: EventObservation: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AttestationType", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAttestation
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
				return ErrInvalidLengthAttestation
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAttestation
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AttestationType = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AttestationId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAttestation
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
				return ErrInvalidLengthAttestation
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAttestation
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AttestationId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAttestation(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthAttestation
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
func skipAttestation(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowAttestation
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
					return 0, ErrIntOverflowAttestation
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
					return 0, ErrIntOverflowAttestation
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
				return 0, ErrInvalidLengthAttestation
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupAttestation
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthAttestation
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthAttestation        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowAttestation          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupAttestation = fmt.Errorf("proto: unexpected end of group")
)
