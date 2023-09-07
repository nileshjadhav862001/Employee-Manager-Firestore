import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueCompositionAPI from '@vue/composition-api'
import { auth } from './firebase'



Vue.use(PiniaVuePlugin)
const pinia = createPinia()
Vue.use(VueCompositionAPI)


// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------



Vue.config.productionTip = false;

let app;

auth.onAuthStateChanged(user => {
  console.log(user)
  if (!app) {
    app = new Vue({
      router,
      pinia,
      render: h => h(App)
    }).$mount('#app')
  }
})


