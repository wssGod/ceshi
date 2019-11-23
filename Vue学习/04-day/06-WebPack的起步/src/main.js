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