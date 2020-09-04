let p1: {
  name: string
  age: number
  sayHi: () => void
} = {
  name: "jack",
  age: 18,
  sayHi: function () {
    console.log('111')
  }
}

// 接口， 可复用
interface IUser {
  name: string
  age: number
  sayHi: () => void
}

let p2: IUser = {
  name: "rose",
  age: 17,
  sayHi: function () {
    console.log('222')
  }
}

let p3: IUser = {
  name: "luce",
  age: 17,
  sayHi: function () {
    console.log('333')
  }
}