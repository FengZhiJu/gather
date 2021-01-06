import Vue from "vue"
import Router, {RouterMount} from "uni-simple-router"
import modules from "./modules/index.js"

Vue.use(Router);

const router = new Router({
	routes: [...modules]
});

router.beforeEach((to, from, next) => {
  next()
})
// 全局路由后置守卫
router.afterEach((to, from) => {
	
})

export default router;