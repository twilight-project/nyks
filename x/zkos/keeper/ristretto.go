package keeper

import (
	"encoding/binary"
	"encoding/hex"

	r255 "github.com/gtank/ristretto255"
)

// PublicKey struct (g^r, g^r^sk)
type PublicKey struct {
	Gr   *r255.Element //gi
	Grsk *r255.Element //hi
}

// Commitment struct
type Commitment struct {
	C *r255.Element
	D *r255.Element
}

// checks an error if not nil, it breaks the execution
func Check(e error) {
	if e != nil {
		panic(e)
	}
}

// DecodePoints returns the underlying Ristretto Points reconstructed from the concatenated byte array
func DecodePoints(bytes []byte) (*r255.Element, *r255.Element) {
	xBytes := make([]byte, 32)
	copy(xBytes[:], bytes[0:32])

	yBytes := make([]byte, 32)
	copy(yBytes[:], bytes[32:64])

	x := r255.NewElement()
	x.Decode(xBytes[:])

	y := r255.NewElement()
	y.Decode(yBytes[:])

	return x, y
}

// DecodeAccount returns the Pk and Commitment reconstructed from hex
func DecodeAccount(accStr string) (*PublicKey, *Commitment, error) {
	accountBytes, err := hex.DecodeString(accStr)
	if err != nil {
		return nil, nil, err
	}

	//fmt.Printf("Byte slice: %v\n", accountBytes)

	// Extract PK range of bytes from index 1 to index 65 (exclusive)
	extractedPkBytes := accountBytes[1:65]
	//fmt.Println("Extracted PK Bytes:", extractedPkBytes)

	//reconstruct g and h points of Public Key
	g, h := DecodePoints(extractedPkBytes)

	// Extract Commitment range of bytes from index 69 till end
	extractedCommBytes := accountBytes[69:]
	//fmt.Println("Extracted Comm Bytes:", extractedCommBytes)

	//reconstruct c and d points of El-Gamal Commitment
	c, d := DecodePoints(extractedCommBytes)

	return &PublicKey{Gr: g, Grsk: h}, &Commitment{C: c, D: d}, nil
}

// ScalarFromBytes returns a ristretto scalar from the input bytes
// performs input mod l where l is the group order
func ScalarFromBytes(b [32]byte) (*r255.Scalar, error) {
	s := r255.NewScalar()
	err := s.Decode(b[:])
	if err != nil {
		return nil, err
	}

	return s, nil
}

//uintToScalar converts a uint64 value to a canonical Ristretto Scalar
func uintToScalar(bl uint64) (*r255.Scalar, error) {

	//32 byte slice to hold little endian representation
	blslice := make([]byte, 32)
	binary.LittleEndian.PutUint64(blslice, bl)

	blArray := [32]byte{}
	copy(blArray[:], blslice[:32])
	//fmt.Print("Binary conversion is", blArray)

	intScalar, err := ScalarFromBytes(blArray)
	if err != nil {
		return nil, err
	}
	//fmt.Println(intScalar)

	return intScalar, nil
}

// GenerateCommitment creates commitment over balance
// c = k*g (where k is a random scalar)
// d = vG + kh (where v is balance, G is base point, k is random scalar and h is grsk generated in pk)
func GenerateCommitment(p *PublicKey, rscalar *r255.Scalar, intScalar *r255.Scalar) *Commitment {
	// lets make c
	e := r255.NewElement()
	c := e.ScalarMult(rscalar, p.Gr)

	// lets make d
	b := r255.NewElement()
	gv := b.ScalarBaseMult(intScalar)

	k := r255.NewElement()
	kh := k.ScalarMult(rscalar, p.Grsk)

	n := r255.NewElement()
	d := n.Add(gv, kh)

	return &Commitment{C: c, D: d}
}

// CompareCommitment compares two commitments
func CompareCommitment(u *Commitment, v *Commitment) bool {
	if u.C.Equal(v.C) == 1 && u.D.Equal(v.D) == 1 {
		return true
	}
	return false
}

// RevealCommitment tests if the commitment received is created with the same parameters
func (k msgServer) RevealCommitment(accStr string, scalarStr string, value uint64) (bool, error) {
	// reconstruct Account
	pk, comm, err := DecodeAccount(accStr)
	if err != nil {
		return false, err
	}
	// reconstruct Scalar
	scalarBytes, err := hex.DecodeString(scalarStr)
	if err != nil {
		return false, err
	}
	scalarSlice := [32]byte{}
	copy(scalarSlice[:], scalarBytes[:32])
	scalarComm, err := ScalarFromBytes(scalarSlice)
	if err != nil {
		return false, err
	}

	//convert value to scalar
	uintScalar, err := uintToScalar(value)
	if err != nil {
		return false, err
	}

	//recreate commitment using reconstructed values
	newCommitment := GenerateCommitment(pk, scalarComm, uintScalar)

	//verify commitment
	checkComm := CompareCommitment(comm, newCommitment)
	if checkComm == true {
		return true, nil
	} else {
		return false, nil
	}
}
