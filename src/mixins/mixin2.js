export const TestMixin2 = {
	props: {
		label2: {
			type: String,
			default: 'Increment 2'
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