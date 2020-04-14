/**
 * 7.5曲线路径管道成型TubeGeometry
 */
// import THREE from 'three'
var scene = new THREE.Scene()
// 创建管道成型的路径（3D样式曲线）
// var path = new THREE.CatmullRomCurve3([
//   new THREE.Vector3(-10, -50, -50),
//   new THREE.Vector3(10, 0, 0),
//   new THREE.Vector3(8, 50, 50),
//   new THREE.Vector3(-5, 0, 100)
// ])
// LineCurve3创建直线路径
// var path = new THREE.LineCurve3(
//   new THREE.Vector3(0, 100, 0),
//   new THREE.Vector3(0, 0, 0)
// )
// // path:路径   40：沿着轨迹细分数  2：管道半径   25：管道截面圆细分数
// var geometry = new THREE.TubeGeometry(path, 40, 5, 50)

// CurvePath多段路径生成管道案例
var p1 = new THREE.Vector3(-85.35, -35.36)
var p2 = new THREE.Vector3(-50, 0, 0)
var p3 = new THREE.Vector3(0, 50, 0)
var p4 = new THREE.Vector3(50, 0, 0)
var p5 = new THREE.Vector3(85.35, -35.36)
// 创建线条一：直线
let line1 = new THREE.LineCurve3(p1, p2)
// 重建线条2：三维样式曲线
var curve = new THREE.CatmullRomCurve3([p2, p3, p4])
// 创建线条3：直线
var line2 = new THREE.LineCurve3(p4, p5)
// 创建CurvePath
var CurvePath = new THREE.CurvePath()
CurvePath.curves.push(line1, curve, line2)
// 通过多段曲线路径创建生成管道，CurvePath:管道路径
var geometry = new THREE.TubeGeometry(CurvePath, 100, 5, 25, false)
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