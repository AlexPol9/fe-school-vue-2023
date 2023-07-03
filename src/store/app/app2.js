import api from '@/api'

export const mutation = {
	SET_COUNTER: 'SET_COUNTER'
}

export default {
	namespaced: true,
	state: {
		counter: 1
	},
	getters: {
		counter: state => state.counter,
		counter2: state => state.counter * 2,
		counter4: (state, getters) => getters.counter2 * 2,
		counterFn: (state, getters) => val => getters.counter4 * val
	},
	mutations: {
		[mutation.SET_COUNTER]: (state, payload) => {
			state.counter = payload
		}
	},
	actions: {
		initApp: ({dispatch, commit, state, getters}, payload) => {
			Promise.all([
				dispatch('setCounter10', 100)
			])
		},
		// setCounter: ({dispatch, commit, state, getters}, payload) => {
		// 	console.log(state)
		// 	console.log(getters)
		// 	commit(mutation.SET_COUNTER, payload)
		// },
		setCounter10: ({dispatch, commit, state, getters}, payload) => {
			dispatch('setCounter', payload * 10)
		},
		setCounter100: ({dispatch, commit, state, getters, rootState, rootGetters }, payload) => {
			console.log(rootState)
			console.log(rootGetters)
			dispatch('setCounter', payload * 100, {root:true})
		}
	},
}
