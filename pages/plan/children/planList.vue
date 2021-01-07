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
				<view class="today" v-if="todayPlan[index]">
					<view class="today-title">今日计划</view>
					<view class="today-week">{{week[todayPlan[index].week]}}</view>
					<view class="today-detail">
						<view class="part-box">
							<view class="detail-min-title">部位</view>
							<view class="part-name">{{todayPlan[index].part.join(' ')}}</view>
						</view>
						<view class="element-box">
							<view class="detail-min-title">所需补充</view>
							<view>今日还需</view>
						</view>
					</view>
				</view>
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
				week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
				today: new Date().getDay() == 0 ? 6 : new Date().getDay() - 1
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
							targetElement: {
								protein: 2000,
								carbs: 1563,
								calories: 1400
							},
							todayElement: {
								protein: 2000,
								carbs: 1563,
								calories: 1400
							},
							weekPlan: [
								{
									week: 0,
									part: ['手臂']
								},
								{
									week: 1,
									part: ['腿', '胸部']
								},
								{
									week: 3,
									part: ['背部']
								},
								{
									week: 4,
									part: ['肩部']
								}
							]
						},
						{
							title: '计划2',
							element: {
								protein: 2000,
								carbs: 1563,
								calories: 1400
							},
							weekPlan: [
								{
									week: 0,
									part: ['腿', '胸部']
								},
								{
									week: 1,
									part: ['腿', '胸部']
								},
								{
									week: 2,
									part: ['腿', '胸部']
								},
								{
									week: 3,
									part: ['腿', '胸部']
								},
								{
									week: 4,
									part: ['腿', '胸部']
								},
								{
									week: 5,
									part: ['腿', '胸部']
								},
								{
									week: 6,
									part: ['腿', '胸部']
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
			},
			todayPlan(){
				let arr = [];
				this.list.forEach((item, index) => {
					let temp = item.weekPlan.find((item, index) => item.week == _this.today)
					arr.push(temp);
				})
				console.log(arr)
				return arr;
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
				padding: 20rpx 20rpx 23rpx;
				background-color: #2a91ff;
				border-radius: 20rpx;
				.title {
					font-size: 35rpx;
				}
				.period {
					margin: 10rpx 0;
				}
				.today {
					// height: 300rpx;
					padding: 10rpx 15rpx 15rpx;
					margin-top: 20rpx;
					color: #333;
					background-color: #fff;
					border-radius: 20rpx;
					.today-title {
						font-size: 30rpx;
					}
					.today-week {
						margin-bottom: 15rpx;
						font-size: 35rpx;
						text-align: center;
					}
					.today-detail {
						display: flex;
						.part-box,
						.element-box{
							flex: 1;
							display: flex;
							justify-content: center;
							align-items: center;
							flex-direction: column;
						}
						
						.part-box {
							border-right: 0.7px solid #2a91ff;
							.part-name {
								margin-top: 20rpx;
								font-size: 40rpx;
							}
						}
					}
				}
			}
			
		}
	}
</style>
