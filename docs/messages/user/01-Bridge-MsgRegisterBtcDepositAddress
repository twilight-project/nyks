# Bridge: MsgRegisterBtcDepositAddress

A user can register her BTC address on the chain using, this message comes with a satoshi test amount that gets passed on first `ConfirmBtcDeposit` attestation for the give btc address:

```bash
message MsgRegisterBtcDepositAddress {
  string btcDepositAddress  = 1;
  uint64 btcSatoshiTestAmount  = 2;
  uint64 twilightStakingAmount  = 3; 
  string twilightAddress  = 4;
}

message MsgRegisterBtcDepositAddressResponse {
}
```

Any operator in the system such as a “Judge” or an oracle can query registered addresses using:

```bash
message QueryRegisteredBtcDepositAddressesRequest {
}

message QueryRegisteredBtcDepositAddressesResponse {
  repeated MsgRegisterBtcDepositAddress addresses = 1 [(gogoproto.nullable) = false];
}
```

### CLI Testing

To test the message and query, you need to download clone latest nyks repo and the switch to forks branch.

Run the chain using:

```bash
ignite chain serve
```

Then in a separate terminal window paste this command to register an address:

```bash
nyksd tx bridge register-deposit-address 14uEN8abvKA1zgYCpv8MWCUwAMLGBqdZGM 1 2 --from bob --chain-id nyks --keyring-backend test
```

To query, as this message now contains a `depositTestAmount`, you need to send a `ConfirmBtcDeposit` message first:

```protobuf
nyksd tx nyks set-delegate-addresses $(nyksd keys show alice --bech val -a --keyring-backend test) $(nyksd keys show alice -a --keyring-backend test) 02b4632d08485ff1df2db55b9dafd23347d1c47a457072a1e87be26896549a8737 --from alice --chain-id nyks
```

```protobuf
nyksd tx bridge register-judge $(nyksd keys show alice -a --keyring-backend test) $(nyksd keys show alice --bech val -a --keyring-backend test) --from alice --chain-id nyks --keyring-backend test
```

```protobuf
nyksd tx bridge register-reserve-address 14uEN8abvKA1zgYCpv8MWCUwAMLGBqdZGM 14uEN8abvKA1zgYCpv8MWCUwAMLGBqdZGM --from alice --chain-id nyks --keyring-backend test
```

```protobuf
nyksd tx bridge msg-confirm-btc-deposit 14uEN8abvKA1zgYCpv8MWCUwAMLGBqdZGM 1 789656 000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f $(nyksd keys show bob -a) 14uEN8abvKA1zgYCpv8MWCUwAMLGBqdZGM --from alice --chain-id nyks --keyring-backend test
```

Then to query registered users, use following command:

```bash
nyksd query bridge registered-btc-deposit-addresses
```

You can also query by a user’s BTC deposit address:

```protobuf
nyksd query bridge registered-btc-deposit-address 14uEN8abvKA1zgYCpv8MWCUwAMLGBqdZGM
```

You can also query a registered address by a user’s twilight address:

```protobuf
nyksd query bridge registered-btc-deposit-address-by-twilight-address $(nyksd keys show bob -a)
```

### RPC Testing

Go to Blockchain API on following address and try to find corresponding RPC end-points:

```bash
http://0.0.0.0:1317
```

Happy playing! 🤠