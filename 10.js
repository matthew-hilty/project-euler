function prime(nbr) {
  var mid = Math.floor(Math.pow(nbr, 0.5));
  var result = 3;
  while (result <= mid) {
    if (nbr % result === 0) {
      return false
    }
    result = result + 1;
  }
  return true;
}

function getNextPrime(nbr) {
  var result = nbr + 2;
  while (!prime(result)) {
    result += 2;
  }
  return result;
}

function getNthPrime(n) {
  var iteration = 1;
  var result = 3;
  while (iteration < n - 1) {
    result = getNextPrime(result);
    iteration += 1;
  }
  return result;
}

function lessThan2Million(nbr) {
  return nbr < 2000000;
}

function addPrimesLessThanN(n) {
  var prime = 3; result = 2;
  while (prime < n) {
    result += prime;
    prime = getNextPrime(prime);
  }
  return result;
}

function addPrimesLessThan2Million() {
  return addPrimesLessThanN(2000000);
}

module.exports = addPrimesLessThanN
