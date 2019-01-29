import Vue from 'vue'
import Router from 'vue-router'
import video from './video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'videoPage',
      children: [
        video
      ]
    }
  ]
})
