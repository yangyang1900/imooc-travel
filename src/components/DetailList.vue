<template>
	
	<div>
		<div class="item"
			v-for="(item, index) of list"
			:key="index"
		>

			<div class="item-title">
				<span class="item-title-icon"></span>
				{{item.title}}
			</div>
			<!-- 这段代码的逻辑就是如果该次循环中存在子级数据，也就是item.children不为空，会递归使用子组件，插入数据， 
				如果子级数据还有数据，再次递归调用填入数据-->
			<div v-if="item.children" class="item-children">
				<!-- //此时item.children相当于detile传过来的list，detailist子组件接收之后，传递到list；
				//然后进行循环传参，13-17这段代码相当于传入一个3-19的一个代码片段 
				//如果还有三级还是会递归，因为循环一个过程时候，会判断item.children是否为空，不为空就会添加递归的子组件-->
				<detail-list :list="item.children"></detail-list>
			</div>

		</div>
	</div>
	
</template>

<script type="text/javascript">
	
export default {
	name: 'DetailList',
	props:{
		list : Array
	},
  	methods: {

    }

}

</script>

<style lang='stylus' scoped type="text/css">
  
  @import '../assets/styles/minins.styl'
  @import '../assets/styles/variables.styl'

  .item-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem

  .item-title
  	line-height: .8rem
  	font-size: .32rem
  	padding: 0 .2rem

  .item-children
    padding: 0 .2rem

</style>