// 创建函数sum 
// 计算两个标量num1、num2的和

// 无参函数，函数体计算的数值没办法改变
function sum() {
  let num1:number = 10
  let num2: number = 20
  let result: number = num1 + num2
  console.log(result)
}
sum()

// 有参数，每次调用可以传入不同的数据
function sum1(num1:number = 0, num2: number = 0) {
  let result: number = num1 + num2
  console.log(result)
}
sum1(50, 20)