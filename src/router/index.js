import Vue from 'vue'
import VueRouter from 'vue-router'
const modulesFiles = require.context('./modules', true, /.js$/)

Vue.use(VueRouter)

const mRoutes = []
modulesFiles.keys().forEach((key) => {
  mRoutes.push(modulesFiles(key).default)
})

const routes = [
  ...mRoutes,
  {
    path: '*',
    name: 'error404',
    component: () => import('@/views/error/404'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach(async (to, from, next) => {
  next()
})

export default router
