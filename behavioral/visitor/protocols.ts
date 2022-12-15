
export type IExtraVisitor = (emp: IEmploee) => void;

export interface IVisitor {
  accept: ( visitor: IExtraVisitor ) => void;
}

export interface IEmploee extends IVisitor {
  getSalary: () => number;
  setSalary: (sal: number) => void;
  salary: number
}
