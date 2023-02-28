interface Command {
  execute(): void;
  undo(): void;
}

/**
 * this object represented as receiver of command pattern that we wanna run it through command pattern
 */
class SalaryChangerReceiver {
  private salary: number; 

  constructor(baseSalary: number = 5000) {
    this.salary = baseSalary;
  }

  increase(increasedSalary: number) {
    this.salary += increasedSalary
    console.log(`salary after adding ${increasedSalary} salary will be ${this.salary}`);
  }

  decrease(decreasedSalary: number) {
    this.salary -= decreasedSalary
    console.log(`salary after subtracting ${decreasedSalary} salary will be ${this.salary}`);
  }
}

/**
 * this object represented as command in command pattern
 */
class changeSalaryCommand implements Command {
  private salarChanger: SalaryChangerReceiver
  private changedSalary: number;

  constructor(salarChanger: SalaryChangerReceiver, changedSalary: number) {
    this.changedSalary = changedSalary;
    this.salarChanger = salarChanger;
  }

  execute(): void {
      this.salarChanger.increase(this.changedSalary)
  }

  undo(): void {
      this.salarChanger.decrease(this.changedSalary)
  }
}

/**
 * this object represented as invoker of command pattern
 */
class SalaryChangerInvoker {
  private history: Command[] = [];

  execute(command: Command) {
    command.execute()
    this.history.push(command)
  }

  undo() {
    const command = this.history.pop()
    if (!command) return;
    command.undo()
  }
}

// client code
const receiver = new SalaryChangerReceiver()
const invoker = new SalaryChangerInvoker()

invoker.execute(new changeSalaryCommand(receiver, 5))
invoker.execute(new changeSalaryCommand(receiver, 10))
invoker.undo()