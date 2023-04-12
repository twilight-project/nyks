import { Client, registry, MissingWalletError } from 'twilight-project-nyks-client-ts'

import { Attestation } from "twilight-project-nyks-client-ts/twilightproject.nyks.forks/types"
import { EventObservation } from "twilight-project-nyks-client-ts/twilightproject.nyks.forks/types"
import { EventSetDelegateAddresses } from "twilight-project-nyks-client-ts/twilightproject.nyks.forks/types"
import { EventProposal } from "twilight-project-nyks-client-ts/twilightproject.nyks.forks/types"
import { Params } from "twilight-project-nyks-client-ts/twilightproject.nyks.forks/types"


export { Attestation, EventObservation, EventSetDelegateAddresses, EventProposal, Params };

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
				GetAttestations: {},
				DelegateKeysByBtcOracleAddress: {},
				DelegateKeysAll: {},
				
				_Structure: {
						Attestation: getStructure(Attestation.fromPartial({})),
						EventObservation: getStructure(EventObservation.fromPartial({})),
						EventSetDelegateAddresses: getStructure(EventSetDelegateAddresses.fromPartial({})),
						EventProposal: getStructure(EventProposal.fromPartial({})),
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
				getGetAttestations: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.GetAttestations[JSON.stringify(params)] ?? {}
		},
				getDelegateKeysByBtcOracleAddress: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DelegateKeysByBtcOracleAddress[JSON.stringify(params)] ?? {}
		},
				getDelegateKeysAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DelegateKeysAll[JSON.stringify(params)] ?? {}
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
			console.log('Vuex module: twilightproject.nyks.forks initialized!')
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
				let value= (await client.TwilightprojectNyksForks.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryGetAttestations({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksForks.query.queryGetAttestations(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.TwilightprojectNyksForks.query.queryGetAttestations({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'GetAttestations', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryGetAttestations', payload: { options: { all }, params: {...key},query }})
				return getters['getGetAttestations']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryGetAttestations API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDelegateKeysByBtcOracleAddress({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksForks.query.queryDelegateKeysByBtcOracleAddress( key.btcOracleAddress)).data
				
					
				commit('QUERY', { query: 'DelegateKeysByBtcOracleAddress', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDelegateKeysByBtcOracleAddress', payload: { options: { all }, params: {...key},query }})
				return getters['getDelegateKeysByBtcOracleAddress']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDelegateKeysByBtcOracleAddress API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryDelegateKeysAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksForks.query.queryDelegateKeysAll()).data
				
					
				commit('QUERY', { query: 'DelegateKeysAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDelegateKeysAll', payload: { options: { all }, params: {...key},query }})
				return getters['getDelegateKeysAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryDelegateKeysAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgSetDelegateAddresses({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksForks.tx.sendMsgSetDelegateAddresses({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetDelegateAddresses:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSetDelegateAddresses:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSeenBtcChainTip({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksForks.tx.sendMsgSeenBtcChainTip({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSeenBtcChainTip:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSeenBtcChainTip:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgSetDelegateAddresses({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksForks.tx.msgSetDelegateAddresses({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSetDelegateAddresses:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSetDelegateAddresses:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSeenBtcChainTip({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksForks.tx.msgSeenBtcChainTip({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSeenBtcChainTip:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSeenBtcChainTip:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}