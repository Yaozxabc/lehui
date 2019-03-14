<template>
<Scroll :data="sliderlist"class="home">
  <div class="home_con">
    <h1>WELCOME TO LEFEEBOX <i class="iconfont icon-Customer_service"></i></h1>
    <Slider :data="sliderlist">
    <div v-for="item in sliderlist">
          <a href="javascript:">
            <img :src="item.src" :alt="item.text"/>
          </a>
    </div>
    </Slider>
    <div class="headline">
    <head-line></head-line>
  </div>
    <div class="bananer">
    <Bananer></Bananer>
  </div>
    <div class="newProduct">
      <Types title="新品上市"  :data="newProducts"  ></Types>
    </div>
    <div class="fashion_peple">
      <Types title="时尚达人" @refresh="getProduct" :data="newProducts" :isRefresh="fashionRefresh"></Types>
    </div>
    <div class="fashion_classrom">
      <type-fashion title="时尚课堂" :fashionList="typeFashion" @select="toShow"></type-fashion>
    </div>
    <div class="fashion_news">
      <type-fashion title="时尚咨讯" :fashionList="typeFashion"></type-fashion>
    </div>
  </div>
</div>
</Scroll>
</template>

<script type="text/ecmascript-6">
  import {SliderImg} from 'res/mock/slider.js'
  import Slider from 'com/base/slider/slider'
  import HeadLine from 'com/headline/headline'
  import Bananer from 'com/bananer/bananer'
  import Scroll from 'com/base/scroll/scroll'
  import Types from "com/base/types/types"
  import TypeFashion from "com/base/type-fashion/type-fashion"

    export default{
        data(){
            return {
              fashionRefresh:true,
              circle:true,
              sliderlist:[],
              newProducts:[
                {name:"LV",text:"LV手提包"},
                {name:"LV",text:"LV手提包"},
                {name:"LV",text:"LV手提包"},
                {name:"LV",text:"LV手提包"},
                {name:"LV",text:"LV手提包"}

              ],
              typeFashion:[
                {imgurl:"static/fashion-class.jpg",text:"lv明星代言",count:"156",free:"68.00"},
                {imgurl:"static/fashion-class.jpg",text:"lv明星代言",count:"156",free:"68.00"},
                {imgurl:"static/fashion-class.jpg",text:"lv明星代言",count:"156",free:"68.00"}
              ]
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
    },
    getProduct(){
      alert("dddd")
    },
    toShow(index){
      console.log(index);
    }
  },
  components:{
    Slider,HeadLine,Bananer,Scroll,Types,TypeFashion
  }
    }
</script>


<style scoped lang="scss">
.home{  position:fixed;
  left: 0;
  right: 0;
bottom:85px;
top:0;
  overflow: hidden;
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
.newProduct,.fashion_peple{
  margin-bottom: 16px;
}
.fashion_classrom,.fashion_news{
  margin-bottom: 18px;
}
}
</style>
