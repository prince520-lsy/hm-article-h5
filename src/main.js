import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/vant'

import ArticleItem from './components/article-item.vue'
Vue.component("article-item", ArticleItem)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
