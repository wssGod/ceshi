var http = require('http')
var fs = require('fs')

// 阻塞代码示例
var data = fs.readFileSync('01笔记.md')
console.log(data.toString())

// 非阻塞代码示例
fs.readFile('01笔记.md', function(err, data) {
  if (err) {
    console.log(err)
    return
  }
  console.log(data.toString())
})

http.createServer('require', function(require, response){
  response.end('Hello Word1111')
}).listen(8888)
// NodeJs时间循环
// 引入事件模块
var events = require('events')
// 创建eventEmitter对象
var eventEmitter = new events.EventEmitter();
// 绑定 connection 时间处理程序
eventEmitter.on('connection', function(){
  console.log('连接成功')
  eventEmitter.emit('data_received')
})
eventEmitter.on('data_received', function(){
  console.log('数据接收成功')
})
eventEmitter.emit('connection')
console.log('程序执行完毕....')