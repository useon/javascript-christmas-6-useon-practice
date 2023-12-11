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

  discountChristmas(expectedVisitDate) {
    const discount = (expectedVisitDate - 1) * 100 + 1000;
    this.#disCountDetails.set('크리스마스 디데이 할인', discount);
  }

  discountWeekdays(order) {
    let dessertCount = 0;
    order.forEach((count, menu) => {
      if (TYPE_MENU.get('디저트').includes(menu)) dessertCount += 1;
    });
    if (dessertCount > 0) this.#disCountDetails.set('평일 할인', 2023 * dessertCount);
  }

  discountweekends(order) {
    let mainCount = 0;
    order.forEach((count, menu) => {
      if (TYPE_MENU.get('메인').includes(menu)) mainCount += 1;
    });
    if (mainCount > 0) this.#disCountDetails.set('주말 할인', mainCount * 2023);
  }

  discountSpecialDay() {
    this.#disCountDetails.set('특별 할인', 1000);
  }

  evnetPresentation(beforeSaleAmount) {
    if (beforeSaleAmount >= 120000) {
      this.#disCountDetails.set('증정 이벤트', 25000);
    }
  }

  setGift() {
    this.#disCountDetails.get('증정 이벤트') ? (this.#hasGift = true) : (this.#hasGift = false);
  }

  get result() {
    return [this.#hasGift, this.#disCountDetails, this.#totalDiscount];
  }
}

export default Discountor;
