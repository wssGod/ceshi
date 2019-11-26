const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 入口
  entry: './src/main.js', 
  // 出口  
  output: {
    // 路径，绝对路径（动态获取路径）__dirname:当前文件的路径
    path: path.resolve(__dirname, 'dist'),
    // 文件名
    filename: 'handel.js',
    // 涉及到路径的前面都将加上dist/
    publicPath: 'dist/'
  },
  // 配置如何使用VUE
  resolve: {
    // 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      // 负责对css文件进行处理
      { 
        test: /\.css$/, 
        use: [
          //  style-loader将样式绘制到DOM上
          { loader: "style-loader" },
          // css-loader只负责将文件进行加载
          { loader: "css-loader" }
        ]
      },
      // webpack 处理less文件的配置
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      // 当加载的图片大于limit时
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      // 图片的处理
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         // 当加载的图片小于limit时，会将图片编译成base64字符串形式/*
      //         limit: 8192000000,
      //         // 打包后的文件名+哈希值8位+扩展名
      //         name: 'img/[name].[hash:8].[ext]'
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  // webpack中的一些插件的使用
  plugins:[
    // 对打包的文件进行添加版权的插件,先导入webpack
    new webpack.BannerPlugin('最终版权归**所有'),
    // 将index.html文件打包到dist文件夹只拿过，这个时候可以使用HtmlWebpackPlugin插件,自动生成模板
    // 先安装 npm install html-webpack-plugin --save-dev
    new HtmlWebpackPlugin()
  ]
}