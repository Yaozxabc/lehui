<template>
<div class="fashion_warpper">
  <h1>{{title}}</h1>
    <ul>
      <li v-for="item in fashionList" @click="selectItem(item)">
        <div class="icon">
          <img v-lazy="item.imgurl"   alt=""/>
        </div>
        <div class="value">
          <h2 class="text">{{item.text}}</h2>
          <span class="count"><i class="iconfont icon-eye"></i> {{item.count}}</span>
          <span class="free">￥{{item.free}}</span>
        </div>
      </li>
  </ul>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
      props:{
        title:{
          type:String,
          default:""
        },
        fashionList:{
          type:Array,
          default:()=>[]
        }
      },
        data(){
            return {}
        },
    methods:{
      selectItem(item){
        this.$emit("select",item)
      }
    }
    }
</script>


<style scoped lang="scss">
.fashion_warpper{  background:$sectionColor;padding:42px 26px;
  h1{font-family: "black";font-size: 34px;font-weight: bold;
  }
  ul{margin-top:40px;overflow:hidden;
    li{
      margin-bottom: 8px;
    display:flex;
      .icon{
      width:278px;
      height:173px;
      margin-right:22px;
        img{
          width: 100%;}
      }
.value{
flex:1;
  .text{
    margin-top: 18px;
    margin-bottom: 26px;
    font-size: 32px;
    font-weight: bold;
  }
  .count,.count i{float:left;color: $font-name-Color;font-size: 27px;}
  .free{float:right;color: red;font-size: 27px;}
       }
    }
  }
}
</style>
