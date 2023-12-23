/**
 * This class is main creator and declares type of factory method and subclasses 
 *  implement this factory method 
 * 
 * In this main class gets theme from factory method and it'll save it in app
 */
abstract class ThemeFactoryCreator {
  /**
   * This is method is responsible for creating object that returns ITheme
   *  it should be specified by child sub classes 
   */
  protected abstract factoryMethod(): ITheme;

  /**
   * Creator's main responsibility is to do main business logic based on what 
   *  factory method returnes
   */
  public saveFinalTheme(): void {
    this.factoryMethod()
    console.log(`Creator saved final theme based on factory method that is: ${this.factoryMethod}`)
  }
}

/**
 * This creator is one sub classes that extends main creator and overrides 
 *  factory method to create new type of ITheme
 * 
 * This subclass can be a creator that gets users theme
 */
class UserThemeCreator extends ThemeFactoryCreator {
  /**
   * This factory method produces user theme object
   */
  protected factoryMethod(): ITheme {
      return {
        background: 'blue',
        text: 'red'
      }
  }
}

/**
 * This one is another creator that overrides factory method to create another
 *  type of factory method
 * 
 * This classs can be a default theme of app 
 */
class DefaultThemeCreator extends ThemeFactoryCreator {
  /**
   * This factory method will produce default theme based on 
   *  current pallette mode of system 
   */
  protected factoryMethod(): ITheme {
    const mode = this.getPalletteMode()
    const isDarkMode = mode === 'dark';
      return {
        background: isDarkMode ? 'black' : 'white',
        text: isDarkMode ? 'white' : 'black'
      }
  }

  /* ----------------------------- Private Methods ---------------------------- */
  /**
   * Note: Each Creator can have their own private methods 
   *  to handle factory method
   */
  private getPalletteMode() {
    console.log('calculation to get pallete mode in default theme')
    return "dark"
  }

  /* -------------------------------------------------------------------------- */
}

interface ITheme {
  background: string;
  text: string; 
}

/* -------------------------------------------------------------------------- */
/*                                 Client Code                                */
/* -------------------------------------------------------------------------- */
/**
 * Client code will work with instatiation of the Theme Creator and doesn't care
 *  about how it produces and what is the value of this theme. so we can
 *  separate client code from creation process
 */
function saveTheme(themeCreator: ThemeFactoryCreator) {
  console.log("Here is client code and doesn't know anything about theme value")
  themeCreator.saveFinalTheme()
}

console.log('--Run app with default theme--')
saveTheme(new DefaultThemeCreator())

console.log('--Run app with user theme--')
saveTheme(new UserThemeCreator())