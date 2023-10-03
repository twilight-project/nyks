import { Client, registry, MissingWalletError } from 'twilight-project-nyks-client-ts'

import { EventRegisterBtcDepositAddress } from "twilight-project-nyks-client-ts/twilightproject.nyks.bridge/types"
import { EventRegisterReserveAddress } from "twilight-project-nyks-client-ts/twilightproject.nyks.bridge/types"
import { EventRegisterJudgeAddress } from "twilight-project-nyks-client-ts/twilightproject.nyks.bridge/types"
import { EventWithdrawBtcRequest } from "twilight-project-nyks-client-ts/twilightproject.nyks.bridge/types"
import { EventSignRefund } from "twilight-project-nyks-client-ts/twilightproject.nyks.bridge/types"
import { EventSignSweep } from "twilight-project-nyks-client-ts/twilightproject.nyks.bridge/types"
import { EventBroadcastTxSweep } from "twilight-project-nyks-client-ts/twilightproject.nyks.bridge/types"
import { EventBroadcastTxRefund } from "twilight-project-nyks-client-ts/twilightproject.nyks.bridge/types"
import { EventProposeRefundHash } from "twilight-project-nyks-client-ts/twilightproject.nyks.bridge/types"
import { EventUnsignedTxSweep } from "twilight-project-nyks-client-ts/twilightproject.nyks.bridge/types"
import { EventUnsignedTxRefund } from "twilight-project-nyks-client-ts/twilightproject.nyks.bridge/types"
import { EventProposeSweepAddress } from "twilight-project-nyks-client-ts/twilightproject.nyks.bridge/types"
import { Params } from "twilight-project-nyks-client-ts/twilightproject.nyks.bridge/types"


