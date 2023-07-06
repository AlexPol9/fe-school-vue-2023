<template>
	<div class="app">
		<button @click="onClick">{{label}}</button>
		<div>state: {{counter}}</div>
		<div>counter2: {{counter2}}</div>

		<input type="text" v-focus="counter" :value="counter" />

		<button @click="onMessage">message</button>

		<div ref="counter">state: {{counter}}</div>
		<button @click="onRefClick">onRefClick</button>

		<TestComp  ref="testComp" />

		<div ref="counter2" v-for="(item,i) in [1,2,3]" :key="i">item: {{item}}</div>

		<button @click="someObjectX">someObjectX</button>
		someObjectX {{someObject.x}}

		<button @click="someObjectZ">someObjectZ</button>
		someObjectZ {{someObject.z}}
	</div>
</template>

<script>
import {TestMixin} from '@/mixins/mixin'
import {TestMixin2} from '@/mixins/mixin2'
import focus from '@/common/directives/focus'

export default {
	mixins: [TestMixin, TestMixin2],
	// directives: {
	// 	focus: {
	// 		inserted(el, bindings, vnode) {
	// 			console.log('inserted')

	// 			if (el) {
	// 				el.focus()
	// 			}
	// 		},
	// 		update(el, bindings, vnode) {
	// 			console.log('update')

	// 		}
	// 	}
	// },
	directives: {
		focus: focus
	},
	props: {
		label: {
			type: String,
			default: 'Increment'
		}
	},
	data() {
		return {
			 counter: 0,
			 someObject: {
				y: 2,
				x: 23
			 },
			 sharedCounterName: 'Comp'
		}
	},

	computed: {
		
	},
	
	methods: {
		
		onClick() {
			this.counter++
		},

		onMessage(){
			this.$message()
		},
		onRefClick() {
			console.log(this.$refs.counter)
			console.log(this.$refs.testComp)
			this.$refs.counter.style.backgroundColor = 'blue'
			this.$refs.testComp.x = 2

			console.log(this.$refs.counter.getBoundingClientRect())
			console.log(this.$refs.testComp.$el.getBoundingClientRect())


			console.log(this.$refs.counter2)

			this.$emit('custom-event', '123')
		},

		onAlert(text) {
			alert(text)
		},
		someObjectX() {
			this.someObject.x++
		},
		someObjectZ() {
			// this.someObject.z = ((this.someObject.z || 0) + 1)

			this.$set(this.someObject, 'z', ((this.someObject.z || 0) + 1))
		}
	},
	mounted() {

		console.log('component')

		// this.$on('custom-event', this.onAlert);
		this.$once('custom-event', this.onAlert);
	},
	destroyed() {
		this.$off('custom-event',  this.onAlert);
	}
}
</script>

<style lang="scss" scoped>
	.app {
		// background: $danger;
	}
</style>
