import Converter from '../utils/Converter.js';
import OrderValidator from '../validator/OrderValidator.js';

class Order {
  #order;

  constructor(inputValue) {
    this.#order = new Map();
    const orderStringToArr = Converter.orderStringToArr(inputValue);
    const orderMap = Converter.orderArrToMap(orderStringToArr);
    this.validate(orderStringToArr, orderMap);
    this.#order = orderMap;
  }

  validate(orderStringToArr, orderMap) {
    const notHasDashArr = Converter.notHasDash(orderStringToArr);
    OrderValidator.checkHasDash(notHasDashArr);
    const notExistantMenuArr = Converter.notExistantMenu(orderMap);
    OrderValidator.checkExtantMenu(notExistantMenuArr);
    OrderValidator.checkUniqueOrder(orderStringToArr, orderMap);
    const sumOrderCount = Converter.sumOrder(orderMap);
    OrderValidator.checkNotOverOrder(sumOrderCount);
    const exceptionDrinkMenu = Converter.exceptDrinkMenu(orderMap);
    OrderValidator.checkNotOnlyDrink(exceptionDrinkMenu);
  }

  get order() {
    return this.#order;
  }
}

export default Order;
