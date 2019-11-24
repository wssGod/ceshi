// 1.使用CommonJS模块化开发
const {sum,mul} = require('./js/mainUtil.js')

console.log(sum(10,20));
console.log(mul(20,30));
// 2.使用ES6 模块化开发
import {name,age,height} from './js/info.js';

console.log(name);
console.log(age);
console.log(height);

//3.依赖css文件
require('./css/normal.css')

// 4.依赖less文件 npm install --save-dev less-loader less
require('./css/special.less')

// 5. 引用图片的 npm install --save-dev url-loader
// 6. ES6的语法转成ES5的语法，需要使用babel
// 7. 使用Vue进行开发
import Vue from 'vue'
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello WebPack'
  }
})