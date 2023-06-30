/**
 * this class is delegates as **Abstraction** part and it is responsible for handling all of the real works.
 * the **Abstraction** part keep a reference to **Implementation** part
 * in this example our button component act as **Abstraction** part and can handle multiple UI logic in many cases
 */
class ButtonView {
  private viewmodel: IButtonViewmodel;

  constructor(viewmodel: IButtonViewmodel) {
    this.viewmodel = viewmodel;
  }

  render() {
    console.log('***************');
    this.viewmodel.onClickHandler();
    console.log('button showed and on click method has been called called');
    console.log('***************');
  }
}

/**
 * this interface defines all of **Implementations** interface. 
 * this interface is nothing to do with **Astraction** interface and it just a brige between **Implementations** and **Abstractions**
 */
interface IButtonViewmodel {
  onClickHandler: () => void;
}


/**
 * each of these viewmodels is responsible for **Implementation** part
 * all of them impelments IButtonViewmodel interface
 */
class ChangeColorViewmodel implements IButtonViewmodel {
  onClickHandler() {
    console.log('clicked on the change color button')
  };
}

class ChangeBackgroundViewmodel implements IButtonViewmodel {
  onClickHandler() {
    console.log('clicked on the change background button')
  };
}

/**
 * client codes are just depend on **Abstraction** part and doesn't care about **Implementation** part
 * @param button our main component that it is **Abstraction** part 
 */
function mainPage(button: ButtonView) {
  button.render();
}


const impelmentColor = new ChangeColorViewmodel()
const abstraction = new ButtonView(impelmentColor);

mainPage(abstraction);