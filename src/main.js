// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './lang'
import store from '@/store'
import * as filters from './filters'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './styles/index.scss'
import './api'

Vue.use(MuseUI)

// 使用mock
import './mock'

// 载入全局loading组件
import '@/components/loading'

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: {App},
  template: '<App/>'
})
