import { ObserverNum1, ObserverNum2 } from "./observers";
import { Subject } from "./Subscribe";

class Counter extends Subject {
  count:number = 0;

  setCounter(counterToAdd:number) {
    this.count = this.count + counterToAdd;
    console.log('our count is ' + this.count);
    this.notify()
  }
}

const obeserver1 = new ObserverNum1()

const obeserver2 = new ObserverNum2()

const counter = new Counter()

counter.subscribe(obeserver1)
counter.subscribe(obeserver2)

counter.setCounter(2)