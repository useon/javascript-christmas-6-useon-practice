import { CALENDAR, TYPE_MENU } from '../constants/Setting';

class Discountor {
  #hasGift;

  #disCountDetails;

  #totalDiscount;

  constructor() {
    this.#hasGift = false;
    this.#disCountDetails = new Map();
    this.#totalDiscount = 0;
    this.checkDiscountType();
    this.setGift();
    this.calculateTotalDiscount();
  }

  checkDiscountType(expectedVisitDate, order, beforeSaleAmount) {
    if (expectedVisitDate <= 25) this.discountChristmas(expectedVisitDate);
    if (CALENDAR.get('평일').includes(expectedVisitDate)) this.discountWeekdays(order);
    if (CALENDAR.get('주말').includes(expectedVisitDate)) this.discountweekends(order);
    if (CALENDAR.get('특별').includes(expectedVisitDate)) this.discountSpecialDay();
    this.evnetPresentation(beforeSaleAmount);
  }

  get result() {
    return [this.#hasGift, this.#disCountDetails, this.#totalDiscount];
  }
}

export default Discountor;
