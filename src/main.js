import Vue from 'vue'
import Toast from 'vue2-toast'
import router from '@/router'
import store from '@/store'
import App from '@/App'
import 'minireset.css'
import 'vue2-toast/lib/toast.css'

Vue.use(Toast)
Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  router,
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: [
      'pages/news/list'
    ], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      backgroundColor: '#d22222',
      backgroundColorTop: '#d22222',
      navigationBarBackgroundColor: '#d22222',
      navigationBarTitleText: 'IT之家Lite',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#999',
      selectedColor: '#d22222',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [{
        pagePath: 'pages/news/list',
        text: '资讯',
        iconPath: 'static/assets/news.png',
        selectedIconPath: 'static/assets/news-active.png'
      }, {
        pagePath: 'pages/quanzi/list',
        text: '圈子',
        iconPath: 'static/assets/quanzi.png',
        selectedIconPath: 'static/assets/quanzi-active.png'
      }]
    }
  }
}
