class ProcessManager {
  constructor(){
    if(ProcessManager.instance == null){
      this.logs = []

      ProcessManager.instance = this
    }

    return ProcessManager.instance
  }

  log(message){
    this.logs.push(message)
    console.log(message);
  }
}

const processManager = new ProcessManager()
const processManager2 = new ProcessManager()

console.log(processManager === processManager2);

console.log(processManager.log('first'));
console.log(processManager2.log('hi'));

console.log(processManager.logs);

