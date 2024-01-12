// Instructions: 10 points
// 1. Create a superclass called Employee
// 2. Add a constructor that takes in a name, salary, and hireDate. Create setter and getter methods for each property
// 3. Add a method called introduction that returns name, salary, and hireDate in a sentence
// 4. Create an instance called employee1 with your name, salary, and hireDate
// 5. Call the introduction method and output on the console
// 6. Create a class called Manager that extends the Employee class
// 7. Using a constructor, create a new property called teamSize. Make sure to call the super method to inherit properties from the Employee class
// 8. Create a method called teamIntroduction that returns the introduction method from the Employee class, but also adds teamSize to the sentence. Use super to return the introduction method from the Employee class
// 9. Create an instance of Manager called manager1 with your own name, salary, hireDate, and teamSize
// 10. Using a setter, change the salary to a diffierent amount
// 11. Call the teamIntroduction method and output on the console

class Employee {
  constructor(name, salary, hireDate) {
    this._name = name
    this._salary = salary
    this._hireDate = hireDate
  }

  get name() {
    return this._name
  }

  set name(value) {
    this._name = value
  }

  get salary() {
    return this._salary
  }

  set salary(value) {
    this._salary = value
  }

  get hireDate() {
    return this._hireDate
  }

  set hireDate(value) {
    this._hireDate = value
  }

  introduction() {
    return `My name is ${this.name} and my salary is ${this.salary}. I was hired on ${this.hireDate}.`
  }
}

class Manager extends Employee {
  constructor(name, salary, hireDate, teamSize) {
    super(name, salary, hireDate)
    this.teamSize = teamSize
  }

  get teamSize() {
    return this._teamSize
  }

  set teamSize(value) {
    this._teamSize = value
  }

  teamIntroduction() {
    return `${super.introduction()} My team size is ${this.teamSize}.`
  }
}

const employee1 = new Employee('John', 10000, 'Jan 11, 2024')
console.log(employee1.introduction())

const manager1 = new Manager('Joe', 20000, 'Feb 11, 2020', 10)
console.log(manager1.teamSize)
console.log(manager1.teamIntroduction())
manager1.salary = 30000
manager1.teamSize = 20
console.log(manager1.teamIntroduction())