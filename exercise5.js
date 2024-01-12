class Calculator {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set name(newName) {
    this._name = newName
  }

  calculatorOwner() {
    return `Calculator owner is ${this.name}.`
  }

  static add(a, b) {
    return a + b
  }

  static sub(a, b) {
    return a - b
  }

  static mul(a, b) {
    return a * b
  }

  static div(a, b) {
    return a / b
  }
}

const calculator = new Calculator('John Smith') // Create an instance
console.log(calculator.calculatorOwner()) // normal methods need an instance

// Call static methods by their class name. Do not need an instance
console.log(Calculator.add(1, 2))
console.log(Calculator.sub(10, 5))
console.log(Calculator.mul(3, 5))
console.log(Calculator.div(20, 10))