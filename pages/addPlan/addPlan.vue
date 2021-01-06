<template>
	<view class="test">
		<u-navbar :is-back="true" title="添加计划" :background="background" title-color="white" title-size="35" back-icon-color="#fff" ></u-navbar>
		
	</view>
</template>

<script>
	import { navBar } from "../../common/mixins.js"
	export default {
		components: {

		},
		mixins: [navBar],
		data() {
			return {
				
			}
		},
		onLoad() {
			
		},
		computed: {},
		methods: {}
	}
</script>

<style lang="scss">

</style>
