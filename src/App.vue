<template>
	<div class="app">
		<!-- <TestComp label="inc1" />
		<TestComp label="inc2" />
		<TestComp label="inc3" /> -->

		<TestCompMixin label="inc3" />
	</div>
</template>

<script>

export default {
	data() {
		return {
			
		}
	},

	computed: {
		
	},
	
	methods: {
		
	},
	mounted() {
		this.$store.dispatch('initApp')

		// this.$api.Test.getTest()
		// 	.then(({data}) => {
		// 		console.log(data);
		// 	})
		// 	.catch(e => {
		// 		console.log(e)
		// 	})
	}
}
</script>

<style lang="scss" scoped>
	.app {
		// background: $danger;
	}
</style>
