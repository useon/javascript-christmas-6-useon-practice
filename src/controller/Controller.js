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
    this.totalAmount(beforeSaleAmount, this.#totalDiscount);
    this.giveBadge();
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

  notDiscountProcess() {
    OutputView.printGiftMenu(false);
    OutputView.printDisCountDetails(new Map());
    OutputView.printTotalDiscount(0);
  }

  discountProcess(expectedVisitDate, order, beforeSaleAmount) {
    const [hasGift, disCountDetails, totalDiscount] = new Discountor(
      expectedVisitDate,
      order,
      beforeSaleAmount,
    ).result;
    this.#totalDiscount = totalDiscount;
    OutputView.printGiftMenu(hasGift);
    OutputView.printDisCountDetails(disCountDetails);
    OutputView.printTotalDiscount(this.#totalDiscount);
  }

  totalAmount(beforeSaleAmount, totalDiscount) {
    const totalAmount = Calculator.calculateAfterSaleAmount(beforeSaleAmount, totalDiscount);
    OutputView.printAfterSaleAmount(totalAmount);
  }

  giveBadge() {
    if (this.#totalDiscount < 5000) return OutputView.printBadge('없음');
    if (this.#totalDiscount >= 5000 && this.#totalDiscount < 10000)
      return OutputView.printBadge('별');
    if (this.#totalDiscount >= 10000 && this.#totalDiscount < 20000)
      return OutputView.printBadge('트리');
    if (this.#totalDiscount >= 20000) return OutputView.printBadge('산타');
  }
}

export default Controller;
