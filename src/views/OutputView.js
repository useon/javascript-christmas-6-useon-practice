import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printWelcomeMessage() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printInvalidInputErrorMessage(message) {
    Console.print(message);
  },

  printEventPreviewMessage(expectedVisitDate) {
    Console.print(`12월 ${expectedVisitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`);
  },

  printOrder(order) {
    Console.print('<주문 메뉴>');
    order.forEach((count, menu) => {
      Console.print(`${menu} ${count}개`);
    });
  },

  printBeforeSaleAmount(amount) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${amount.toLocaleString()}원`);
  },

  printGiftMenu(hasGift) {
    Console.print('\n<증정 메뉴>');
    hasGift ? Console.print('샴페인 1개') : Console.print('없음');
  },

  printDisCountDetails(disCountDetails) {
    Console.print('\n<혜택 내역>');
    if (disCountDetails.size > 0) {
      disCountDetails.forEach((amount, type) => {
        Console.print(`${type}: -${amount.toLocaleString()}원`);
      });
    }
    if (disCountDetails.size === 0) Console.print('없음');
  },

  printTotalDiscount(amount) {
    Console.print('\n<총혜택 금액>');
    amount !== 0 ? Console.print(`-${amount.toLocaleString()}원`) : Console.print('0원');
  },

  printAfterSaleAmount(amount) {
    Console.print('\n<할인 후 예상 결제 금액>');
    Console.print(`${amount.toLocaleString()}원`);
  },

  printBadge(name) {
    Console.print('\n<12월 이벤트 배지>');
    Console.print(name);
  },

  printErrorMessage(message) {
    Console.print(message);
  },
};

export default OutputView;
