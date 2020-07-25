import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ResetPassword from '../views/ResetPassword.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Home,
		beforeEnter(to, from, next) {
			if (window.USER.email) next()
			else next('/login')
		}
	}, 
	{ path: '/login', component: Login }, 
	{ path: '/register', component: Register },
	{ path: '/reset-password', component: ResetPassword }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
