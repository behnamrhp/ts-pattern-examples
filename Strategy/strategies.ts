import { IPacakge, IShippingStrategy } from "./protocols";

export class Fedex implements IShippingStrategy
{
 calculate(pkg: IPacakge) {
   // do some calcuations ...
   console.log(pkg);
   return 5.3
 }
}

export class UPS implements IShippingStrategy {
 calculate(pkg: IPacakge) {
   // do some calcuations ...
   console.log(pkg);
   return 3.7
 }
}

export class USPS implements IShippingStrategy {
 calculate(pkg: IPacakge) {
   // do some calcuations ...
   console.log(pkg);
   return 4.4
 }
}

