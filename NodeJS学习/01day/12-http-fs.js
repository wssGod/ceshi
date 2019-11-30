/**
 *  1.结合fs发送文件中的数据
 *  2.Content-Type
 *      http://tool.oschina.net/commons
 *      不同的资源对应的Content-Type是不一样的
 *      图片不需要指定编码
 *      一般只为字符数据才指定编码
 */
var http = require('http')
var fs = require('fs')
var server = http.createServer()
server.on('request', function(req, res){
  var url = req.url
  if (url === '/') {
    // 肯定不能这么干
    // res.end('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Document</title></head><body><h1>首页</h1></body></html>')
    // 我们要发送的还是文件中的内容
    // 读取HTML文件
    fs.readFile('./resource/index.html', function(err, data){
      if (err) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('文件读取失败')
      } else {
        // data默认的是二进制数据，可以通过.toString转为咱们能够识别的字符串
        // res.end()支持两种数据类型，一种是二进制，一种是字符串
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(data)
      }
    })
    // 读取照片
  } else if (url === '/img') {
    fs.readFile('./resource/1.jpg', function(err, data){
      if (err) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('文件读取失败')
      } else {
        // data默认的是二进制数据，可以通过.toString转为咱们能够识别的字符串
        // res.end()支持两种数据类型，一种是二进制，一种是字符串
        // 图片就不需要指定编码了
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }
    })
  }
})
server.listen(3000, function(){
  console.log('服务已经启动')
})