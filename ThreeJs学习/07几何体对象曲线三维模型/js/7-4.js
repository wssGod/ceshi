/**
 * 7.4多个线条组合曲线CurvePath
 */
// import THREE from 'three'
var scene = new THREE.Scene()
var geometry = new THREE.Geometry()
// 绘制一个U型轮廓
var R = 80
var arc = new THREE.ArcCurve(0, 0, R, 0, Math.PI, true)
// 半圆弧的一个端点作为直线的一个端点
var line1 = new THREE.LineCurve(new THREE.Vector2(R, 200, 0), new THREE.Vector2(R, 0, 0))
var line2 = new THREE.LineCurve(new THREE.Vector2(-R, 0, 0), new THREE.Vector2(-R, 200, 0))
// 创建组合曲线对象CurvePath
var CurvePath = new THREE.CurvePath()
// 把多个线条插入到CurvePath中
var CurvePath = new THREE.CurvePath()
CurvePath.curves.push(line1, arc, line2)
// 分段数200
var points = CurvePath.getPoints(200)
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