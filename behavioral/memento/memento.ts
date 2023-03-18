type linesState = string[]

interface ICanvasLines {
  drawLine(lineName: string): void;
  removeLine(lineName: string): void;
  save(): ICanvasLinesMemento;
  restore(Memento: ICanvasLinesMemento): linesState
}

class CanvasLines implements ICanvasLines {
  private lines: linesState = []

  drawLine(lineName: string) {
    // draw one line
    this.lines.push(lineName)
  }

  removeLine(lineName: string) {
    const lineIndex = this.lines.indexOf(lineName)
    if(!lineIndex) return;
    this.lines.splice(lineIndex, 1)
  }

  save() {
    return new CanvasLineMemento([...this.lines])
  }

  restore(Memento: ICanvasLinesMemento) {
    return Memento.getLines()
  }
}

interface ICanvasLinesMemento {
  getLines(): linesState;

  getDate(): string;
}

class CanvasLineMemento implements ICanvasLinesMemento {
  private lines: linesState

  private date: string

  constructor(lines: linesState) {
    this.lines = lines;

    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ')
  }

  getLines(): linesState {
    return this.lines
  }

  getDate(): string {
    return this.date
  }
}


class CanvasLineMementoCaretaker {
  private linesMementosHistory: ICanvasLinesMemento[] = []
  
  private originatorCanvasObject: ICanvasLines

  constructor(originator: ICanvasLines) {
    this.originatorCanvasObject = originator;
  }

  public backup() {
    this.linesMementosHistory.push(this.originatorCanvasObject.save())
  }

  public undo() {
    if(!this.linesMementosHistory.length) return;

    const lastMemento = this.linesMementosHistory.pop() as ICanvasLinesMemento

    console.log('restored to lines state: ', lastMemento?.getDate());

    this.originatorCanvasObject.restore(lastMemento)
  }

  public showHistory() {
    for (const memento of this.linesMementosHistory) {
      console.log(memento.getLines());
    }
  }
}

const canvaslines = new CanvasLines()
const canvasCaretaker = new CanvasLineMementoCaretaker(canvaslines)

canvaslines.drawLine('first line')
canvaslines.drawLine('second line')

canvasCaretaker.backup()

canvaslines.drawLine('third line')
canvaslines.drawLine('fourth line')

canvasCaretaker.backup()

console.log('first backup of canvas');
canvasCaretaker.showHistory()

console.log('undo to previous history');
canvasCaretaker.undo()
canvasCaretaker.showHistory()

console.log('undo to previous history');
canvasCaretaker.undo()
canvasCaretaker.showHistory()
