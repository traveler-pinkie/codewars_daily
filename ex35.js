function highest_biPrimefac(p1, p2, nMax) {
  let maxNumber = 0;
  let k1 = 0;
  let k2 = 0;
  
  for (let i = 1; i <= Math.log(nMax) / Math.log(p1); i++) {
    for (let j = 1; j <= Math.log(nMax / Math.pow(p1, i)) / Math.log(p2); j++) {
      let num = Math.pow(p1, i) * Math.pow(p2, j);
      if (num > maxNumber && num <= nMax) {
        maxNumber = num;
        k1 = i;
        k2 = j;
      }
    }
  }
  
  return [maxNumber, k1, k2];
}


let result = highest_biPrimefac(5, 7, 5000)

console.log(result)