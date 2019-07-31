// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false
//引入公共的scss   注意：创建项目的时候必须用scss
import('./assets/css/basic.scss');


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
