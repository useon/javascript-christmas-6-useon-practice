import { MENU_PRICE, TYPE_MENU } from '../constants/Setting.js';

const Converter = {
  orderStringToArr(inputValue) {
    if (!inputValue.includes(',')) return [inputValue];
    if (inputValue.includes(',')) return inputValue.split(',');
  },
  exceptDrinkMenu(orderMap) {
    const value = [...orderMap.keys()].filter((menu) => !TYPE_MENU.get('음료').includes(menu));
    return value;
  },
  notHasDash(orderStringToArr) {
    const value = orderStringToArr.filter((order) => !order.includes('-'));
    return value;
  },
  notExistantMenu(orderMap) {
    const value = [...orderMap.keys()].filter((menu) => !MENU_PRICE.get(menu));
    return value;
  },
  sumOrder(orderMap) {
    const value = [...orderMap.values()].reduce((a, b) => Number(a) + Number(b), 0);
    return value;
  },
  orderArrToMap(orderStringToArr) {
    const orderMap = new Map();
    orderStringToArr.forEach((order) => {
      const [menu, count] = order.split('-');
      orderMap.set(menu, count);
    });
    return orderMap;
  },
};

export default Converter;
