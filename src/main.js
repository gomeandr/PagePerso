import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import i18n from './i18n'
import { routes } from './routes'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

require("./assets/main.scss")
Vue.use(VueRouter)

const router = new VueRouter({
  routes  
})

// use beforeEach route guard to set the language

router.beforeEach((to, from, next) => {

  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = 'en';
  }

  // set the current language for vuex-i18n. note that translation data
  // for the language might need to be loaded first
  i18n.locale = language
  next();
  
});

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
