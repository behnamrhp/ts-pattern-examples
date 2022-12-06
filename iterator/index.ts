const ExampleCollection = [1, 'second', false, 3.25 ]

interface IIterator {
  next: () => unknown | undefined
  hasNext: () => boolean
}

class IncrementalIterator implements IIterator {
  private collection: unknown[]
  private index: number = 0;

  constructor(collection: unknown[]){
    this.collection = collection
  }

  next(){
    if( this.hasNext() ) return this.collection[this.index++]
  }

  hasNext(){
    return this.index < this.collection.length
  };
}

class DecrementalIterator implements IIterator {
  private collection: unknown[]
  private index: number;

  constructor(collection: unknown[]){
    this.collection = collection
    this.index = this.collection.length -1
  }

  hasNext() {
    return this.index >= 0
  };

  next() {
    if( this.hasNext() ) return this.collection[this.index--]
  }
}

const incrementalIterator = new IncrementalIterator(ExampleCollection)
const decrementalIterator = new DecrementalIterator(ExampleCollection)

console.log(decrementalIterator.next());
console.log(decrementalIterator.next());
console.log(decrementalIterator.next());
console.log(decrementalIterator.next());

