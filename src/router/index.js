import Vue from 'vue'
import Router from 'vue-router'
import videoPage from '@/views/video/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'videoPage',
      component: videoPage
    }
  ]
})
