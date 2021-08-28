import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/cinema',
    name: 'cinema',
    component: () => import('@/views/Cinema')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('@/views/Mine')
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('@/views/Movie'),
    children: [
      {
        path: 'city',
        component: () => import('@/components/City')
      },
      {
        path: 'nowPlaying',
        component: () => import('@/components/NowPlaying')
      },
      {
        path: 'comingSoon',
        component: () => import('@/components/ComingSoon')
      },
      {
        path: 'search',
        component: () => import('@/components/Search')
      },
      //   {
      //     path: '/movie',
      //     // 重定向
      //     redirect: '/movie/nowPlaying',
      //   }
    ]
  },
  {
    path: '/*',
    redirect: '/movie/nowPlaying'
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,

})

export default router
