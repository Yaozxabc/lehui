<template>
<div class="slider" ref="slider">
  <div class="sliderGroup" ref="sliderGroup">
    <slot></slot>
  </div>
  <div class="dots">
    <span v-for="(item,index) in dots" :class="{'active':curIndex==index}">
    </span>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  import {addClass} from 'res/scripts/dom.js'
  import BScroll from 'better-scroll'
    export default{
      props:{
        loop:{
          type:Boolean,
          default:true
        },
        autoPlay:{
          type:Boolean,
          default:true
        },
        interval:{
          type:Number,
          default:2000
        },
        data:{
          type:Array,
          default:()=>[]
        }
      },
        data(){
            return {
              curIndex:0,
              dots:[]
            }
        },
  created(){

  },
  mounted(){
      setTimeout(()=>{
        this._setSliderWidth();
        this._initDot();
        this._initSlider();
        if(this.autoPlay){
          this._play();
        }
      },20)
      window.addEventListener('resize',()=>{
        if(!this.slider){
          return
        }
        this._setSliderWidth(true);
        this.slider.refresh()
      })
  },
  methods:{
    _setSliderWidth(isResize){
      this.children=this.$refs.sliderGroup.children;
      let width=0;
      let sliderWidth=this.$refs.slider.clientWidth;
      for(var i=0;i<this.children.length;i++){
        let child = this.children[i];
        addClass(child,'slider_item');
        child.style.width = sliderWidth +'px';
        width +=sliderWidth;
      }
      if(this.loop && !isResize){
        width +=sliderWidth*2;
      }
      this.$refs.sliderGroup.style.width=width+'px';
    },
    _initSlider(){
      let el=document.querySelector('.slider')
      this.slider=new BScroll(el,{
        scrollX: true,
        snap: {
          loop: this.loop, // 循环
          threshold: 0.3,
          speed: 400 // 轮播间隔
      }
    });
      this.slider.on('scrollEnd',()=>{
        let pageIndex=this.slider.getCurrentPage().pageX;
        //获取当前索引
        this.curIndex=pageIndex;
        if(this.autoPlay){
          //每次滚动结束后，监听是否循环播放，是的话执行播放
          this._play()
        }
      })
    },
    _initDot(){
      this.dots=new Array(this.data.length);
    },
    _play(){
      clearTimeout(this.timer);
      this.timer=setTimeout(()=>{
        //启动滚动机制，只有执行一次
        this.slider.next()//新版本
        console.log(this.slider)
//          this.slider.goToPage(pageIndex,0,400)//旧版本
      },this.interval)
    }
  }
    }
</script>


<style scoped lang="scss">
.slider{
  position: relative;
  width: 100%;
  .sliderGroup{
    position: relative;
    overflow:hidden;
    white-space:nowrap;
.slider_item{
  float: left;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
} a{
    display: block;  width: 100%;  overflow: hidden;  text-decoration: none;
    img{
    display: block;  width: 100%;
    }}
  }
.dots{
  z-index: 200;
  position: absolute;
  left:50%;
  bottom: 10%;
  vertical-align: middle;
  transform: translateX(-50%);
  span{
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    text-align: center;
    margin-left: 5px;
    vertical-align: middle;
  }
  span:after{
    content: "";
    position: absolute;
    left: calc(50% - 6px);
    top: calc(50% - 6px);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: white;
  }

  .active{
    background: #730101;
    border:4px solid white;
  }
}
}
</style>
