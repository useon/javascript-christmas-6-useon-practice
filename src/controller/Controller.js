import Badge from '../models/Badge.js';
import Discountor from '../models/Discountor.js';
import ExpectedVisitDate from '../models/ExpectedVisitDate.js';
import Order from '../models/Order.js';
import Calculator from '../utils/Caculator.js';
import handlerErrorAndProceed from '../utils/handleErrorAndProceed.js';
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
    this.#expectedVisitDate = await handlerErrorAndProceed(this.#setExpectedVisitDate);
    this.#order = await handlerErrorAndProceed(this.#setOrder);
    OutputView.printEventPreviewMessage(this.#expectedVisitDate);
    OutputView.printOrder(this.#order);
    const beforeSaleAmount = Calculator.calculateBeforeSaleAmount(this.#order);
    OutputView.printBeforeSaleAmount(beforeSaleAmount);
    if (beforeSaleAmount >= 10000)
      this.#discountProcess(this.#expectedVisitDate, this.#order, beforeSaleAmount);
    if (beforeSaleAmount < 10000) this.#notDiscountProcess();
    beforeSaleAmount >= 120000
      ? this.#totalAmount(beforeSaleAmount, this.#totalDiscount - 25000)
      : this.#totalAmount(beforeSaleAmount, this.#totalDiscount);
    const badge = new Badge(this.#totalDiscount).result;
    OutputView.printBadge(badge);
  }

  async #setExpectedVisitDate() {
    const userInputExpectedVisitDate = await InputView.readExpectedVisitDate();
    return new ExpectedVisitDate(userInputExpectedVisitDate).Date;
  }

  async #setOrder() {
    const userInputOrder = await InputView.readOrder();
    return new Order(userInputOrder).order;
  }

  #notDiscountProcess() {
    OutputView.printGiftMenu(false);
    OutputView.printDisCountDetails(new Map());
    OutputView.printTotalDiscount(0);
  }

  #discountProcess(expectedVisitDate, order, beforeSaleAmount) {
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

  #totalAmount(beforeSaleAmount, totalDiscount) {
    const totalAmount = Calculator.calculateAfterSaleAmount(beforeSaleAmount, totalDiscount);
    OutputView.printAfterSaleAmount(totalAmount);
  }
}

export default Controller;
