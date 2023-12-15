class Badge {
  #badge;

  constructor(totalDiscount) {
    this.#badge = this.#giveBadge(totalDiscount);
  }

  #giveBadge(totalDiscount) {
    if (totalDiscount < 5000) return '없음';
    if (totalDiscount >= 5000 && totalDiscount < 10000) return '별';
    if (totalDiscount >= 10000 && totalDiscount < 20000) return '트리';
    if (totalDiscount >= 20000) return '산타';
  }

  get result() {
    return this.#badge;
  }
}

export default Badge;
