import Vue from 'vue'
import App from './App'
import router from './router'
import {Button} from "element-ui";

import Mixin from './libs/mixin'

Vue.config.productionTip = false

Vue.use(Mixin);
Vue.component(Button.name,Button);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
