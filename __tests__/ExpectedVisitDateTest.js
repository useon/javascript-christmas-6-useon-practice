import ExpectedVisitDate from '../src/models/ExpectedVisitDate.js';

describe('방문예상날짜 테스트', () => {
  test('방문날짜가 올바를 때 string 입력이 number로 변환확인', async () => {
    expect(new ExpectedVisitDate('2').Date).toEqual(2);
  });

  test('방문날짜가 올바르지 않을 때 에러확인', async () => {
    expect(() => {
      new ExpectedVisitDate('0');
    }).toThrow('[ERROR]');
  });
});
