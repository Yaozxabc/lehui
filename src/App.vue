<template>
  <div id="app">
    <router-view></router-view>
    <div class="footer_warp">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Footer from 'com/footer/footer'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    Footer
  }
}
</script>

<style lang="scss" type="text/css">
  body{
    background: $borColor;
  }
#app {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  background: $bgColor;

  .footer_warp{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
}

</style>
