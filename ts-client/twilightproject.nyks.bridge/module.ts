// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgRegisterBtcDepositAddress } from "./types/nyks/bridge/tx";
import { MsgBroadcastTxSweep } from "./types/nyks/bridge/tx";
import { MsgWithdrawTxSigned } from "./types/nyks/bridge/tx";
import { MsgUnsignedTxSweep } from "./types/nyks/bridge/tx";
import { MsgBroadcastTxRefund } from "./types/nyks/bridge/tx";
import { MsgSignRefund } from "./types/nyks/bridge/tx";
import { MsgConfirmBtcDeposit } from "./types/nyks/bridge/tx";
import { MsgWithdrawTxFinal } from "./types/nyks/bridge/tx";
import { MsgRegisterJudge } from "./types/nyks/bridge/tx";
import { MsgUnsignedTxRefund } from "./types/nyks/bridge/tx";
import { MsgConfirmBtcWithdraw } from "./types/nyks/bridge/tx";
import { MsgProposeSweepAddress } from "./types/nyks/bridge/tx";
import { MsgSignSweep } from "./types/nyks/bridge/tx";
import { MsgRegisterReserveAddress } from "./types/nyks/bridge/tx";
import { MsgSweepProposal } from "./types/nyks/bridge/tx";
import { MsgWithdrawBtcRequest } from "./types/nyks/bridge/tx";
import { MsgProposeRefundHash } from "./types/nyks/bridge/tx";

import { EventRegisterBtcDepositAddress as typeEventRegisterBtcDepositAddress} from "./types"
import { EventRegisterReserveAddress as typeEventRegisterReserveAddress} from "./types"
import { EventRegisterJudgeAddress as typeEventRegisterJudgeAddress} from "./types"
import { EventWithdrawBtcRequest as typeEventWithdrawBtcRequest} from "./types"
import { EventSignRefund as typeEventSignRefund} from "./types"
import { EventSignSweep as typeEventSignSweep} from "./types"
import { EventBroadcastTxSweep as typeEventBroadcastTxSweep} from "./types"
import { EventBroadcastTxRefund as typeEventBroadcastTxRefund} from "./types"
import { EventProposeRefundHash as typeEventProposeRefundHash} from "./types"
import { EventUnsignedTxSweep as typeEventUnsignedTxSweep} from "./types"
import { EventUnsignedTxRefund as typeEventUnsignedTxRefund} from "./types"
import { EventProposeSweepAddress as typeEventProposeSweepAddress} from "./types"
import { Params as typeParams} from "./types"

export { MsgRegisterBtcDepositAddress, MsgBroadcastTxSweep, MsgWithdrawTxSigned, MsgUnsignedTxSweep, MsgBroadcastTxRefund, MsgSignRefund, MsgConfirmBtcDeposit, MsgWithdrawTxFinal, MsgRegisterJudge, MsgUnsignedTxRefund, MsgConfirmBtcWithdraw, MsgProposeSweepAddress, MsgSignSweep, MsgRegisterReserveAddress, MsgSweepProposal, MsgWithdrawBtcRequest, MsgProposeRefundHash };

type sendMsgRegisterBtcDepositAddressParams = {
  value: MsgRegisterBtcDepositAddress,
  fee?: StdFee,
  memo?: string
};

type sendMsgBroadcastTxSweepParams = {
  value: MsgBroadcastTxSweep,
  fee?: StdFee,
  memo?: string
};

type sendMsgWithdrawTxSignedParams = {
  value: MsgWithdrawTxSigned,
  fee?: StdFee,
  memo?: string
};

type sendMsgUnsignedTxSweepParams = {
  value: MsgUnsignedTxSweep,
  fee?: StdFee,
  memo?: string
};

type sendMsgBroadcastTxRefundParams = {
  value: MsgBroadcastTxRefund,
  fee?: StdFee,
  memo?: string
};

type sendMsgSignRefundParams = {
  value: MsgSignRefund,
  fee?: StdFee,
  memo?: string
};

type sendMsgConfirmBtcDepositParams = {
  value: MsgConfirmBtcDeposit,
  fee?: StdFee,
  memo?: string
};

type sendMsgWithdrawTxFinalParams = {
  value: MsgWithdrawTxFinal,
  fee?: StdFee,
  memo?: string
};

type sendMsgRegisterJudgeParams = {
  value: MsgRegisterJudge,
  fee?: StdFee,
  memo?: string
};

