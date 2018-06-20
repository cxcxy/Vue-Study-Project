import Vue from 'vue'
import App from './App.vue'
import Two from './Study-Demo/Two'
import Directives from './Study-Demo/Directives'
import Calculate from './Study-Demo/Calculate'
import Class from './Study-Demo/Class'
import IF from './Study-Demo/IF'
import FOR from './Study-Demo/FOR'
import Click from './Study-Demo/Click'
import VModel from './Study-Demo/VModel'
import one from './Study-Demo/component/one'


// import aEE from './Study-Demo/指令'
// import Directivesa from './Study-Demo'
// new Vue({
//   el: '#app',
//   render: h => h(AppOne)
// })
// var appTwo = new Vue({
//   // el 用于指定一个页面中已存在的DOM 元素来挂在Vue 实例，它可以是HTMLElement，
//   // 写法： el: document.getElementById('app') 或者 el: '#app'
//   el: '#app',
//   render: h => h(AppOne)
// })
var test = new Vue({
  el: '#study',
  data: {
    book: "111"
  },
  render: h => h(one)
})
// console.log(test.sex)