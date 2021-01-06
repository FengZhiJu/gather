<template>
	<view class="weight">
		<view class="title">体 重 管 理</view>
		<view class="units">单位：公斤</view>
		<view class="card">
			<view class="current-kg">
				<u-count-to :end-val="currentKg" color="#fff" decimals="1" :bold="true" :duration="duration"></u-count-to>
				<view class="kg-text">当前</view>
			</view>
			<view class="progress">
				<u-circle-progress active-color="#fff" :percent="percent" bg-color="#2a91ff" inactive-color="rgba(255,255,255,.2)" :duration="400">
					<view class="u-progress-content">
						<u-count-to :end-val="finishDiffKg" color="#fff" decimals="1" :bold="true" :font-size="40" :duration="duration"></u-count-to>
						<view class='u-progress-info'>{{diffTitle}}</view>
					</view>
				</u-circle-progress>
			</view>
			<view class="target-kg">
				<u-count-to :end-val="targetKg" color="#fff" decimals="1" :bold="true" :duration="duration"></u-count-to>
				<view class="kg-text">目标</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				baseKg: 126.4,
				currentKg: 114.7,
				targetKg: 90.4,
				duration: 1000
			}
		},
		created() {
			console.log(this.finishDiffKg, ' ', this.needDiffKg)
		},
		computed: {
			addORremove(){
				return this.baseKg > this.targetKg ? true : false;
			},
			finishDiffKg(){
				return this.addORremove ? this.baseKg - this.currentKg : this.currentKg - this.baseKg;
			},
			needDiffKg(){
				return this.addORremove ? this.baseKg - this.targetKg : this.targetKg - this.baseKg;
			},
			diffTitle(){
				return this.addORremove ? '已减脂' : '已增肌';
			},
			percent(){
				return this.finishDiffKg / this.needDiffKg * 100;
			}
		},
		methods: {}
	}
</script>

<style lang="scss">
	.weight {
		position: relative;
		// margin: 20rpx;
		color: #fff;
		background-color: #2a91ff;
		border-radius: 20rpx;
		.title {
			position: absolute;
			top: 0;
			left: 0;
			padding: 10rpx 20rpx;
			font-weight: 700;
			background-color: rgba(255,255,255,.2);
			border-radius: 17rpx;
		}
		.units {
			position: absolute;
			top: 10rpx;
			right: 20rpx;
		}
		.card {
			display: flex;
			align-items: center;
			justify-content: space-around;
			text-align: center;
			padding: 45rpx 0 25rpx;
			
			.current-kg,
			.target-kg {
				flex: 30%;
			}
			.progress {
				flex: 1;
				.u-progress-dot {
					font-size: 40rpx;
				}
			}
			.desc {
				position: absolute;
			}
		}
	}
</style>
