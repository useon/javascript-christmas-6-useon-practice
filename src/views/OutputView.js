import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printWelcomeMessage() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printInvalidInputErrorMessage(message) {
    Console.print(message);
  },
};

export default OutputView;
