// extend the functionality of a built in object

// #1
// Date object => to have new method .lastYear() which shows you the last year 'YYYY' format.

var clockFace = (Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
});
new Date("1900-10-10").lastYear();
// 1899

// bonus
// modify .map() to print 'screen' at the end of each ite.
Array.prototype.map = function () {
  let arr = [];
  for (i = 0; i < this.length; i++) {
    arr.push(this[i]);
  }
  return arr;
};
console.log([1, 2, 3].map());
console.log(clockFace);
// var time = Date.prototype.getFullYear;
// console.log(time);
