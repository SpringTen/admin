import Vue from 'vue'
import Router from './router'
import axios from 'axios'
// 方便用this调用，避免每个实例都导入import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import env from './env'

// 根据前端的跨域方式做调整 /a/b   /api/a/b = /a/b   接口代理
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

//根据环境变量获取不同的请求地址
axios.defaults.baseURL = env.baseURL;

//jie借口错误拦截器
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){  //sucsess
    return res.data;
  } else if(res.status == 10) { // weidenglu
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
});

// 家在插件
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
