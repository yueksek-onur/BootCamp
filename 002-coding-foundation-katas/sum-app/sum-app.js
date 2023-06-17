class SumApp {
  constructor() {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  getSum() {
    if (this.numbers.length === 0) {
      return 0;
    }

    return this.numbers.reduce((result, num) => result + num);
  }

  reset() {
    this.numbers = [];
  }
}
