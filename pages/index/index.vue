<template>
	<view class="index">
		<u-mask :show="isMaskShow" :z-index="10000" @tap="$refs.addPlanButton.addButtonToggle()"></u-mask>
		<u-navbar class="navbar" v-if="isNavbarShow" :is-back="isNavbarBack" :title="title" :background="background" title-color="white" title-size="35" back-icon-color="#fff" >
			<template #right>
				<add-plan-button v-if="current == 1" @addButtonToggle="isMaskShow = !isMaskShow" ref="addPlanButton"></add-plan-button>
			</template>
		</u-navbar>
		<view class="content">
			<home v-if="current == 0"></home>
			<plan v-if="current == 1"></plan>
			<find v-if="current == 2"></find>
			<chat v-if="current == 3"></chat>
			<profile v-if="current == 4"></profile>
		</view>
		<u-tabbar bg-color="#fff" :list="list" active-color="#2979ff" v-model="current" @change="tabbarChange" :show="isTabbarShow"></u-tabbar>
	</view>
</template>

<script>
	import Home from "../home/home.vue"
	import Plan from "../plan/plan.vue"
	import Find from "../find/find.vue"
	import Chat from "../chat/chat.vue"
	import Profile from "../profile/profile.vue"
	
	import AddPlanButton from "./children/addPlanButton.vue"
	
	import { allBar } from "../../common/mixins.js"
	import { mapState } from "vuex"
	
	export default {
		components: {
			Home,
			Plan,
			Find,
			Chat,
			Profile,
			AddPlanButton
		},
		data(){
			return {
				tabbarOption: ['首页', '我的计划', '查询', '聊天室', '个人资料'],
				current: 0,
				isNavbarBack: false,
				isNavbarShow: true,
				isTabbarShow: true,
				isRodate: false,
				isMaskShow: false
			}
		},
		computed: {
			title(){
				return this.tabbarOption[this.current];
			},
			isNavbarRight(){
				return this.current == 1 ? true : false;
			}
		},
		mixins: [allBar],
		methods: {
			tabbarChange(index){
				this.current = index;
			},
			addButtonToggle(){
				this.isRodate = !this.isRodate;
				this.isMaskShow = !this.isMaskShow;
			}
		}
	}
</script>

<style lang="scss">
	.index {
		overflow: hidden;
		height: 100vh;
	}
	.content {
		overflow: hidden;
		height: 100%;
		background-color: #f8f8f8;
	}
	.navbar {
		position: relative;
		z-index: 10001;
	}
</style>
