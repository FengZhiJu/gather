import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let state = {
	list: [
		{
			iconPath: 'home',
			selectedIconPath: 'home-fill',
			text: '首页',
			pagePath: '/pages/index/index'
		},
		{
			iconPath: 'file-text',
			selectedIconPath: 'file-text-fill',
			text: '计划',
			pagePath: '/pages/plan/plan'
		},
		{
			iconPath: 'grid',
			selectedIconPath: 'grid-fill',
			text: '查询',
			pagePath: '/pages/find/find'
		},
		{
			iconPath: 'chat',
			selectedIconPath: 'chat-fill',
			text: '聊天',
			pagePath: '/pages/chat/chat'
		},
		{
			iconPath: 'account',
			selectedIconPath: 'account-fill',
			text: '我的',
			pagePath: '/pages/profile/profile'
		}
	]
}

const store = new Vuex.Store({
	state,
	getters: {},
	mutations: {},
	actions: {}
})

export default store;