const SignletoneExample = (function(){
  function ProcessManager(){
    this.numProcess = 0
  }

  let pManager;

  return {
    getProcessManager: () => {
      if( !pManager ) pManager = new ProcessManager()

      return pManager
    }
  }
})()

const processManager = SignletoneExample.getProcessManager()

const processManager2 = SignletoneExample.getProcessManager()

console.log(processManager === processManager2);