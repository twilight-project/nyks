import { Client, registry, MissingWalletError } from 'twilight-project-nyks-client-ts'

import { EventRegisterBtcDepositAddress } from "twilight-project-nyks-client-ts/twilightproject.nyks.bridge/types"
import { EventRegisterReserveScript } from "twilight-project-nyks-client-ts/twilightproject.nyks.bridge/types"
import { EventRegisterJudgeAddress } from "twilight-project-nyks-client-ts/twilightproject.nyks.bridge/types"
import { Params } from "twilight-project-nyks-client-ts/twilightproject.nyks.bridge/types"


export { EventRegisterBtcDepositAddress, EventRegisterReserveScript, EventRegisterJudgeAddress, Params };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				Params: {},
				RegisteredBtcDepositAddresses: {},
				RegisteredReserveAddresses: {},
				RegisteredBtcDepositAddress: {},
				RegisteredBtcDepositAddressByTwilightAddress: {},
				RegisteredJudgeAddressByValidatorAddress: {},
				RegisteredJudges: {},
				
				_Structure: {
						EventRegisterBtcDepositAddress: getStructure(EventRegisterBtcDepositAddress.fromPartial({})),
						EventRegisterReserveScript: getStructure(EventRegisterReserveScript.fromPartial({})),
						EventRegisterJudgeAddress: getStructure(EventRegisterJudgeAddress.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getRegisteredBtcDepositAddresses: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RegisteredBtcDepositAddresses[JSON.stringify(params)] ?? {}
		},
				getRegisteredReserveAddresses: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RegisteredReserveAddresses[JSON.stringify(params)] ?? {}
		},
				getRegisteredBtcDepositAddress: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RegisteredBtcDepositAddress[JSON.stringify(params)] ?? {}
		},
				getRegisteredBtcDepositAddressByTwilightAddress: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RegisteredBtcDepositAddressByTwilightAddress[JSON.stringify(params)] ?? {}
		},
				getRegisteredJudgeAddressByValidatorAddress: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RegisteredJudgeAddressByValidatorAddress[JSON.stringify(params)] ?? {}
		},
				getRegisteredJudges: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RegisteredJudges[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: twilightproject.nyks.bridge initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryRegisteredBtcDepositAddresses({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryRegisteredBtcDepositAddresses()).data
				
					
				commit('QUERY', { query: 'RegisteredBtcDepositAddresses', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRegisteredBtcDepositAddresses', payload: { options: { all }, params: {...key},query }})
				return getters['getRegisteredBtcDepositAddresses']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryRegisteredBtcDepositAddresses API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryRegisteredReserveAddresses({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryRegisteredReserveAddresses()).data
				
					
				commit('QUERY', { query: 'RegisteredReserveAddresses', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRegisteredReserveAddresses', payload: { options: { all }, params: {...key},query }})
				return getters['getRegisteredReserveAddresses']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryRegisteredReserveAddresses API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryRegisteredBtcDepositAddress({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryRegisteredBtcDepositAddress( key.depositAddress)).data
				
					
				commit('QUERY', { query: 'RegisteredBtcDepositAddress', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRegisteredBtcDepositAddress', payload: { options: { all }, params: {...key},query }})
				return getters['getRegisteredBtcDepositAddress']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryRegisteredBtcDepositAddress API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryRegisteredBtcDepositAddressByTwilightAddress({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryRegisteredBtcDepositAddressByTwilightAddress( key.twilightDepositAddress)).data
				
					
				commit('QUERY', { query: 'RegisteredBtcDepositAddressByTwilightAddress', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRegisteredBtcDepositAddressByTwilightAddress', payload: { options: { all }, params: {...key},query }})
				return getters['getRegisteredBtcDepositAddressByTwilightAddress']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryRegisteredBtcDepositAddressByTwilightAddress API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryRegisteredJudgeAddressByValidatorAddress({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryRegisteredJudgeAddressByValidatorAddress( key.validatorAddress)).data
				
					
				commit('QUERY', { query: 'RegisteredJudgeAddressByValidatorAddress', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRegisteredJudgeAddressByValidatorAddress', payload: { options: { all }, params: {...key},query }})
				return getters['getRegisteredJudgeAddressByValidatorAddress']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryRegisteredJudgeAddressByValidatorAddress API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryRegisteredJudges({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryRegisteredJudges()).data
				
					
				commit('QUERY', { query: 'RegisteredJudges', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRegisteredJudges', payload: { options: { all }, params: {...key},query }})
				return getters['getRegisteredJudges']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryRegisteredJudges API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgConfirmBtcWithdraw({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgConfirmBtcWithdraw({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgConfirmBtcWithdraw:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgConfirmBtcWithdraw:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSweepProposal({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgSweepProposal({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSweepProposal:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSweepProposal:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRegisterJudge({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgRegisterJudge({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRegisterJudge:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRegisterJudge:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgWithdrawTxFinal({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgWithdrawTxFinal({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawTxFinal:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgWithdrawTxFinal:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgWithdrawRequest({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgWithdrawRequest({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawRequest:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgWithdrawRequest:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRegisterBtcDepositAddress({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgRegisterBtcDepositAddress({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRegisterBtcDepositAddress:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRegisterBtcDepositAddress:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgConfirmBtcDeposit({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgConfirmBtcDeposit({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgConfirmBtcDeposit:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgConfirmBtcDeposit:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgWithdrawTxSigned({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgWithdrawTxSigned({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawTxSigned:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgWithdrawTxSigned:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRegisterReserveAddress({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgRegisterReserveAddress({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRegisterReserveAddress:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgRegisterReserveAddress:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgConfirmBtcWithdraw({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgConfirmBtcWithdraw({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgConfirmBtcWithdraw:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgConfirmBtcWithdraw:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSweepProposal({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgSweepProposal({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSweepProposal:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSweepProposal:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRegisterJudge({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgRegisterJudge({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRegisterJudge:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRegisterJudge:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgWithdrawTxFinal({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgWithdrawTxFinal({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawTxFinal:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgWithdrawTxFinal:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgWithdrawRequest({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgWithdrawRequest({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawRequest:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgWithdrawRequest:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRegisterBtcDepositAddress({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgRegisterBtcDepositAddress({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRegisterBtcDepositAddress:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRegisterBtcDepositAddress:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgConfirmBtcDeposit({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgConfirmBtcDeposit({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgConfirmBtcDeposit:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgConfirmBtcDeposit:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgWithdrawTxSigned({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgWithdrawTxSigned({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawTxSigned:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgWithdrawTxSigned:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgRegisterReserveAddress({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgRegisterReserveAddress({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgRegisterReserveAddress:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgRegisterReserveAddress:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}