/**
 * 7.2直线、椭圆、圆弧、基类Curve
 */
// import THREE from 'three'
var scene = new THREE.Scene()
var geometry = new THREE.Geometry()
// 参数0，0圆弧坐标的原点x，y  100：圆弧半径， 0，2 * Math.PI：圆弧起始角度
// var arc = new THREE.ArcCurve(0, 0, 100, 0, Math.PI)
// //getPoints是基类Curve的方法，返回一个vector2对象作为元素组成的数组
// var points = arc.getPoints(50)
// // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
// geometry.setFromPoints(points)
// console.log(geometry.vertices)

// 绘制直线的效果
// var p1 = new THREE.Vector3(50, 0, 0)
// var p2 = new THREE.Vector3(0, 70, 0)
// geometry.vertices.push(p1, p2)

// 通过LineCurve3绘制一条三维直线。
var p1 = new THREE.Vector3(50, 50, 50)
var p2 = new THREE.Vector3(0, 70, 0)
var p3 = new THREE.Vector3(70, 0, 0)
// 三维直线LineCurve3
var LineCurve = new THREE.LineCurve3(p1, p2, p3)
// 二维直线LineCurve
// var LineCurve = new THREE.LineCurve(new THREE.Vector2(50, 0), new THREE.Vector2(0, 70));
var pointArr = LineCurve.getPoints(10)
geometry.setFromPoints(pointArr)
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