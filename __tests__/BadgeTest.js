import Badge from '../src/models/Badge';

describe('뱃지 테스트', () => {
  test('금액에 따른 뱃지를 확인', async () => {
    const badgeTypeArr = ['없음', '별', '트리', '산타'];
    const totalDiscountArr = [4800, 5200, 19000, 21000];
    totalDiscountArr.forEach((totalDiscount, index) => {
      const expected = new Badge(totalDiscount).result;
      expect(expected).toBe(badgeTypeArr[index]);
    });
  });
});
