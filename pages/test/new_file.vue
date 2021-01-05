<template>
	<view class="test">
		<u-navbar :is-back="true" title="test" :background="background" title-color="white" title-size="35" back-icon-color="#fff" ></u-navbar>
		123
	</view>
</template>

<script>
	import { allBar } from "../../common/mixins.js"
	export default {
		components: {

		},
		mixins: [allBar],
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
