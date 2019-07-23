import Vue from 'vue';
import Vuex from 'vuex';

import state from './state'
import mutations from './mutations'

Vue.use(Vuex);

//通过Vuex创建的仓库，然后导出
export default new Vuex.Store({
  //state存放全局共用的一些数据
  state: state,

  actions: {
  	//子组件通过this.$store.dispatch('changeCity',city)，传递到action
  	//ctx表示上下文
  	changeCity(ctx,city){
  		//通过commit提交到mutations，执行mutations中的changeCity
  		ctx.commit('changeCity',city)
      console.log(city)
  	}
  },

  mutations:mutations,

/*  getters:{
  	doubleCity(state){
  		return state.city + ' ' + state.city
  	}
  }*/
});