type sendMsgUnsignedTxRefundParams = {
  value: MsgUnsignedTxRefund,
  fee?: StdFee,
  memo?: string
};

type sendMsgConfirmBtcWithdrawParams = {
  value: MsgConfirmBtcWithdraw,
  fee?: StdFee,
  memo?: string
};

type sendMsgProposeSweepAddressParams = {
  value: MsgProposeSweepAddress,
  fee?: StdFee,
  memo?: string
};

type sendMsgSignSweepParams = {
  value: MsgSignSweep,
  fee?: StdFee,
  memo?: string
};

type sendMsgRegisterReserveAddressParams = {
  value: MsgRegisterReserveAddress,
  fee?: StdFee,
  memo?: string
};

type sendMsgSweepProposalParams = {
  value: MsgSweepProposal,
  fee?: StdFee,
  memo?: string
};

type sendMsgWithdrawBtcRequestParams = {
  value: MsgWithdrawBtcRequest,
  fee?: StdFee,
  memo?: string
};

type sendMsgProposeRefundHashParams = {
  value: MsgProposeRefundHash,
  fee?: StdFee,
  memo?: string
};


type msgRegisterBtcDepositAddressParams = {
  value: MsgRegisterBtcDepositAddress,
};

type msgBroadcastTxSweepParams = {
  value: MsgBroadcastTxSweep,
};

type msgWithdrawTxSignedParams = {
  value: MsgWithdrawTxSigned,
};

type msgUnsignedTxSweepParams = {
  value: MsgUnsignedTxSweep,
};

type msgBroadcastTxRefundParams = {
  value: MsgBroadcastTxRefund,
};

type msgSignRefundParams = {
  value: MsgSignRefund,
};

type msgConfirmBtcDepositParams = {
  value: MsgConfirmBtcDeposit,
};

type msgWithdrawTxFinalParams = {
  value: MsgWithdrawTxFinal,
};

type msgRegisterJudgeParams = {
  value: MsgRegisterJudge,
};

type msgUnsignedTxRefundParams = {
  value: MsgUnsignedTxRefund,
};

type msgConfirmBtcWithdrawParams = {
  value: MsgConfirmBtcWithdraw,
};

type msgProposeSweepAddressParams = {
  value: MsgProposeSweepAddress,
};

type msgSignSweepParams = {
  value: MsgSignSweep,
};

type msgRegisterReserveAddressParams = {
  value: MsgRegisterReserveAddress,
};

type msgSweepProposalParams = {
  value: MsgSweepProposal,
};

type msgWithdrawBtcRequestParams = {
  value: MsgWithdrawBtcRequest,
};

