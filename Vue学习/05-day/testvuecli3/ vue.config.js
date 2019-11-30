module.exports = {
  devServer: {
   proxy: {
    '/mock': {
     target: 'http://localhost:8080',
     changeOrigin: true,
    //  pathRewrite: {
    //   '^/mock': '/mock'
    //  }
    }
   }
  }
}