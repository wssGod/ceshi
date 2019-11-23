const path = require('path')
module.exports = {
  // 入口
  entry: './src/main.js', 
  // 出口  
  output: {
    // 路径，绝对路径（动态获取路径）__dirname:当前文件的路径
    path: path.resolve(__dirname, 'dist'),
    // 文件名
    filename: 'handel.js',
  },
  module: {
    rules: [
      // css-loader只负责将文件进行加载
      //  style-loader将样式绘制到DOM上
      { 
        test: /\.css$/, 
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  }
}