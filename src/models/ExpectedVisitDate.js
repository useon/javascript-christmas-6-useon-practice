class ExpectedVisitDate {
  #expectedVisitDate;

  constructor(inputExpectedVisitDate) {
    this.#expectedVisitDate = 0;
    this.#validate(inputExpectedVisitDate);
    this.#convert(inputExpectedVisitDate);
  }

  #validate(inputExpectedVisitDate) {
    if (Number.isNaN(Number(inputExpectedVisitDate)))
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    if (Number(inputExpectedVisitDate) < 1 || Number(inputExpectedVisitDate) > 31)
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  }

  #convert(inputExpectedVisitDate) {
    this.#expectedVisitDate = Number(inputExpectedVisitDate);
  }

  get Date() {
    return this.#expectedVisitDate;
  }
}

export default ExpectedVisitDate;
