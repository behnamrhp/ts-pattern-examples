/* -------------------------------------------------------------------------- */
/*                                  Flyweigth                                 */
/* -------------------------------------------------------------------------- */
/**
 * This class serves as our intrinsic object containing 
 *  all shared data that each character can have in the same way.
 * 
 */
class CharacterStyleFlyweight {
/* ------------------------------ Dependencies ------------------------------ */
  private font: string;
/* -------------------------------------------------------------------------- */
  private size: number;
/* -------------------------------------------------------------------------- */
  private color: string;
/* ------------------------------ Constructure ------------------------------ */
  constructor(
    font: string,
    size: number,
    color: string
  ) {
    this.font = font;
    this.size = size;
    this.color = color;
  }
/* --------------------------------- Getters -------------------------------- */
  get getColor() {
    return this.color;
  }
/* -------------------------------------------------------------------------- */
  get getSize() {
    return this.size
  }
/* -------------------------------------------------------------------------- */
  get getFont() {
    return this.font;
  }
}
/* -------------------------------------------------------------------------- */
/*                                   Factory                                  */
/* -------------------------------------------------------------------------- */
/**
 * This class responsible for managing, caching and sharing the intrinsic object 
 *  and return the shared values
 */
class CharacterStyleFlyweightFactory {
/* -------------------------------------------------------------------------- */
  private styles: {[key: string]: CharacterStyleFlyweight} = {};
/* ----------------------------- Implementation ----------------------------- */
  getStyle(font: string, size: number, color: string) {
    const key = this.getKey(font, size, color);

    if(!this.styles[key]) {
      console.log('Factory: did not find saved flyweight, making new flyweight');
      this.styles[key] = new CharacterStyleFlyweight(font, size, color);
    }

    return this.styles[key]
  }
/* -------------------------------------------------------------------------- */
  getKey(font: string, size: number, color: string) {
    return `${font}-${size}-${color}`;
  }
}
/* -------------------------------------------------------------------------- */
/*                                 Client Code                                */
/* -------------------------------------------------------------------------- */
class TextEditor {
    private content: string = '';
    private styleFactory: CharacterStyleFlyweightFactory;

    constructor(styleFactory: CharacterStyleFlyweightFactory) {
      this.styleFactory = styleFactory
    }
    // Method to add formatted text
    addText(text: string, font: string, size: number, color: string) {
        const style = this.styleFactory.getStyle(font, size, color);
        this.content += 
          `<span 
            style="font-family: ${style.getFont}; font-size: ${style.getSize}px; color: ${style.getColor}"
            >
            ${text}
          </span>`;
    }

    // Method to display the formatted content
    render() {
        console.log(this.content);
    }
}

const editor = new TextEditor(new CharacterStyleFlyweightFactory());
editor.addText("Hello", "Arial", 12, "blue");
editor.addText("World", "Times New Roman", 16, "red");
/**
 * In this line we'll add different extrinsic value but with same intrinsic values.
 * So we'll use the shared flyweight intrinsic values for this content so
 *  we can use less memory for further data
 *  
 */
editor.addText("New example for Extrinsic values", "Times New Roman", 16, "red");
editor.render();