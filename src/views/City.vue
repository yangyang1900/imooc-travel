<template>
	
	<div>
		<CityHeader></CityHeader>
		<CitySearch :cities="cities"></CitySearch>
		<CityList :cities="cities"
		 		  :hot="hotCities"
		          :letter="letter"></CityList>
		<CityAlphabet :cities="cities"
					  @change="handleLetterChange"></CityAlphabet>
	</div>

</template>

<script type="text/javascript">

import axios from 'axios'

import CityHeader from '@/components/CityHeader.vue'
import CitySearch from '@/components/CitySearch.vue'
import CityList from '@/components/CityList.vue'
import CityAlphabet from '@/components/CityAlphabet.vue'

export default{
	name:'City',
	components:{
		CityHeader:CityHeader,
		CitySearch:CitySearch,
		CityList:CityList,
		CityAlphabet:CityAlphabet
	},
	data:function () {
		return{
			cities:{}, //ABCD对应城市
			hotCities:[], //热门城市
			letter:''
		}
	},
	methods:{
		getCityInfo(){
			axios.get('/api/city.json')
				.then(this.handleGetCityIndoSucc)
		},
		handleGetCityIndoSucc(res){
			res = res.data
			if (res.ret && res.data) {
				const data = res.data
				this.cities = data.cities
				this.hotCities = data.hotCities
			}
			console.log(res.data)
		},
		//父组件监听到子组件传递的事件之后触发函数
		//父组件通过属性的形式传递数据给子组件
		handleLetterChange(letter){
			this.letter = letter
			console.log(letter)
		}
	},
	mounted(){
		this.getCityInfo()
	}
}	

</script>

<style lang="stylus" scoped type="text/css">
	

</style>