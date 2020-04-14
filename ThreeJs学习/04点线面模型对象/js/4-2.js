/**
 * 4.2模型对象旋转平移缩放变换
 */
// import THREE from 'three'
// 场景
var scene = new THREE.Scene()
var geometry = new THREE.BoxGeometry(100, 100, 100)
// 点模型
// var material = new THREE.PointsMaterial({
//   color: 0xff0000,
//   size: 10.0
// })
// var points = new THREE.Points(geometry, material)
// scene.add(points)

// 线模型
// var material = new THREE.LineBasicMaterial({
//   color: 0xff0000,
// })
// 线模型除了Line还有LineLoop和LineSegments,
// LineLoop和Line区别是连线的时候会闭合把第一个顶点和最后一个顶点连接起来，
// LineSegments则是顶点不共享，第1、2点确定一条线，第3、4顶点确定一条直线，第2和3点之间不连接。
// var line = new THREE.Line(geometry, material)
// var line = new THREE.LineLoop(geometry, material)
// var line = new THREE.LineSegments(geometry, material)
// scene.add(line)

// 网格模型
var material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  wireframe: true
})
var mesh = new THREE.Mesh(geometry, material)
// 缩放
// mesh.scale.set(0.5,1.5,2)

// 位置信息
// mesh.position.set(50,0,0)

// 平移
// mesh.translateX(50)

// 自定义方向移动
// var axis = new THREE.Vector3(1,1,1)
// axis.normalize() // 向量归一化
// // 沿着axis方向移动100
// mesh.translateOnAxis(axis, 100)

// 旋转
mesh.rotateX(Math.PI/4)
scene.add(mesh)

// 相机
var width = window.innerWidth
var height = window.innerHeight
var k = width/height
var s = 200
var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 0.1, 1000)
camera.position.set(100,100,100)
camera.lookAt(scene.position)
// 渲染器
var renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
document.body.appendChild(renderer.domElement)
function render() {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}
render()
var control = new THREE.OrbitControls(camera, renderer.domElement)
var axesHelper = new THREE.AxesHelper(250)
scene.add(axesHelper)