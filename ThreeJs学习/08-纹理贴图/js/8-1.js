/**
 * 8.1创建纹理贴图
 */
// import THREE, { Mesh } from 'three'
// 场景
var scene = new THREE.Scene()
// 纹理贴图映射到一个矩形平面
var geometry = new THREE.BoxGeometry(100, 100, 100) // 矩形平面
// TextureLoader创建一个纹理加载器对象，可以加载图片作为几何体纹理
var textureLoader = new THREE.TextureLoader();
// 执行load方法，加载纹理贴图成功后，返回一个纹理对象Texture
textureLoader.load('./img/8-1.jpg', function(texture) {
  var material = new THREE.MeshLambertMaterial({
    // color: 0x0000ff,
    // 设置颜色纹理贴图：Texture对象作为材质map的属性值
    map: texture // 设置颜色贴图的属性值
  });
  var mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)
  var ambient = new THREE.AmbientLight(0xeeeeee)
  scene.add(ambient)
  // 聚光源
  var splotLight = new THREE.SpotLight(0xffffff)
  splotLight.position.set(200,200,200)
  splotLight.target = mesh
  splotLight.angle = Math.PI/6
  scene.add(splotLight)
  // var splotLightHelper = new THREE.SpotLightHelper(splotLight)
  // scene.add(splotLightHelper)
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