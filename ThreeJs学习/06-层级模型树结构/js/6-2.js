/**
 * 6.2层级模型节点命名、查找、遍历
 */
// import THREE from 'three'
var scene = new THREE.Scene()
// var geometry = new THREE.BoxGeometry(20,20,20)
// var material = new THREE.MeshLambertMaterial({
//   color: 0x0000ff
// })
// var group = new THREE.Group()
// var mesh1 = new THREE.Mesh(geometry, material)
// var mesh2 = new THREE.Mesh(geometry, material)
// mesh2.translateX(50)
// group.add(mesh1)
// group.add(mesh2)
// // 网格模型命名
// mesh1.name = '眼镜'
// // 对mesh父对象命名
// group.name = '头'
// //沿着Y轴平移mesh1和mesh2的父对象，mesh1和mesh2跟着平移
// group.translateX(50)
// //父对象缩放，子对象跟着缩放
// group.scale.set(2,2,2)
// // 父对象旋转子对象也跟着旋转
// group.rotateX(Math.PI/6)
// scene.add(group)
// console.log(scene.children)
// console.log(group.children)
// 头部网格模型和组
var headMesh = sphereMesh(10, 0, -10, 0)
headMesh.name = '脑壳'
var leftEyeMesh = sphereMesh(1, 8, -5, 4)
leftEyeMesh.name = '左眼'
var rightEyeMesh = sphereMesh(1, 8, -5, -4)
rightEyeMesh.name = '右眼'
var headGroup = new THREE.Group()
headGroup.name = '头部'
headGroup.add(headMesh, leftEyeMesh, rightEyeMesh)
// 身体网格模型和组
var neckMesh = cylinderMesh(5, 6, 0, -20, 0);
neckMesh.name = "脖子"
var bodyMesh = cylinderMesh(14, 30, 0, -35, 0);
bodyMesh.name = "腹部"
var leftLegMesh = cylinderMesh(4, 60, 0, -80, -7);
leftLegMesh.name = "左腿"
var rightLegMesh = cylinderMesh(4, 60, 0, -80, 7);
rightLegMesh.name = "右腿"
var leftFootMesh = cylinderMesh(4, 1, 3, -110, 7)
leftFootMesh.name = '左脚'
leftFootMesh.scale.set(2,1.5,1.2)
var rightFootMesh = cylinderMesh(4, 1, 3, -110, -7)
rightFootMesh.name = '右脚'
rightFootMesh.scale.set(2,1.5,1.2)
var legGroup = new THREE.Group();
legGroup.name = "腿"
legGroup.add(leftLegMesh, rightLegMesh, leftFootMesh, rightFootMesh);
var leftHandMesh = cylinderMesh(4, 30, 0, -31, 25)
leftHandMesh.name = '左手'
leftHandMesh.rotateX(2*Math.PI/3)
var rightHandMesh = cylinderMesh(4, 30, 0, -31, -25)
rightHandMesh.name = '右手'
rightHandMesh.rotateX(Math.PI/3)
var handGroup = new THREE.Group()
handGroup.name = '手'
handGroup.add(leftHandMesh, rightHandMesh)
var bodyGroup = new THREE.Group();
bodyGroup.name = "身体"
bodyGroup.add(neckMesh, bodyMesh, legGroup, handGroup);
// 人Group
var personGroup = new THREE.Group();
personGroup.name = "人"
personGroup.add(headGroup, bodyGroup)
personGroup.translateY(50)
scene.add(personGroup);
// 构建球体网格模型的函数
function sphereMesh(R, x, y, z) {
  // 球体几何体
  var geometry = new THREE.SphereGeometry(R, 25, 25)
  var material = new THREE.MeshPhongMaterial({
    color: 0x0000ff
  })
  var mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(x, y, z)
  return mesh
}
// 圆柱体网格模型个组
function cylinderMesh(R, h, x, y, z) {
  var geometry = new THREE.CylinderGeometry(R, R, h, 25, 25)
  var material = new THREE.MeshPhongMaterial({
    color: 0x0000ff
  })
  var mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(x, y, z)
  return mesh
}

scene.traverse(function(obj){
  if(obj.type === 'Group') {
    console.log(obj.name)
  }
  if(obj.type === 'Mesh') {
    console.log(obj.name)
    obj.material.color.set(0x00ff00)
  }
  if (obj.name === "左眼" | obj.name === "右眼") {
    obj.material.color.set(0x000000)
  }
  // 打印id属性
  console.log(obj.id);
  // 打印该对象的父对象
  console.log(obj.parent);
  // 打印该对象的子对象
  console.log(obj.children);
})
// 遍历查找对象的子对象，返回name对应的对象（name是可以重名的，返回第一个）
var nameNode = scene.getObjectByName ( "左腿" );
nameNode.material.color.set(0xff0000);

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
  scene.rotateY(0.1)
  requestAnimationFrame(render)
}
render()
var control = new THREE.OrbitControls(camera, renderer.domElement)
var axesHelper = new THREE.AxesHelper(250)
scene.add(axesHelper)