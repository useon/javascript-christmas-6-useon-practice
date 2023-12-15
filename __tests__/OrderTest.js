import Order from '../src/models/Order.js';

describe('주문 테스트', () => {
  test('주문이 올바를 때 Map 객체 반환확인', async () => {
    expect(new Order('타파스-1,제로콜라-1').order).toEqual(
      new Map([
        ['타파스', '1'],
        ['제로콜라', '1'],
      ]),
    );
  });

  test('주문이 올바르지 않을 때 에러확인', async () => {
    const invalidOrderArr = ['타파스-a', '김치찌개-1', '타파스', '타파스->2'];
    expect(() => {
      invalidOrderArr
        .forEach((invalidOrder) => {
          new Order(invalidOrder);
        })
        .toThrow('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    });
  });
});
