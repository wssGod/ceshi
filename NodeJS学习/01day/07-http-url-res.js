var http = require('http')
// 1.创建Server
var server = http.createServer()
// 2.监听request请求事件：设置请求处理函数
server.on('request', function (req, res) {
  // res.write('hello')
  // res.write(' world')
  // res.end()
  // 上面的方式比较麻烦，推荐使用下面方法
  // res.end('hello world')
  // 根据不同的请求路径发送不同的响应结果
  // 1.获取请求路径
  //  req.url 获取端口号之后的那一部分路径，也就是说所有的url都是以 / 开头的
  // 2.判断路径处理响应
  var url = req.url
  // if (url === '/') {
  //   res.end('index page')
  // } else if (url === '/login' ) {
  //   res.end('login page')
  // } else {
  //   res.end('404 Not Found')
  // }
  if (url === '/produce') {
    var produce = [
      {
        name: '香蕉1',
        price: 111
      },
      {
        name: '香蕉2',
        price: 222
      },
      {
        name: '香蕉3',
        price: 333
      }
    ]
    // 响应的内容只能是二进制数据或者是字符串，数字，对象，数组，布尔值都不行
    res.end(JSON.stringify(produce))
  }
})
// 3.监听
server.listen(3000, function () {
  console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/来进行访问')
})