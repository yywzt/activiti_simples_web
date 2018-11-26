// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import axios from 'axios'
// import Qs from 'qs'
// import layer from 'vue-layer'

import App from './App';
import router from './router';


Vue.config.productionTip = false;
Vue.use(ElementUI);

//QS是axios库中带的，不需要我们再npm安装一个

// Vue.prototype.axios = axios;
// Vue.prototype.qs = Qs;

// Vue.prototype.$layer = layer(Vue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
