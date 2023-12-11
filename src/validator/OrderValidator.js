const OrderValidator = {
  checkHasDash(notHasDashArr) {
    if (notHasDashArr.legth > 0) {
      // console.log('checkHasDash');
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  },
  checkExtantMenu(notExistantMenu) {
    if (notExistantMenu.length > 0) {
      // console.log('checkExtantMenu');
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  },
  checkNotOverOrder(sum) {
    if (sum < 0 || sum > 20) {
      // console.log('checkNotOverOrder');
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  },
  checkUniqueOrder(orderStringToArr, orderMap) {
    if (orderStringToArr.length !== orderMap.size) {
      // console.log('checkUniqueOrder');
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  },
  checkNotOnlyDrink(exceptionDrinkMenu) {
    if (exceptionDrinkMenu.length === 0) {
      // console.log('checkNotOnlyDrink');
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  },
};

export default OrderValidator;
