// require是一个方法
// 它的作用就是用来加载模块的
/**
 *  在Node中模块有三种
 *    具名的核心模块，例如fs、http
 *    用户自己编写的文件模块
 *      相对路径必须加 ./
 *      可以省略后缀名
 *  Node中没有全局作用域，只有模块作用域
 *    外部访问不到内部
 *    内部访问不到外部
 *    默认是封闭的
 *  既然是模块作用域，如何模块之间进行通信
 *    require方法有两个作用：
 *      1.加载文件模块并执行里面的代码
 *      2.拿到被加载文件模块导出的接口对象
 *      在每个文件模块中都提供了一个对象：exports
 *      exports默认是一个空对象
 *      把所有需要被外部访问的成员挂在exports上
 * IP地址用来定位计算机
 * 端口号用来定位应用程序
 */
console.log('a.start')
var b = require('./b.js')
console.log(b.data)
console.log(b.add(10,30))
console.log('a.end')