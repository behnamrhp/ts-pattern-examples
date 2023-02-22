enum EmploeeTypes {
  developer = 'developer',
  accounter = 'accounter',
  marketer = 'marketer',
}

interface IEmploeeSalary {
  setNextCalculator(calculator: IEmploeeSalary): IEmploeeSalary;
  calculate(emploeeType: `${EmploeeTypes}`): (number | null);
  baseSalary: number;
}

/**
 * this is the our default chaining handler 
 */
abstract class AbstractEmploeeCOR implements IEmploeeSalary {
  private nextCalculator: IEmploeeSalary;
  
  baseSalary: number = 5000;
  
  public setNextCalculator(calculator: IEmploeeSalary): IEmploeeSalary {
      this.nextCalculator = calculator;

      return calculator;
  }

  calculate(emploeeType: 'developer' | 'accounter' | 'marketer'): (number | null) {
    if (this.nextCalculator) return this.nextCalculator.calculate(emploeeType)
    return null
  }
}

/**
 * calculate developers salary
 */
class DeveloperSalaryCalculator extends AbstractEmploeeCOR {
  public calculate(emploeeType: 'developer' | 'accounter' | 'marketer'): (number | null) {
    if (emploeeType === EmploeeTypes.developer) return this.baseSalary * 3;
    return super.calculate(emploeeType)
  }
}

/**
 * calculate accounter salary
 */
class AccounterSalaryCalculator extends AbstractEmploeeCOR {
  public calculate(emploeeType: 'developer' | 'accounter' | 'marketer'): (number | null) {
    if (emploeeType === EmploeeTypes.accounter) return this.baseSalary * 2;
    return super.calculate(emploeeType)
  }
}

/**
 * calculate marketer salary
 */
class MarketerSalaryCalculator extends AbstractEmploeeCOR {
  public calculate(emploeeType: 'developer' | 'accounter' | 'marketer'): (number | null) {
    if (emploeeType === EmploeeTypes.marketer) return this.baseSalary * 4;
    return super.calculate(emploeeType)
  }
}

const developerCalculator = new DeveloperSalaryCalculator();
const accounterCalculator = new AccounterSalaryCalculator();
const marketerCalculator = new MarketerSalaryCalculator();

developerCalculator.setNextCalculator(accounterCalculator).setNextCalculator(marketerCalculator)

function emploeesSalaries(calculator: IEmploeeSalary) {
  const emploees = [EmploeeTypes.marketer, EmploeeTypes.accounter, EmploeeTypes.developer]

  for (const emploee of emploees) {
    console.log(`emploee type to calculate is ${emploee}`);

    const salary = calculator.calculate(emploee)

    if (salary){
      console.log(`salary for ${emploee} emploee is ${salary}`);
    } else {
      console.log(`emploee not found`);
    }
  }
}

console.log('**developer calculator chanining**');
emploeesSalaries(developerCalculator)

console.log('**accounter calculator chanining**');
emploeesSalaries(accounterCalculator)

