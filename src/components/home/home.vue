<template>
<div class="home">
  <h1>WELCOME TO LEFEEBOX <i class="iconfont icon-Customer_service"></i></h1>
  <Slider :data="sliderlist">
    <div v-for="item in sliderlist">
          <a href="javascript:">
            <img :src="item.src" :alt="item.text"/>
          </a>
    </div>
  </Slider>
  home
</div>
</template>

<script type="text/ecmascript-6">
  import {SliderImg} from 'res/mock/slider.js'
  import Slider from 'com/base/slider/slider'
    export default{
        data(){
            return {
              sliderlist:[]
            }
        },
  mounted(){
   this._initSliderlist(6)
  },
  methods:{
    _initSliderlist(count){
      for(var i=0;i<count;i++){
        this.sliderlist.push({
          src:SliderImg("750","380"),
        text:SliderImg("750","380")
        });
      }
    }
  },
  components:{
    Slider
  }
    }
</script>


<style scoped lang="scss">
h1{
  position: relative;
  height: 96px;
  font-size: 40px;
  text-align: center;
  padding-top: 35px;
  font-family: "title";
  .iconfont{
    font-size: 60px;
    position: absolute;
    right: 0;
    top: calc( 50% - 30px);

  }
}
</style>
