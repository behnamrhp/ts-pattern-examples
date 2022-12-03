export interface IPacakge {
  from: string;
  to: string;
  weight: Number
}

export interface IShippingStrategy {
  calculate: (pkg: IPacakge) => number
}
