import deepClone from "./deepClone"

interface IPrototype<Object> {
  clone(): Object
}

class Emploee implements IPrototype<Emploee> {
  name: string
  workHoursPerDay: number
  baseSalarPerHour = 100
  time:Date
  constructor(name: string, workHoursPerDay: number) {
    this.name = name;
    this.workHoursPerDay = workHoursPerDay
  }

  clone() {
      const shallowCopy = {...this}

      return deepClone(shallowCopy)
  }

  calcSalary() {
    return this.workHoursPerDay * this.baseSalarPerHour * 8 * 30
  }
}

const emploee1 = new Emploee('jack', 7)
emploee1.time = new Date();

const emploee2 = emploee1.clone()

if (emploee1.time === emploee2.time) {
  console.log("copy's object is refered to original object, Oops!");
} else {
  console.log('copy object is not refered to original object, yay!');
}