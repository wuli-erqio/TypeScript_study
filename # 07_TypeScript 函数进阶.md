# 第七章 TypeScript 函数进阶

变量的作用域

根据范围的不同，变量可以分为两种：1.局部变量  2.全局变量

- 局部变量：表示在函数内部声明的变量，该变量只能在函数内部使用
- 全局变量：表示在函数外部声明的变量，该变量在当前ts文件的任何地方都可以使用

## 一、对象的概述

TS中的对象：一组相关的属性和方法的集合，并且是无序的

## 二、创建对象

对象的语法：let person = { }

此处的{}表示对象。而对象中没有属性或方法时，称为：空对象

- 对象中是属性或方法，采用键值对的形式，键、值之间使用冒号分隔，
- 多个属性之间使用逗号分隔
- 属性和方法的区别：只是不是函数，如果是，就成为方法，否则，就是属性
- 注意：函数用作方法是可以省略function后面的函数名，也叫做匿名函数。函数没有名称如何调用，此处的`sayHi`相当于函数名称，将来通过对象的`sayHi`就可以调用了。如果一个函数是单独出现的，没有与对象关联，我们就称为函数；否则，称为方法。

```typescript
let person = {
	name: '刘老师',
	age: 18,
	sayHi: function () {
		console.log('大家好，我是一个方法')
	}
}
```

## 三、接口

### 1、对象的类型注解

TS中的对象是结构化的，结构简单来说就是对象有什么属性或方法

```typescript
let person = {
	name: string;
	age: number;
}
这就是对象的结构化类型，对该对象值的结构化进行类型约束，或者说：建立一种契约，约束对象的结构。
let person = {
	name: '刘老师',
	age: 18
}
```

注意：键值对中的值是类型。多个键值对之间是哟个分号分隔，并且分号可以省略。

### 2、对象方法的类型注解

鼠标放在变量名上，`VSCode` 就会给出该变量的类型注解

```typescript
let person = {
	sayHi: () => void
	sing: (name, string) => void
	sum: (num1: number, num2: number) => number
}

let p1: {
    sayHi: () => void
}
p1 = {
    sayHi: function () {console.log('没有返回值')}
}

let p2: {
   sing: (name, string) => void
}
p2 = {
    sing: function (name: string) {console.log('没有返回值')}
}

let p3: {
    sum: (num1: number, num2: number) => number   
}
p3 = {
    sum: function (num1: number, num2: number) {
    	return num1 + num2    
    }
}
```

箭头左边的小括号中的内容，表示方法的参数类型

### 3、接口的使用

直接在对象名称后便写类型注解的坏处：

- 代码结构不简洁
- 无法复用类型注解

接口：为对象的类型注解命名，并为你的代码建立契约来约束对象的结构

语法：interface `Iuser` {

​				name: string

​				age: number

​			}

interface表示接口，接口名称约定以   **I**   开头

### 4、取值

取值，即：拿到对象中的属性或方法并使用

获取对象中的属性，称为：访问属性

获取对象中的方法并调用，称为：调用方法

- 访问属性  let jay = { name: '张三'， height: 175 }
- 通过点语法（.）就可以访问对象中的属性。 jay.name

