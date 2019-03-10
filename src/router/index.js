import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from 'com/home/home'
import SelectClothes from 'com/selectClothes/selectClothes'
import StarPeople from 'com/starPeople/starPeople'
import LehuiBox from 'com/lehuiBox/lehuiBox'
import Mine from 'com/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     redirect:"/home"
    },
    {
      path:"/home",
      name:"home",
      component:Home
    },
    {
      path:"/selectClothes",
      name:"selectClothes",
      component:SelectClothes
    },
    {
      path:"/starPeople",
      name:"starPeople",
      component:StarPeople
    },
    {
      path:"/lehuiBox",
      name:"lehuiBox",
      component:LehuiBox
    },
    {
      path:"/mine",
      name:"mine",
      component:Mine
    },
  ]
})
