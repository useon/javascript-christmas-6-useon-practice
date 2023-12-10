import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readExpectedVisitDate() {
    const inputValue = await Console.readLineAsync(
      '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
    );
    return inputValue;
  },

  async readOrder() {
    const inputValue = await Console.readLineAsync(
      '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
    );
    return inputValue;
  },
};

export default InputView;
