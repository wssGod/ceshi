var name = "小明";
var age = 18;
var flag = true;

function sum (num1, num2) {
  return num1 + num2
}

if (flag){
  console.log(sum(10, 20));
}
// 第一种导出方式
export{flag,sum};
// 2. 导出方式二
export let height = 100
// 3. 导出函数/类
export function mul(num1, num2){
  return num1 + num2
}

export class personalbar{
  run(){
    console.log('在奔跑')
  }
}
// 5.
export default name