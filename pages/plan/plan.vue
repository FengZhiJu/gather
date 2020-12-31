<template>
	<view class="plan">
		<u-navbar :is-back="false" title="我的计划" :background="background" title-color="white" title-size="35"></u-navbar>
		plan
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
