import { MENU_PRICE } from '../constants/Setting.js';

const Calculator = {
  calculateBeforeSaleAmount(order) {
    let totalAmount = 0;
    order.forEach((count, menu) => {
      totalAmount += MENU_PRICE.get(menu) * count;
    });
    return totalAmount;
  },

  calculateAfterSaleAmount(beforeSaleAmount, totalDiscount) {
    return beforeSaleAmount - totalDiscount;
  },
};

export default Calculator;
