<template>
	<div class="app">
		test
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
		this.$api.Test.getTest()
			.then(({data}) => {
				console.log(data);
			})
			.catch(e => {
				console.log(e)
			})
	}
}
</script>

<style lang="scss" scoped>
	.app {
		background: $danger;
	}
</style>
