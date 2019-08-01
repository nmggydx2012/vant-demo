import Vue from 'vue';
import router from './router';
import App from './App.vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use (Vant);

Vue.config.productionTip = false;

new Vue ({
  render: h => h (App),
  router,
}).$mount ('#app');
