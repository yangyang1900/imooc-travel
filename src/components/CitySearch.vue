<template>
	
	<div>
		<div class="search">
			<input 
				v-model="keyword"
				class="search-input" 
				type="text" name="" 
				placeholder="输入城市名或拼音">
		</div>

		<div class="search-content" 
			 ref="search"
			 v-show="keyword">
			<ul>
				<li class="search-item border-bottom" 
					v-for="item of list"
					:key="item.id"
					@click="handleCityClick(item.name)">
					{{item.name}}
				</li>
				<li class="search-item border-bottom"
					v-show="hasNoData">
					没有找到匹配数据
				</li>
			</ul>
		</div>
	</div>
	

</template>

<script type="text/javascript">

import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'

export default {
	name:'CitySearch',
	props:{
		cities:Object
	},
	data:function(){
		return {
			keyword:'', //与input双向绑定，然后根据keyword搜索cities，搜索结果放入list中显示
			list:[],
			timer:null
		}
	},
	methods:{
		handleCityClick(city){
			//this.$store.dispatch('changeCity',city)
			//有了下面直接子组件引用mutations，可以直接这样写
			this.changeCity(city)
			//通过router进行跳转,跳转到首页
			this.$router.push('/')
		},
		//在子组件中直接使用mutations,
		...mapMutations(['changeCity'])
	},
	computed:{
		hasNoData() {
			return !this.list.length
		}
	},
	watch:{
		keyword(){
			if (this.timer) {
				clearTimeout(this.timer)
			}
			if(!this.keyword){
				this.list = []
				return
			}
			this.timer = setTimeout( () => {
				const result = []
				for (let i in this.cities){ //i是A B C D。。。
					this.cities[i].forEach((value) => {
						if(value.spell.indexOf(this.keyword)>-1 ||
							value.name.indexOf(this.keyword)>-1){
							result.push(value)
						}
					})
				}
				this.list = result
			},100 )
		}
	},
	mounted (){ //可以让搜索出的结果滚动。
		this.scroll = new Bscroll(this.$refs.search)
	}
}	

</script>

<style lang="stylus" scoped type="text/css">
	
	@import '../assets/styles/variables.styl'
	
	.search
		height:.72rem
		padding:0 .1rem
		background:$bgColor
		.search-input
			box-sizing:border-box
			width:100%
			height:.62rem
			padding:0 .1rem
			line-height:.62rem
			text-align:center
			border-radius:.06rem
			color:#666
	.search-content
		z-index:1
		overflow:hidden
		position:absolute
		top:1.58rem
		left:0
		right:0
		bottom:0
		background:#eee
		.search-item
			line-height:.62rem
			padding-left:.2rem
			background:#fff
			color:#666
</style>