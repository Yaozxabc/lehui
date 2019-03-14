<template>
<div class="types_warpper">
  <h2>{{title}}<a href="javascript:" v-show="isRefresh" @click="refresh"><i class="iconfont icon-refresh"></i><span>换一换</span></a></h2>
  <Scroll :data="data" :scrollY="scrollY" :scrollX="scrollX" class="products_warpper">
    <div class="products" ref="productlist">
      <div class="product_con" v-for="(item,index) in data" @click="selectItem(item)">
        <img src="../../../assets/images/headline/type/new-pro/01.jpg" :alt="item.text" :class="{circle:circle}"/>
        <h3>{{item.text}}</h3>
        <p>{{item.name}}</p>
      </div>
    </div>
  </Scroll>

</div>
</template>

<script type="text/ecmascript-6">
  const Mlwidth=32
  import Scroll from "com/base/scroll/scroll"
    export default{
      props:{
        title:{
          type:String,
          default:""
        },
        data:{
          type:Array,
          default:()=>[]
        },
        circle:{
          type:Boolean,
          default:true
        },
        isRefresh:{
          type:Boolean,
          default:false
        }
      },
        data(){
            return {
              scrollY:false,
              scrollX:true
            }
        },
    methods:{
      refresh(){
        this.$emit("refresh")
      },
      selectItem(item){
        this.$emit("select",item);
      },
      _setProductWidth(){
        let width=0;
        this.children=this.$refs.productlist.children;
        for(let i=0;i<this.children.length;i++){
          width+=this.children[i].clientWidth+Mlwidth;
        }
        this.$refs.productlist.style.width=width+"px"
      }
    },
  mounted(){
    this._setProductWidth()
  },
  components:{
    Scroll
  }
    }
</script>


<style scoped lang="scss">
.types_warpper{
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  background: $sectionColor;
padding:35px 0;
  h2{
    padding:0 26px;
   font-family: black;
    font-weight: bold;
    font-size:35px;
    a{
      display: block;
      float: right;
      color: $font-name-Color;
    font-size:20px;
      .iconfont{

      }
      span{

      }
    }
  }
.products_warpper{
width:100%;
.products{
  overflow: hidden;
margin-top:27px;
  .product_con{
  float:left;
  margin-right:32px;
  text-align:center;
  .circle{
    border-radius: 50%;
  }
    img{
      width: 143px;
      height: 175px;
    }
    h3{
      font-size: 24px;
      font-family: black;
      font-weight: bold;
    }
    p{
      margin-top: 20px;
      font-size: 14px;
      color:$font-name-Color;
    }
  }
   }
}
}
</style>
