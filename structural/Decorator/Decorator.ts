/* -------------------------------------------------------------------------- */
/*                            Main Logic Interface                            */
/* -------------------------------------------------------------------------- */
/**
 * This is the interface that main logics using it
 * in the app and in the Decorators we want to use it 
 * to add some more functionality to it
 */
interface ILoggers {
  log(message: string): void;
}

/* -------------------------------------------------------------------------- */
/*                                 Main Logics                                */
/* -------------------------------------------------------------------------- */
/**
 * This is one of our main logics that we are using them inside of our app
 * and we need to improve it's functionality in the runtime without touching
 * its implementation
 */
class ConsoleLogger implements ILoggers {
  log(message: string) {
    console.log(`this is the main logging and message is -> ${message}`);
  }
}

/**
 * This is another main logic that we want to improve its functionality in 
 * runtime without touching its implementation or duplication our codes
 */
class ConsoleErrorLogger implements ILoggers {
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
 * Note: you can handle extra funtionality directly in this class instead of
 * making multiple decorators
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
/**
 * This is one of the decorators, that we can use it and we extending it from 
 * the main decorator parent.
 * Note: You can add multiple decorators like this,
 * to add different functionality to main logics. 
 */
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
const logger = new ConsoleErrorLogger()

const decorator = new SaveToCSVFileLoggerDecorator(logger)

decorator.log('Some random message');