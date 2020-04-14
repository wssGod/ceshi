/**
 * 7.6旋转造型LatheGeometry
 */
// import THREE from 'three'
var scene = new THREE.Scene()
// 创建旋转的网格模型
var points = [
  new THREE.Vector2(50, 60),
  new THREE.Vector2(25, 0),
  new THREE.Vector2(50, -60)
]
// 样条曲线插值计算
var shape = new THREE.Shape()
shape.splineThru(points)// 顶点带入样条插值计算函数
var splinePoints = shape.getPoints(20)
var geometry = new THREE.LatheGeometry(splinePoints, 20)
var material = new THREE.MeshPhongMaterial({
  color: 0x0000ff,
  side: THREE.DoubleSide // 两面可见
})
material.wireframe = true // 线条模式渲染
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