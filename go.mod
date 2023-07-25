module github.com/twilight-project/nyks

go 1.16

require (
	github.com/btcsuite/btcd v0.22.1
	github.com/cosmos/cosmos-sdk v0.45.3
	github.com/cosmos/ibc-go/v2 v2.0.3
	github.com/gogo/protobuf v1.3.3
	github.com/golang/protobuf v1.5.3
	github.com/gorilla/mux v1.8.0
	github.com/grpc-ecosystem/grpc-gateway v1.16.0
	github.com/gtank/ristretto255 v0.1.2
	github.com/ignite-hq/cli v0.20.3
	github.com/kr/pretty v0.3.1 // indirect
	github.com/mattn/go-colorable v0.1.13 // indirect
	github.com/mattn/go-isatty v0.0.18 // indirect
	github.com/rs/zerolog v1.29.1 // indirect
	github.com/spf13/cast v1.4.1
	github.com/spf13/cobra v1.4.0
	github.com/stretchr/testify v1.8.2
	github.com/tendermint/spn v0.1.1-0.20220407154406-5cfd1bf28150
	github.com/tendermint/tendermint v0.34.19
	github.com/tendermint/tm-db v0.6.6
	golang.org/x/net v0.12.0 // indirect
	google.golang.org/genproto/googleapis/api v0.0.0-20230724170836-66ad5b6ff146
	google.golang.org/genproto/googleapis/rpc v0.0.0-20230724170836-66ad5b6ff146 // indirect
	google.golang.org/grpc v1.56.2
	gopkg.in/yaml.v2 v2.4.0
	gotest.tools/v3 v3.4.0 // indirect
)

replace (
	github.com/cosmos/cosmos-sdk => ../cosmos-sdk
	github.com/gogo/protobuf => github.com/regen-network/protobuf v1.3.3-alpha.regen.1
	github.com/keybase/go-keychain => github.com/99designs/go-keychain v0.0.0-20191008050251-8e49817e8af4
	google.golang.org/grpc => google.golang.org/grpc v1.33.2
)
