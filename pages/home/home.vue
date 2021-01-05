<template>
	<view class="home">
		<weight></weight>
		<today-plan></today-plan>
	</view>
</template>

<script>
	import Weight from "./children/weight.vue"
	import TodayPlan from "./children/todayPlan.vue"
	export default {
		components: {
			Weight,
			TodayPlan
		},
		data() {
			return {
				
			}
		},
		onLoad() {
			console.log(123)
		},
		computed: {},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.home {
		padding: 30rpx;
	}
</style>
