/* -------------------------------------------------------------------------- */
/*                            Main Logic Interface                            */
/* -------------------------------------------------------------------------- */
/**
 * This is the main logic's interface that is using in the main logics
 * and in the Decorators we want to use it 
 * and add some more functionality to it
 */
interface ILoggers {
  log(message: string): void;
}

/* -------------------------------------------------------------------------- */
/*                                 Main Logics                                */
/* -------------------------------------------------------------------------- */
/**
 * This is on of our main logic that we are using in the app
 * we need to improve it's functionality in the runtime without touching
 * its implementation
 */
class ConsoleLogger implements ILoggers {
  log(message: string) {
    console.log(`this is the main logging and message is -> ${message}`);
  }
}

/**
 * This is another main logic that we wants, improve its functionality in 
 * runtime without touching its implementation
 */
class ConsoleTableLogger implements ILoggers {
  log(message: string) {
    console.error(
      `this is the another logging for error logs and the messaage is -> ${message}`
      );
  }
}

/* -------------------------------------------------------------------------- */
/*                              Decorator Parent                              */
/* -------------------------------------------------------------------------- */
/**
 * This is the main parent for decorators to get decorator to 
 * handle the main operation by other decorators.
 * Note: you can handle extra funtionality in this class as well if you
 * don't have multiple decorators
 */
class SaveToFileLoggersDecorator implements ILoggers {
/* ------------------------------ Dependencies ------------------------------ */
  logger: ILoggers;
/* -------------------------------------------------------------------------- */
  constructor(logger: ILoggers) {
    this.logger = logger;
  }
/* -------------------------------------------------------------------------- */
  log(message: string) {
    this.logger.log(message);
  }
/* -------------------------------------------------------------------------- */
}

/* -------------------------------------------------------------------------- */
/*                                 Decorators                                 */
/* -------------------------------------------------------------------------- */
class SaveToCSVFileLoggerDecorator extends SaveToFileLoggersDecorator {
  /**
   * Decorators can call supper main operation to run default logics as well
   */
  log(message: string) {
    super.log(message)
    console.log('Saving to Csv file is processing');
  }
}

/* -------------------------------------------------------------------------- */
/*                                 Client Code                                */
/* -------------------------------------------------------------------------- */

const logger = new ConsoleTableLogger()

const decorator = new SaveToCSVFileLoggerDecorator(logger)

decorator.log('Some random message');