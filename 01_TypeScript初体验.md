# 第一章 TypeScript初体验

## 一、TypeScript概述

### 1、 JavaScript 是什么

JavaScript的运行环境：1.浏览器  2. node.js

Node.js让JavaScript摆脱了浏览器的束缚，可以实现服务端/桌面端编程等

其他：微信小程序、微信小游戏等等。

### 2、 TypeScript是什么

TypeScript（简称：TS）是JavaScript的超集（JS有的TS都有）

TypeScript = Type + JavaScript(为了Js添加类型系统)

TypeScript是微软开发的开源编程语言，射击目标是开发大型应用，可以在任何浏览器、任何计算机、任何操作系统上运行。

### 3、TypeScript相比JS的优势

JS的类型系统存在“先天缺陷”，绝大部分错误都是类型错误

- 优势一：**类型化思维方式**，使得开发更加严谨，提高发现错误，**减少该BUG时间**
- 优势二：类型系统提高了代码的可读性，并使**维护和重构代码方面更加容易**
- 优势三：补充了接口、枚举等开发大型应用时**JS缺失的功能**
- Vue 3源码使用TS重写，释放出重要的信号：TS是趋势
- Angular 默认支持TS；React与TS完美结合，是很多大型项目的首选

## 二、开发工具的准备

- VSCode
- Node.js：只认识JS代码，不认识TS代码
- 安装解析TS的工具包：npm i -g typescript

## 三、第一个TS文件

### 1、步骤

1. 创建ts文件
2. 写代码
3. 执行代码
   - TS代码 -> JS代码：在当前目录打开终端，输入命令 tsc hello.ts
   - 执行JS: 输入命令node hello.js

4. 简化执行TS的步骤
   - 简化方法： 使用ts-node包，“直接”在node.js中执行TS代码
   - npm i -g ts-node
   - 使用：ts-node

## 四、注释和输出语句

### 1、注释

- 单行注释
- 多行注释

```node.js
单行注释
// 快捷键 ctrl + /
多行注释
/*
... 快捷键 shift + alt + a
....
*/
```

### 2、输出语句

console.log()

- console表示控制台，在Nodejs中，终端窗口
- 小括号里表示要打印的信息