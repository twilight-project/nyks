module github.com/twilight-project/nyks

go 1.16

require (
	github.com/Microsoft/go-winio v0.6.0 // indirect
	github.com/adlio/schema v1.3.3 // indirect
	github.com/armon/go-metrics v0.3.10
	github.com/btcsuite/btcd v0.22.1
	github.com/btcsuite/btcd/chaincfg/chainhash v1.0.1
	github.com/containerd/containerd v1.6.8 // indirect
	github.com/cosmos/cosmos-sdk v0.45.3
	github.com/cosmos/ibc-go/v2 v2.0.3
	github.com/danieljoos/wincred v1.1.0 // indirect
	github.com/dgraph-io/badger/v2 v2.2007.4 // indirect
	github.com/docker/docker v20.10.19+incompatible // indirect
	github.com/docker/go-units v0.5.0 // indirect
	github.com/facebookgo/ensure v0.0.0-20200202191622-63f1cf65ac4c // indirect
	github.com/facebookgo/subset v0.0.0-20200203212716-c811ad88dec4 // indirect
	github.com/felixge/httpsnoop v1.0.2 // indirect
	github.com/go-git/go-git/v5 v5.5.2 // indirect
	github.com/go-kit/log v0.2.1 // indirect
	github.com/gogo/protobuf v1.3.3
	github.com/golang/protobuf v1.5.4
	github.com/google/btree v1.1.2 // indirect
	github.com/gookit/color v1.5.1 // indirect
	github.com/gorilla/mux v1.8.0
	github.com/grpc-ecosystem/grpc-gateway v1.16.0
	github.com/gtank/ristretto255 v0.1.2
	github.com/ignite-hq/cli v0.20.3
	github.com/jhump/protoreflect v1.12.1-0.20220721211354-060cc04fc18b // indirect
	github.com/klauspost/compress v1.15.11 // indirect
	github.com/kr/pretty v0.3.1 // indirect
	github.com/lib/pq v1.10.7 // indirect
	github.com/libp2p/go-buffer-pool v0.1.0 // indirect
	github.com/matryer/is v1.4.0 // indirect
	github.com/mattn/go-colorable v0.1.13 // indirect
	github.com/mattn/go-isatty v0.0.18 // indirect
	github.com/mimoo/StrobeGo v0.0.0-20210601165009-122bf33a46e0 // indirect
	github.com/onsi/gomega v1.20.0 // indirect
	github.com/opencontainers/image-spec v1.1.0-rc2 // indirect
	github.com/prometheus/client_golang v1.14.0
	github.com/rcrowley/go-metrics v0.0.0-20201227073835-cf1acfcdf475 // indirect
	github.com/rs/zerolog v1.29.1 // indirect
	github.com/sasha-s/go-deadlock v0.3.1 // indirect
	github.com/sirupsen/logrus v1.9.0 // indirect
	github.com/spf13/cast v1.5.0
	github.com/spf13/cobra v1.6.1
	github.com/spf13/viper v1.13.0 // indirect
	github.com/stretchr/testify v1.8.4
	github.com/syndtr/goleveldb v1.0.1-0.20210819022825-2ae1ddf74ef7 // indirect
	github.com/tendermint/spn v0.1.1-0.20220407154406-5cfd1bf28150
	github.com/tendermint/tendermint v0.34.19
	github.com/tendermint/tm-db v0.6.6
	google.golang.org/genproto v0.0.0-20240116215550-a9fa1716bcac // indirect
	google.golang.org/genproto/googleapis/api v0.0.0-20240723171418-e6d459c13d2a
	google.golang.org/genproto/googleapis/rpc v0.0.0-20240723171418-e6d459c13d2a // indirect
	google.golang.org/grpc v1.64.1
	gopkg.in/yaml.v2 v2.4.0
	gotest.tools/v3 v3.4.0 // indirect
)

replace (
	github.com/btcsuite/btcd => github.com/btcsuite/btcd v0.22.1
	github.com/cosmos/cosmos-sdk => ../cosmos-sdk
	github.com/gogo/protobuf => github.com/regen-network/protobuf v1.3.3-alpha.regen.1
	github.com/keybase/go-keychain => github.com/99designs/go-keychain v0.0.0-20191008050251-8e49817e8af4
	google.golang.org/grpc => google.golang.org/grpc v1.33.2
)
