 import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import City from './views/City.vue'
import Detail from './views/Detail.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
		path: '/',
		name: 'Home',
		component: Home,
    },
    {
		path:'/city',
		name:'City',
		component: City
    },
    {
    	//动态路由,前面是/detail后面带一个参数，放入id变量中
    	path:'/detail/:id',
    	name:'Detail',
    	component:Detail

    }
  ],
  scrollBehavior(to,from,savedPosition){
    return {x:0,y:0}
  }
});
