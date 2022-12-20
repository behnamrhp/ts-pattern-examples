interface ITransport {
  createTransport: () => void
}
class Truck implements ITransport {
  createTransport() {
    console.log('truck transport created');
  };
}

class Ship implements ITransport {
  createTransport() {
    console.log('shipment transport created');
  };
}

class LogisticFactory {
  create(type: 'ship'| 'truck') {
    switch(type){
      case 'ship':
        return new Ship();
      case 'truck':
        return new Truck();
    }
  }
}

const logisticFactory = new LogisticFactory()

const logistic = logisticFactory.create('ship') // you can change it by `truck` argument

logistic.createTransport()