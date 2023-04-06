abstract class DocumentAnalyzerTemplate {

  public analyzeData(path: string) {
    const file = this.openFile(path);
    const rawData = this.extractData(file);
    const analizedData = this.analizeData(rawData);
    this.sendReportData(analizedData)
    this.closeFile(path)
  }

  protected abstract openFile(path: string): string

  protected abstract extractData(data: string): string

  protected analizeData(data: string) {
    console.log('analyzing data on ' + data);    
    return data
  }

  protected sendReportData(data: string) {
    console.log('send reporting data of ' + data);
  }

  protected abstract closeFile(path: string): void;
}

class DocDataAnalyzer extends DocumentAnalyzerTemplate {
  protected openFile(path: string) {
    console.log('doc file: opening the file in path of ' + path);
    return 'file data'
  };

  protected extractData(data: string) {
    console.log('doc file: extracting data of ' + data);
    return 'some extracted data'
  };

  protected closeFile(path: string) {
    console.log('closing the doc file in the path of ' + path);
  }
}

class CsvDataAnalyzer extends DocumentAnalyzerTemplate {
  protected openFile(path: string) {
    console.log('csv file: opening the file in path of ' + path);
    return 'file data'
  };

  protected extractData(data: string) {
    console.log('csv file: extracting data of ' + data);
    return 'some extracted data'
  };

  protected closeFile(path: string) {
    console.log('closing the csv file in the path of ' + path);
  }
}

function analyzeData(analyzer: DocumentAnalyzerTemplate, path: string) {
  analyzer.analyzeData(path)
}

console.log('********DOC File*******');
const docAnalyzer = new DocDataAnalyzer()
analyzeData(docAnalyzer, '/some/path/to/docfile')
console.log('********CSV File*******');
const csvAnalyzer = new CsvDataAnalyzer()
analyzeData(csvAnalyzer, '/some/path/to/csvfile')