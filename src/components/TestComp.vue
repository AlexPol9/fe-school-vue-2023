<template>
	<div class="app">
		<button @click="onClick">{{label}}</button>
		<div>state: {{counter}}</div>
		<!-- <div>$store getter2: {{$store.getters.counter2}}</div>
		<div>$store getter4: {{$store.getters.counter4}}</div>
		<div>$store getterFn: {{$store.getters.counterFn(4)}}</div> -->

		<!-- <div>$store app state: {{$store.state.app.counter}}</div>
		<div>$store app2 state: {{$store.state.app2.counter}}</div> -->

		<!-- <div>$store app2 getter2: {{$store.getters['app2/counter2']}}</div>
		<div>$store app2 getter4: {{$store.getters['app2/counter4']}}</div>
		<div>$store app2 getterFn: {{$store.getters['app2/counterFn'](4)}}</div> -->
		<div>getter2: {{counter2}}</div>
		<div>getter4: {{counter4}}</div>
		<div>getterFn: {{counterFn(4)}}</div>
		<div>Counter: {{counter}}</div>

		<button @click="onClick10">{{label}}10</button>
		<button @click="onClick100">{{label}}100</button>
		<input type="number" v-model="counterModel"/>

		<div>x: {{x}}</div>
	</div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
	props: {
		label: {
			type: String,
			default: 'Increment'
		}
	},
	data() {
		return {
			// counter: 0,
			x: 1
		}
	},

	computed: {
		// ...mapState(['counter']),
		//...mapGetters({ getCounter: 'counter'),
		...mapGetters(['counter','counter2','counter4','counterFn']),
		//...mapGetters('app2', ['counter','counter2','counter4','counterFn']),

		// counter() {
		// 	return this.$store.getters.counter
		// }

		counterModel: {
			get() {
				return this.counter
			},
			set(value) {
				this.setCounter(value)
			}
		}
	},
	
	methods: {
		...mapActions(['setCounter', 'setCounter10', 'setCounter100']),
		//...mapActions(['setCounter']),
		//...mapActions('app2', ['setCounter', 'setCounter10', 'setCounter100']),
		onClick() {
			// this.$store.dispatch('setCounter', this.$store.getters.counter + 1)
			// this.$store.dispatch('setCounter', this.counter + 1)
			this.setCounter(this.counter + 1)
		},
		onClick10() {
			// this.$store.dispatch('setCounter10', this.$store.getters.counter + 1)
			// this.$store.dispatch('setCounter10', this.counter + 1)
			this.setCounter10(this.counter + 1)
		},
		onClick100() {
			// this.$store.dispatch('setCounter10', this.$store.getters.counter + 1)
			// this.$store.dispatch('setCounter10', this.counter + 1)
			this.setCounter100(this.counter + 1)
		}
	},
	mounted() {
		// this.$api.Test.getTest()
		// 	.then(({data}) => {
		// 		console.log(data);
		// 	})
		// 	.catch(e => {
		// 		console.log(e)
		// 	})

		console.log(this.$store)
	}
}
</script>

<style lang="scss" scoped>
	.app {
		// background: $danger;
	}
</style>
