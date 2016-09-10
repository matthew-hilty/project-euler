var fourMillion = 4000000;
var rad5 = Math.pow(5, 0.5);
var phi = (1 + rad5) / 2;
var psi = -1 / phi;

function filter(predicate, generator) {
  var list = [], val;
  var val1 = generator();
  while (predicate(val = generator())) {
    list.push(val);
  }
  return list;
}

function nthFibonacci(n) {
  return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / rad5);
}

// Every third Fibonacci number is even.
function nthEvenFibonacci(n) {
  return nthFibonacci(3 * n);
}

function generateEvenFibonacci() {
  var n = -1;
  return function () {
    n += 1;
    return nthEvenFibonacci(n);
  };
}

function lessThan4Million(n) {
  return n < 4000000;
}

function addFibsLessThan4Million() {
  return filter(lessThan4Million, generateEvenFibonacci())
    .reduce(function (sum, even_fib) {
      return sum + even_fib;
    });
}

module.exports = addFibsLessThan4Million();
