const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
// 生产时的配置
// module.exports = {
//   // webpack中的一些插件的使用
//   plugins:[
//     // 对打包的js文件进行压缩，使用第三方插件 npm install uglifyjs-webpack-plugin@1.1.1 --save-dev 并且制定版本1.1.1和CLI2保持一致 
//     // 压缩之后注释也会被删除掉
//     new UglifyjsWebpackPlugin()
//   ],
// }

module.exports = webpackMerge(baseConfig, {
  plugins: [
    new UglifyjsWebpackPlugin()
  ]
})