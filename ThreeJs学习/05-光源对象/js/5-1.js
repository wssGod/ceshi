/**
 * 5.1光照原理和常见的光照类型
 */
// import THREE from 'three'
// 场景
var scene = new THREE.Scene()
var geometry = new THREE.BoxGeometry(100, 100, 100)
// 网格模型
var material = new THREE.MeshLambertMaterial({
  color: 0x0000ff,
})
var mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//环境光:环境光颜色RGB成分分别和物体材质颜色RGB成分分别相乘
// var ambient = new THREE.AmbientLight(0xffffff)
// scene.add(ambient)
// 点光源
// var point = new THREE.PointLight(0xffffff)
// point.position.set(-400,-200,-300)
// scene.add(point)
// 平行光
// var directionalLight = new THREE.DirectionalLight(0xffffff,1)
// // 设置光源的方向：通过光源position属性和目标指向对象的position属性计算
// directionalLight.position.set(80, 100, 50)
// directionalLight.target = mesh
// scene.add(directionalLight)
// 聚光源
var splotLight = new THREE.SpotLight(0xffffff)
splotLight.position.set(200,200,200)
splotLight.target = mesh
splotLight.angle = Math.PI/6
scene.add(splotLight)
var splotLightHelper = new THREE.SpotLightHelper(splotLight)
scene.add(splotLightHelper)

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