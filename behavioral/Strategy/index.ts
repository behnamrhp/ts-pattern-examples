import { IPacakge, IShippingStrategy } from "./protocols";
import { Fedex } from "./strategies";

class ShippingContext {
  private strategy: IShippingStrategy;
 
  public set setStrategy(strategy: IShippingStrategy) {
    this.strategy = strategy
  }
 
  public calculate(pkg: IPacakge){
    return this.strategy.calculate(pkg)
  }
 }

const shippingContext = new ShippingContext()

const samplePackage:IPacakge = {
 from: 'nevada',
 to: 'alabama',
 weight: 1.6
}

shippingContext.setStrategy = new Fedex

console.log(shippingContext.calculate(samplePackage));