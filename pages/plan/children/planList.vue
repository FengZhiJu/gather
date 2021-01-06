<template>
	<view class="plan-list">
		<!-- 计划标题
		计划周目
		今日训练的部位
		今日的动作
		今日的所需补充 -->
		<view class="content">
			<view class="item" v-for="(item, index) in list" :key="index">
				<view class="title">{{item.title}}</view>
				<view class="period">周期：{{item.weekPlan.length}}天/周</view>
				<view class="train-day">训练日：{{trainDay[index]}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	let _this;
	export default {
		components: {

		},
		data() {
			return {
				week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
			}
		},
		created() {
			_this = this;
		},
		props: {
			list: {
				type: Array,
				default(){
					return [
						{
							title: '计划1',
							weekPlan: [
								{
									week: 0,
								},
								{
									week: 1
								},
								{
									week: 3,
								},
								{
									week: 4
								}
							]
						},
						{
							title: '计划2',
							weekPlan: [
								{
									week: 0,
								},
								{
									week: 1
								},
								{
									week: 2,
								},
								{
									week: 3
								},
								{
									week: 4
								},
								{
									week: 5
								},
								{
									week: 6
								}
							]
						}
					]
				}
			}
		},
		computed: {
			trainDay(){
				return this.list.map((item, index) => (item.weekPlan.map((item, index) => _this.week[item.week])).join(' '));
			}
		},
		methods: {}
	}
</script>

<style lang="scss">
	.plan-list {
		.content {
			margin: 0 30rpx;
			color: #fff;
			font-size: 25rpx;
			.item {
				margin-top: 30rpx;
				padding: 20rpx 20rpx 27rpx;
				background-color: #2a91ff;
				border-radius: 20rpx;
				.title {
					font-size: 35rpx;
				}
				.period {
					margin: 10rpx 0;
				}
			}
		}
	}
</style>
