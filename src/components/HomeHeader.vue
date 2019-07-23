<template>
  <div class="header">
    <div class="header-left">
    	<div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
    	<span class="iconfont">&#xe632;</span>
    	输入城市/景点/游玩主题
	</div>
	<router-link to='/city'>
		<div class="header-right">
    		<!-- {{this.doubleCity}} -->
    		<!-- {{this.$store.state.city}} -->
    		{{this.city}}
    		<span class="iconfont arrow-icon">&#xe64a;</span>
    	</div>
	</router-link>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
	name:'HomeHeader',
	computed:{
		//把vuex里面的数据映射到该组件computed的计算属性里，city映射到mapState
		//从vuex找到数组里的内容，再进行展开（ES6中的展开运算符）
		
		//把 store 的state 里面的city 映射到当前组件的本地变量city，然后在当前组件中使用的时候，
		//直接  this.city 这样使用就可以了。而不需要 store.state.city  这样写了
		//差不多就是下面代码的意思：
		/*
		computed: {

         city () {
            return this.$store.state.city                   
         }
         
        }
		*/
		...mapState(['city']),


		//vuex中getters映射到computed的计算属性里
		//store.js中的getter类似组件中的computed一样，用于计算store.js中数据
		//...mapGetters(['doubleCity'])
	}
}
</script>

<style lang="stylus" scoped>

	@import '../assets/styles/variables.styl'

	.header
		display:flex
		line-height:$headerHeight
		background:$bgColor
		color:#fff

		.header-left
			width:.64rem
			float:left	
			.back-icon
				text-align:center
				font-size:.4rem

		.header-input
			flex:1
			height:.64rem
			line-height:.64rem
			margin-top:.12rem
			margin-left:.2rem
			padding-left:.2rem
			background:#fff
			border-radius:.1rem
			color:#ccc
		
		.header-right
			min-width:1.04rem
			padding: 0 .1rem
			float:right
			text-align:center
			color:#fff
			.arrow-icon
				margin-left:-.04rem	
				font-size:.24rem


</style>