type msgProposeRefundHashParams = {
  value: MsgProposeRefundHash,
};


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
		
		async sendMsgRegisterBtcDepositAddress({ value, fee, memo }: sendMsgRegisterBtcDepositAddressParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRegisterBtcDepositAddress: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRegisterBtcDepositAddress({ value: MsgRegisterBtcDepositAddress.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRegisterBtcDepositAddress: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgBroadcastTxSweep({ value, fee, memo }: sendMsgBroadcastTxSweepParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgBroadcastTxSweep: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgBroadcastTxSweep({ value: MsgBroadcastTxSweep.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgBroadcastTxSweep: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgWithdrawTxSigned({ value, fee, memo }: sendMsgWithdrawTxSignedParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgWithdrawTxSigned: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgWithdrawTxSigned({ value: MsgWithdrawTxSigned.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgWithdrawTxSigned: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUnsignedTxSweep({ value, fee, memo }: sendMsgUnsignedTxSweepParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUnsignedTxSweep: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUnsignedTxSweep({ value: MsgUnsignedTxSweep.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUnsignedTxSweep: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgBroadcastTxRefund({ value, fee, memo }: sendMsgBroadcastTxRefundParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgBroadcastTxRefund: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgBroadcastTxRefund({ value: MsgBroadcastTxRefund.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgBroadcastTxRefund: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSignRefund({ value, fee, memo }: sendMsgSignRefundParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSignRefund: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSignRefund({ value: MsgSignRefund.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSignRefund: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgConfirmBtcDeposit({ value, fee, memo }: sendMsgConfirmBtcDepositParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgConfirmBtcDeposit: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgConfirmBtcDeposit({ value: MsgConfirmBtcDeposit.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgConfirmBtcDeposit: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgWithdrawTxFinal({ value, fee, memo }: sendMsgWithdrawTxFinalParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgWithdrawTxFinal: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgWithdrawTxFinal({ value: MsgWithdrawTxFinal.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgWithdrawTxFinal: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRegisterJudge({ value, fee, memo }: sendMsgRegisterJudgeParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRegisterJudge: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRegisterJudge({ value: MsgRegisterJudge.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRegisterJudge: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUnsignedTxRefund({ value, fee, memo }: sendMsgUnsignedTxRefundParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUnsignedTxRefund: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUnsignedTxRefund({ value: MsgUnsignedTxRefund.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUnsignedTxRefund: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgConfirmBtcWithdraw({ value, fee, memo }: sendMsgConfirmBtcWithdrawParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgConfirmBtcWithdraw: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgConfirmBtcWithdraw({ value: MsgConfirmBtcWithdraw.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgConfirmBtcWithdraw: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgProposeSweepAddress({ value, fee, memo }: sendMsgProposeSweepAddressParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgProposeSweepAddress: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgProposeSweepAddress({ value: MsgProposeSweepAddress.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgProposeSweepAddress: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSignSweep({ value, fee, memo }: sendMsgSignSweepParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSignSweep: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSignSweep({ value: MsgSignSweep.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSignSweep: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgRegisterReserveAddress({ value, fee, memo }: sendMsgRegisterReserveAddressParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgRegisterReserveAddress: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgRegisterReserveAddress({ value: MsgRegisterReserveAddress.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgRegisterReserveAddress: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSweepProposal({ value, fee, memo }: sendMsgSweepProposalParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSweepProposal: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSweepProposal({ value: MsgSweepProposal.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSweepProposal: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgWithdrawBtcRequest({ value, fee, memo }: sendMsgWithdrawBtcRequestParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgWithdrawBtcRequest: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgWithdrawBtcRequest({ value: MsgWithdrawBtcRequest.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgWithdrawBtcRequest: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgProposeRefundHash({ value, fee, memo }: sendMsgProposeRefundHashParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgProposeRefundHash: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgProposeRefundHash({ value: MsgProposeRefundHash.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgProposeRefundHash: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgRegisterBtcDepositAddress({ value }: msgRegisterBtcDepositAddressParams): EncodeObject {
			try {
				return { typeUrl: "/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress", value: MsgRegisterBtcDepositAddress.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRegisterBtcDepositAddress: Could not create message: ' + e.message)
			}
		},
		
		msgBroadcastTxSweep({ value }: msgBroadcastTxSweepParams): EncodeObject {
			try {
				return { typeUrl: "/twilightproject.nyks.bridge.MsgBroadcastTxSweep", value: MsgBroadcastTxSweep.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgBroadcastTxSweep: Could not create message: ' + e.message)
			}
		},
		
		msgWithdrawTxSigned({ value }: msgWithdrawTxSignedParams): EncodeObject {
			try {
				return { typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawTxSigned", value: MsgWithdrawTxSigned.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgWithdrawTxSigned: Could not create message: ' + e.message)
			}
		},
		
		msgUnsignedTxSweep({ value }: msgUnsignedTxSweepParams): EncodeObject {
			try {
				return { typeUrl: "/twilightproject.nyks.bridge.MsgUnsignedTxSweep", value: MsgUnsignedTxSweep.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUnsignedTxSweep: Could not create message: ' + e.message)
			}
		},
		
		msgBroadcastTxRefund({ value }: msgBroadcastTxRefundParams): EncodeObject {
			try {
				return { typeUrl: "/twilightproject.nyks.bridge.MsgBroadcastTxRefund", value: MsgBroadcastTxRefund.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgBroadcastTxRefund: Could not create message: ' + e.message)
			}
		},
		
		msgSignRefund({ value }: msgSignRefundParams): EncodeObject {
			try {
				return { typeUrl: "/twilightproject.nyks.bridge.MsgSignRefund", value: MsgSignRefund.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSignRefund: Could not create message: ' + e.message)
			}
		},
		
		msgConfirmBtcDeposit({ value }: msgConfirmBtcDepositParams): EncodeObject {
			try {
				return { typeUrl: "/twilightproject.nyks.bridge.MsgConfirmBtcDeposit", value: MsgConfirmBtcDeposit.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgConfirmBtcDeposit: Could not create message: ' + e.message)
			}
		},
		
		msgWithdrawTxFinal({ value }: msgWithdrawTxFinalParams): EncodeObject {
			try {
				return { typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawTxFinal", value: MsgWithdrawTxFinal.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgWithdrawTxFinal: Could not create message: ' + e.message)
			}
		},
		
		msgRegisterJudge({ value }: msgRegisterJudgeParams): EncodeObject {
			try {
				return { typeUrl: "/twilightproject.nyks.bridge.MsgRegisterJudge", value: MsgRegisterJudge.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRegisterJudge: Could not create message: ' + e.message)
			}
		},
		
		msgUnsignedTxRefund({ value }: msgUnsignedTxRefundParams): EncodeObject {
			try {
				return { typeUrl: "/twilightproject.nyks.bridge.MsgUnsignedTxRefund", value: MsgUnsignedTxRefund.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUnsignedTxRefund: Could not create message: ' + e.message)
			}
		},
		
		msgConfirmBtcWithdraw({ value }: msgConfirmBtcWithdrawParams): EncodeObject {
			try {
				return { typeUrl: "/twilightproject.nyks.bridge.MsgConfirmBtcWithdraw", value: MsgConfirmBtcWithdraw.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgConfirmBtcWithdraw: Could not create message: ' + e.message)
			}
		},
		
		msgProposeSweepAddress({ value }: msgProposeSweepAddressParams): EncodeObject {
			try {
				return { typeUrl: "/twilightproject.nyks.bridge.MsgProposeSweepAddress", value: MsgProposeSweepAddress.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgProposeSweepAddress: Could not create message: ' + e.message)
			}
		},
		
		msgSignSweep({ value }: msgSignSweepParams): EncodeObject {
			try {
				return { typeUrl: "/twilightproject.nyks.bridge.MsgSignSweep", value: MsgSignSweep.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSignSweep: Could not create message: ' + e.message)
			}
		},
		
		msgRegisterReserveAddress({ value }: msgRegisterReserveAddressParams): EncodeObject {
			try {
				return { typeUrl: "/twilightproject.nyks.bridge.MsgRegisterReserveAddress", value: MsgRegisterReserveAddress.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgRegisterReserveAddress: Could not create message: ' + e.message)
			}
		},
		
		msgSweepProposal({ value }: msgSweepProposalParams): EncodeObject {
			try {
				return { typeUrl: "/twilightproject.nyks.bridge.MsgSweepProposal", value: MsgSweepProposal.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSweepProposal: Could not create message: ' + e.message)
			}
		},
		
		msgWithdrawBtcRequest({ value }: msgWithdrawBtcRequestParams): EncodeObject {
			try {
				return { typeUrl: "/twilightproject.nyks.bridge.MsgWithdrawBtcRequest", value: MsgWithdrawBtcRequest.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgWithdrawBtcRequest: Could not create message: ' + e.message)
			}
		},
		
		msgProposeRefundHash({ value }: msgProposeRefundHashParams): EncodeObject {
			try {
				return { typeUrl: "/twilightproject.nyks.bridge.MsgProposeRefundHash", value: MsgProposeRefundHash.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgProposeRefundHash: Could not create message: ' + e.message)
			}
		},
		
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
						EventRegisterBtcDepositAddress: getStructure(typeEventRegisterBtcDepositAddress.fromPartial({})),
						EventRegisterReserveAddress: getStructure(typeEventRegisterReserveAddress.fromPartial({})),
						EventRegisterJudgeAddress: getStructure(typeEventRegisterJudgeAddress.fromPartial({})),
						EventWithdrawBtcRequest: getStructure(typeEventWithdrawBtcRequest.fromPartial({})),
						EventSignRefund: getStructure(typeEventSignRefund.fromPartial({})),
						EventSignSweep: getStructure(typeEventSignSweep.fromPartial({})),
						EventBroadcastTxSweep: getStructure(typeEventBroadcastTxSweep.fromPartial({})),
						EventBroadcastTxRefund: getStructure(typeEventBroadcastTxRefund.fromPartial({})),
						EventProposeRefundHash: getStructure(typeEventProposeRefundHash.fromPartial({})),
						EventUnsignedTxSweep: getStructure(typeEventUnsignedTxSweep.fromPartial({})),
						EventUnsignedTxRefund: getStructure(typeEventUnsignedTxRefund.fromPartial({})),
						EventProposeSweepAddress: getStructure(typeEventProposeSweepAddress.fromPartial({})),
						Params: getStructure(typeParams.fromPartial({})),
						
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
			TwilightprojectNyksBridge: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;