/* Layout */
import layout from '@/views/layout/Index.vue'

export default {
  path: '/',
  name: 'Home',
  component: layout,
  children: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/Index'),
    },
  ],
}
