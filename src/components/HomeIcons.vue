<template>
	
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) of pages"
				:key="index">
				<div class="icon"
					v-for="item of page"
					:key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl">
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>

</template>

<script type="text/javascript">

import point from '@/assets/images/point.png'

export default {
	props:{
		list:Array
	},
	data:function(){
		return {
			swiperOption:{
				autoplay:false
			}
		}
	},
	name: "HomeIcons",
	computed:{
		pages (){
			const pages = []
			this.list.forEach((item,index)=>{
				//Math.floor(x)返回小于等于x的最大整数(0-7)/8返回0，也就是显示在第一页，8/8返回1，显示在第1页；
				//当前下标对应数据应该展示在第几页
				const page = Math.floor(index / 8)
				//如果pages[1]不存在，我就让pages[1] = [] 等于一个空数组
				if (!pages[page]) {
					pages[page] = []
				}
				//这是二维数组，最终的结果是pages = [[],[]]
				pages[page].push(item)
			})
			return pages
		}
	}
}	

</script>

<style lang="stylus" scoped>

	@import '../assets/styles/variables.styl'
	@import '../assets/styles/minins.styl'
	
	.icons >>> .swiper-container
		overflow:hidden
		height:0
		padding-bottom:50%
	.icons
		margin-top:.1rem
		.icon
			position:relative
			overflow:hidden
			float:left
			width:25%
			height:0
			padding-bottom:25%
			.icon-img
				position:absolute
				top:0
				left:0
				right:0
				bottom:.44rem
				box-sizing:border-box
				padding:.1rem
				.icon-img-content
					display:block
					margin:0 auto
					height:100%
			.icon-desc
				position:absolute
				left:0
				right:0
				bottom:0
				height:.44rem
				line-height:.44rem
				text-align:center
				color:$darkTextColor
				ellipsis()

</style>