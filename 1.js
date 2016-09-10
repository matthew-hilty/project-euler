// Problem 1: Add multiples of 3 and 5.

function assertNumber(val) {
  if (typeof val !== 'number') {
    throw new Error('The value ' + val + ' is not a number.');
  }
}

// Calculate the sum `1 + 2 + ... + n`.
function getNthSimpleSum(n) {
  return n * (n + 1) / 2;
}

// Calculate the sum `base * (1 + 2 + ... + n)`.
function addMultiples(base, n) {
  return base * getNthSimpleSum(n);
}

// Determine how many times `base` integrally divides `n`.
function getNbrOfMultiplesLessThanN(base, n) {
  return Math.floor(n / base);
}

function addMultiplesLessThanN(base, n) {
  var nbrOfMultiples = getNbrOfMultiplesLessThanN(base, n);
  return addMultiples(base, nbrOfMultiples);
}

function addMultiplesOf3And5(nbr) {
  // Start testing mode.
  assertNumber(nbr);
  // End testing mode.

  var n = nbr - 1;
  return addMultiplesLessThanN(3, n) +
    addMultiplesLessThanN(5, n) - addMultiplesLessThanN(15, n);
}

module.exports = addMultiplesOf3And5(1000);
