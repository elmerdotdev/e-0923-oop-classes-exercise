class Person {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set name(value) {
    this._name = value
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name)
    this._subject = subject
  }

  get subject() {
    return this._subject
  }

  set subject(newSubject) {
    this._subject = newSubject
  }

  teach() {
    return `${this.name} is teaching ${this.subject}`
  }
}

class Student extends Person {
  constructor(name, gradeLevel) {
    super(name)
    this._gradeLevel = gradeLevel
  }

  get gradeLevel() {
    return this._gradeLevel
  }

  set gradeLevel(newGrade) {
    this._gradeLevel = newGrade
  }

  study(faveSubject) {
    return `${this.name} is studying in grade ${this._gradeLevel}. His fave subject is ${faveSubject}`
  }
}

const person = new Person('John Smith')
console.log(person.name) // John Smith
person.name = 'Jane Doe'
console.log(person.name) // Jane Doe

const teacher = new Teacher('Jane Doe', 'History')
console.log(teacher.teach())
const teacher2 = new Teacher('Willy Nilly', 'P.E.')
console.log(teacher2.teach())

const student = new Student('Billy', 8)
console.log(student.study('Recess'))