<template>
	<view class="todat-plan">
		<view class="title">
			<text>今日计划</text> 
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
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
	.todat-plan {
		margin-top: 30rpx;
		padding: 0 20rpx;
		height: 500rpx;
		background-color: #fff;
		border-radius: 20rpx;
		.title {
			position: relative;
			height: 100rpx;
			padding-left: 10rpx;
			font-size: 30rpx;
			font-weight: 700;
			line-height: 100rpx;
			border-bottom: 1rpx solid #eee;
			
			text:before {
				content: '1';
				margin-right: 10rpx;
				color: #2a91ff;
				background-color: #2a91ff;
				border-radius: 10rpx;
			}
		}
	}
</style>
