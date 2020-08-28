# 第五章 TypeScript数组

## 一、数组概述

用于存放多个数据的集合。

let names: string[] = ['迪丽热巴'，'古力娜扎', '马儿扎哈']

数组中都是同类型的数据

## 二、创建数组

创建数组有两种语法形式

- 语法一（推荐）：

  let names: string[] = []

  []表示数组，如果数组中没有内容，就是一个空数组

  类型注解是 **数据类型+[ ]**

  数组，多个元素之间使用**逗号**分隔

- 语法二（不推荐）：

  let names: string[] = new Array()

  let names: string[] = new Array('迪丽热巴'，'古力娜扎', '马儿扎哈')

## 三、数组长度和索引

数组是有序的集合，用来存储多个数据

### 1、数组长度

表示数组中元素的个数，通过数组的length属性来获取

### 2、数组的索引

数组中的每个元素都有自己的序号

我们把数组中的序号称为：索引（下标），数组中的元素与索引一一对应

注意：**数组的索引是从0开始的**

## 四、数组的取值和存值

### 1、取值

从数组中，获取到某个元素的值，就是从数组中取值。

数组中的元素与索引是一一对应的，通过索引获取某个元素的值

语法：**数组名称[索引]**

### 2、存值

如果要修改数组中的某个值，就要使用数组存值

技巧：先获取到要修改的元素，然后，在存值

语法： **数组名称[索引] = 新值**

### 3、添加元素

存值的语法是： 数组名称[索引] = 新值，根据索引是否存在，有两种功能：

- 修改元素
- 添加元素

1. 如果索引存在，就表示：修改元素
2. 如果索引不存在，就表示：添加元素。添加元素的通用写法：数组名称[数组长度] = 新值

## 五、遍历数组

遍历数组，也就是把数组中的所有元素挨个获取一次。

```typescript
let nums: number[] = [100, 200, 300, 500]
// i从0开始，因为索引是从0开始的
// length比索引大1，所以条件为i <= nums.length-1
// i < nums.length 相当于 i<= nums.length-1
for (let i:number = 0; i < nums.length; i++) {
	console.log(nums[i])
}

// 案例一：求数组中的所有元素和
let nums: number[] = [100, 200, 300, 500]
let sum: number = 0
for (let i:number = 0; i < nums.length; i++) {
	sum += nums[i]
}
console.log(sum)

// 案例二：找出数组中的最大值
let nums: number[] = [100, 200, 300, 500]
let max: number = nums[0]
for (let i: number = 0; i < nums.length; i++) {
	if(nums[i] > max) {
        max = nums[i]
    }
}
console.log(max)

// 案例三：找出不为0的元素，放到新数组
let nums: number[] = [100, 0, 0, 500, 4, 33, 0]
let newNums: number[] = []
for (let i: number = 0; i < nums.length; i++) {
	if(nums[i] !== 0) {
    	newNums[newNums.length] = nums[i]
  	}
}
console.log(newNums)
```





