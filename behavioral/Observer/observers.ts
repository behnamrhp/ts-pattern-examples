import { counterObserver } from "./protocols";

export class ObserverNum1 implements counterObserver {
  run() {
    console.log('observer number 1');
  }
}

export class ObserverNum2 implements counterObserver {
  run() {
    console.log('observer number 2');
  }
}