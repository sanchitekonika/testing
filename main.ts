export {}

let message = "yefbdfbfdo"
console.log(message)

let isBeginner: boolean = true
let total: number = 67
let name: string = "Hmm"
let n: null = null
let u: undefined = undefined

// total="new total"        -> Error

//array
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

//tuple
let person1: [string, number] = ["sanchit", 23]

//enum

enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green

// any

let random: any = 10
random = true
random = "Yeah"

//type inference

// works when initialization done with declaration

let a
a = 10
a = true

let b = 20
// b=true       -> Error: b is of type number

// union types

let multiTypes: number | boolean
multiTypes = 10
multiTypes = true

// function

function add(num1: number, num2: number = 10, num3?: number): number {
  if (!num3) return num1 + num2
  return num1 + num2 + num3
}
console.log(add(5, 5, 5))
console.log(add(5, 5))
console.log(add(5))

// add(5,'5')   -> Error

// interface

interface Person {
  firstName: string
  lastName: string
}

function display(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
  firstName: "Sanchit",
  lastName: "Gupta",
}

display(p)

// class

class Employee {
  employeeName: string
  constructor(employeeName: string) {
    this.employeeName = employeeName
  }

  greet() {
    console.log(`hello ${this.employeeName}`)
  }
}

let emp1 = new Employee("sanchit boy")
console.log(emp1.employeeName)
emp1.greet()
