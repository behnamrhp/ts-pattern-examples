import { IEmploee, IExtraVisitor } from "./protocols";

class Emploee implements IEmploee {
  salary: number = 0

  constructor(salary:number){
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  setSalary(sal: number) {
    this.salary = sal
  };

  accept(visitor:IExtraVisitor) {
    visitor(this)
  };
}

const emploee1 =  new Emploee(1000)

console.log(emploee1.getSalary());

function ExtraSalaryVisitor(emp: IEmploee) {
  emp.setSalary( emp.getSalary() * 2 )
}

emploee1.accept(ExtraSalaryVisitor)

console.log(emploee1.getSalary());