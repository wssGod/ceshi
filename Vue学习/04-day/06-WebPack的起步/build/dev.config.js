// 开发时依赖
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
// module.exports = {
//   // 搭建本地服务器
//   //  1. npm install --save-dev webpack-dev-server@2.9.1
//   devServer: {
//     // 服务于哪个文件夹
//     contentBase: './dist',
//     // 是否实时监听
//     inline: true
//   }
// }
module.exports = webpackMerge(baseConfig,{
    devServer: {
      // 服务于哪个文件夹
      contentBase: './dist',
      // 是否实时监听
      inline: true
    }
})