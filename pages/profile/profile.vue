<template>
	<view class="profile">
		<u-navbar :is-back="false" title="个人中心" :background="background" title-color="white" title-size="35"></u-navbar>
		profile
		<u-tabbar :list="list" active-color="#2979ff"></u-tabbar>
	</view>
</template>

<script>
	import { allBar } from "../../common/mixins.js"
	import { mapState } from "vuex"
	export default {
		data(){
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
