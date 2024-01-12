class Vehicle {
  constructor(make, model) {
    this._make = make
    this._model = model
  }

  get make() {
    return this._make
  }

  set make(newMake) {
    this._make = newMake
  }

  get model() {
    return this._model
  }

  set model(newModel) {
    this._model = newModel
  }

  displayInfo() {
    return `This is a ${this.make} ${this.model}.`
  }
}

class Car extends Vehicle {
  constructor(make, model, doors) {
    super(make, model)
    this._doors = doors
  }

  get doors() {
    return this._doors
  }

  set doors(numOfDoors) {
    this._doors = numOfDoors
  }

  displayInfo() {
    return `${super.displayInfo()} It has ${this.doors} doors.`
  }
}

const vehicle = new Vehicle('Boeing', 747)
console.log(vehicle.displayInfo())

const car = new Car('Honda', 'Civic', 4)
console.log(car.displayInformation())