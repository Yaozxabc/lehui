<template>
<div class="headline_warp">
  <div class="title">
    <img src="../../assets/images/headline/title.jpg" alt=""/>
  </div>
  <div class="headlineNewlist" ref="headlineNewlist">
    <div ref="headlineGroup">
      <div class="clearfix headlineGroup" v-for="item in headline">
    <div class="headline_head">
      <img src="../../assets/images/headline/head/01.jpg" :alt="item.text"/>
    </div>
    <div class="headline_text">
      <div class="headline_name">{{item.name}}</div>
      <div class="headline_news"><span>正在体验</span>{{item.news}}</div>
    </div>
    <a href="javascript:" class="headline_to">
      <span>&gt</span>
    </a>
  </div>
    </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {addClass} from "res/scripts/dom.js"
  import BSscroll from "better-scroll"
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
          default:4000
        },
        data:{
          type:Array,
          default:()=>[]
        }
      },
        data(){
            return {
              headline:[
                {
                  img:"",
                  text:"J12系列手腕表",
                  name:"Jerry",
                  news:"Chanel J12系列手腕表"
                },
                {
                  img:"",
                  text:"J12系列手腕表",
                  name:"Jerry",
                  news:"Chanel J12系列手腕表"
                },
                {
                  img:"",
                  text:"J12系列手腕表",
                  name:"Jerry",
                  news:"Chanel J12系列手腕表"
                }
              ]
            }
        },
  mounted(){
    this.headline=this.data[0] ? this.data : this.headline;
    setTimeout(()=>{
      this._setHeight();
      this._initScroll();
      if(this.autoPlay){
        this._play();
      }
    },20)
    window.addEventListener('resize',()=>{
        if(!this.Scroll){
          return
        }
        this._setHeight(true);
        this.Scroll.refresh();
  })
  },
    methods:{
      _setHeight(isResize){
        this.children=this.$refs.headlineNewlist.children;
        let height=0;
        let newsHeight=this.$refs.headlineNewlist.clientHeight;
        for(let i=0;i< this.children.length;i++){
          let child = this.children[i];
          child.style.height = newsHeight +'px';
          height+=newsHeight;
        }
        if(this.loop && !isResize){
          height+=newsHeight*2;
        }
        this.$refs.headlineGroup.style.height=height+'px';
      },
      _initScroll(){
        let el=document.querySelector('.headlineNewlist')
        this.Scroll=new BSscroll(el,{
          scrollY: true,
          snap: {
            loop: this.loop, // 循环
            threshold: 0.3,
            speed: 400 // 轮播间隔
          }
        })

       this.Scroll.on("scrollEnd",()=>{
         if(this.autoPlay){
           this._play();

         }
       })
      },
      _play(){
        clearTimeout(this.timer);
        this.timer=setTimeout(()=>{
          this.Scroll.next();
        },this.interval);
      }
    }
    }
</script>


<style scoped lang="scss">
.headline_warp{
  display: flex;
  width:100%;
  padding: 14px 26px;
  box-sizing: border-box;
background:#fff;
  .title{
    color: red;font-family: "wei_black";width: 84px;height:74px;font-size: 40px;  margin-right: 35px;
  img{
    width: 100%;
    height: 100%;
  }
  }

  .headlineNewlist{
    margin-top: 10px;
    height:74px;
    overflow: hidden;
    flex:1;
  .headlineGroup{
    overflow: hidden;
  }
  .headline_head{
    float: left;
  width:70px;
  heght:70px;
  border-radius:50%;
    img{
      height: 100%;
      width: 100%;
    }
  }
  .headline_text{
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: black;
    font-weight: bold;
    font-size: 26px;
    margin-left:14px;
    .headline_name{
      flex: 1;
    }
    .headline_news{
      flex:1;
      span{
        color: #9f9f9f;
        margin-right: 14px;
      }
    }
  }

}
  .headline_to{
    float: right;
    margin-top: 20px;
    vertical-align: middle;
    span{
      font-size: 24px;
      vertical-align: middle;
    }
  }
}
</style>
