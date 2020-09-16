import Vue from 'vue';
// 套件
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import $ from 'jquery';
import {
  ValidationObserver,
  ValidationProvider,
  configure,
  localize,
  extend,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import zhTW from 'vee-validate/dist/locale/zh_TW.json';
// 全域元件
import Footer from '@/components/Footer.vue';
import ProductCard from './components/ProductCard.vue';
// App.vue、router、bus
import App from './App.vue';
import router from './router';
import './bus';
// bootstrap
import 'bootstrap';

Vue.config.productionTip = false;

Vue.component('Loading', Loading);
Vue.component('productCard', ProductCard);
Vue.component('foot', Footer);
Vue.use(VueAxios, axios);

// 全域宣告jquery的$
window.$ = $;

// vee-validate
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
localize('tw', zhTW);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

// 每次切換路由，視野都會回到頁頂
router.afterEach(() => {
  window.scrollTo(0, 0);
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
