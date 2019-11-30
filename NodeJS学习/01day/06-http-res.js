var http = require('http')
var server = http.createServer()
// request请求事件处理函数，需要接收两个参数；
// Request 请求对象
//  请求对象可以用来获取客户端的一些请求信息，例如请求路径
// Response 响应对象
//  响应对象可以用来给客户端发送响应消息    
server.on('request', function (request, response) {
  console.log('收到客户端的请求' + request.url)
  // response 对象有一个方法：write 可以用来给客户端发送响应数据
  // write 可以使用多次，但最后一定要使用end来结束响应，否则客户端一直等待
  response.write('hello')
  response.end()
})
server.listen(3000, function () {
  console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/来进行访问')
})