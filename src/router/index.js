
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = () => {
	const r = new VueRouter({
		// Important to prevent hash changes!
		// Otherwise we'll get instances conflict
		mode: 'abstract',
		routes: [
			// {
			// 	path: '/', redirect: { name: 'ListView' }
			// },
			// {
			// 	path: '*', redirect: { name: 'ListView' }
			// }
		],
		
	});

	return r
}

export default router