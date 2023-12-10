import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  async progress() {
    OutputView.printWelcomeMessage();
    const value = await InputView.readExpectedVisitDate();
  }
}

export default Controller;
