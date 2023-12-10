import ExpectedVisitDate from '../models/ExpectedVisitDate.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  #expectedVisitDate;

  constructor() {
    this.#expectedVisitDate = 0;
  }

  async progress() {
    OutputView.printWelcomeMessage();
    this.#expectedVisitDate = await this.setExpectedVisitDate();
    await this.setOrder();
  }

  async setExpectedVisitDate() {
    try {
      const userInputExpectedVisitDate = await InputView.readExpectedVisitDate();
      return new ExpectedVisitDate(userInputExpectedVisitDate).Date;
    } catch (error) {
      OutputView.printInvalidInputErrorMessage(error.message);
      await this.setExpectedVisitDate();
    }
  }

  async setOrder() {
    const userInputOrder = await InputView.readOrder();
  }
}

export default Controller;
