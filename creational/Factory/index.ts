/**
 * We'll have a same interface that for multiple type of objects to work
 */
interface ITransport {
  createTransport: () => void
}

/**
 * Each objects will implement same interface with different logics
 * This one is Truck that will handle truck related logics for creating transportation
 */
class Truck implements ITransport {
  createTransport() {
    console.log('truck transport created');
  };
}

/**
 * This object is Ship that will handle ship related logics for creating transportation
 */
class Ship implements ITransport {
  createTransport() {
    console.log('shipment transport created');
  };
}

enum Transportations {
  SHIP = 'ship',
  TRUCK = 'truck'
}

/**
 * This class will be our Factory that based on transportation type, just will create 
 *  an object. 
 */
class LogisticFactory {
/* ----------------------------- Implementations ---------------------------- */
  /**
   * Note: this method can produce an object directly without making instantiating 
   *  and even add some object related logics. for example your can pass:
   *   firstname, lastname and this factory will add getFullName method to return object as well. 
   */
  create(type: Transportations): ITransport {
    switch(type){
      case Transportations.SHIP:
        return new Ship();
      case Transportations.TRUCK:
        return new Truck();
    }
  }
/* -------------------------------------------------------------------------- */
}

/* ------------------------------ Client Codes ------------------------------ */
const clientCode = (type: Transportations) => {
  const logisticFactory = new LogisticFactory()
  
  const logistic = logisticFactory.create(type) // you can change it by `truck` argument
  
  return logistic.createTransport()
}

clientCode(Transportations.SHIP)
clientCode(Transportations.TRUCK)