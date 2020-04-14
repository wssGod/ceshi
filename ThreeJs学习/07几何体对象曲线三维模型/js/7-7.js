/**
 * 7.7Shape对象和轮廓填充ShapeGeometry
 */
// import THREE from 'three'
var scene = new THREE.Scene()
// 创建旋转的网格模型
var points = [
  new THREE.Vector2(-50, -50),
  new THREE.Vector2(-60, 0),
  new THREE.Vector2(0, 50),
  new THREE.Vector2(60, 0),
  new THREE.Vector2(50, -50),
  new THREE.Vector2(-50, -50)
]
// 通过顶点定义轮廓
// var shape = new THREE.Shape(points)
// // shapes可以理解为一个需要填充的轮廓
// // 所谓的填充：ShapeGeometry算法利用顶点计算出三角面face3数据填充轮廓
// var geometry = new THREE.ShapeGeometry(shape, 250)

// var shape = new THREE.Shape()
// shape.absarc(0, 0, 100, 0, 2*Math.PI) // 圆形轮廓
// console.log(shape.getPoints(15)) // 查看shape顶点数据
// var geometry = new THREE.ShapeGeometry(shape, 25)

// 通过Shape绘制一个矩形区域
// 通过shpae基类path的方法绘制轮廓（本质也是生成顶点）
var shape = new THREE.Shape()
// 四条直线绘制一个矩形轮廓
// shape.moveTo(0, 0) // 起点
// shape.lineTo(0, 100)
// shape.lineTo(100, 100)
// shape.lineTo(100, 0)
// shape.lineTo(0, 0)
// var geometry = new THREE.ShapeGeometry(shape, 25)

// 圆弧与直线连接
// var R = 50
// // 绘制一个半径为R，圆心坐标（0，0）的半圆弧
// shape.absarc(0, 0, R, 0, Math.PI)
// // 从圆弧的一个端点(-R, 0)到(-R, -200)绘制一条直线
// shape.lineTo(-R, -100)
// // 绘制一个半径为R、圆心坐标(0, -200)的半圆弧
// shape.absarc(0, -100, R, Math.PI, 2 * Math.PI)
// //从圆弧的一个端点(R, -200)到(-R, -200)绘制一条直线
// shape.lineTo(R, 0);
// var geometry = new THREE.ShapeGeometry(shape, 30);

/**
 * 一个外轮廓圆弧嵌套三个内圆弧轮廓
 */
// // 外轮廓
// shape.arc(0, 0, 100, 0, 2*Math.PI)
// // 内轮廓1
// var path1 = new THREE.Path()
// path1.arc(0, 0, 40, 0, 2*Math.PI)
// // 内轮廓2
// var path2 = new THREE.Path()
// path2.arc(80, 0, 10, 0, 2*Math)
// // 内轮廓3
// var path3 = new THREE.Path()
// path3.arc(-80, 0, 10, 0, 2*Math)
// // 三个内轮廓分别插入到holes中
// shape.holes.push(path1, path2, path3)

/**
 * 矩形嵌套矩形或圆弧
 */
// // 外轮廓
// shape.moveTo(0, 0)
// shape.lineTo(0, 100)
// shape.lineTo(100, 100)
// shape.lineTo(100, 0)
// shape.lineTo(0, 0)
// // 内轮廓
// var path = new THREE.Path()
// // 内嵌圆形
// // path.arc(50, 50, 40, 0, 2*Math.PI)
// path.moveTo(20, 20)
// path.lineTo(20, 80)
// path.lineTo(80, 80)
// path.lineTo(80, 20)
// path.lineTo(20, 20)

// shape.holes.push(path)

/**
 * 多个轮廓同时填充
 */
// 轮廓对象1
shape.arc(-50, 0, 30, 0, 2*Math.PI)
// 轮廓对象2
var shape2 = new THREE.Shape()
shape2.arc(50, 0, 30, 0, 2*Math.PI)
// 轮廓对象3
var shape3 = new THREE.Shape()
shape3.arc(0, 50, 30, 0, 2*Math.PI)

var geometry = new THREE.ShapeGeometry([shape, shape2, shape3], 30);
var material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  side: THREE.DoubleSide // 两面可见
})
// material.wireframe = true // 线条模式渲染
var mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//相机
var width = window.innerWidth
var height = window.innerHeight
var k = width/height
var s = 200
var camera = new THREE.OrthographicCamera(-s*k, s*k, s, -s, 0.1, 1000)
camera.position.set(100,100,100)
camera.lookAt(scene.position)

// 渲染器
var renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
renderer.setClearColor(0xb9d3ff, 1)
document.body.appendChild(renderer.domElement)
function render() {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}
render()
var control = new THREE.OrbitControls(camera, renderer.domElement)
var axesHelper = new THREE.AxesHelper(250)
scene.add(axesHelper)