// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import './assets/public/public.css'//公共样式css
import './assets/font/iconfont.css'//公共样式css
import $ from 'jquery'
import store from './store'
Vue.prototype.$http=axios
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  $,
  router,
  components: { App },
  template: '<App/>'
})
//拖拽
Vue.directive('drag',function(event){
  var oDiv = event;
  oDiv.onmousedown = function(ev){
    if(ev.target.className=='popover-head'){
      var disX = ev.clientX -oDiv.offsetLeft;
      var disY = ev.clientY - oDiv.offsetTop;
      document.onmousemove = function(ev){
        var l = ev.clientX-disX;
        var t = ev.clientY-disY;
        oDiv.style.left =  l+'px';
        oDiv.style.top = t+'px';
      };
      document.onmouseup = function(){
        document.onmousemove=null;
        document.onmouseup=null;
      };
    }
  };

});
