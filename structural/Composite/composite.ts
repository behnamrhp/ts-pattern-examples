/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */
interface IFileSystemComponent {
  /* -------------------------------------------------------------------------- */
  name: string;
  /* -------------------------------------------------------------------------- */
  getFileSize: () => number;
  /* -------------------------------------------------------------------------- */
}

/* -------------------------------------------------------------------------- */
/*                                  Composite                                 */
/* -------------------------------------------------------------------------- */
class Directory implements IFileSystemComponent {
  /* ------------------------------ Dependencies ------------------------------ */
  private fileChildren: IFileSystemComponent[] = []
  /* -------------------------------------------------------------------------- */
  public name = 'Example Composite Directory';
  /* --------------------------------- Methods -------------------------------- */
  addChild(file: IFileSystemComponent) {
    this.fileChildren.push(file);
  }
  /* -------------------------------------------------------------------------- */
  removeChild(file: IFileSystemComponent) {
    this.fileChildren = this.fileChildren.filter((fileChild) => fileChild !== file);
  }
/* -------------------------------------------------------------------------- */
  getFileSize() {
    const allFileSizesArray = this.fileChildren.map((fileChild) => fileChild.getFileSize());
    
    const finalSizeOfDirectory = allFileSizesArray
      .reduce(
        (prevFileSize, currentFileSize) => prevFileSize + currentFileSize 
      ,0);

    return finalSizeOfDirectory;
  };
/* -------------------------------------------------------------------------- */
}

/* -------------------------------------------------------------------------- */
/*                                    Leaf                                    */
/* -------------------------------------------------------------------------- */
class FileLeaf implements IFileSystemComponent {
  /* ------------------------------ Dependencies ------------------------------ */
  public name = 'File Leaf Example'
  /* ------------------------------- Constructor ------------------------------ */
  constructor(name?: string) {
    this.name = name || this.name;
  }
  /* --------------------------------- Methods -------------------------------- */
  getFileSize() {
    return this.calcFileSize()
  }
  /* -------------------------------------------------------------------------- */
  private calcFileSize(): number {
    // calculate and get file size
    return 100;
  }
  /* -------------------------------------------------------------------------- */
}

/* -------------------------------------------------------------------------- */
/*                                 Client code                                */
/* -------------------------------------------------------------------------- */
const fileaLeaf = new FileLeaf();
const fileaLeaf2 = new FileLeaf('file leaf name 2');
const fileaLeaf3 = new FileLeaf('file leaf name 3');
const directoryComposite = new Directory();

directoryComposite.addChild(fileaLeaf);
directoryComposite.addChild(fileaLeaf2);
directoryComposite.addChild(fileaLeaf3);
console.log(directoryComposite);
directoryComposite.removeChild(fileaLeaf2);
console.log(directoryComposite);
const fileSize = directoryComposite.getFileSize();

const calculateAllSizeOfDirectory = (directory: IFileSystemComponent) => {
  return directory.getFileSize();
}

const directorySize = calculateAllSizeOfDirectory(directoryComposite);
console.log('our directory size is: ' + directorySize);