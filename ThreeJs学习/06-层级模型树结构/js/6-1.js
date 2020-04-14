/**
 * 6.1组对象Group、层级模型
 */
// import THREE from 'three'
var scene = new THREE.Scene()
var geometry = new THREE.BoxGeometry(20,20,20)
var material = new THREE.MeshLambertMaterial({
  color: 0x0000ff
})
var group = new THREE.Group()
var mesh1 = new THREE.Mesh(geometry, material)
var mesh2 = new THREE.Mesh(geometry, material)
mesh2.translateX(50)
group.add(mesh1)
group.add(mesh2)
//沿着Y轴平移mesh1和mesh2的父对象，mesh1和mesh2跟着平移
group.translateX(50)
//父对象缩放，子对象跟着缩放
group.scale.set(2,2,2)
// 父对象旋转子对象也跟着旋转
group.rotateX(Math.PI/6)
scene.add(group)
console.log(scene.children)
console.log(group.children)

var width = window.innerWidth
var height = window.innerHeight
var k = width/height
var s = 200
var camera = new THREE.OrthographicCamera(-s*k, s*k, s, -s, 0.1, 1000)
camera.position.set(100,100,100)
camera.lookAt(scene.position)

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