function isInteger(val) {
  return val === (val >> 0);
}

function sq(n) {
  return Math.pow(n, 2);
}

function sumOfSqs(m, n) {
  return sq(m) + sq(n);
}

function f() {
  var a, b;
  for (var i = 1; i < 1000; i++) {
    for (var j = 1; j < 1000 - i; j++) {
      a = sumOfSqs(i, j);
      b = sq(1000 - i - j);
      if (a === b) {
        return [i, j, 1000 - i - j];
      }
    }
  }
  throw new Error('Algorithm could not determine appropriate triple.');
}

module.exports = f();
