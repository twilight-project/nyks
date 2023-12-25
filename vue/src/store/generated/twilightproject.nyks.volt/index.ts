import { Client, registry, MissingWalletError } from 'twilight-project-nyks-client-ts'

import { IndividualTwilightReserveAccountBalance } from "twilight-project-nyks-client-ts/twilightproject.nyks.volt/types"
import { ClearingAccount } from "twilight-project-nyks-client-ts/twilightproject.nyks.volt/types"
import { RefundTxAccountSnap } from "twilight-project-nyks-client-ts/twilightproject.nyks.volt/types"
import { RefundTxSnapshot } from "twilight-project-nyks-client-ts/twilightproject.nyks.volt/types"
import { BtcDepositAddress } from "twilight-project-nyks-client-ts/twilightproject.nyks.volt/types"
import { EventReserveWithdrawSnapshot } from "twilight-project-nyks-client-ts/twilightproject.nyks.volt/types"
import { EventRefundTxSnapshot } from "twilight-project-nyks-client-ts/twilightproject.nyks.volt/types"
import { Params } from "twilight-project-nyks-client-ts/twilightproject.nyks.volt/types"
import { BtcReserve } from "twilight-project-nyks-client-ts/twilightproject.nyks.volt/types"
import { BtcWithdrawRequestInternal } from "twilight-project-nyks-client-ts/twilightproject.nyks.volt/types"
import { ReserveWithdrawPool } from "twilight-project-nyks-client-ts/twilightproject.nyks.volt/types"
import { WithdrawRequestSnap } from "twilight-project-nyks-client-ts/twilightproject.nyks.volt/types"
import { ReserveWithdrawSnapshot } from "twilight-project-nyks-client-ts/twilightproject.nyks.volt/types"


export { IndividualTwilightReserveAccountBalance, ClearingAccount, RefundTxAccountSnap, RefundTxSnapshot, BtcDepositAddress, EventReserveWithdrawSnapshot, EventRefundTxSnapshot, Params, BtcReserve, BtcWithdrawRequestInternal, ReserveWithdrawPool, WithdrawRequestSnap, ReserveWithdrawSnapshot };

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
				BtcReserve: {},
				ClearingAccount: {},
				ReserveClearingAccountsAll: {},
				ReserveWithdrawSnapshot: {},
				RefundTxSnapshot: {},
				BtcWithdrawRequest: {},
				ReserveWithdrawPool: {},
				
				_Structure: {
						IndividualTwilightReserveAccountBalance: getStructure(IndividualTwilightReserveAccountBalance.fromPartial({})),
						ClearingAccount: getStructure(ClearingAccount.fromPartial({})),
						RefundTxAccountSnap: getStructure(RefundTxAccountSnap.fromPartial({})),
						RefundTxSnapshot: getStructure(RefundTxSnapshot.fromPartial({})),
						BtcDepositAddress: getStructure(BtcDepositAddress.fromPartial({})),
						EventReserveWithdrawSnapshot: getStructure(EventReserveWithdrawSnapshot.fromPartial({})),
						EventRefundTxSnapshot: getStructure(EventRefundTxSnapshot.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						BtcReserve: getStructure(BtcReserve.fromPartial({})),
						BtcWithdrawRequestInternal: getStructure(BtcWithdrawRequestInternal.fromPartial({})),
						ReserveWithdrawPool: getStructure(ReserveWithdrawPool.fromPartial({})),
						WithdrawRequestSnap: getStructure(WithdrawRequestSnap.fromPartial({})),
						ReserveWithdrawSnapshot: getStructure(ReserveWithdrawSnapshot.fromPartial({})),
						
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
				getBtcReserve: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BtcReserve[JSON.stringify(params)] ?? {}
		},
				getClearingAccount: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ClearingAccount[JSON.stringify(params)] ?? {}
		},
				getReserveClearingAccountsAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ReserveClearingAccountsAll[JSON.stringify(params)] ?? {}
		},
				getReserveWithdrawSnapshot: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ReserveWithdrawSnapshot[JSON.stringify(params)] ?? {}
		},
				getRefundTxSnapshot: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RefundTxSnapshot[JSON.stringify(params)] ?? {}
		},
				getBtcWithdrawRequest: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BtcWithdrawRequest[JSON.stringify(params)] ?? {}
		},
				getReserveWithdrawPool: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ReserveWithdrawPool[JSON.stringify(params)] ?? {}
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
			console.log('Vuex module: twilightproject.nyks.volt initialized!')
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
				let value= (await client.TwilightprojectNyksVolt.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryBtcReserve({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksVolt.query.queryBtcReserve()).data
				
					
				commit('QUERY', { query: 'BtcReserve', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBtcReserve', payload: { options: { all }, params: {...key},query }})
				return getters['getBtcReserve']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryBtcReserve API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryClearingAccount({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksVolt.query.queryClearingAccount( key.twilightAddress)).data
				
					
				commit('QUERY', { query: 'ClearingAccount', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryClearingAccount', payload: { options: { all }, params: {...key},query }})
				return getters['getClearingAccount']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryClearingAccount API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryReserveClearingAccountsAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksVolt.query.queryReserveClearingAccountsAll( key.reserveId)).data
				
					
				commit('QUERY', { query: 'ReserveClearingAccountsAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryReserveClearingAccountsAll', payload: { options: { all }, params: {...key},query }})
				return getters['getReserveClearingAccountsAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryReserveClearingAccountsAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryReserveWithdrawSnapshot({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksVolt.query.queryReserveWithdrawSnapshot( key.reserveId,  key.roundId)).data
				
					
				commit('QUERY', { query: 'ReserveWithdrawSnapshot', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryReserveWithdrawSnapshot', payload: { options: { all }, params: {...key},query }})
				return getters['getReserveWithdrawSnapshot']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryReserveWithdrawSnapshot API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryRefundTxSnapshot({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksVolt.query.queryRefundTxSnapshot( key.reserveId,  key.roundId)).data
				
					
				commit('QUERY', { query: 'RefundTxSnapshot', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRefundTxSnapshot', payload: { options: { all }, params: {...key},query }})
				return getters['getRefundTxSnapshot']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryRefundTxSnapshot API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryBtcWithdrawRequest({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksVolt.query.queryBtcWithdrawRequest( key.twilightAddress)).data
				
					
				commit('QUERY', { query: 'BtcWithdrawRequest', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBtcWithdrawRequest', payload: { options: { all }, params: {...key},query }})
				return getters['getBtcWithdrawRequest']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryBtcWithdrawRequest API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryReserveWithdrawPool({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TwilightprojectNyksVolt.query.queryReserveWithdrawPool( key.reserveId,  key.roundId)).data
				
					
				commit('QUERY', { query: 'ReserveWithdrawPool', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryReserveWithdrawPool', payload: { options: { all }, params: {...key},query }})
				return getters['getReserveWithdrawPool']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryReserveWithdrawPool API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
	}
}