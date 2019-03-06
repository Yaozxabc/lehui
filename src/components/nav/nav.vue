<template>
<div class="navlist">
  <ul >
    <li>
      <router-link :to="{path:'/aaa'}" class="acitve">
        <i class="iconfont icon-home"></i>
        <p>首页</p>
      </router-link>
    </li>
    <li>
      <router-link :to="{path:'/aaa'}">
        <i class="iconfont icon-hanger"></i>
        <p>选衣</p>
      </router-link>
    </li>
    <li>
      <router-link :to="{path:'/aaa'}">
        <i class="iconfont icon-alien-ship-"></i>
        <p>明星达人</p>
      </router-link>
    </li>
    <li>
      <router-link :to="{path:'/aaa'}">
        <i class="iconfont icon-gift"></i>
        <p>乐荟盒子</p>
      </router-link>
    </li>
    <li>
      <router-link :to="{path:'/aaa'}">
        <i class="iconfont icon-user"></i>
        <p>我的</p>
      </router-link>
    </li>
  </ul>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {}
        }
    }
</script>


<style lang="scss" scoped>
.navlist{
  background: #f8f8f8;
  width:100%;
  ul{
    width: 100%;
  display:flex;
    li{
      box-sizing: border-box;
      height: 100px;
      padding: 15px 0;
      flex: 1;
    text-align:center;
a{
        font-size: 30px;
        color:$font-com-Color;
  .iconfont{
    font-size: 34px;
  }
  p{
    margin-top: 14px;
    font-size: 24px;
  }
      }
a:hover,.acitve{
  color: $font-cur-Color;;
}
    }
  }
}
</style>
