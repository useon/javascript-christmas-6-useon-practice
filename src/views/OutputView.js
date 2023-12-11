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
};

export default OutputView;
