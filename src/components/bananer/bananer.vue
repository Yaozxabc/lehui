<template>
<div class="bananer_warpper">
  <router-link tag="a" :to="{path:'/home'}" class="bananer-l">
    <img src="../../assets/images/headline/bananer/bananer-left.jpg" alt=""/>
  </router-link>
  <div class="bananer-r">
    <router-link tag="a" :to="{path:'/home'}" class="bananer-r-top">
      <img src="../../assets/images/headline/bananer/bananer-right1.jpg" alt=""/>
    </router-link>
    <router-link tag="a" :to="{path:'/home'}" class="bananer-r-bottom">
      <img src="../../assets/images/headline/bananer/bananer-right2.jpg" alt=""/>
    </router-link>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {}
        }
    }
</script>


<style scoped lang="scss">
.bananer_warpper{
  width: 100%;
padding:10px 15px;
display:flex;
  .bananer-l{
    float: left;
  width:326px;
  height:326px;
  margin-right:10px;
    img{
      width: 100%;
    }
  }
  .bananer-r{
    flex: 1;
  display:flex;
  flex-direction:column;
    .bananer-r-top,.bananer-r-bottom{
      flex:1;
      img{
        width: 100%;}
    }
  }
}
</style>
