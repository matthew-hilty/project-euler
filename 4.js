var lowerBound = 100; // 100 * 100 =  10,000
var upperBound = 997; // 999 * 999 = 998,001

function getPalindrome(nbr) {
  var trio = getTrio(nbr);
  return 100001 * trio[0] +
          10010 * trio[1] +
           1100 * trio[2];
}

function getTrio(nbr) {
  var digit, result = [];
  while (nbr !== 0) {
    digit = nbr % 10;
    result.unshift(digit);
    nbr = (nbr - digit) / 10;
  }
  return result;
}

function threeDigitDivisible(nbr) {
  for (var i = 997; i >= 100; i--) {
    if (nbr % i === 0 && nbr / i < 1000) {
      return true;
    }
  }
  return false;
}

function getLargestPalindromeProduct() {
  var palindrome;
  for (var i = 997; i >= 100; i--) {
    palindrome = getPalindrome(i);
    if (threeDigitDivisible(palindrome)) {
      return palindrome;
    }
  }
  throw new Error('Algorithm could not calculate the appropriate palindrome.');
}

module.exports = getLargestPalindromeProduct();
