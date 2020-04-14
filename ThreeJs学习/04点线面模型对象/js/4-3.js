/**
 * 4.3对象克隆.clone()和复制.copy()
 */
// import THREE from 'three'
// 场景
var scene = new THREE.Scene()
var geometry = new THREE.BoxGeometry(100,100,100)
var p1 = new THREE.Vector3(1.2,2.6,3.2)
var p2 = new THREE.Vector3(0,0,0)
var p3 = p1.clone()
p2.copy(p1)
console.log(p2)
console.log(p3)
// 网格模型
var material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  wireframe: true
})
var mesh = new THREE.Mesh(geometry, material)
var mesh2 = mesh.clone()
mesh2.translateX(100)
scene.add(mesh2)
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