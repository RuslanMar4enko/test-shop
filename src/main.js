import Vue from 'vue'
import "./plugins/vee-validate";
import App from "./App.vue";
import './assets/scss/style.scss';

import router from "./router";
import store from "./store";

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
