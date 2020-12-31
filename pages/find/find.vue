<template>
	<view class="find">
		<u-navbar :is-back="false" title="查询" :background="background" title-color="white" title-size="35"></u-navbar>
		find
		<u-tabbar :list="list" active-color="#2979ff"></u-tabbar>
	</view>
</template>

<script>
	import { allBar } from "../../common/mixins.js"
	import { mapState } from "vuex"
	export default {
		data() {
			return {
				
			}
		},
		mixins: [allBar],
		onLoad() {
			
		},
		computed: {}
	}
</script>

<style>
</style>
