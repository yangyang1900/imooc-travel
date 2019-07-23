/*
* @Author: yangyang
* @Date:   2019-02-28 14:34:46
* @Last Modified by:   yangyang
* @Last Modified time: 2019-06-19 15:07:35
*/

export default{
  	changeCity(state,city){
  		//state指公用数据，city是外部传递过来的city
  		//修改Vuex中的city数据，使用传递过来的city参数
  		state.city = city
  		//使用localStorage存储数据(不然一刷新页面就更新到原始数据)
  		try{
  			localStorage.city = city
  		}catch (e){

  		}
  	}

}