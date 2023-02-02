function getSumOfDigits(integer) {
  let sum = 0;
  let digits =  Math.floor(integer).toString();
  for(let i = 0; i < digits.length; i += 1) {
    sum += Number(digits[i]);
  }
  return sum;
}

console.log(getSumOfDigits(223))