import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import AboutiGem from '@/views/about_iGem'
import AboutiGemKsu from '@/views/about_iGem_ksu'
import Member from '@/views/member'
import Schedule from '@/views/schedule'
import AboutSyntheticBiology from '@/views/about_synthetic_biology'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: Index,
      children: [
        {
          path: '/about_iGem',
          name: 'about_iGem',
          component: AboutiGem
        },
        {
          path: '/about_iGem_ksu',
          name: 'about_iGem_ksu',
          component: AboutiGemKsu
        },
        {
          path: '/member',
          name: 'member',
          component: Member
        },
        {
          path: '/schedule',
          name: 'schedule',
          component: Schedule
        },
        {
          path: '/about_synthetic_biology',
          name: 'about_synthetic_biology',
          component: AboutSyntheticBiology
        }
      ]
    }
  ]
})
