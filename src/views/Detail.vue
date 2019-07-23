<template>
	
	<div>
		<DetailBanner
			:sightName="sightName"
			:bannerImg="bannerImg"
			:bannerImgs="gallaryImgs"
		>
			
		</DetailBanner>
		<DetailHeader></DetailHeader>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>

</template>

<script type="text/javascript">

import DetailBanner from '@/components/DetailBanner.vue'
import DetailHeader from '@/components/DetailHeader.vue'
import DetailList from '@/components/DetailList.vue'
import axios from 'axios'

export default{
	name:'Detail',
	components:{
		DetailBanner:DetailBanner,
		DetailHeader:DetailHeader,
		DetailList:DetailList
	},
	data () {
		return {
			sightName:'',
			bannerImg:'',
			gallaryImgs:[],
			list:[]
		}
	},
	methods:{
		getDetailInfo(){
			//是对axios.get('/api/detail.json?=id='+this.$route.params.id)代码的优化,router.js里面就带有id参数,
			//:to=" '/detail/' + item.id ">
			//path:'/detail/:id',
			axios.get('/api/detail.json',{
				params: {
					id: this.$route.params.id
				}
			}).then(this.handleGetDataSucc)
		},
		handleGetDataSucc(res){
			res = res.data
			if(res.ret && res.data){
				const data = res.data
				this.sightName = data.sightName
				this.bannerImg = data.bannerImg
				this.gallaryImgs = data.gallaryImgs
				this.list = data.categoryList
			}
		}
	},
	mounted(){
		this.getDetailInfo()
	}
}

</script>

<style lang='stylus' scoped type="text/css">
	.content
		height: 50rem

</style>