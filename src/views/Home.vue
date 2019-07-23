<template>
  <div class="about">
    <!--使用局部组件-->
    <HomeHeader></HomeHeader>
    <HomeSwiper :list="swiperList"></HomeSwiper>
    <HomeIcons :list="iconList"></HomeIcons>
    <HomeRecommend :list="recommendList"></HomeRecommend>
    <HomeWeekend :list="weekendList"></HomeWeekend>
  </div>
</template>

<script>

import HomeHeader from '@/components/HomeHeader.vue'
import HomeSwiper from '@/components/Swiper.vue'
import HomeIcons from '@/components/HomeIcons.vue'
import HomeRecommend from '@/components/HomeRecommend.vue'
import HomeWeekend from '@/components/HomeWeekend.vue'
import axios from 'axios'
import {mapState} from 'vuex'

export default {
	name:'Home',
	//声明局部组件
	components:{
		HomeHeader:HomeHeader,
		HomeSwiper:HomeSwiper,
		HomeIcons:HomeIcons,
		HomeRecommend:HomeRecommend,
		HomeWeekend:HomeWeekend
	},
	data:function(){
		return {
			lastCity:'',
			swiperList:[],
			iconList:[],
			recommendList:[],
			weekendList:[]
		}
	},
	computed:{
		...mapState(['city'])
	},
	methods:{
		getHomeInfo(){
			//通过...mapState直接在组件中使用vuex中数据
			axios.get('/api/index.json?city=' + this.city)
				.then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc(res){
			res = res.data
			if (res.ret && res.data) {
				this.swiperList = res.data.swiperList
				this.iconList = res.data.iconList
				this.recommendList = res.data.recommendList
				this.weekendList = res.data.weekendList
			}
			//console.log(res.data.city)
		}
	},
	//挂在getHomeInfo函数
	//页面初次加载时候mounted
	mounted(){
		this.lastCity = this.city
		this.getHomeInfo()
	},
	//页面重新被显示时候activated(通过判断lastCity和现在City，决定是否再去请求json数据)
	activated(){
		if(this.lastCity !== this.city){
			this.lastCity = this.city
			this.getHomeInfo()
		}
	}
}
</script>

<style>
</style>