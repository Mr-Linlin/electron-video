import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [

  {
    path: '/',
    component: () => import('../views/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('../views/home/index.vue')
      }
      , {
        path: '/detail',
        component: () => import('../views/detail/index.vue')
      }
    ]
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('@/views/login/index.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
// 导航守卫
router.beforeEach(async (to, from, next) => {
  document.title = '酷我视频'
  next()

  // const token = localStorage.getItem('token')
  // if (!token) {
  //   if (to.name === 'login') {
  //     next()
  //   } else {
  //     router.push('login')
  //     next()
  //   }
  // } else {
  //   next()
  // }
})

export default router