export { EventRegisterBtcDepositAddress, EventRegisterReserveAddress, EventRegisterJudgeAddress, EventWithdrawBtcRequest, EventSignRefund, EventSignSweep, EventBroadcastTxSweep, EventBroadcastTxRefund, EventProposeRefundHash, EventUnsignedTxSweep, EventUnsignedTxRefund, EventProposeSweepAddress, Params };

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
				WithdrawBtcRequestAll: {},
				SignRefundAll: {},
				SignSweepAll: {},
				BroadcastTxSweepAll: {},
				ProposeRefundHashAll: {},
				UnsignedTxSweep: {},
				UnsignedTxRefund: {},
				UnsignedTxSweepAll: {},
				UnsignedTxRefundAll: {},
				BroadcastTxRefundAll: {},
				ProposeSweepAddress: {},
				ProposeSweepAddressesAll: {},
				SignRefund: {},
				SignSweep: {},
				BroadcastTxRefund: {},
				BroadcastTxSweep: {},
				
				_Structure: {
						EventRegisterBtcDepositAddress: getStructure(EventRegisterBtcDepositAddress.fromPartial({})),
						EventRegisterReserveAddress: getStructure(EventRegisterReserveAddress.fromPartial({})),
						EventRegisterJudgeAddress: getStructure(EventRegisterJudgeAddress.fromPartial({})),
						EventWithdrawBtcRequest: getStructure(EventWithdrawBtcRequest.fromPartial({})),
						EventSignRefund: getStructure(EventSignRefund.fromPartial({})),
						EventSignSweep: getStructure(EventSignSweep.fromPartial({})),
						EventBroadcastTxSweep: getStructure(EventBroadcastTxSweep.fromPartial({})),
						EventBroadcastTxRefund: getStructure(EventBroadcastTxRefund.fromPartial({})),
						EventProposeRefundHash: getStructure(EventProposeRefundHash.fromPartial({})),
						EventUnsignedTxSweep: getStructure(EventUnsignedTxSweep.fromPartial({})),
						EventUnsignedTxRefund: getStructure(EventUnsignedTxRefund.fromPartial({})),
						EventProposeSweepAddress: getStructure(EventProposeSweepAddress.fromPartial({})),
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
				getWithdrawBtcRequestAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.WithdrawBtcRequestAll[JSON.stringify(params)] ?? {}
		},
				getSignRefundAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SignRefundAll[JSON.stringify(params)] ?? {}
		},
				getSignSweepAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SignSweepAll[JSON.stringify(params)] ?? {}
		},
				getBroadcastTxSweepAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BroadcastTxSweepAll[JSON.stringify(params)] ?? {}
		},
				getProposeRefundHashAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProposeRefundHashAll[JSON.stringify(params)] ?? {}
		},
				getUnsignedTxSweep: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.UnsignedTxSweep[JSON.stringify(params)] ?? {}
		},
				getUnsignedTxRefund: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.UnsignedTxRefund[JSON.stringify(params)] ?? {}
		},
				getUnsignedTxSweepAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.UnsignedTxSweepAll[JSON.stringify(params)] ?? {}
		},
				getUnsignedTxRefundAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.UnsignedTxRefundAll[JSON.stringify(params)] ?? {}
		},
				getBroadcastTxRefundAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BroadcastTxRefundAll[JSON.stringify(params)] ?? {}
		},
				getProposeSweepAddress: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProposeSweepAddress[JSON.stringify(params)] ?? {}
		},
				getProposeSweepAddressesAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ProposeSweepAddressesAll[JSON.stringify(params)] ?? {}
		},
				getSignRefund: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SignRefund[JSON.stringify(params)] ?? {}
		},
				getSignSweep: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SignSweep[JSON.stringify(params)] ?? {}
		},
				getBroadcastTxRefund: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BroadcastTxRefund[JSON.stringify(params)] ?? {}
		},
				getBroadcastTxSweep: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BroadcastTxSweep[JSON.stringify(params)] ?? {}
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
		
		
		
		
		 		
		
		
		async QueryWithdrawBtcRequestAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryWithdrawBtcRequestAll()).data
				
					
				commit('QUERY', { query: 'WithdrawBtcRequestAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryWithdrawBtcRequestAll', payload: { options: { all }, params: {...key},query }})
				return getters['getWithdrawBtcRequestAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryWithdrawBtcRequestAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySignRefundAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.querySignRefundAll()).data
				
					
				commit('QUERY', { query: 'SignRefundAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySignRefundAll', payload: { options: { all }, params: {...key},query }})
				return getters['getSignRefundAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QuerySignRefundAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySignSweepAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.querySignSweepAll()).data
				
					
				commit('QUERY', { query: 'SignSweepAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySignSweepAll', payload: { options: { all }, params: {...key},query }})
				return getters['getSignSweepAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QuerySignSweepAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryBroadcastTxSweepAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryBroadcastTxSweepAll()).data
				
					
				commit('QUERY', { query: 'BroadcastTxSweepAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBroadcastTxSweepAll', payload: { options: { all }, params: {...key},query }})
				return getters['getBroadcastTxSweepAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryBroadcastTxSweepAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProposeRefundHashAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryProposeRefundHashAll()).data
				
					
				commit('QUERY', { query: 'ProposeRefundHashAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProposeRefundHashAll', payload: { options: { all }, params: {...key},query }})
				return getters['getProposeRefundHashAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProposeRefundHashAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryUnsignedTxSweep({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryUnsignedTxSweep( key.reserveId,  key.roundId)).data
				
					
				commit('QUERY', { query: 'UnsignedTxSweep', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryUnsignedTxSweep', payload: { options: { all }, params: {...key},query }})
				return getters['getUnsignedTxSweep']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryUnsignedTxSweep API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryUnsignedTxRefund({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryUnsignedTxRefund( key.reserveId,  key.roundId)).data
				
					
				commit('QUERY', { query: 'UnsignedTxRefund', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryUnsignedTxRefund', payload: { options: { all }, params: {...key},query }})
				return getters['getUnsignedTxRefund']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryUnsignedTxRefund API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryUnsignedTxSweepAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryUnsignedTxSweepAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.TwilightprojectNyksBridge.query.queryUnsignedTxSweepAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'UnsignedTxSweepAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryUnsignedTxSweepAll', payload: { options: { all }, params: {...key},query }})
				return getters['getUnsignedTxSweepAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryUnsignedTxSweepAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryUnsignedTxRefundAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryUnsignedTxRefundAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.TwilightprojectNyksBridge.query.queryUnsignedTxRefundAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'UnsignedTxRefundAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryUnsignedTxRefundAll', payload: { options: { all }, params: {...key},query }})
				return getters['getUnsignedTxRefundAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryUnsignedTxRefundAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryBroadcastTxRefundAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryBroadcastTxRefundAll()).data
				
					
				commit('QUERY', { query: 'BroadcastTxRefundAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBroadcastTxRefundAll', payload: { options: { all }, params: {...key},query }})
				return getters['getBroadcastTxRefundAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryBroadcastTxRefundAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProposeSweepAddress({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryProposeSweepAddress( key.reserveId,  key.roundId)).data
				
					
				commit('QUERY', { query: 'ProposeSweepAddress', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProposeSweepAddress', payload: { options: { all }, params: {...key},query }})
				return getters['getProposeSweepAddress']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProposeSweepAddress API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryProposeSweepAddressesAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryProposeSweepAddressesAll( key.limit)).data
				
					
				commit('QUERY', { query: 'ProposeSweepAddressesAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryProposeSweepAddressesAll', payload: { options: { all }, params: {...key},query }})
				return getters['getProposeSweepAddressesAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryProposeSweepAddressesAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySignRefund({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.querySignRefund( key.reserveId,  key.roundId)).data
				
					
				commit('QUERY', { query: 'SignRefund', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySignRefund', payload: { options: { all }, params: {...key},query }})
				return getters['getSignRefund']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QuerySignRefund API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySignSweep({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.querySignSweep( key.reserveId,  key.roundId)).data
				
					
				commit('QUERY', { query: 'SignSweep', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySignSweep', payload: { options: { all }, params: {...key},query }})
				return getters['getSignSweep']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QuerySignSweep API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryBroadcastTxRefund({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryBroadcastTxRefund( key.reserveId,  key.roundId)).data
				
					
				commit('QUERY', { query: 'BroadcastTxRefund', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBroadcastTxRefund', payload: { options: { all }, params: {...key},query }})
				return getters['getBroadcastTxRefund']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryBroadcastTxRefund API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryBroadcastTxSweep({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksBridge.query.queryBroadcastTxSweep( key.reserveId,  key.roundId)).data
				
					
				commit('QUERY', { query: 'BroadcastTxSweep', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBroadcastTxSweep', payload: { options: { all }, params: {...key},query }})
				return getters['getBroadcastTxSweep']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryBroadcastTxSweep API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgBroadcastTxRefund({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgBroadcastTxRefund({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBroadcastTxRefund:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgBroadcastTxRefund:Send Could not broadcast Tx: '+ e.message)
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
		async sendMsgSignSweep({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgSignSweep({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSignSweep:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSignSweep:Send Could not broadcast Tx: '+ e.message)
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
		async sendMsgProposeRefundHash({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgProposeRefundHash({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgProposeRefundHash:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgProposeRefundHash:Send Could not broadcast Tx: '+ e.message)
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
		async sendMsgUnsignedTxRefund({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgUnsignedTxRefund({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUnsignedTxRefund:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUnsignedTxRefund:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgWithdrawBtcRequest({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgWithdrawBtcRequest({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawBtcRequest:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgWithdrawBtcRequest:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgBroadcastTxSweep({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgBroadcastTxSweep({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBroadcastTxSweep:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgBroadcastTxSweep:Send Could not broadcast Tx: '+ e.message)
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
		async sendMsgSignRefund({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgSignRefund({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSignRefund:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSignRefund:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgProposeSweepAddress({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgProposeSweepAddress({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgProposeSweepAddress:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgProposeSweepAddress:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUnsignedTxSweep({ rootGetters }, { value, fee = {amount: [], gas: "200000"}, memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const fullFee = Array.isArray(fee)  ? {amount: fee, gas: "200000"} :fee;
				const result = await client.TwilightprojectNyksBridge.tx.sendMsgUnsignedTxSweep({ value, fee: fullFee, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUnsignedTxSweep:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUnsignedTxSweep:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgBroadcastTxRefund({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgBroadcastTxRefund({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBroadcastTxRefund:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgBroadcastTxRefund:Create Could not create message: ' + e.message)
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
		async MsgSignSweep({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgSignSweep({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSignSweep:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSignSweep:Create Could not create message: ' + e.message)
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
		async MsgProposeRefundHash({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgProposeRefundHash({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgProposeRefundHash:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgProposeRefundHash:Create Could not create message: ' + e.message)
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
		async MsgUnsignedTxRefund({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgUnsignedTxRefund({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUnsignedTxRefund:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUnsignedTxRefund:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgWithdrawBtcRequest({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgWithdrawBtcRequest({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgWithdrawBtcRequest:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgWithdrawBtcRequest:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgBroadcastTxSweep({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgBroadcastTxSweep({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgBroadcastTxSweep:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgBroadcastTxSweep:Create Could not create message: ' + e.message)
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
		async MsgSignRefund({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgSignRefund({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSignRefund:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSignRefund:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgProposeSweepAddress({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgProposeSweepAddress({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgProposeSweepAddress:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgProposeSweepAddress:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgUnsignedTxSweep({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TwilightprojectNyksBridge.tx.msgUnsignedTxSweep({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUnsignedTxSweep:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgUnsignedTxSweep:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}