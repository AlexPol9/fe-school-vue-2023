import Vuex from 'vuex'

import app from './app'
import app2 from './app/app2'

Vue.use(Vuex)


export const mutation = {
	SET_COUNTER: 'SET_COUNTER'
}

const store = () => {
	return new Vuex.Store({
		// state: {
		// 	counter: 1
		// },
		// getters: {
		// 	counter: state => state.counter,
		// 	counter2: state => state.counter * 2,
		// 	counter4: (state, getters) => getters.counter2 * 2,
		// 	counterFn: (state, getters) => val => getters.counter4 * val
		// },
		// mutations: {
		// 	[mutation.SET_COUNTER]: (state, payload) => {
		// 		state.counter = payload
		// 	}
		// },
		// actions: {
		// 	initApp: ({dispatch, commit, state, getters}, payload) => {
		// 		Promise.all([
		// 			dispatch('setCounter10', 100)
		// 		])
		// 	},
		// 	setCounter: ({dispatch, commit, state, getters}, payload) => {
		// 		console.log(state)
		// 		console.log(getters)
		// 		commit(mutation.SET_COUNTER, payload)
		// 	},
		// 	setCounter10: ({dispatch, commit, state, getters}, payload) => {
		// 		dispatch('setCounter', payload * 10)
		// 	}
		// },

		modules: {
			app,
			app2
		}
	})
}

export default store
