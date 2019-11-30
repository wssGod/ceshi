// 没有BOM和DOM
// 3.1 核心模块：node为JavaScript提供了很多服务器级别的API，这些API绝大多数都被包装到了一个具名的
//     核心模块中了，例如文件的操作‘fs’核心模块，http服务构建的‘http’模块，path路径操作模块、os操作系统信息模块
// 核心模块必须使用require('fs')来进行引用
var os = require('os')
// 获取当前机器的CPU信息
console.log(os.cpus())