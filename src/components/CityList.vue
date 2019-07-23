<template>
	
	<div class="list" ref="wrapper">
		
		<div>
			<div class="area">
				<div class="title border-topbottom">
					当前城市
				</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">
							<!-- {{this.$store.state.city}} -->
							{{this.currentCity}}
						</div> 
					</div>
				</div>
			</div>

			<div class="area">
				<div class="title border-topbottom">
					热门城市
				</div>
				<div class="button-list">
					<div 
						class="button-wrapper" 
						v-for="item of hot"
						:key="item.id"
						@click="handleCityClick(item.name)"
					>
						<div class="button">{{item.name}}</div> 
					</div>
				</div>
			</div>

			<div class="area" 
				v-for="(item,key) of cities"
				:key="key"
				:ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div 
						class="item border-bottom"
						v-for="innerItem of item"
						:key="innerItem.id"
						@click="handleCityClick(innerItem.name)"
					>
						{{innerItem.name}}
					</div>
				</div>
			</div>
		</div>
		
	</div>

</template>

<script>

import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'

export default {

	name:'CityList',
	props:{
		hot:Array,
		cities:Object,
		letter:String
	},
	computed: {
		//把vuex里面的数据映射到该组件computed的计算属性里，city映射到mapState,且到该组件还可以通过对象形式另命名为currentCity
		...mapState({
			currentCity:'city'
		})
	},
	methods: {
		handleCityClick (city) {

			console.log(city);
			//最原始写法：this.$store.dispatch('changeCity',city) 使用dispatch触发一个changeCity函数
			//或者直接使用mutations中commit：this.$store.commit('changeCity',city)
			
			//有了下面直接子组件引用mutations，可以直接这样写，因为前面通过...mapMutations(['changeCity'])
			//调用了mutations里面的方法赋给了changeCity方法
			this.changeCity(city)
			
			//通过router进行跳转,跳转到首页
			this.$router.push('/')
		},
		//在子组件中直接使用mutations,有个changeCity的mutations，映射到这个组件里面changeCity的方法
		//然后我们就可以直接调用这个mutations
		//从vuex找到数组里的内容，再进行展开
		...mapMutations(['changeCity'])
	},
	watch:{
		letter (){
			if(this.letter){
				//通过字母获取DOM节点
				const element = this.$refs[this.letter][0]
				this.scroll.scrollToElement(element)
			}
			console.log(this.letter)
		}
	},
	//生命周期函数，会在DOM挂载结束后执行
	mounted (){
		this.scroll = new Bscroll(this.$refs.wrapper,{click:true})
	}
}	

</script>

<style lang="stylus" scoped type="text/css">
	
	@import '../assets/styles/variables.styl'

	.border-topbottom
		&:before
			border-color:#ccc
		&:after
			border-color:#ccc
	.border-bottom
		&:before
			border-color:#ccc
	
	.list
		overflow:hidden
		position:absolute
		top:1.58rem
		left:0
		right:0
		bottom:0

		.title
			line-height: .54rem
			background:#eee
			padding-left: .2rem
			color:#666
			font-size:.26rem
		.button-list
			overflow:hidden
			padding: .1rem .6rem .1rem .1rem
			.button-wrapper
				float:left
				width: 33.3%
				.button
					padding:.1rem
					margin: .1rem 0
					text-align:center
					border: .02rem solid #ccc
					border-radius: .06rem
		.item-list
			.item
				line-height:.76rem
				color:#666
				padding-left:.2rem

</style>