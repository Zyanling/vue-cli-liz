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
    {
      path: '/home2',
      name: 'Home2',
      component: () => import('@/views/home/Index2'),
    },
    {
      path: '/create',
      name: 'Create',
      component: () => import('@/views/home/Create'),
    },
  ],
}
