import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.prototype.$goto=function(routerPath){
  this.$router.push({name:routerPath})
}
Vue.prototype.$goback=function(){
  this.$router.back()
}
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
