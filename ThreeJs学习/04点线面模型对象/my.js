// import THREE from 'three'
// 场景
var scene = new THREE.Scene()
// 声明一个缓冲几个题对象
var geometry = new THREE.BoxGeometry(100, 100, 100)
console.log('几何体顶点位置数据',geometry.vertices)
console.log('三角行面数据',geometry.faces)
geometry.faces.forEach(face => {
  // 设置三角面face三个顶点的颜色
  face.vertexColors = [
    new THREE.Color(0xffff00),
    new THREE.Color(0xff00ff),
    new THREE.Color(0x00ffff),
  ]
});
// 几何体xyz三个方向都放大2倍
geometry.scale(1,1,1)
// 几何体沿着x轴平移50
geometry.translate(50, 0, 0);
// 几何体绕着x轴旋转45度
geometry.rotateX(Math.PI / 4);
// 居中：偏移的几何体居中
geometry.center();
var material = new THREE.MeshBasicMaterial({
  // color: 0x0000ff
  vertexColors: THREE.FaceColors,
})
var points = new THREE.Mesh(geometry, material)
scene.add(points)

// 创建一个矩形平面几何体
var geometry1 = new THREE.PlaneBufferGeometry(100,100)
var material1 = new THREE.MeshBasicMaterial({
  color: 0x0000ff
})
var mesh1 = new THREE.Mesh(geometry1, material1)
mesh1.position.set(0,0,-200);//设置mesh3模型对象的xyz坐标为120,0,0
scene.add(mesh1)

// 相机
var width = window.innerWidth
var height = window.innerHeight
var k = width/height
var s = 200
var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 0.1, 1000);
camera.position.set(100, 100, 100); //设置相机位置
camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
/**
 * 创建渲染器对象
 */
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);//设置渲染区域尺寸
renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
//执行渲染操作   指定场景、相机作为参数
function render() {
  renderer.render(scene, camera)//请求再次执行渲染函数render
  requestAnimationFrame(render)
}
render();
var controls = new THREE.OrbitControls(camera, renderer.domElement)//创建控件对象
// 辅助三维坐标系
var axesHelper = new THREE.AxesHelper(250)
scene.add(axesHelper)