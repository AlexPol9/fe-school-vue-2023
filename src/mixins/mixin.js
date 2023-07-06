export const TestMixin = {
	props: {
		label2: {
			type: String,
			default: 'Increment'
		}
	},
	data() {
		return {
             counter2: 999,
             someObject: {
                 x: 1
             },
             sharedCounterName: 'Mixin'
		}
	},

	computed: {
		
	},
	
	methods: {
		
		// onClick() {
		// 	this.counter++
		// },
		
	},
	mounted() {

		console.log('mixin')
	}
}