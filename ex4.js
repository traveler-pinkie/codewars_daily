function descendingOrder(n){
  let maxArr = []
  let numArr = n.toString().split("")
  let trueLen = numArr.length
  let i = 0
  while( i < trueLen ){
    let maxNum = Math.max(...numArr)
    maxArr.push(maxNum)
    maxNum = maxNum.toString()
    let index = numArr.indexOf(maxNum)
    numArr.splice(index, 1)
    i++
  }
  return Number(maxArr.join(""))

}


console.log(descendingOrder(1021))