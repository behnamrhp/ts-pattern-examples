class ProcessManager {
  static instance: any;
  public logs: string[]

  constructor(){
    if( ProcessManager.instance == null){
      this.logs = []

      ProcessManager.instance = this
    }

    return ProcessManager.instance
  }

  log(message: string){
    this.logs.push(message)
    console.log(message);
  }
}

const processM = new ProcessManager()
const processM2 = new ProcessManager()

console.log(processM === processM2);

console.log(processM.log('first'));
console.log(processM2.log('hi'));

console.log(processM.logs);