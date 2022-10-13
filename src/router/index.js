
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入页面组件
import Register from '../views/register.vue';
import Login from '../views/login.vue';
import Index from '../views/index.vue';
import NotFound from '../views/404.vue';
import Article from '../views/article.vue';
import Collection from '../views/collection.vue';
import Favorite from '../views/favorite.vue';
import Myself from '../views/myself.vue';
import { getToken } from '../utils/token';
import ArticleDetail from '../views/article-detail.vue'
Vue.use(VueRouter)

const routes = [
  // 配置路由
  // 注册
  {
    // 路径
    path: "/register",
    // 页面组件
    component: Register,
  },
  // 登录
  {
    // 路径
    path: "/login",
    // 页面组件
    component: Login,
  },
  // 首页
  {
    // 路径
    path: "/",
    component: Index,
    // 重定向，进入首页，默认访问面经列表
    // 重定向要写完整路径，完整路径是父页面路径 + 子页面路径
    redirect: "/article",
    // 嵌套路由配置，给首页配置子页面
    children: [
      {
        // 路径
        // 子页面路径，不写/开头，
        // 如果子页面路径一定要/开头，那就不会拼接父路径
        // Vue会帮你把父页面路径拼接过来
        path: "article",
        component: Article,
      },
      {
        path: 'collection',
        component: Collection,
      },
      {
        path: 'favorite',
        component: Favorite,
      },
      {
        path: 'myself',
        component: Myself,
      },
    ]
  },
  {
    //必须参数：内嵌传参
    path: '/article-detail/:id',
    component: ArticleDetail,
  },
  // 配置404页面
  // 新增页面一定要放在404之前
  {
    path: "*",
    component: NotFound,
  },
]

const router = new VueRouter({
  routes
})

// 注册导航守卫，检查登录
// 导航守卫：进入每个页面之前，都会触发导航守卫，
// 可以用于控制是否允许访问该页面，这种也叫页面鉴权
router.beforeEach((to, from, next) => {
  // 检查登录
  console.log(1, to);
  // 判断404页面
  // todo，404页面判断
  if (to.path === '/login' || to.path === '/register') {
    // 允许访问
    next();
  } else {
    // 有token代表用户已经登录了
    if (getToken()) {
      // 允许访问
      next();
    } else {
      // 没有token，阻止访问，跳转到登录
      next('/login');
    }
  }
})

export default router