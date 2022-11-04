# Nyks
 
Due to asynchronous nature of Bitcoin, natural forking is commonplace though not as common as other POWs with faster block time. To follow the canonical chain with highest cumulative work, network participants follow the majority opinion of honest full nodes, not the miner, of they think bitcoin is. To be certain if a transaction is valid or subject to reorg, some organisations go extra mile, run multiple bitcoin nodes, check block validation rules, even check inflation rules to be really really sure etc.

Validity gadget is a synchronous predictive validity layer on top of Nakamoto Consensus, where honest committee members dynamically vote on their view of the chain and propose a valid view of the chain tips, based on some validity heuristics. 

Nyks is built over Tendermint BFT, where every validator runs a [forkscanner](https://github.com/twilight-project/forkscanner) and [forkoracle](https://github.com/twilight-project/forkoracle-go) instance. 

# Local Setup
To run a local setup, first clone and compile forkscanner and forkoracle and run them, respectively!

* Nyks is made using [ignite cli](https://docs.ignite.com/guide/install), install ignite as per instructions. 
* After cloning you can simply run `ignite chain serve` or for the release binary you can use `ignite chain build --release`

# Participating in the testnet
You will need nyks tokens to stake, the easiest way is to get in touch using our discord as faucet is being setup at the moment!
