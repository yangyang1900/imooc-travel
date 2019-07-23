<template>
	
	<ul class="list">
		<li  class="item" 
			v-for="item of letters"
			:key="item"
			:ref="item"
			@touchstart="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"

			@click="handleLetterClick"
		>
			{{item}}
		</li>
	</ul>

</template>

<script type="text/javascript">
	
export default{
	props:{
		cities:Object
	},
	computed:{
		letters () {
			const letters = []
			for(let i in this.cities){
				letters.push(i)
			}
			return letters
		}
	},
	data () {
		return {
			// 标识位
			touchStatus: false,
			startY:0,
			timer:null
		}
	},
	updated(){
		this.startY = this.$refs['A'][0].offsetTop
	},
	name:'CityAlphabet',
	methods:{
		handleLetterClick(e){   //e是事件对象
			//子组件(兄弟)之间数据传递，可以通过父组件作为中转站进行数据传递
			this.$emit('change',e.target.innerText) //向外传递事件和内容
			//console.log(e.target.innerText)
		},
		handleTouchStart(){
			this.touchStatus = true
		},
		handleTouchMove(e){
			//touchStatus是标识位，这里就是控制只有Start之后才可以Move
			if (this.touchStatus) {
				if(this.timer){
					clearTimeout(this.timer)
				}
				//节流
				this.timer = setTimeout(() => {
					const touchY = e.touches[0].clientY -79
					const index = Math.floor((touchY - this.startY)/20)
					console.log(index)
					if (index >= 0 && index< this.letters.length) {
					//和上面change一样，是传递右侧选中哪个字母，让左侧对应变换
					this.$emit('change',this.letters[index])
					}
				},16)

			}

		},
		handleTouchEnd(){
			this.touchStatus = false
		}

	}
}

</script>


<style lang="stylus" scoped type="text/css">
	
	@import '../assets/styles/variables.styl'

	.list
		display:flex
		flex-direction:column
		justify-content:center

		position:absolute
		top:1.58rem
		right: 0
		bottom: 0
		width: .4rem
		
		.item
			line-height:.4rem
			text-align:center
			color:$bgColor

</style>