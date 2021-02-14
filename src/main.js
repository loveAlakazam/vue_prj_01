import Vue from 'vue'
import App from './App.vue'

//router.js의 router을 사용
import router from './router'

//BootstrapVue 를 임포트
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
//BootstrapVue 임포트끝

Vue.config.productionTip = false

//앱을 마운트할 때 router을 사용.
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
