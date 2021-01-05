import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let state = {
	list: [
		{
			iconPath: 'home',
			selectedIconPath: 'home-fill',
			text: '首页'
		},
		{
			iconPath: 'file-text',
			selectedIconPath: 'file-text-fill',
			text: '计划'
		},
		{
			iconPath: 'grid',
			selectedIconPath: 'grid-fill',
			text: '查询'
		},
		{
			iconPath: 'chat',
			selectedIconPath: 'chat-fill',
			text: '聊天'
		},
		{
			iconPath: 'account',
			selectedIconPath: 'account-fill',
			text: '我的'
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