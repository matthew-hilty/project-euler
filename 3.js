function getLargestFactor(nbr) {
  var mid = Math.floor(Math.pow(nbr, 0.5));
  var result = 2;
  while (result <= mid) {
    if (nbr % result === 0) {
      return nbr / result;
    }
    result = result + 1;
  }
  return 1;
}

function getLargestPrimeFactor(nbr) {
  var largestFactor = nbr, result;
  while ((largestFactor = getLargestFactor(largestFactor)) !== 1) {
    result = largestFactor;
  }
  return result || 1;
} 

var number = 600851475143;
//module.exports = getLargestPrimeFactor(number);
module.exports = {
  number: number,
  getLargestPrimeFactor: getLargestPrimeFactor
}
