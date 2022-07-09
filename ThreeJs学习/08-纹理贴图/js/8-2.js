/**
 * 8.2Three.js几何体顶点纹理坐标UV
 */
// import THREE from 'three'
// import { Vector2 } from '../../js/three2'
// 场景
var scene = new THREE.Scene()
// 矩形平面
var geometry = new THREE.PlaneGeometry(204, 102)
// 遍历一下UV坐标
geometry.faceVertexUvs[0].forEach(elem => {
  elem.forEach(Vector2 => {
    // 所有的UV坐标全部设置成一个值
    Vector2.set(0.4, 0.4)
  })
})
// 纹理加载器的对象，可以加载图片作为几何体纹理
var textureLoader = new THREE.TextureLoader()
//
textureLoader.load('./img/8-1.jpg', function(texture) {
  var material = new THREE.MeshLambertMaterial({
    map: texture  // 设置颜色贴图的属性值
  })
  var mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)
  // 聚光源
  var splotLight = new THREE.SpotLight(0xffffff)
  splotLight.position.set(200,200,200)
  splotLight.target = mesh
  splotLight.angle = Math.PI/6
  scene.add(splotLight)
})
// 相机
var width = window.innerWidth
var height = window.innerHeight
var k = width / height
var s = 200
var camera = new THREE.OrthographicCamera(-s*k, s*k, s, -s, 0.1, 1000)
camera.position.set(0, 0, 100)
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

