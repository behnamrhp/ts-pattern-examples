interface PlantFactory { 
  makePlant: () => void; 
  makePicker: ()=> void;
}

function Apple(){}
function ApplePicker(){}
function Orange(){}
function OrangePicker(){}

class AppleFactory implements PlantFactory { 
  makePlant() { return new Apple(); } 
  makePicker() { return new ApplePicker(); } 
} 
class OrangeFactory implements PlantFactory { 
  makePlant() { return new Orange(); } 
  makePicker() { return new OrangePicker(); } 
}
