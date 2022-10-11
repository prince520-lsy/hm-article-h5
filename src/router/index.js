import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/register.vue'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import { getToken } from '../utils/token'
import NotFound from '../views/404.vue'
import Article from '../views/article.vue'
import Favorite from '../views/favorite.vue'
import Myself from '../views/myself.vue'
import Collection from '../views/collection.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/",
    component: Index,
    redirect: "article",
    children: [
      {
        path: "article",
        component: Article,
      },
    ]
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/favorite",
    component: Favorite,
  }, {
    path: "/myself",
    component: Myself,
  }, {
    path: "/collection",
    component: Collection,
  },
  // {
  //   path: "*",
  //   component: NotFound,
  // }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log(1, to);

//   if (to.path === '/login' || to.path === '/register') {
//     next();

//   } else {
//     if (getToken()) {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })

// 注册导航守卫，检查登录
// 导航守卫：进入每个页面之前，都会触发导航守卫，
// 可以用于控制是否允许访问该页面，这种也叫页面鉴权
// router.beforeEach((to, from, next) => {
//   // 检查登录
//   console.log(1, to);
//   if (to.path === '/login' || to.path === '/register') {
//     // 允许访问
//     next();
//   } else {
//     // 有token代表用户已经登录了
//     if (getToken()) {
//       // 允许访问
//       next();
//     } else {
//       // 没有token，阻止访问，跳转到登录
//       next('/login');
//     }
//   }
// })



export default router
