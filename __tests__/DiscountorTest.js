import { CALENDAR } from '../src/constants/Setting.js';
import Discountor from '../src/models/Discountor.js';

describe('디스카운터 테스트', () => {
  test('크리스마스 할인', async () => {
    expect(new Discountor().discountChristmas(1)).toBe(1000);
    expect(new Discountor().discountChristmas(31)).toBe(4000);
  });

  test('평일 할인', async () => {
    const hasDessertMap = new Map([
      ['티본스테이크', 1],
      ['초코케이크', 2],
    ]);
    const hasNotDessertMap = new Map([
      ['티본스테이크', 1],
      ['제로콜라', 1],
    ]);
    expect(new Discountor().discountWeekdays(hasDessertMap)).toBe(2023 * 2);
    expect(new Discountor().discountWeekdays(hasNotDessertMap)).toBe(0);
  });

  test('주말 할인', async () => {
    const hasMainMap = new Map([
      ['티본스테이크', 1],
      ['초코케이크', 2],
    ]);
    const hasNotMainMap = new Map([
      ['양송이수프', 1],
      ['초코케이크', 18],
    ]);
    expect(new Discountor().discountweekends(hasMainMap)).toBe(2023 * 1);
    expect(new Discountor().discountweekends(hasNotMainMap)).toBe(0);
  });

  test('특별 할인', async () => {
    const specialDaysArr = CALENDAR.get('특별');
    specialDaysArr.forEach((specialDay) => {
      expect(new Discountor().discountSpecialDay(specialDay)).toBe(1000);
    });
  });

  test('증정 이벤트', async () => {
    expect(new Discountor().evnetPresentation(120000)).toBe(25000);
    expect(new Discountor().evnetPresentation(119000)).toBe(0);
  });
});
