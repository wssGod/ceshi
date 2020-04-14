/**
 * 6.3Three.js获得世界坐标.getWorldPosition()
 */
// import THREE from 'three'
var scene = new THREE.Scene()
var geometry = new THREE.BoxGeometry(100,100,100)
var material = new THREE.MeshLambertMaterial({
  color: 0x0000ff
})
var mesh = new THREE.Mesh(geometry, material)
// mesh的本地坐标是(50,0,0)
mesh.position.set(50,0,0)
var group = new THREE.Group()
// group本地坐标设置和mesh一样设置为(50, 0, 0)
group.position.set(50,0,0)
group.add(mesh)
scene.add(group)
// .position属性获取本地位置坐标
console.log('本地坐标', mesh.position)
scene.updateMatrixWorld(true)
// getWorldPosition()方法获得世界坐标
//该语句默认在threejs渲染的过程中执行,如果渲染之前想获得世界矩阵属性、世界位置属性等属性，需要通过代码更新
var wordPosition = new THREE.Vector3()
mesh.getWorldPosition(wordPosition)
console.log('世界坐标',wordPosition);

// 光源
var point = new THREE.PointLight(0xffffff)
point.position.set(400, 200, 300)
scene.add(point)

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