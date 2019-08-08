import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store'
import bootstrap from './assets/js/bootstrap';
import VueParticles from 'vue-particles'
import VuePageTransition from 'vue-page-transition';
import VeeValidate from 'vee-validate';
import vSelect from 'vue-select'
import VueLocalStorage from 'vue-localstorage';
// import VuePaginate from 'vue-paginate'
// import fontawesome from '@/src/assets/fonts/font-awesome'
Vue.prototype.$http = axios;
const  token  =  localStorage.getItem("token")
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] =  token
}

Vue.config.productionTip = false
window.$ = require('jquery')
window.JQuery = require('jquery')
Vue.use(VueLocalStorage)
Vue.use(VuePageTransition)
Vue.use(bootstrap);
Vue.use(VueParticles);
Vue.use(VeeValidate);
// Vue.use(VuePaginate)
// Vue.use(axios)
Vue.component('v-select', vSelect)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')