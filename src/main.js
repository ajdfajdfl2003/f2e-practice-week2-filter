// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/all.scss'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import Paginate from 'vuejs-paginate'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('paginate', Paginate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
