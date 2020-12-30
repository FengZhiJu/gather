<template>
	<view class="content">
		<u-navbar :is-back="false" title="首页" :background="background" title-color="white" title-size="35"></u-navbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundImage: 'linear-gradient(45deg, rgb(43, 133, 228), rgb(85, 167, 255))'
				}
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>

</style>
