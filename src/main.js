import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Multiselect from 'vue-multiselect'
import VCalendar from 'v-calendar'
import TextareaAutosize from 'vue-textarea-autosize'
import './assets/scss/main.scss'
import 'vue-multiselect/dist/vue-multiselect.min.css'
 
Vue.use(TextareaAutosize)

Vue.component('multiselect', Multiselect)

Vue.use(VCalendar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
