/**
 * 7.7Shape对象和轮廓填充ShapeGeometry
 */
// import THREE from 'three'
var scene = new THREE.Scene()
/**
 * 创建拉伸网格模型
 */
var shape = new THREE.Shape()
// 四条直线绘制一个矩形轮框
shape.moveTo(0, 0)
shape.lineTo(0, 10)
shape.lineTo(10, 10)
shape.lineTo(10, 0)
shape.lineTo(0, 0)
// 创建轮廓的扫描轨迹
var curve = new THREE.SplineCurve3([
  new THREE.Vector3( -10, -50, -50 ),
  new THREE.Vector3( 10, 0, 0 ),
  new THREE.Vector3( 8, 50, 50 ),
  new THREE.Vector3( -5, 0, 100)
])
// 拉伸造型
var geometry = new THREE.ExtrudeGeometry(
  shape, // 二维轮廓
  // 拉伸参数
  {
    // amount: 120,
    // bevelEnabled: false
    bevelEnabled:false,//无倒角
    extrudePath:curve,//选择扫描轨迹
    steps:50//扫描方向细分数
  }
)
var material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  size: 5.0
})
// material.wireframe = true // 线条模式渲染
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