import component from './component'
import videoPage from '@/views/video/index.vue'
const video = {
  path: 'video',
  name: 'video',
  component: component,
  children: [
    {
      path: 'list',
      name: 'videoList',
      component: videoPage
    }
  ]
}
export default video
