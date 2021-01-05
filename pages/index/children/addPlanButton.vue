<template>
	<view class="add-plan-button">
		<view :class="{'navbar-right': true, 'rotate': isRodate}"  @tap="addButtonToggle">
			<u-icon name="plus" color="#fff" size="35"></u-icon>
		</view>
		<animation-list :list="['添加计划']" :opacity="opacity" @optionsClick='optionsClick'></animation-list>
	</view>
</template>

<script>
	import AnimationList from "@/components/animationList.vue"
	export default {
		components: {
			AnimationList
		},
		data() {
			return {
				isRodate: false,
				opacity: 0
			}
		},
		onLoad() {
			
		},
		props: {},
		computed: {},
		methods: {
			addButtonToggle(){
				this.isRodate = !this.isRodate;
				this.opacity = new Number(this.isRodate);
				this.$emit('addButtonToggle')
			},
			optionsClick(index){
				console.log(index);
				this.addButtonToggle();
			}
		}
	}
</script>

<style lang="scss">
	.navbar-right {
		margin-right: 20rpx;
		transition: all .3s;
	}
	.rotate {
		transform: rotate(90deg);
	}
</style>
