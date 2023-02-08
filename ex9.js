function sumOfMinimums(arr) {
  let total = 0
  arr.forEach(obj => {
    minVal = Math.min(...obj)
    total += minVal
  })
  return total
}