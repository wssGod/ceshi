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
// 直接引用的话会报错 需要安装 npm install --save-dev vue-loader vue-template-compiler
// 之后进行webpack配置,还会报错之后将vue-loader的版本降低一些改成13的版本
import App from './vue/App.vue'
// import App from './vue/app.js'
// const App = {
//   template:  `
//     <div>
//       <h2>{{message}}</h2>
//     </div>
//   `,
//   data(){
//     return {
//       message: 'Hello WebPack1111'
//     }
//   }
// }


const app = new Vue({
  el: '#app',
  // template 会替换掉#APP的代码，在这里面写太麻烦
  // template: `
  //   <div>
  //     <h2>{{message}}</h2>
  //   </div>
  // `,
  template: '<App/>',
  components: {
    App
  },
  data: {
    message: 'Hello WebPack'
  }
})