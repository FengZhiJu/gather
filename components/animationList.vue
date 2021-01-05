<template>
	<view class="animation-list" :style="isShowStyle">
		<ul>
			<li v-for="(item, index) in list" :key="index" @tap="optionsClick(index)">{{item}}</li>
		</ul>
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
		props: {
			list: {
				type: Array,
				default(){
					return []
				}
			},
			opacity: {
				type: Number,
				default: 0
			}
		},
		computed: {
			isShowStyle() {
				let _this = this;
				return {
					opacity: _this.opacity
				}
			}
		},
		methods: {
			optionsClick(index){
				this.$emit('optionsClick', index)
			}
		}
	}
</script>

<style lang="scss">
	.animation-list {
		position: absolute;
		top: 44px;
		right: 0;
		padding: 0 20rpx;
		transition: all .5s;
		background-color: #fff;
		ul {
			li {
				padding: 20rpx 20rpx;
				border-bottom: 1px solid #eee;
			}
			li:last-child {
				border-bottom: 0;
			}
		}
	}
</style>
