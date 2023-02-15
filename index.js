const StockSpanner = function () {
  this.stockSpan = [];
  return this;
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let count = 1;

  while (this.stockSpan.length > 0 && this.stockSpan[this.stockSpan.length - 1][0] <= price) {
    count += this.stockSpan.pop()[1];
  }

  this.stockSpan.push([price, count]);

  return count;
};

const stockSpanner = new StockSpanner();

console.log(stockSpanner.next(100)); // return 1
console.log(stockSpanner.next(80)); // return 1
console.log(stockSpanner.next(60)); // return 1
console.log(stockSpanner.next(70)); // return 2
console.log(stockSpanner.next(60)); // return 1
console.log(stockSpanner.next(75)); // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
console.log(stockSpanner.next(85)); // return 6
console.log(stockSpanner.next(60)); // return 1
console.log(stockSpanner.next(60)); // return 2
console.log(stockSpanner.next(60)); // return 3
console.log(stockSpanner.next(120)); // return 11 (total number of .next calls) as 120 is the highest value among all
