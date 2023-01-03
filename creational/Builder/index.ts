interface ICar {
  companyName: string;
  model: string;
  enginePower: number;
  color: string
}

class Car implements ICar {
  companyName: string;
  model: string;
  enginePower: number;
  color: string;

  constructor(companyName: string, model: string, enginePower: number, color: string) {
    this.companyName = companyName;
    this.model = model;
    this.enginePower = enginePower;
    this.color = color;
  }
}

class CarBuilder implements ICar {
  companyName: string;
  model: string;
  enginePower: number;
  color: string;
 
  setCompanyName(companyName: string) {
    this.companyName = companyName
    return this
  }

  setModelName(model: string) {
    this.model = model;
    return this
  }

  setEnginPower(enginePower: number) {
    this.enginePower = enginePower
    return this
  }

  setColor(color: string){
    this.color = color
    return this
  }

  build() {
    return new Car(this.companyName, this.model, this.enginePower, this.color)
  }
}

const car1 = new CarBuilder()
  .setCompanyName('Mercedes-Benz')
  .setModelName('S550')
  .setEnginPower(449)
  .setColor('black')
  .build()

console.log(car1);
