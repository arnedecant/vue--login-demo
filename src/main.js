import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// globals

Vue.config.productionTip = false
// Vue.prototype.$user = {}

window.USER = {}
window.USERS = [ { email: 'hello@arnedecant.be', password: 'goodbye', firstname: 'Arne', lastname: 'Decant' } ]

// create new vue instance

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')