// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";

import { IndividualTwilightReserveAccountBalance as typeIndividualTwilightReserveAccountBalance} from "./types"
import { ClearingAccount as typeClearingAccount} from "./types"
import { RefundTxAccountSnap as typeRefundTxAccountSnap} from "./types"
import { RefundTxSnapshot as typeRefundTxSnapshot} from "./types"
import { BtcDepositAddress as typeBtcDepositAddress} from "./types"
import { EventReserveWithdrawSnapshot as typeEventReserveWithdrawSnapshot} from "./types"
import { EventRefundTxSnapshot as typeEventRefundTxSnapshot} from "./types"
import { Params as typeParams} from "./types"
import { BtcReserve as typeBtcReserve} from "./types"
import { BtcWithdrawRequestInternal as typeBtcWithdrawRequestInternal} from "./types"
import { ReserveWithdrawPool as typeReserveWithdrawPool} from "./types"
import { WithdrawRequestSnap as typeWithdrawRequestSnap} from "./types"
import { ReserveWithdrawSnapshot as typeReserveWithdrawSnapshot} from "./types"

export {  };



export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						IndividualTwilightReserveAccountBalance: getStructure(typeIndividualTwilightReserveAccountBalance.fromPartial({})),
						ClearingAccount: getStructure(typeClearingAccount.fromPartial({})),
						RefundTxAccountSnap: getStructure(typeRefundTxAccountSnap.fromPartial({})),
						RefundTxSnapshot: getStructure(typeRefundTxSnapshot.fromPartial({})),
						BtcDepositAddress: getStructure(typeBtcDepositAddress.fromPartial({})),
						EventReserveWithdrawSnapshot: getStructure(typeEventReserveWithdrawSnapshot.fromPartial({})),
						EventRefundTxSnapshot: getStructure(typeEventRefundTxSnapshot.fromPartial({})),
						Params: getStructure(typeParams.fromPartial({})),
						BtcReserve: getStructure(typeBtcReserve.fromPartial({})),
						BtcWithdrawRequestInternal: getStructure(typeBtcWithdrawRequestInternal.fromPartial({})),
						ReserveWithdrawPool: getStructure(typeReserveWithdrawPool.fromPartial({})),
						WithdrawRequestSnap: getStructure(typeWithdrawRequestSnap.fromPartial({})),
						ReserveWithdrawSnapshot: getStructure(typeReserveWithdrawSnapshot.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			TwilightprojectNyksVolt: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;