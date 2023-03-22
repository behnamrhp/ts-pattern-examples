interface IGameStateContext {
  transitionTo(state: IRunGameState): void;
  run(): void
}

/**
 * the context defines what clients want to show
 * in this Object we run the game base on the state that we are in
 */
class GameStateContext implements IGameStateContext {
  /**
   * this is a refrence to the current state of the game
   */
  private state: IRunGameState

  constructor(state: IRunGameState) {
    this.transitionTo(state)
  }

  /**
   * context allows us to change the state of the game
   * @param state state of the game with specific methods
   */
  public transitionTo(state: IRunGameState) {
    this.state = state
    this.state.setContext(this)
  }

  /**
   * context will handle running the request of the state
   */
  public run(): void {
    this.state.runTheGame()
  }
}

interface IRunGameState {
  runTheGame(): void
  setContext(context: GameStateContext): void
}

/**
 * the base state class that defines all of states what should implement and also provides a backrefrence to the context object.
 * the context in this class will be used in all of state to transition to another state
 */
abstract class GameState implements IRunGameState {
  protected context: IGameStateContext

  public setContext(context: IGameStateContext): void {
    this.context = context;
  }

  public abstract runTheGame(): void
}

/**
 * one of the concrete state classes which implements running the game for the first time
 * after running the game in this state will transition to continue game state for next run
 */
class NewGameState extends GameState {
  public runTheGame(): void {
    console.log('new game has started');
    this.setNextState()
  }

  private setNextState() {
    this.context.transitionTo(new ContinueGameState())
  }
}

/**
 * another concrete state classes which implements running the game from previous session
 */
class ContinueGameState extends GameState {
  public runTheGame(): void {
    console.log('game started from the previous session');
  }
}

const gameContext = new GameStateContext(new NewGameState())

function clickOnStartGameButton() {
  gameContext.run()
}

clickOnStartGameButton()
clickOnStartGameButton()