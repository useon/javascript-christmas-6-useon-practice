import ExpectedVisitDate from '../models/ExpectedVisitDate.js';
import Order from '../models/Order.js';
import Calculator from '../utils/Caculator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  #expectedVisitDate;

  #order;

  constructor() {
    this.#expectedVisitDate = 0;
  }

  async progress() {
    OutputView.printWelcomeMessage();
    this.#expectedVisitDate = await this.setExpectedVisitDate();
    await this.setOrder();
    OutputView.printEventPreviewMessage(this.#expectedVisitDate);
    OutputView.printOrder(this.#order);
    const beforeSaleAmount = Calculator.calculateBeforeSaleAmount(this.#order);
    OutputView.printBeforeSaleAmount(beforeSaleAmount);
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
    try {
      const userInputOrder = await InputView.readOrder();
      this.#order = new Order(userInputOrder).order;
    } catch (error) {
      OutputView.printInvalidInputErrorMessage(error.message);
      await this.setOrder();
    }
  }
}

export default Controller;
