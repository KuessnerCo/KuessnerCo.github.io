import Vue from "vue";
import "./plugins/base";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import VueGtag from "vue-gtag";

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: { id: "UA-1234567-1" },
});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
