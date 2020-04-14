/**
 * JavaScript 只有字符串数据类型，无二进制数据类型
 * Buffer 专门存放二进制数据缓存区
 * 
 * (1)Buffer 与字符编码
 *    ascii     仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的
 *    utf8      多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8
 *    utf16le   2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF
 *    ucs2      utf16le 的别名
 *    base64    Base64 编码
 *    latin1    一种把 Buffer 编码成一字节编码的字符串的方式
 *    binary    latin1 的别名
 *    hex       将每个字节编码为两个十六进制字符
 */
// (1)Buffer 与字符编码
const buf = Buffer.from('runoows') // 创建一个Buffer对象
console.log(buf.toString('hex')) // 将每个字节编码为两个十六进制字符
console.log(buf.toString('ascii')) // 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的