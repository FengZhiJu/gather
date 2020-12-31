import { mapState } from "vuex"
const navBar = {
	data(){
		return {
			background: {
				backgroundImage: 'linear-gradient(45deg, rgb(43, 133, 228), rgb(85, 167, 255))'
			}
		}
	}
}
const tabBar = {
	computed: {
		...mapState(['list'])
	}
}

const allBar = {
	...navBar,
	...tabBar
}
export {
	allBar,
	navBar,
	tabBar
}