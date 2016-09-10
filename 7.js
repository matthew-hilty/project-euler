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

function get10001stPrime() {
  return getNthPrime(10001);
}

module.exports = get10001stPrime();
