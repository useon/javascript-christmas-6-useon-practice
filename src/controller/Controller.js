import Discountor from '../models/Discountor.js';
import ExpectedVisitDate from '../models/ExpectedVisitDate.js';
import Order from '../models/Order.js';
import Calculator from '../utils/Caculator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  #expectedVisitDate;

  #order;

  #totalDiscount;

  constructor() {
    this.#expectedVisitDate = 0;
    this.#totalDiscount = 0;
  }

  async progress() {
    OutputView.printWelcomeMessage();
    this.#expectedVisitDate = await this.setExpectedVisitDate();
    await this.setOrder();
    OutputView.printEventPreviewMessage(this.#expectedVisitDate);
    OutputView.printOrder(this.#order);
    const beforeSaleAmount = Calculator.calculateBeforeSaleAmount(this.#order);
    OutputView.printBeforeSaleAmount(beforeSaleAmount);
    if (beforeSaleAmount >= 10000)
      this.discountProcess(this.#expectedVisitDate, this.#order, beforeSaleAmount);
    if (beforeSaleAmount < 10000) this.notDiscountProcess();
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

  notDiscountProcess() {}

  discountProcess(expectedVisitDate, order, beforeSaleAmount) {
    const [hasGift, disCountDetails, totalDiscount] = new Discountor(
      expectedVisitDate,
      order,
      beforeSaleAmount,
    ).result;
    this.#totalDiscount = totalDiscount;
    OutputView.printGiftMenu(hasGift);
  }
}

export default Controller;
