// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "./utils/flexible";
import axios from "axios";

import ToastComponent from "./components/toast.vue";
var opt = {
  duration: 3000
};

Vue.prototype.$toast = function(msg, options) {
  if (typeof options == "object") {
    for (var key in options) {
      opt[key] = options[key];
    }
  }
  // Object.assign()
  const ToastController = Vue.extend(ToastComponent);
  var instance = new ToastController().$mount(document.createElement("div"));
  instance.msg = msg;
  instance.visible = true;
  document.body.appendChild(instance.$el);
  setTimeout(() => {
    instance.visible = false;
    document.body.removeChild(instance.$el);
    instance.visible = false;
  }, opt.duration);
};

Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.prototype.$http = axios;

import VueI18n from "vue-i18n";

Vue.use(VueI18n); // 通过插件的形式挂载

const i18n = new VueI18n({
  locale: "zh-CN", // 语言标识
  messages: {
    "zh-CN": require("./utils/lang/zh-cn"), // 中文语言包
    "en-US": require("./utils/lang/en-us") // 英文语言包
  }
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  i18n,
  store,
  template: "<App/>",
  components: { App }
});

router.beforeEach((to, from, next) => {
  let isDone = store.state.isDone;
  console.log(to.path);
  console.log(from.path);
  if (to.path === "/question" && from.path === "/score") {
    store.commit("IS_DONE", true);
    next();
  } else if (from.path === "/") {
    // 初始化数据
    store.commit("INIT_DATA");
    next();
  } else {
    next();
    // console.log('小时')
  }
});
