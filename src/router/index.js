import Vue from 'vue'
import Router from 'vue-router'
import videoPage from '@/views/video/index.vue'
import video from './video/index'
import component from './video/component'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'videoPage',
      component: component,
      children: [
        video
      ]
    }
  ]
})
