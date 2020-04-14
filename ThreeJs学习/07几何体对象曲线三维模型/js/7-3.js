/**
 * 7.3样条曲线、贝赛尔曲线
 */
// import THREE from 'three'
var scene = new THREE.Scene()
var geometry = new THREE.Geometry()
// // 三维样条曲线 Catmull-Rom算法
// var curve = new THREE.CatmullRomCurve3([
//   new THREE.Vector3(-50, 20, 90),
//   new THREE.Vector3(-10, 40, 40),
//   new THREE.Vector3(0, 0, 0),
//   new THREE.Vector3(60, -60, 0),
//   new THREE.Vector3(70, 0, 80)
// ])
// // getPoints是基类Curve的方法，返回一个vector3对象作为元素组成的数据
// var points = curve.getPoints(100) // 分段数100，返回101个点
// // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
// geometry.setFromPoints(points)

// 二次贝赛尔曲线的参数p1、p3是起始点，p2是控制点，控制点不在贝塞尔曲线上。
// 三维二次贝塞尔曲线
// var p1 = new THREE.Vector3(-80, 0, 0);
// var p2 = new THREE.Vector3(0, 200, 0);
// var p3 = new THREE.Vector3(80, 0, 0);
// // 三维二次贝赛尔曲线
// var curve = new THREE.QuadraticBezierCurve3(p1, p2, p3);
var p1 = new THREE.Vector3(-80, 0, 0);
var p2 = new THREE.Vector3(-40, 100, 0);
var p3 = new THREE.Vector3(40, 100, 0);
var p4 = new THREE.Vector3(80, 0, 0);
// 三维三次贝赛尔曲线
var curve = new THREE.CubicBezierCurve3(p1, p2, p3, p4);
var points = curve.getPoints(100)
geometry.setFromPoints(points)

var material = new THREE.LineBasicMaterial({
  color: 0x0000ff
})
var mesh = new THREE.Line(geometry, material)
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