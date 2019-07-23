import Vue from 'vue';
import App from './App.vue';
import router from './router';

import store from './store';

import fastClick from 'fastclick'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false;
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  //创建根实例时候，把store（Vuex创建的仓库）传递进去了，所以全部组件都可以用
  store,
  render: h => h(App),
}).$mount('#app');
