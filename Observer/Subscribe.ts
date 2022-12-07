import { counterObserver, ISubject } from "./protocols";

export class Subject implements ISubject {
  observers: counterObserver[] = []

  subscribe(observer: counterObserver){
    const isExists = this.observers.includes(observer)
    if( isExists ) return console.log('observer already existed');

    this.observers.push(observer)
  }


  unsubscribe(observer: counterObserver){
    const observerIndex = this.observers.indexOf(observer)

    if( observerIndex === -1 ) return console.log('observer not exists');

    this.observers.splice(observerIndex, 1)
  }

  notify() {
    this.observers.forEach( obeserver => obeserver.run() )
  }
}
